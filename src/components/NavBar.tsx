import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
  return (
    <nav className="sticky top-0 width-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Link href={"/"} className="text-xl font-bold font-mono uppercase text-primary tracking-wider">
                    Pandora
                </Link>
            </div>
                <DesktopNavbar />
                {/* <MobileNavbar /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
