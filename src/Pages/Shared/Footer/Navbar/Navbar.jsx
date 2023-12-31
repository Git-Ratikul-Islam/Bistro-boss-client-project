import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../../Hookd/UseCart";
const Navbar = () => {
      const { user, logOut } = useContext(AuthContext);
      const [cart] = UseCart();
      const handleLogOut = () => {
            logOut()
                  .then(() => { })
                  .catch(error => console.log(error));
      };
      const navOptions = <>
            <li><NavLink to="/"><a>Home</a></NavLink></li>
            <li><NavLink to="/menu"><a>Our Menu</a></NavLink></li>
            <li><NavLink to="/order/salad"><a>Order Food</a></NavLink></li>
            <li><NavLink to="/secret"><a>Secret</a></NavLink></li>
            <li><Link to="/dashboard/cart">
                  <button className="btn">
                        <FaShoppingCart />
                        <div className="badge badge-secondary">+{cart.length}</div>
                  </button>

            </Link>
            </li>
            {user ?
                  <>
                        <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>

                  </> : <>

                        <li><NavLink to="/login"><a>Log in</a></NavLink></li>
                  </>}


      </>;
      return (
            <><div className="navbar max-w-screen-2xl z-10 bg-opacity-30 bg-black fixed text-white">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-black p-2 shadow bg-base-100 rounded-box w-52">
                                    {navOptions}
                              </ul>
                        </div>
                        <div>
                              <a className=" normal-case text-xl">Bistro Boss</a>
                              <br />
                              <a className=" normal-case text-xl">Restaurant</a>
                        </div>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {navOptions}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <a className="btn">Button</a>
                  </div>
            </div>
            </>
      );
};

export default Navbar;