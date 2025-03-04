import React from "react"; 

const AuthHolder: React.FC<{ 
    children: React.ReactNode,  
    title:string 
  }> = ({ children , title }) =>  { 

  return (
    <div className="auth_page">
      <div className="auth_box">
        <div className="auth_box_logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="auth_box_title">
        <h2>
            {title}
        </h2>
        </div>
        <div className="form_holder">
           {children}
        </div>
      </div>
    </div>
  );
};

export default AuthHolder;
