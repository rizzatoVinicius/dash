import Header from "../components/Header"
import Footer from "../components/Footer"
import Intro from "./Intro"
import Core from  "./Core"
import Features from "./Features"
import Comments from "./Comments"

export default function Home(){
    return(
        <>
            <Header />
            <Intro />
            <Core />
            <Features />
            <Comments />
            <Footer />
        </>
        
    )
}