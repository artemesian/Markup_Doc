import React from "react";
import "./Welcome.css";
const Welcome=(props)=>{
    return(
        <div id="welcome-wrapper">
            <div id="logo-text">
                Markup-Doc
            </div>
            <button 
                className="login-button" 
                onClick={()=>props.handleLoggingButton("true")}>
                    Login
            </button>
        </div>
        )   
}

export default Welcome;