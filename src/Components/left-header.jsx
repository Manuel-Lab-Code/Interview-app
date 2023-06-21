import React from "react";
import "./left-header.css";
const list ="Home";

function Left_hearder() {
    return (
        <div className="left_header">
            <div className="list">
                <ul>
                   <li className="active">{list}</li>
                   <li>Contact</li>
                   <li>Pages</li>
                   <li>About</li>
                   <li>Address</li>
                   <li>Website</li>
                   <li>FAQ</li>
                   <li>Email</li>

                </ul>
            </div>
        </div>
    )
    
}export default Left_hearder;