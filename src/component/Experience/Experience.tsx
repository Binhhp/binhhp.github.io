import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./experience.css";
import Bachelor from "../../themes/svg/Bachelor";
import WorkingSVG from "../../themes/svg/WorkingSVG";
import FamilySVG from "../../themes/svg/FamilySVG";

export default function Experience() {

    return (
        <section id="experience" className="section section--experience">
            <div className="container-fluid">
                <div className="w-100">
                    <div className="col-xs-12">
                        <div className="heading">
                            <h1 className="heading__title">Experience</h1>
                            <h6 className="heading__descript" style={{marginTop: `20px`}}>
                                Learning process and the work of the self
                            </h6>
                        </div>
                    </div>
                    <div className="experience__content section__row section--bg">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#7851a9', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #7851a9' }}
                                date="11/2019 - 2/2020"
                                iconStyle={{ background: '#7851a9', color: '#fff' }}
                                icon={<WorkingSVG />}
                            >
                                <h3 className="vertical-timeline-element-title section--experience-title">
                                    Backend Asp.Net Developer
                                </h3>
                                <p className="section--experience-subtitle">
                                    <strong>Company:</strong>&nbsp;Công ty TNHH Công nghệ và truyền thông 3i
                                </p>
                                <p className="section--experience-subtitle">
                                    <strong>Main repository:</strong>&nbsp;Fresher Backend Asp.Net
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2596be', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #2596be' }}
                                date="2017 - 2021"
                                iconStyle={{ background: '#2596be', color: '#fff' }}
                                icon={<Bachelor />}
                            >
                                <h3 className="vertical-timeline-element-title section--experience-title">Bachelor’s Degree</h3>
                                <p className="section--experience-subtitle">
                                    <strong>University:</strong>&nbsp;Universiry Of Transport And Communications
                                </p>
                                <p className="section--experience-subtitle">
                                    <strong>Faculty:</strong>&nbsp;Information Technology
                                </p>
                                <p className="section--experience-subtitle">
                                    <strong>GPA:</strong>&nbsp;2.7
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{ background: '#c71585', color: '#fff' }}
                                icon={<FamilySVG />}
                            />
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    )
}