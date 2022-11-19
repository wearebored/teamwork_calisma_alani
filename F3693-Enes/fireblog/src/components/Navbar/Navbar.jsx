import { IconDiv, IconList, NavbarCon } from "./navbar-styled";

function Navbar() {
  return (
    <NavbarCon>
      <img src="images/cw.jpeg" alt="" />
      <h1>{"<WeAreBored/> Blog"}</h1>

      <IconList>
        <IconDiv />
        <ul>
          <li>New Blog</li>
          <li>About</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </IconList>
    </NavbarCon>
  );
}

export default Navbar;
