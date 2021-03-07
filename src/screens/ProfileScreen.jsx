import React from "react";

import Navbar from "../Navbar";

const ProfileScreen = () => {
  return (
    <div className="profilescreen">
      <Navbar />
      <div className="profilescreen__body mt-2">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
             
              <div className="row d-flex body__info mx-auto">
              <h1 className="mb-3 fw-normal">Edit Profile</h1>
                <div className="col-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                  />
                </div>
                <div className="body__user__details col">
                  <p className="email">pitanihamsaraj@gmail.com</p>
                  <p className="plans">plans (Current plan : premium )</p>
                  <p className="renewal">renewal data : 04/03/2021</p>
                  <div className="body__plans d-flex justify-content-between align-items-center">
                    <p className="body__plans__type">
                      netflix standard
                      <br />
                      1080p
                    </p>
                    <button className="btn btn-danger body__plans__btn">Subscribe</button>
                  </div>

                  <div className="body__plans d-flex justify-content-between align-items-center">
                    <p className="body__plans__type">
                      netflix basic
                      <br />
                      480p
                    </p>
                    <button className="btn btn-danger body__plans__btn">Subscribe</button>
                  </div>

                  <div className="body__plans d-flex justify-content-between align-items-center">
                    <p className="body__plans__type">
                      netflix premium
                      <br />
                      4k- HDR
                    </p>
                    <button className="btn btn-danger  body__plans__btn__currentplan ">current plan</button>
                  </div>
                  <button className="btn btn-danger body__plans__btn body__plans__btn__signout">Sign Out</button>
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
