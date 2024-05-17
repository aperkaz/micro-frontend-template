import { Link } from "react-router-dom";

const Navbar = () => (
  <ul className="m-0 p-0 overflow-hidden bg-slate-600">
    <li className="float-left">
      <Link className="display-block text-center p-2" to="/">
        Home
      </Link>
    </li>
    <li className="float-left">
      <Link className="display-block text-center p-2" to="/remote1">
        Remote 1
      </Link>
    </li>
    <li className="float-left">
      <Link className="display-block text-center p-2" to="/remote2">
        Remote 2
      </Link>
    </li>
  </ul>
);
export default Navbar;
