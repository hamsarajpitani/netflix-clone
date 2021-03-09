import React from "react";
import Navbar from "../Navbar";
import {auth} from '../firebase';
import {selectUser} from '../features/userSlice';
import { useSelector } from "react-redux";
import PlansScreen from "./PlansScreen";

const ProfileScreen = () => {
  
  const user = useSelector(selectUser);
  // console.log(user);

  return (
    <div className="profilescreen">
      <Navbar />
      <div className="profilescreen__body pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row d-flex body__info mx-auto">
                <h1 className="mb-3 fw-normal mt-4">Edit Profile</h1>
                <div className="col-md-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                  />
                </div>
                <div className="body__user__details col">
                  <p className="email">{user.uemail}</p>
                  <p className="plans">plans (Current plan : premium )</p>
                  <p className="renewal">renewal data : 04/03/2021</p>

                  <PlansScreen/>

                  <button 
                  onClick={()=>auth.signOut()}
                  className="btn btn-danger body__plans__btn body__plans__btn__signout">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
