import { AboutWrapper } from "./AboutStyle";
export default function About() {
  return (
    <AboutWrapper id="about" className="section section--about">
      <div className="container-fluid">
        <div className="about-content section--bg">
          <div className="col-lg-8">
            <p className="h2">
              Hi. I'm Binh!
              <span className="coder">
                <i className="fas fa-chevron-left"></i>
                dev
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
            <p className="des">
              I'm a Web Developer who is addicted to learning and loves working.
              <br />I have experience in web site building and customization.
            </p>
            <div className="contact--me">
              <p>
                <i className="far fa-envelope mr-2"></i>binhhp20@gmail.com
              </p>
            </div>
            <div className="connect--me">
              <a
                href="https://www.linkedin.com/in/vu-binh-7a28a817b/"
                className="connect--me__link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `#0A66C2` }}
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a
                href="https://github.com/binhhp"
                className="connect--me__link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `#181717` }}
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/pengineer-42d51.appspot.com/o/CV_VuTatBinh.pdf?alt=media&token=c9228238-0cdc-471b-a247-749b19e46356"
                target="_blank"
                className="connect--me__link"
                download
                rel="noopener noreferrer"
                style={{ background: `#de5254` }}
              >
                <i className="far fa-address-card"></i>
                Download CV
              </a>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <div className="about-me--image">
              <img
                src="https://avatars.githubusercontent.com/u/55707606?v=4"
                alt="Avatar me"
              />
            </div>
            <div className="about-me--blck">
              <div className="item-blck bg-lt"></div>
              <div className="item-blck bg-rt"></div>
              <div className="item-blck bg-br"></div>
              <div className="item-blck bg-bl"></div>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}
