import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../../app/features/LoginSlice";
import { IconDiv, IconList, NavbarCon } from "./navbar-styled";

function Navbar() {
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const { login } = useSelector((s) => s.login);

  return (
    <NavbarCon>
      <img src="images/cw.jpeg" alt="" />
      <h1>{"<WeAreBored/> Blog"}</h1>

      <IconList>
        <IconDiv />
        <ul>
          <li>
            <Link to="/newblog"> New Blog</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/profile"> Profile</Link>
          </li>
          {login ? (
            <li
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Logout
            </li>
          ) : (
            <li>
              <Link to="/profile"> Login</Link>
            </li>
          )}
        </ul>
      </IconList>
    </NavbarCon>
  );
}

export default Navbar;
