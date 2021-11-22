import React, {useRef, useState } from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Cancel, Email, Facebook, Person } from '@material-ui/icons';
import LogUp from './LogUp';
import LogIn from './LogIn';

const LogOption = ({Icon, text}) => {
    return(
        <>
            <Icon />
            <span>{text}</span>
        </>
    )
}
const Log = () => {

    const [sign, setSign] = useState(true);
    // 
    const [logUp, setLogUp] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const logOpacity = useRef();

    const handleSign = () => {
        sign ? setSign(false) : setSign(true);
        
    }
    // 
    const handleSignUp = () => {
        logOpacity.current.style.backgroundColor= "grey";
        logOpacity.current.style.filter="brightness(0.5)";
        setLogUp(true)
    }
    const handleCancelLogUp = () => {
        logOpacity.current.style.backgroundColor= "unset";
        logOpacity.current.style.filter="brightness(1)";
        setLogUp(false);
    }
    // 
    const handleSignIn = () => {
        logOpacity.current.style.backgroundColor= "grey";
        logOpacity.current.style.filter="brightness(0.5)";
        setLogIn(true)
    }
    const handleCancelLogIn = () => {
        logOpacity.current.style.backgroundColor= "unset";
        logOpacity.current.style.filter="brightness(1)";
        setLogIn(false);
    }
    return (
        <div className="logUp">
            <div className="log" ref={logOpacity}>
                <div className="log-main">
                    <div className="log-form">
                        <TwitterIcon className="log__svg" />
                        <span className="sp-h1">What's Happened?</span>
                        {sign ? (
                            <div className="log-form-change">
                                <span className="sp-h2">Sign in to Twitter</span>
                                <div className="log-form__bt">
                                    <div onClick={handleSignIn}><LogOption Icon={Person} text="Sign in with account" /></div>
                                    <div><LogOption Icon={Email} text="Sign in with email" /></div>
                                    <div><LogOption Icon={Facebook} text="Sign in with Facebook" /></div>
                                </div>
                                <span>Don't have an account? 
                                    <strong onClick={handleSign} >Sign up</strong>
                                </span>
                            </div>
                        ) : (
                            <div className="log-form-change">
                                <span className="sp-h2">Join Twitter Today</span>
                                <div className="log-form__bt">
                                    <div onClick={handleSignUp}><LogOption Icon={Person} text="Sign up with account"  /></div>                           
                                </div>
                                <span>Already have an account? 
                                    <strong onClick={handleSign} >Sign in</strong>
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="log-img">
                        <img src="../ImgLog.png"></img>
                        <TwitterIcon />
                    </div>
                    
                </div>
                <div className="log-footer"></div>
                
            </div>
            { logUp &&
                <div className="log-up">
                    <div className="log-up-form">
                        <Cancel className="logUp__cancel" onClick={handleCancelLogUp} />
                        <LogUp />
                    </div>
                </div>
            }
            { logIn &&
                <div className="log-up">
                    <div className="log-up-form">
                        <Cancel className="logUp__cancel" onClick={handleCancelLogIn} />
                        <LogIn />
                    </div>
                </div>
            }
        </div>
    );
};

export default Log;