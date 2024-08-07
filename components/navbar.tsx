import Link from "next/link";
import NavLinks from "./nav-links";
import MobileNav from "./mobile-nav";
import Container from "./container";

const Navbar = () => {
  return (
    <Container className="p-5 lg:px-20 py-10">
      <nav className="flex justify-between items-center">
        <Link href="/" className="w-1/3">
          <h1>JTCAREERSSOLUTIONS</h1>
        </Link>
        <MobileNav className="block lg:hidden" />
        <NavLinks className="hidden lg:flex w-full" />
      </nav>
    </Container>
  );
};

export default Navbar;
