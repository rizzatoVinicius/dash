import siemens from "./img/siemens.svg"
import intel from "./img/intel.svg"
import ibm from "./img/ibm.svg"
import selo from "./img/selo.png"
import perfil from "./img/perfil.avif"
import "./css/comments.css"

export default function Comments() {
    return (
        <section id="comments">
            <div>
                <div className="comments-text">
                    <p>"Integrating Dash intou our operations has been a game-changer. The advanced features, seamless integration, and user-friendly interface have empowered our team to unlock new insights and collaborate effortlessly. Dash is not just a tool; it's a strategic partner in our journey to seccess."</p>
                    <div>
                        <img src={perfil} alt="" className="comments-perfil" />
                        <div>
                            <p className="comments-name">Sarah Rodriguez<br/>
                            <span className="comments-office">Chief Innovation Officer at Gojek</span></p>
                        </div>
                    </div>
                </div>
                <div id="comments-brands">
                    <img src={siemens} alt="" />
                    <img src={intel} alt="" />
                    <img src={ibm} alt="" />
                </div>
            </div>
            <div className="comments-container-selo">
                <div>
                    <img src={selo} alt="" className="selo" />
                    <img src={selo} alt="" className="selo" />
                </div>
                <h2></h2>
                <p></p>
                <a href=""></a>
            </div>
        </section>
    )
}