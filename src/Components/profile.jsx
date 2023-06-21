import React, {Component}from "react";
import pic7 from './assets/pic7.png';
import pic8 from './assets/pic8.png';
import pic9 from './assets/pic9.png';
import './profile.css'
import Welcome from "./class";
function Profile() {
    return(
        <div className="main-pages">
        <div className="user-profile">
            <img src="#"  className="logo"/>
            <h4>Daives</h4><p>make a good choice</p>
            <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat excepturi similique saepe amet maiores animi, necessitatibus aspernatu </div>
            <div className="profile-img">
                <img src={pic7} height={60} width={180} alt="" />
                <img src={pic8} height={60} width={180} alt="" />
                <img src={pic9} height={60} width={180} alt="" />
            </div>
            <div className="lick-btn">
                <ul>
                    <li>Like</li>
                    <li>Comment</li>
                    <li>Share</li>
                </ul>
            </div>
            
        </div>
        {/* <Welcome /> */}
        
    </div>
    )
    
}
export default Profile;