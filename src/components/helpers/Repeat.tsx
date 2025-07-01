interface RepeatProps {
  times: number;
  render: (index: number) => React.ReactNode;
}

const Repeat = ({ times, render }: RepeatProps) => {
  return <>{Array.from({ length: times }, (_, i) => render(i))}</>;
};

export default Repeat;
