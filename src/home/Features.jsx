import cloud from "./img/cloud.svg"
import docs from "./img/docs.svg"
import estatistica from "./img/estatistica.svg"
import finances from "./img/finances.svg"
import pointer from "./img/pointer.svg"
import security from "./img/security.svg"
import "./css/features.css"

export default function Features(){
    return(
        <article id="features">
            <span className="intro-span">More Features</span>
            <h2>Unleashing More Power for Your Data Journey</h2>
            <div className="container-features">
                <div>
                    <img src={docs} className="features-img" alt="" />
                    <h3>Data Quality Management</h3>
                    <p>Identify and recify inconsistencies, errors, and outliers whitin your datasets. Keep your data clean, reliable, and ready for analysis.</p>
                </div>
                <div>
                    <img src={pointer} className="features-img" alt="" />
                    <h3>Real-Time Collaboration</h3>
                    <p>Collaborate in real-time on notebooks and reports with multiple team members. See edits as they happen,making collaboration more dynamic and efficient.</p>
                </div>
                <div>
                    <img src={estatistica} className="features-img" alt="" />
                    <h3>Automated Data Enrichment</h3>
                    <p>Access additional information, such as demographics or geolocation, to enrich your analysis and gain a more comprehensive understanding of your data.</p>
                </div>
            <div>
                    <img src={cloud} className="features-img" alt="" />
                    <h3>Cloud Agnostic</h3>
                    <p>Enjoy the flexbility of choosing your preferred cloud provider. Our platform is cloud-agnostc, allowing you to seamlessly integrate with popular cloud services, ensuring your data resides where you want it.</p>
                </div>
                <div>
                    <img src={finances} className="features-img" alt="" />
                    <h3>Time Series Analysis</h3>
                    <p>Uncover patterns and trends over time with our specialized time series analysis tools. Whether you're tracking sales performancee or monitoring user behavior, our features provide deep insights into temporal data.</p>
                </div>
                <div>
                    <img src={security} className="features-img" alt="" />
                    <h3>Compliance Tracking</h3>
                    <p>Stay compliant with industry regulations effortlessly. Our compliance tracking features help you monitor and ensure that your data practices align with the latest standards and regulations.</p>
                </div>
            </div>
        </article>
    )
}