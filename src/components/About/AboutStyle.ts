import styled from "themes/StyledComponent";

export const AboutWrapper = styled("section", "about")`
    &.binhhp-about{
        .container-fluid{
            margin: 7% auto;
        }
        .about-content{
            display: flex;
            flex-wrap: wrap;
            margin: auto 0;
        }
        .position-relative{
            position: relative;
            animation: transformRight 2s normal cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        @keyframes transformRight {
            from{transform: translateX(200%);}  
            to{transform: translateX(0%);}
        }
        .purple{
            color: #7851a9 !important;
        }

        .menu__link.menu__link--alt {
            margin-bottom: 25px !important;
            margin: 0;
        }
        .mr-2 {
            margin-right: 10px;
        }
        .h2 {
            font-size: 40px;
            letter-spacing: .12rem;
            font-family: Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif;
        }
        @media (min-width: 1280px) {
            .h2{
                font-size: 66px;
            }
        }
        .about-content .des{
            color: rgb(101, 98, 112);
            font-size: 1.1em;
        }
        @media screen and (max-width: 766px){
            .about-content .des{
                font-size: 0.9em;
            }
            .about-content svg{
                width: 30% !important;
                height: auto;
                margin: auto;
            }
            .about-content .col-lg-4{
                display: none;
            }
            .about-content .col-xs-6{
                padding: 0 !important;
                width: 33.33% !important;
                max-width: 33.33% !important;
            }
            .about-content .menu__link {
                width: 100%;
                margin: 0 !important;
                padding: 0 !important;
            }
            .about-content .menu__title{
                font-size: 17px !important;
            }
            .about-content .menu__subtitle{
                font-size: 8px !important;
            }
            .connect--me__link{
                margin-right: 5px !important;
                font-size: 14px !important;
            }
        }
        .connect--me{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }
        .connect--me__link {
            margin-right: 15px;
            color: #fff;
            padding: 10px;
            text-align: center;
            font-size: 17px;
            font-weight: 550;
            line-height: 17px;
            margin-bottom: 5px;
            transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .connect--me__link i{
            margin-right: 7px;
            font-weight: 400;
        }
        .connect--me__link:hover{
            transform: translate3D(0, -4px, 0);
            color: white;
        }
        .contact--me{
            display: flex;
            flex-wrap: wrap;
        }
        @media screen and (max-width: 766px) {
            .contact--me{
                display: grid;
                width: 100%;
                margin-bottom: 10px;
            }
            .contact--me p{
                width: 100% !important;
            }
        }
        .contact--me p{
            width: 50%;
            text-align: left;
        }
        .about-me--image{
            width: 100%;
        }
        .about-me--image img{
            width: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center center;
        }
        .coder{
            font-weight: 900;
            font-size: 16px;
            margin-left: 10px;
        }
        .coder i{
            font-size: 12px;
            font-weight: 900;
        }
        .about-me--blck{
            width: 100%;
            --blck: 60px;
            --blckH: 90px;
            --blckR: 40px;
        }
        .item-blck{
            position: absolute;
            width: var(--blckH);
            height: var(--blckH);
            border-radius: 20px;
        }
        .bg-lt{
            top: calc(var(--blck) * -1);
            left: calc(var(--blckR) * -1);
            background: linear-gradient(
            323.93deg, rgba(10, 185, 149, 0.7) -32.24%, rgba(10, 185, 149, 0) 57.93%), rgb(218, 205, 255);
        }
        .bg-rt{
            top:  calc(var(--blck) * -1);
            right: calc(var(--blckR) * -1);
            background: linear-gradient(
        331.16deg, rgb(248, 198, 255) -19.15%, rgba(255, 196, 255, 0) 55.74%), rgb(255, 238, 196);
        }
        .bg-br{
            bottom:  calc(var(--blck) * -1);
            right: calc(var(--blckR) * -1);
            background: linear-gradient(
                180.1deg, rgb(20, 44, 105) -59.06%, rgba(20, 44, 105, 0) 65.9%), rgb(0, 128, 129);
        }
        .bg-bl{
            bottom:  calc(var(--blck) * -1);
            left: calc(var(--blckR) * -1);
            background: linear-gradient(
                5.85deg, rgb(218, 205, 255) -39.75%, rgba(218, 205, 255, 0) 61.37%), rgb(255, 234, 238);
        }
        @media (min-width: 1900px) {
            .about-me--blck{
                --blckH: 135px;
                --blck: 135px;
                --blckR: 60px
            }
        }
        @media (max-width: 768px) {
            .about-content .col-lg-4{
                display: none;
            }
        }
        @media (max-width: 1024px) {
            .about-content .about-me--blck{
                display: none;
            }
        }
    }
`