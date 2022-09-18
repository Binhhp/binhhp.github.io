
import About from "./About/About";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Layout from "../layouts/Layout";

export default function Home({ ...props }){

    return (
        <Layout menu={props.menu} hanlderMenu={props.hanlderMenu}>
            <div id="content" className="skrollable skrollable-between">
                <About></About>
                <Skills></Skills>
                <Experience></Experience>
                <Works></Works>
            </div>
        </Layout>
    )
}