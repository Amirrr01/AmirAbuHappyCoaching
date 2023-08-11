import { Flex } from "@mantine/core";
import img from "../imgs/logo.svg";

interface NavbarProps {}

function NavbarMain({}: NavbarProps) {
  return (
    <nav className="navbar">
      <Flex sx={{ justifyContent: "space-between" }} gap={1000}>
        <img src={img} alt="" className="logoNavbar"/>
        <Flex gap={30} align="center">
          <a href="" className="navA">
            Home
          </a>
          <a href="" className="navA">
            Services
          </a>
          <a href="" className="navA">
            About us
          </a>
          <a href="" className="navA">
            Extra Salespage
          </a>
          <button className="navButton">Get your free guide now</button>
        </Flex>
      </Flex>
    </nav>
  );
}
export default NavbarMain;
