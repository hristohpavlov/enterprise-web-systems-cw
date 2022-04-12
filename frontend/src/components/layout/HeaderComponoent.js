import { Link } from "react-router-dom";
import { Navbar,Nav } from "react-bootstrap";
import { useState} from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/UserActions";

export function HeaderComponent(){
    // const indizesItems = [
    //     { id: 29, text: "Home", href: "/" },
    // ];
    // const devisenItems = [
    //     { id: 32, text: "Login", href: "/login" },
    // ];
    // const rohstoffeItems = [
    //     { id: 35, text: "Register", href: "/register" },
    // ];
    // const newsItems = [
    //     { id: 37, text: "Profile", href: "/profile" },
    // ];
    // const analysenItems = [
    //     { id: 40, text: "Shipping", href: "/shipping" },
    // ];
    // const myFinanztreffItems = [
    //     { id: 43, text: "Payment", href: "/payment" },
    // ];
    // const [expanded, setExpanded] = useState(false);
    // var [activeId, setActiveId] = useState(-1);
    // useEffect(() => {
    //     document.body.classList.toggle('mobile-menu-open', expanded);
    // }, [expanded])
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin)
  const {error,loading, userInfo} = userLogin;
  const logoutHandler = () => {
    dispatch(logout())
  }
    return(
        <div>
        {/* Top Header */}
        <div className="Announcement ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center display-none">
                <p>+255 768 356 890</p>
                <p>info@zpunet.com</p>
              </div>
              <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                <Link to="">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="header">
          <div className="container">
            {/* MOBILE HEADER */}
            <div className="mobile-header">
              <div className="container ">
                <div className="row ">
                  <div className="col-6 d-flex align-items-center">
                    <Link className="navbar-brand" to="/">
                      <img alt="logo" src="/images/logo.png" />
                    </Link>
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                    {
                      userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
  
                        <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                          Logout
                        </Link>
                      </div>
                    </div>
                      )
                      :
                      (
                        <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
  
                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                      )
                    }
                    
                    <Link to="/cart" className="cart-mobile-icon">
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge">{cartItems.length}</span>
                    </Link>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <form className="input-group">
                      <input
                        type="search"
                        className="form-control rounded search"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-button">
                        search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
  
            {/* PC HEADER */}
            <div className="pc-header">
              <div className="row">
                <div className="col-md-3 col-4 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-md-6 col-8 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  {
                    userInfo ?
                    (
                    <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
  
                      <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </div>
                  </div>
                    )
                    :
                    (
                      <>
                        <Link to="/register">
                        Register
                      </Link>
                      <Link to="/login">
                        Login
                      </Link>
                      </>
                    )
                  }
                  
  
                  <Link to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        // <header>
        //     <div className="Announcement ">
        //         <div className="container">
        //         <div className="row">
        //             <div className="col-md-6 d-flex align-items-center display-none">
        //             <p>+255 768 356 890</p>
        //             <p>info@zpunet.com</p>
        //             </div>
        //             <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
        //             <Link to="">
        //                 <i className="fab fa-facebook-f"></i>
        //             </Link>
        //             <Link to="">
        //                 <i className="fab fa-instagram"></i>
        //             </Link>
        //             <Link to="">
        //                 <i className="fab fa-linkedin-in"></i>
        //             </Link>
        //             <Link to="">
        //                 <i className="fab fa-youtube"></i>
        //             </Link>
        //             <Link to="">
        //                 <i className="fab fa-pinterest-p"></i>
        //             </Link>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
            
        //     <Navbar expanded={expanded} collapseOnSelect expand="xl" className="main-nav" variant="dark" bg="dark">
        //         <a href='/' className={"svg-icon svg-icon-home-white d-none d-xl-block navbar-brand " + (activeId === -1 ? "active-home-icon" : "")} onClick={() => {setActiveId(-1); setExpanded(false)}}>
        //             <img src="/images/logo.png" alt="" className="pl-xl-1 home-icon-padding-right" />
        //         </a>
        //         <Navbar.Collapse aria-label={"navbarNavAltMarkup"} aria-required="true">
        //             <div className="navbar-expander" />
        //             <Nav className="d-flex navbar-container" >

        //                 <Link to={`/`} onClick={() => { setActiveId(-1); setExpanded(false); }} className={"nav-link nav-item basic-nav-dropdown pb-2 ml-xl-2 " + (indizesItems.filter(current => current.id === activeId).length > 0 ? "active" : "")}>
        //                     Home
        //                 </Link>

        //                 <Link to={`/login`} onClick={() => { setActiveId(32); setExpanded(false); }} className={"nav-link nav-item basic-nav-dropdown pb-2 ml-xl-3 " + (devisenItems.filter(current => current.id === activeId).length > 0 ? "active" : "")}>
        //                     Login
        //                 </Link>

        //                 <Link to={`/register`} onClick={() => { setActiveId(35); setExpanded(false); }} className={"nav-link nav-item basic-nav-dropdown pb-2 ml-xl-3 " + (rohstoffeItems.filter(current => current.id === activeId).length > 0 ? "active" : "")}>
        //                     Register
        //                 </Link>

        //                 <Link to={`/profile`} onClick={() => { setActiveId(37); setExpanded(false); }} className={"nav-link nav-item basic-nav-dropdown pb-2 ml-xl-3 " + (newsItems.filter(current => current.id === activeId).length > 0 ? "active" : "")}>
        //                     Profile
        //                 </Link>

        //                 <Link to={`/shipping`} onClick={() => { setActiveId(40); setExpanded(false); }} className={"nav-link nav-item basic-nav-dropdown pb-2 ml-xl-3 " + (analysenItems.filter(current => current.id === activeId).length > 0 ? "active" : "")}>
        //                     Shipping
        //                 </Link>

        //                 <Link to={`/order`} onClick={() => { setActiveId(43); setExpanded(false);}} className={"nav-link nav-item basic-nav-dropdown pb-2 mr-0 ml-auto mein-ftreff-button-fix" + (myFinanztreffItems.filter(current => current.id === activeId).length > 0 ? "active mr-0 ml-auto" : "")}>
        //                     Order
        //                 </Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </header>
    )
}