import Sidebar from "~/app/_components/Sidebar";
import Container from "~/components/common/Container";

const MeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="flex gap-6 justify-between my-0 sm:my-0">
      <main className="flex-1">{children}</main>
      <Sidebar />
    </Container>
  );
};

export default MeLayout;
