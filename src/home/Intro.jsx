import "./css/intro.css"
import getStartedWhite from "../img/get-started -white.svg"
import getStarted from "../img/get-started.svg"
import introImg from "./img/intro-img.jpg"
import amazon from "./img/amazon.svg"
import ebay from "./img/ebay.svg"
import ibm from "./img/ibm.svg"
import intel from "./img/intel.svg"
import twitch from "./img/twitch.svg"
import siemens from "./img/siemens.svg"
import toyota from "./img/toyota.svg"
import zomato from "./img/zomato.svg"

export default function Intro() {
    return (
        <article id="intro">
            <div id="container-intro">
                <span className="intro-span">Explore, analyze, create</span>
                <h1 className="intro-title">Explore Your Data,<br />In Your Way</h1>
                <p className="intro-p">We bring your data to the forefront, empowering your team<br />to make informed decisions faster than ever before.</p>
                <div className="container-intro-get-started">
                    <a href="" className="intro-get-started">Get Started for Free <img src={getStarted} alt="" /></a>
                    <a href="" className="intro-login">Contact Us <img src={getStartedWhite} alt="" /></a>
                </div>
            </div>

            <div id="container-intro-img">
                <img id="intro-img" src={introImg} alt="" />
                
            </div>

            <div id="container-brands">
            <p className="intro-p">How great company trusted with us</p>
                <div><img src={amazon} alt="" /><img src={ebay} alt="" /><img src={ibm} alt="" /><img src={intel} alt="" /></div>
                <div><img src={twitch} alt="" /><img src={siemens} alt="" /><img src={toyota} alt="" /><img src={zomato} alt="" /></div>
            </div>

        </article>
            

    )
}