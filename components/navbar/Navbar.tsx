import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import SideBar from "./SideBar";
//import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <nav
      className="sticky top-0 border-b z-50 transition-colors duration-300 
      bg-white dark:bg-black"
    >
      <div
        className="container flex flex-col sm:flex-row 
        sm:justify-between sm:items-center flex-wrap gap-4 py-8"
      >
        <Logo />
        <NavSearch />
        <div className="flex flex-col items-center w-full sm:w-auto">
          <div className="flex items-center gap-4">
            
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>
        {/* <NavMenu /> */}

      </div>
    </nav>
  );
}

export default Navbar;
