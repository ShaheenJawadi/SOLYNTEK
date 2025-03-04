import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="logo">
            <img src="/logo.png" alt="" />
            </div>
          </div>
          <div className="col-9">
            <div className="header_menu">
              <div className="menu_holder">
                <ul className="list">
                  <li className="active">
                    <a href="/">Home</a>
                    
                  </li>
                  <li  >  
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ShaheenJawadi/SOLYNTEK">Contribute</a>
                    
                  </li>
                </ul>
              </div>
              <div className="left"  >
                <div className="auth_btns" >
                    <a href="/login"  className="btn login">Login</a>
                    <a  href="/register" className="btn signup">Signup</a>

                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
