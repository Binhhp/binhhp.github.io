import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Bachelor from "themes/svg/Bachelor";
import WorkingSVG from "themes/svg/WorkingSVG";
import FamilySVG from "themes/svg/FamilySVG";
import MyInfoProvider from "configs";
import { ExperienceWrapper } from "./ExperienceStyled";

export default function Experience() {
  return (
    <ExperienceWrapper id="experience" className="section section--experience">
      <div className="container-fluid">
        <div className="w-100">
          <div className="col-xs-12">
            <div className="heading">
              <h1 className="heading__title">Experience</h1>
              <h6 className="heading__descript" style={{ marginTop: `20px` }}>
                Learning process and the work of the self
              </h6>
            </div>
          </div>
          <div className="experience__content section__row section--bg">
            <VerticalTimeline>
              {MyInfoProvider.Experiences.slice(
                1,
                MyInfoProvider.Experiences.length
              )
                .reverse()
                .map((item, number) => (
                  <VerticalTimelineElement
                    key={`experience-${number}`}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: `${item.background}`,
                      color: `${item.background}`,
                    }}
                    contentArrowStyle={{
                      borderRight: `7px solid  ${item.background}`,
                    }}
                    date={item.date}
                    iconStyle={{
                      background: `${item.background}`,
                      color: `${item.background}`,
                    }}
                    icon={<WorkingSVG />}
                  >
                    <h3 className="vertical-timeline-element-title section--experience-title">
                      {item.title}
                    </h3>
                    <p className="section--experience-subtitle">
                      <strong>Company:</strong>&nbsp;{item.workPlace}
                    </p>
                    <p className="section--experience-subtitle">
                      <strong>Main repository:</strong>&nbsp;{item.repository}
                    </p>
                    <p className="section--experience-subtitle">
                      <strong>Technical:</strong>&nbsp;{item.technical}
                    </p>
                    {item.certifications && (
                      <p className="section--experience-subtitle">
                        <strong>Certifications:</strong>
                        <br />
                        {item.certifications.map((x) => (
                          <>
                            <span>{x}</span>
                            <br />
                          </>
                        ))}
                      </p>
                    )}
                  </VerticalTimelineElement>
                ))}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: `${MyInfoProvider.Experiences[0].background}`,
                  color: `${MyInfoProvider.Experiences[0].color}`,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${MyInfoProvider.Experiences[0].background}`,
                }}
                date={MyInfoProvider.Experiences[0].date}
                iconStyle={{
                  background: `${MyInfoProvider.Experiences[0].background}`,
                  color: `${MyInfoProvider.Experiences[0].color}`,
                }}
                icon={<Bachelor />}
              >
                <h3 className="vertical-timeline-element-title section--experience-title">
                  Bachelor’s Degree
                </h3>
                <p className="section--experience-subtitle">
                  <strong>University:</strong>&nbsp;
                  {MyInfoProvider.Experiences[0].title}
                </p>
                <p className="section--experience-subtitle">
                  <strong>Faculty:</strong>&nbsp;
                  {MyInfoProvider.Experiences[0].workPlace}
                </p>
                <p className="section--experience-subtitle">
                  <strong>GPA:</strong>&nbsp;
                  {MyInfoProvider.Experiences[0].technical}
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#c71585", color: "#fff" }}
                icon={<FamilySVG />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </ExperienceWrapper>
  );
}
