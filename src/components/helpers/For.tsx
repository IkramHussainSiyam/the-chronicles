interface ForProps<T> {
  each: T[];
  render: (item: T, index: number) => React.ReactNode;
}

const For = <T,>({ each, render }: ForProps<T>) => {
  return <>{each.map(render)}</>;
};

export default For;
