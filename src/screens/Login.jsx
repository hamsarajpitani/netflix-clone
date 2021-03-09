import React, { useState } from "react";
import SignInScreen from "./SignInScreen";

const Login = () => {
    
    const [SignIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background d-flex justify-content-between">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="login__logo"
        />
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="login__avatar"/> */}
        <button
          onClick={()=>setSignIn(true)}
          className="login__btn btn text-capitalize "
        >
          Sign In
        </button>
        <div className="login__gradrient" />
      </div>

      <div className="login__body">
          {
              SignIn ? <SignInScreen/>
              : (
                <>
                <h1 className="mb-4">Unlimited films,TV programmes and more.</h1>
                <h4 className="mb-3">watch anywhere. cancel at any time.</h4>
                <h6 className="mb-5">
                  Ready to watch ? Enter your email to create or restart your
                  membership.
                </h6>
                <div className="login__body__input mt-4">
                  <form action="">
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="example@gmail.com"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        required
                      />
                      <button
                        className="btn btn-danger"
                        type="button"
                        id="button-addon2"
                        onClick={()=>setSignIn(true)}
                      >
                        GET STARTED
                      </button>
                    </div>
                  </form>
                </div>
              </>
              )
          }
      
      </div>
    </div>
  );
};

export default Login;
