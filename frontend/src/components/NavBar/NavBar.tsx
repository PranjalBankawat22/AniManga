import NavBarRight from "./NavBarRight/NavBarRight";
import NavBarLeft from "./NavbarLeft/NavBarLeft";

export default function NavBar() {
    return (
      <div className="bg-customColor-navbar w-full text-customColor-textGrey flex items-center justify-between">
        <NavBarLeft />
        <NavBarRight />
      </div>
    );
  }
  