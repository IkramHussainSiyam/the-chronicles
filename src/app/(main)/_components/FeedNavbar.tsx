import Logo from "~/components/layout/navbar/logo";
import Navbar from "~/components/layout/navbar/navbar";
import FeedNavMenu from "./FeedNavMenu";
import Search from "./Search";

const FeedNavbar = () => {
  return (
    <Navbar containerClassName="container 2xl:px-12 2xl:max-w-none">
      <div className="flex items-center gap-6">
        <Logo redirectTo="/feed" />
        <div className="mt-1 hidden lg:block">
          <Search />
        </div>
      </div>
      <FeedNavMenu />
    </Navbar>
  );
};

export default FeedNavbar;
