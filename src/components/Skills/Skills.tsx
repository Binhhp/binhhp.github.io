import MyInfoProvider from "configs";
import { SkillWrapper } from "./SkillStyled";

export default function Skills() {

    return (
        <SkillWrapper>
            <section id="skills" className="section section--skill">
        <div className="container-fluid">
            <div className="col-xs-12">
                <div className="heading">
                    <h1 className="heading__title">Skills</h1>
                    <h6 className="heading__descript">Have a knowledge about</h6>
                </div>
                <div className="skill__content section--bg">
                    <div className="col-md-4">
                        <div className="skill-box">
                            <div className="description">
                                <h5>Programing language</h5>
                                <ul>
                                {MyInfoProvider.Skills.ProgramingLanguage.map(item => <li>{item}</li>)}
                                </ul>
                                <h5>Platform &amp; Frameworks &amp; Libraries</h5>
                                <ul>
                                {MyInfoProvider.Skills.PlatformFrameworksLibraries.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                            <div className="image-container">
								<div className="icon-skill object-icon">
                                    <div style={{backgroundPosition: `0 -255px`, height: `99px`}}></div>
                                </div>
								<p>Language & Frameworks</p>
							</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="skill-box">
                            <div className="description">
                                <h5>Database</h5>
                                <ul>
                                {MyInfoProvider.Skills.Database.map(item => <li>{item}</li>)}
                                </ul>
                                <h5>Version control</h5>
                                <ul>
                                {MyInfoProvider.Skills.VersionControl.map(item => <li>{item}</li>)}
                                </ul>
                                <h5>IDEs</h5>
                                <ul>
                                {MyInfoProvider.Skills.IDEs.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                            <div className="image-container">
								<div className="icon-skill object-icon">
                                    <div style={{backgroundPosition: `0 0`, height: `133px`, width: `211px`}}></div>
                                </div>
								<p>Database & Control & IDEs</p>
							</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="skill-box">
                            <div className="description">
                                <h5>Knowledge</h5>
                                <ul>
                                    {MyInfoProvider.Skills.Knowledge.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                            <div className="image-container">
								<div className="icon-skill object-icon">
                                    <div style={{backgroundPosition: `0 -133px`, height: `122px`, width: `205px`}}></div>
                                </div>
								<p>Knowledge other</p>
							</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </SkillWrapper>

    )
}