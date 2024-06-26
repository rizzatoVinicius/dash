import logo from "../img/logo.png"
import "./css/Footer.css"

export default function Footer() {
    return (

        <footer>
            <div id="container-footer">
                <div id="footer-logo">
                    <div id="container-logo">
                        <img src={logo} alt="logo dash" width="50px" />
                        <h1>Dash</h1>
                    </div>
                    <div>
                        <p>Explore Your Data, in Your Way</p>
                    </div>
                </div>

                <div id="footer-info">
                    <ul>
                        <li className="li-title">Product</li>
                        <li><a href="#">AI Query Engine</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">App Builder</a></li>
                        <li><a href="#">Collaboration</a></li>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                    <ul>
                        <li className="li-title">Company</li>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Report Widget</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Media Kit</a></li>
                    </ul>
                    <ul>
                        <li className="li-title">Resources</li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Report Widget</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Changelog</a></li>
                    </ul>
                    <ul>
                        <li className="li-title">Contact</li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Email Us</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Discord</a></li>
                    </ul>

                </div>
            </div>
            <div id="footer-container-terms">
                <p>@ 2024 Dash</p>
                <div>
                    <a href="">Privacy policy</a>
                    <a href="">Terms & conditions</a>
                </div>
            </div>

        </footer>
    )
}