/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import { auth } from "../firebase";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //!! register NEW USER 

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(err=>{
      alert(err.message);
    })

    console.log(emailRef.current.value, passwordRef);
    alert("account succesfully Created")
  };

  //!!  SIGNIN  USER 
  const signin = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser)=>{
        console.log(authUser);
      }).catch(err=>{
        alert(err.message);
      })
      alert("Signed In succesfully")
  };

  return (
    <div className="signinscreen  my-auto mx-auto">
      <div class="signinscreen__card card" style={{ width: "21rem" }}>
        <h1 className="mb-3">Sign in</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              ref={emailRef}
              type="email"
              class="form-control my-1 mb-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              ref={passwordRef}
              type="password"
              class="form-control my-1 mb-4"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" onClick={signin}  class="btn btn-danger mb-4">
            Submit
          </button>{" "}
          <br />
          <p>new to Netflix ?</p>
          <a href="" onClick={register} >
            {" "}
            Sign up Now
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
