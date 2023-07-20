import styled from "themes/StyledComponent";

export const ExperienceWrapper = styled("section", "experience")`
    &.binhhp-experience{
        .vertical-timeline::before{
            background-color: rgb(243, 239, 239);
        }
        .vertical-timeline-element-icon{
            box-shadow: 0 0 0 4px rgb(243, 239, 239);
        }
        .vertical-timeline-element-date{
            color: black;
        }
        .section--experience-title{
            color: #ffffff;
        }
        .section--experience-subtitle{
            color: #ffffff;
            font-size: 16px;
            margin-top: 10px;
        }
        #experience{
            width: 100%;
            max-width: 100%;
            overflow: hidden;
        }
        @media (min-width: 1280px) {
            .vertical-timeline.vertical-timeline--two-columns{
                width: 100%;
            }
        }
        @media screen and (max-width: 766px){
            .experience__content .vertical-timeline-element-date{
                color: #fff;
                opacity: 1;
            }
        }
    }
`