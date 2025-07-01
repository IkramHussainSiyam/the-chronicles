interface IfProps {
  condition: boolean;
  then: React.ReactNode;
  otherwise?: React.ReactNode;
}

const If = ({ condition, then, otherwise = null }: IfProps) => {
  return <>{condition ? then : otherwise}</>;
};

export default If;
