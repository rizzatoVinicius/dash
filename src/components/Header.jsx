import "./css/Header.css"
import logo from "../img/logo.png"
import getStarted from "../img/get-started.svg"

export default function Header(){
    return(
        <header>
            <div id="container-logo">
                <img src={logo} alt="logo dash" width="50px" />
                <h1>Dash</h1>
            </div>
            <ul id="header-ul">
                <li><a href="">Product</a></li>
                <li><a href="">Learn</a></li>
                <li><a href="">Enterprise</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">About</a></li>
            </ul>
            <div id="container-login">
                <a href="">Log In</a>
                <a href="" id="header-get-started">Get Started <img src={getStarted} alt="" /></a>
            </div>
        </header>
    );
}