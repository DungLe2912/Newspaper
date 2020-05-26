import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
class Header extends Component {
    render() {
        return (
            <header className="header-area">
            {/* Navbar Area */}
            <div className="mag-main-menu" id="sticker">
              <div className="classy-nav-container breakpoint-off">
                {/* Menu */}
                <nav className="classy-navbar justify-content-between" id="magNav">
                  {/* Nav brand */}
                  <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>
                  {/* Navbar Toggler */}
                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span /><span /><span /></span>
                  </div>
                  {/* Nav Content */}
                  <div className="nav-content d-flex align-items-center">
                    <div className="classy-menu">
                      {/* Close Button */}
                      <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                      </div>
                      {/* Nav Start */}
                     
                      {/* Nav End */}
                    </div>
                    <div className="top-meta-data d-flex align-items-center">
                      {/* Top Search Area */}
                      <div className="top-search-area">
                        <form action="index.html" method="post">
                          <input type="search" name="top-search" id="topSearch" placeholder="Search and hit enter..." />
                          <button type="submit" className="btn"><i className="fa fa-search" aria-hidden="true" /></button>
                        </form>
                      </div>
                      {/* Login */}
                      <a id="login" href="sign-in.html" className="login-btn"><i className="fa fa-user" aria-hidden="true" /></a>
                      {/*Sign-in  */}
                      <a id="regis" href="sign-up.html" className="login-btn"><i className="fa fa-registered" aria-hidden="true" /></a>
                      {/*User */}
                      <div id="user" className="container">
                        <div className="dropdown">
                          <a href="sign-up.html" className="login-btn"><i className="fa fa-user" aria-hidden="true" />Dung Le</a>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="edit-info.html">Edit profile</a>
                            <a id="writerpost" className="dropdown-item" href="submit-posts.html">Submit post</a>
                            <a id="editorpost" className="dropdown-item" href="editor-Management.html">Editor Management</a>
                            <a id="adminpost" className="dropdown-item" href="Admin-Categories-Management.html">Admin Management</a>
                            <a id="logout" className="dropdown-item" href="index.html">Logout</a>
                          </div>
                        </div>
                      </div>      
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;