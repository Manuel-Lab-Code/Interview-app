import React from "react";
import Profile  from "./profile";
import './header.css';
import pic5 from './assets/pic5.png';
// import pics from "./pictures";
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic6 from './assets/pic6.png';
// import pics from "./pictures";


function Header() {
    return (<>
        <div className="nav">
            <img src="#" className="logo" />

            <div className="search-box">
                <input type="search" placeholder="What is happining ?" />
            </div>
            <div className="menu-list">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Log in</li>
                    <li className="active-b">Post</li>
                </ul>
            </div>
           
        </div>
                {/* post pages story */}
        <div className="post-page">
            <div className="post">
                <ul>
                    <li>Post</li>
                    <li>Short</li>
                </ul>
            </div>
            <div className="story-pics">
            <div className="profile-pics main">
            <img  src={pic6}  id="main-alt"/>
               <p className="alt" >Daves Mike</p>
                </div> 
                
                {/* <img className="profile-pics" src={pic5} height={100} width={100}/>
                    Davies mike */}

                <div className="profile-pics story1">
                <div className="online" >
                <img  src={pic1} />
               </div>
                <p className="alt">john White</p>
                </div>
                <div className="profile-pics story2">
                <div className="online" >
                <img  src={pic2} />
               </div>
                <p className="alt">Lawson Dawna</p>
                </div>
                <div className="profile-pics story3">
                <div className="online" >
                <img  src={pic3} />
               </div>
                <p className="alt">Tom Mike</p>
                </div>
                <div className="profile-pics story4">
                <div className="online" >
                <img  src={pic4} />
               </div>
                <p className="alt">Manuel Tob</p>
                </div>
            </div>
        </div>
        {/* ----------main-pages profile --------*/}
       <Profile/>
     </>
    )

} export default Header;