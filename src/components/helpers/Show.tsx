interface ShowProps {
  when: boolean;
  children: React.ReactNode;
}

const Show = ({ when, children }: ShowProps) => {
  return <>{when ? children : null}</>;
};

export default Show;
