import styled from "themes/StyledComponent";

export const WorksWrapper = styled("section", "works")`
    &.binhhp-works{
        .show-project{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
        }
        .project__item {
            width: 50%;
            background-size: auto;
            background-repeat: unset;
            text-align: center;
            padding: 70px 0;
            position: relative;
            cursor: pointer;
            overflow: hidden;
        }
        @media (max-width: 768px) {
            .project__item{
                width: 100%;
            }
        }
        .project__item .text-block {
            color: #cae962;
            text-align: center;
            padding: 20px 10px;
            z-index: 2;
            position: relative;
        }
        .text-block.black {
            color: #2a2c31 !important;
        }
        .project__header {
            font-size: 30px;
            line-height: 30px;
            font-weight: 800;
            height: max-content;
            padding: 0;
            height: 100%;
        }
        .project__bg {
            z-index: 1;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
            background-position: center center center;
            background-size: 100% 100%;
        }
        .hidden_bg{
            filter: blur(10px);
            opacity: .85;
        }
        .project__item:hover .project__bg {
            transform: scale3D(1.04, 1.04, 1)
        }
        .project__header-name {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform: translateZ(0);
        }

        .project__item:hover .project__header {
            transform: translate3D(0, -6px, 0)
        }

        .project__item .project__case-logo{
            text-align: center;
            width: 100%;
            margin: 25px 0 20px;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .project__item:hover .project__case-logo{
            transform: translate3D(0, 6px, 0)
        }
        .project__item .project__case-logo img{
            width: 60px;
        }
        .case-item-icon {
            width: 50px;
            margin: auto;
        }
        .project__descript {
            transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
            margin: auto;
            padding: 0 20px;
        }

        @media screen and (max-width: 766px) {
            .project__header-name {
                font-size: 19px;
            }
            .project__descript {
                font-size: 15px;
            }
            .project__item{
                padding: 10px 0 !important;
            }
            .project__item{
                width: 100%;
            }
        }
        .project__item:hover .project__descript{
            transform: translate3D(0, 8px, 0)
        }
        .project__item .view_project {
            font-size: 16px;
            width: max-content;
            padding: 15px 30px;
            background-color: #2a2c31;
            color: #FFFFFF;
            position: absolute;
            top: 0;
            z-index: 3;
            right: 20px;
            transform-origin: 0 0;
            will-change: transform, opacity;
            transform: scaleY(0) translateZ(0);
            transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
            font-family: Inter,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
        }
        .project__item:hover .view_project {
            transform: scaleY(1) translateZ(0);
            transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1)
        }

        .close{
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: #cae962;
            text-align: center;
            position: absolute;
            right: -15px;
            top: -15px;
            border-radius: 50%;
            border: none;
            outline: none;
        }
        .header-center {
            width: 100%;
            text-align: center;
            margin: 20px 0;
            font-size: 25px;
            font-weight: 600;
            color: #2a2c31;
        }
    }
`