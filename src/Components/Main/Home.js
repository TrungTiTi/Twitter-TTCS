import { Gif, Image, ImageAspectRatio, SentimentSatisfied } from '@material-ui/icons';
import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="home-top">
                <span>Home</span>
                <span>icon</span>
            </div>
            <div className="home-form">
                <div className="home-form-avatar">
                    <img src="../add.jpg"></img>
                </div>
                <div className="home-form-input">
                    <div className="home-form__top">
                        <textarea 
                            type="text"
                            placeholder="What's happening?"
                        >
                        </textarea>
                    </div>
                    <div className="home-form__button">
                        <div className="home-form__buttonL">
                            <div><Image></Image></div>
                            <div><Gif></Gif></div>
                            <div><SentimentSatisfied></SentimentSatisfied></div>
                        </div>
                        <div className="home-form__buttonR"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;