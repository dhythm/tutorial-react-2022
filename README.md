# Create environment with TypeScript

```
npx create-react-app tutorial-react-2022 --template typescript
```

See: https://create-react-app.dev/docs/getting-started/

# Deep dive for https://reactjs.org/

## Error Boundaries

TBD

## Forwarding Refs

See `Text` component

## Fragments

See any components

## Components and Props

See `WelcomePage`

## Higher-Order Components

See `WelcomePage`

## Render Props

See `WelcomePage` and `FormPage`

## HOOKS

Basic Hooks

- useState
- useEffect
- useContext

Additional Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### useContext

See `I18nProvider` in `WelcomePage`.

### useCallback, useMemo, React.memo

#### React Components are often re-rendered

React Component が re-render するタイミングは

- state に変更があった場合
- props に変更があった場合
- 親コンポーネントが re-render した場合（コンポーネントが re-render した場合、すべての子コンポーネントも re-render されるため）

[When does React re-render components?](https://felixgerschau.com/react-rerender-components/)

- Component A
  - Component B1
    - Component C1
    - Component C2
  - Component B2
    - Component D1
    - Component D2

A に更新が入った場合、全てのコンポーネントが re-render される。
B1 に更新が入った場合、B1, C1, C2 が re-render される。

#### Why do we need to tune performance?

A1 や B1 が更新されると、C1 の情報が何も変わっていなくても C1 も re-render される。
先の例で C1 が非常に重たい処理を持っていた場合、A1 や B1 が更新される度に重たい処理を実行する必要がある。

プロジェクトが大きくなり、多数のコンポーネントが使われている場合、積み重ねで非常に時間がかかってしまう場合がある。
これはユーザー体験を悪化させる原因になりうる。

次に紹介するメモ化（memoized）の技術で、パフォーマンスを向上させられる可能性がある。

#### What are useCallback, useMemo and React.memo?

##### React.memo

React.memo は HOC のひとつ。
コンポーネントに渡される props が変わらず、rendering の結果が同じ場合にコンポーネントをメモ化し、最新の rendering 結果を再利用することで新しい rendering が発生するのを回避する。

React.memo は props の変化だけをウォッチする。メモ化したコンポーネントが useState / useReducer / useContext などを持ち、内部でその状態が変更された場合は、コンポーネントは re-render される。

[React Top-Level API - React](https://reactjs.org/docs/react-api.html#reactmemo)

- Component A
  - Component B1
    - Component C1（メモ化）
    - Component C2
  - Component B2
    - Component D1
    - Component D2

C1 の状態が変わらない限り、A, B1 が re-render されても C1 は re-render されない。

##### useMemo

メモ化された値を返す Hooks。
プリミティブを渡してもあまり意味がない。（渡される対象となるのは function / array / object など）

`useMemo(() => computeExpensiveValue(a, b), [a, b])`

第二引数で渡される dependencies が変わった場合**のみ**、値は再計算され、それ以外の場合はメモ化された値を返却し続ける。

この機能はパフォーマンス最適化のために使われるべきで、値が変わらないことを保証するために使うべきではない。（公式 docs より）
※将来的に、定期的にメモ化された値を忘れさせる機能を入れる可能性がある

##### useCallback

メモ化されたコールバックを返す Hooks。
ユースケースとしては、子コンポーネントにコールバックを渡す場合。

`useCallback(fn, deps) === useMemo(() => fn, deps)`

#### Pitfall of memoized

##### Pitfall 1

props に、**コンポーネント内で定義された**オブジェクトや配列を渡す。
（Custom Hooks などから取得した値も同様）

```tsx
const params = { a: 'b' }
// ...
<MemoisedComponent params="foo" />      // It shouldn't be re-render

<MemoisedComponent params={{ a: 'b'}} /> // It should be re-render...
<MemoisedComponent params={params} />    // It should be re-render...
```

解決策）
useMemo を使ってパラメータをメモ化する

```tsx
const memoisedParams = useMemo(() => ({ a: "b" }), []);
// ...
<MemoisedComponent params={memoisedParams} />; // It shouldn't be re-render
```

##### Pitfall 2

props にコールバック関数を渡す。

```tsx
<MemoisedComponent onClick={() => doSomething(...)} />

// or

const onClick = () => doSomething(...);
// ...
<MemoisedComponent onClick={onClick} />
```

解決策）
`useCallback` を使ってコールバックをメモ化する

```tsx
const onClick = useCallback(() => doSomething(...), []);
// ...
<MemoisedComponent onClick={onClick} />
```

##### Pitfall 3

props に、JSX を渡す。

```tsx
const Memoized = React.memo(({ children }) => (<div>{children}</div>));
// Won't ever re-render
<Memoized>bar</Memoized>
// Will re-render every time; the memoization does nothing
<Memoized><b>bar</b></Memoized>
```

```tsx
const Memoized = React.memo(({ children }) => <div>{children}</div>);
const MemoizedChild = React.memo(() => <div>bar</div>);

<Memoized>
  <MemoizedChild />
</Memoized>; // Will it work or not?
```

`MemoizedChild` は HOC で、レンダリングの結果を保持している。
`Memoized` の `children` に JSX を渡しているが、JSX はコンポーネントが再レンダリングされるタイミングで都度新しく生成される。

> passing newly created React elements (so any JSX that isn't specifically persisted) as children will cause a re-render.

[Why using the children prop makes React.memo() not work](https://gist.github.com/slikts/e224b924612d53c1b61f359cfb962c06)

そのため、 `React.memo` でラップしたコンポーネントを `children` として渡してもメモ化は効かないことがわかった。

解決策）

1. `children` を `useMemo` でメモ化する
2. props から JSX を排除し、JSX の記述は `React.memo` でラップしたコンポーネントの内部に移管する

##### Pitfall 4

変数やコールバックをメモ化したと思っていたら、deps が常に変わる作りになっていた場合。

```tsx
const Component = ({ onChange }) => {
  const onClick = useCallback(() => {}, [onChange]);

  return <Memoised onClick={onClick} />;
};
```

このような定義の場合、props の `onChange` がさらにその外側で `useCallback` されている必要がある。
そうでない場合、メモ化は働かずに再レンダリングが発生する。

#### Conclusion

`useCallback` はそれ単体では効果を発揮しない。 `React.memo` でメモ化したコンポーネントの props に渡す用途で効果を発揮するように作られている。
（コールバックをメモ化しているだけ。中身の処理の重さが評価がされるのは実行時）
一方、`useMemo` は計算が重い処理をメモ化するなど、単体でも効果を発揮する。

[React.memo / useCallback / useMemo の使い方、使い所を理解してパフォーマンス最適化をする](https://qiita.com/soarflat/items/b9d3d17b8ab1f5dbfed2)

### useRef

See `RefPage`.
