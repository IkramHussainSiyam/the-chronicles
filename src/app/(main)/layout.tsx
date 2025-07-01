import FeedNavbar from "./_components/FeedNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <FeedNavbar />
      {children}
    </div>
  );
};

export default Layout;
