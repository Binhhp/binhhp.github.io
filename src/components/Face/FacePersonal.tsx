import { FacePersonalWrapper } from "./FacePersonalStyled";

export default function FacePersonal() {
    return (
        <FacePersonalWrapper>
            <section id="face" className="section--face__personal">
                <div className="face">
                    <div className="personal">
                        <h1>Wibu</h1>
                        <p>I love Anime</p>
                    </div>
                    <div className="coder">
                        <h1>
                            <span><i className="fa fa-chevron-left"></i></span>
                            coder
                            <span><i className="fa fa-chevron-right"></i></span>
                        </h1>
                        <p>Front end developer and Back end developer</p>
                    </div>
                </div>
                    <img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-designer-coder.jpg" alt="Face"/>
                    <div className="personal-img"></div>
                    <div className="coder-img"></div>
                    <div className="personal-bg"></div>
                <div className="coder-bg"></div>
            </section>
        </FacePersonalWrapper>
    )
}