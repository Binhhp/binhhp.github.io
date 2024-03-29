import styled from "themes/StyledComponent";

export const SkillWrapper = styled("section", "skill")`
    &.binhhp-skill{
        .skill-box{
            cursor: pointer;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 5px 20px 0px;
            transition: all .3s ease-in-out;
            padding: 30px;
            height: 100%;
            position: relative;
            height: 550px;
            width: 100%;
        }

        .skill-box ul{
            list-style: none;
        }
        .skill-box h5{
            font-weight: bold;
        }
        .skill__content{
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        @media (max-width: 1025px) {
            .skill__content .col-md-4{
                width: 50%;
                max-width: 50%;
                flex: none;
            }
        }
        @media (max-width: 768px) {
            .skill__content{
                display: block;
            }
            .skill__content .col-md-4{
                width: 100%;
                max-width: 100%;
                flex: none;
            }
        }
        .image-container{
            position: absolute;
            bottom: 25%;
            text-align: center;
            width: 100%;
            transform: translate3d(0,0,0);
            transition: all .3s cubic-bezier(.215,.61,.355,1) .1s;
            left: 0px;
        }
        .image-container p{
            font-weight: 550;
            font-size: 18px;
        }
        .icon-skill {
            font-family: "Karla","Helvetica Neue",Helvetica,Arial,sans-serif;
            letter-spacing: 0;
            font-size: 1.8rem;
            color: #484747;
            text-align: center;
            margin: 0 auto 10px auto;
            display: block;
            width: 100%;
        }
        .icon-skill div {
            background-image: url("https://raw.githubusercontent.com/Binhhp/binhhp.github.io/master/src/assets/includes/spriteServices.png");
            width: 242px;
            margin: auto;
        }

        .description{
            text-align: center;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            opacity: 0;
            padding: 40px;
            color: #111;
            border-radius: 20px;
            transition: all .3s cubic-bezier(.215,.61,.355,1) .1s;
        }
        .description p {
            font-size: 1.8rem;
            line-height: 3rem;
            color: #707072;
            margin-top: 10px;
            transition: all .3s cubic-bezier(.215,.61,.355,1);
        }
        .description ul {
            padding-top: 10px;
        }
        .description ul li {
            background-color: rgba(0,0,0,0);
            letter-spacing: 0;
            font-size: 14px;
            line-height: 17px;
            color: #111;
            margin-bottom: 15px;
            position: relative;
            overflow: hidden;
            transform: translate3d(0,5px,0);
            transition: all .3s cubic-bezier(.215,.61,.355,1);
        }


        .skill-box:hover .description{
            opacity: 1;
            background-color: #7951a90c;
        }
        .skill-box:hover .image-container{
            transform: translate3d(0, 75%, 0);
        }
    }
`