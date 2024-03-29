import { createGlobalStyle } from "styled-components";
import FontMonumentRegular from "assets/fonts/MonumentExtendedRegular.woff";
import FontMonumentUltrabold from "assets/fonts/MonumentExtendedUltrabold.woff";

export default createGlobalStyle`
    @font-face {
    font-family: "monument extended";
    font-style:normal;
    font-weight:400;
    src: local("Monument Extended"),
        url(${FontMonumentRegular})
        format("woff");
    }
    @font-face {
    font-family: "monument extended";
    font-style:normal;
    font-weight:800;
    src: local("Monument Extended"),
        url(${FontMonumentUltrabold})
        format("woff");
    }
    html {
        font-family: Poppins,Helvetica,Arial,Lucida,sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
    }
    body, h1, h2, h3, h4, h5, h6, p, span {
        margin: 0;
        font-family: Poppins,Helvetica,Arial,Lucida,sans-serif;
    }
    #binhhp {
        background-color: #FFF;
        position: relative;
    }
    .binhhp-main--wrapper{
        width: 100%;
        height: auto;
        display: none;
        transition: display 666ms cubic-bezier(.666,0,.333,1);
    }
    a {
        background-color: transparent
    }

    a:active {
        outline: 0
    }

    a:hover {
        outline: 0
    }

    abbr[title] {
        border-bottom: 1px dotted
    }

    b,strong {
        font-weight: bold
    }

    dfn {
        font-style: italic
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0
    }

    button,input,optgroup,select,textarea {
        color: inherit;
        font: inherit;
        margin: 0
    }

    button {
        overflow: visible
    }

    button,select {
        text-transform: none
    }

    button,html input[type=button],input[type=reset],input[type=submit] {
        -webkit-appearance: button;
        cursor: pointer
    }

    button[disabled],html input[disabled] {
        cursor: default
    }

    button::-moz-focus-inner,input::-moz-focus-inner {
        border: 0;
        padding: 0
    }

    input {
        line-height: normal
    }

    input[type=checkbox],input[type=radio] {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0
    }

    input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
        height: auto
    }

    input[type=search] {
        -webkit-appearance: textfield;
        -webkit-box-sizing: content-box;
        box-sizing: content-box
    }

    input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
        -webkit-appearance: none
    }

    textarea {
        overflow: auto
    }

    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    *,:after,:before {
        -webkit-box-sizing: inherit;
        box-sizing: inherit
    }

    [tabindex="-1"]:focus {
        outline: none!important
    }

    h1,h2,h3,h4,h5,h6 {
        margin-top: 0;
        margin-bottom: .5rem
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem
    }
    a {
        color: #7851a9;
        text-decoration: none
    }

    a:focus,a:hover {
        color: #b82e2e;
        text-decoration: underline
    }

    a:focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px
    }

    img {
        vertical-align: middle
    }
    table {
        background-color: transparent
    }

    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: #818a91;
        text-align: left;
        caption-side: bottom
    }

    th {
        text-align: left
    }

    label {
        display: inline-block;
        margin-bottom: .5rem
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color
    }

    button,input,select,textarea {
        margin: 0;
        line-height: inherit;
        border-radius: 0
    }

    textarea {
        resize: vertical
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0
    }

    legend {
        display: block;
        width: 100%;
        padding: 0;
        margin-bottom: .5rem;
        font-size: 1.5rem;
        line-height: inherit
    }

    input[type=search] {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
        -webkit-appearance: none
    }

    output {
        display: inline-block
    }

    [hidden] {
        display: none!important
    }

    .img-fluid {
        display: block;
        max-width: 100%;
        height: auto
    }

    .img-rounded {
        border-radius: 0.3rem
    }

    .img-thumbnail {
        padding: 0.25rem;
        line-height: 1.5;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        display: inline-block;
        max-width: 100%;
        height: auto
    }

    .img-circle {
        border-radius: 50%
    }

    .figure {
        display: inline-block
    }

    .figure-img {
        margin-bottom: 0.5rem;
        line-height: 1
    }

    .figure-caption {
        font-size: 90%;
        color: #818a91
    }

    .container {
        margin-left: auto;
        margin-right: auto;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem
    }

    @media (min-width: 544px) {
        .container {
            max-width:576px
        }
    }

    @media (min-width: 768px) {
        .container {
            max-width:720px
        }
    }

    @media (min-width: 993px) {
        .container {
            max-width:940px
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width:1200px
        }
    }

    .container-fluid {
        margin-left: auto;
        margin-right: auto;
    }

    .row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-left: -0.9375rem;
        margin-right: -0.9375rem
    }

    .col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12 {
        position: relative;
        min-height: 1px;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem
    }

    .col-xs-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-xs-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-xs-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-xs-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-xs-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-xs-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-xs-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-xs-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-xs-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-xs-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-xs-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-xs-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .col-xs-pull-0 {
        right: auto
    }

    .col-xs-pull-1 {
        right: 8.33333%
    }

    .col-xs-pull-2 {
        right: 16.66667%
    }

    .col-xs-pull-3 {
        right: 25%
    }

    .col-xs-pull-4 {
        right: 33.33333%
    }

    .col-xs-pull-5 {
        right: 41.66667%
    }

    .col-xs-pull-6 {
        right: 50%
    }

    .col-xs-pull-7 {
        right: 58.33333%
    }

    .col-xs-pull-8 {
        right: 66.66667%
    }

    .col-xs-pull-9 {
        right: 75%
    }

    .col-xs-pull-10 {
        right: 83.33333%
    }

    .col-xs-pull-11 {
        right: 91.66667%
    }

    .col-xs-pull-12 {
        right: 100%
    }

    .col-xs-push-0 {
        left: auto
    }

    .col-xs-push-1 {
        left: 8.33333%
    }

    .col-xs-push-2 {
        left: 16.66667%
    }

    .col-xs-push-3 {
        left: 25%
    }

    .col-xs-push-4 {
        left: 33.33333%
    }

    .col-xs-push-5 {
        left: 41.66667%
    }

    .col-xs-push-6 {
        left: 50%
    }

    .col-xs-push-7 {
        left: 58.33333%
    }

    .col-xs-push-8 {
        left: 66.66667%
    }

    .col-xs-push-9 {
        left: 75%
    }

    .col-xs-push-10 {
        left: 83.33333%
    }

    .col-xs-push-11 {
        left: 91.66667%
    }

    .col-xs-push-12 {
        left: 100%
    }

    .col-xs-offset-0 {
        margin-left: 0%
    }

    .col-xs-offset-1 {
        margin-left: 8.33333%
    }

    .col-xs-offset-2 {
        margin-left: 16.66667%
    }

    .col-xs-offset-3 {
        margin-left: 25%
    }

    .col-xs-offset-4 {
        margin-left: 33.33333%
    }

    .col-xs-offset-5 {
        margin-left: 41.66667%
    }

    .col-xs-offset-6 {
        margin-left: 50%
    }

    .col-xs-offset-7 {
        margin-left: 58.33333%
    }

    .col-xs-offset-8 {
        margin-left: 66.66667%
    }

    .col-xs-offset-9 {
        margin-left: 75%
    }

    .col-xs-offset-10 {
        margin-left: 83.33333%
    }

    .col-xs-offset-11 {
        margin-left: 91.66667%
    }

    .col-xs-offset-12 {
        margin-left: 100%
    }

    @media (min-width: 544px) {
        .col-sm-1 {
            -webkit-box-flex:0;
            -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
            max-width: 8.33333%
        }

        .col-sm-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
            max-width: 16.66667%
        }

        .col-sm-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%
        }

        .col-sm-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
            max-width: 33.33333%
        }

        .col-sm-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
            max-width: 41.66667%
        }

        .col-sm-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%
        }

        .col-sm-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
            max-width: 58.33333%
        }

        .col-sm-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
            max-width: 66.66667%
        }

        .col-sm-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%
        }

        .col-sm-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
            max-width: 83.33333%
        }

        .col-sm-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
            max-width: 91.66667%
        }

        .col-sm-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%
        }

        .col-sm-pull-0 {
            right: auto
        }

        .col-sm-pull-1 {
            right: 8.33333%
        }

        .col-sm-pull-2 {
            right: 16.66667%
        }

        .col-sm-pull-3 {
            right: 25%
        }

        .col-sm-pull-4 {
            right: 33.33333%
        }

        .col-sm-pull-5 {
            right: 41.66667%
        }

        .col-sm-pull-6 {
            right: 50%
        }

        .col-sm-pull-7 {
            right: 58.33333%
        }

        .col-sm-pull-8 {
            right: 66.66667%
        }

        .col-sm-pull-9 {
            right: 75%
        }

        .col-sm-pull-10 {
            right: 83.33333%
        }

        .col-sm-pull-11 {
            right: 91.66667%
        }

        .col-sm-pull-12 {
            right: 100%
        }

        .col-sm-push-0 {
            left: auto
        }

        .col-sm-push-1 {
            left: 8.33333%
        }

        .col-sm-push-2 {
            left: 16.66667%
        }

        .col-sm-push-3 {
            left: 25%
        }

        .col-sm-push-4 {
            left: 33.33333%
        }

        .col-sm-push-5 {
            left: 41.66667%
        }

        .col-sm-push-6 {
            left: 50%
        }

        .col-sm-push-7 {
            left: 58.33333%
        }

        .col-sm-push-8 {
            left: 66.66667%
        }

        .col-sm-push-9 {
            left: 75%
        }

        .col-sm-push-10 {
            left: 83.33333%
        }

        .col-sm-push-11 {
            left: 91.66667%
        }

        .col-sm-push-12 {
            left: 100%
        }

        .col-sm-offset-0 {
            margin-left: 0%
        }

        .col-sm-offset-1 {
            margin-left: 8.33333%
        }

        .col-sm-offset-2 {
            margin-left: 16.66667%
        }

        .col-sm-offset-3 {
            margin-left: 25%
        }

        .col-sm-offset-4 {
            margin-left: 33.33333%
        }

        .col-sm-offset-5 {
            margin-left: 41.66667%
        }

        .col-sm-offset-6 {
            margin-left: 50%
        }

        .col-sm-offset-7 {
            margin-left: 58.33333%
        }

        .col-sm-offset-8 {
            margin-left: 66.66667%
        }

        .col-sm-offset-9 {
            margin-left: 75%
        }

        .col-sm-offset-10 {
            margin-left: 83.33333%
        }

        .col-sm-offset-11 {
            margin-left: 91.66667%
        }

        .col-sm-offset-12 {
            margin-left: 100%
        }
    }

    @media (min-width: 768px) {
        .col-md-1 {
            -webkit-box-flex:0;
            -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
            max-width: 8.33333%
        }

        .col-md-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
            max-width: 16.66667%
        }

        .col-md-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%
        }

        .col-md-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
            max-width: 33.33333%
        }

        .col-md-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
            max-width: 41.66667%
        }

        .col-md-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%
        }

        .col-md-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
            max-width: 58.33333%
        }

        .col-md-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
            max-width: 66.66667%
        }

        .col-md-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%
        }

        .col-md-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
            max-width: 83.33333%
        }

        .col-md-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
            max-width: 91.66667%
        }

        .col-md-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%
        }

        .col-md-pull-0 {
            right: auto
        }

        .col-md-pull-1 {
            right: 8.33333%
        }

        .col-md-pull-2 {
            right: 16.66667%
        }

        .col-md-pull-3 {
            right: 25%
        }

        .col-md-pull-4 {
            right: 33.33333%
        }

        .col-md-pull-5 {
            right: 41.66667%
        }

        .col-md-pull-6 {
            right: 50%
        }

        .col-md-pull-7 {
            right: 58.33333%
        }

        .col-md-pull-8 {
            right: 66.66667%
        }

        .col-md-pull-9 {
            right: 75%
        }

        .col-md-pull-10 {
            right: 83.33333%
        }

        .col-md-pull-11 {
            right: 91.66667%
        }

        .col-md-pull-12 {
            right: 100%
        }

        .col-md-push-0 {
            left: auto
        }

        .col-md-push-1 {
            left: 8.33333%
        }

        .col-md-push-2 {
            left: 16.66667%
        }

        .col-md-push-3 {
            left: 25%
        }

        .col-md-push-4 {
            left: 33.33333%
        }

        .col-md-push-5 {
            left: 41.66667%
        }

        .col-md-push-6 {
            left: 50%
        }

        .col-md-push-7 {
            left: 58.33333%
        }

        .col-md-push-8 {
            left: 66.66667%
        }

        .col-md-push-9 {
            left: 75%
        }

        .col-md-push-10 {
            left: 83.33333%
        }

        .col-md-push-11 {
            left: 91.66667%
        }

        .col-md-push-12 {
            left: 100%
        }

        .col-md-offset-0 {
            margin-left: 0%
        }

        .col-md-offset-1 {
            margin-left: 8.33333%
        }

        .col-md-offset-2 {
            margin-left: 16.66667%
        }

        .col-md-offset-3 {
            margin-left: 25%
        }

        .col-md-offset-4 {
            margin-left: 33.33333%
        }

        .col-md-offset-5 {
            margin-left: 41.66667%
        }

        .col-md-offset-6 {
            margin-left: 50%
        }

        .col-md-offset-7 {
            margin-left: 58.33333%
        }

        .col-md-offset-8 {
            margin-left: 66.66667%
        }

        .col-md-offset-9 {
            margin-left: 75%
        }

        .col-md-offset-10 {
            margin-left: 83.33333%
        }

        .col-md-offset-11 {
            margin-left: 91.66667%
        }

        .col-md-offset-12 {
            margin-left: 100%
        }
    }

    @media (min-width: 993px) {
        .col-lg-1 {
            -webkit-box-flex:0;
            -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
            max-width: 8.33333%
        }

        .col-lg-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
            max-width: 16.66667%
        }

        .col-lg-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%
        }

        .col-lg-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
            max-width: 33.33333%
        }

        .col-lg-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
            max-width: 41.66667%
        }

        .col-lg-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%
        }

        .col-lg-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
            max-width: 58.33333%
        }

        .col-lg-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
            max-width: 66.66667%
        }

        .col-lg-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%
        }

        .col-lg-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
            max-width: 83.33333%
        }

        .col-lg-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
            max-width: 91.66667%
        }

        .col-lg-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%
        }

        .col-lg-pull-0 {
            right: auto
        }

        .col-lg-pull-1 {
            right: 8.33333%
        }

        .col-lg-pull-2 {
            right: 16.66667%
        }

        .col-lg-pull-3 {
            right: 25%
        }

        .col-lg-pull-4 {
            right: 33.33333%
        }

        .col-lg-pull-5 {
            right: 41.66667%
        }

        .col-lg-pull-6 {
            right: 50%
        }

        .col-lg-pull-7 {
            right: 58.33333%
        }

        .col-lg-pull-8 {
            right: 66.66667%
        }

        .col-lg-pull-9 {
            right: 75%
        }

        .col-lg-pull-10 {
            right: 83.33333%
        }

        .col-lg-pull-11 {
            right: 91.66667%
        }

        .col-lg-pull-12 {
            right: 100%
        }

        .col-lg-push-0 {
            left: auto
        }

        .col-lg-push-1 {
            left: 8.33333%
        }

        .col-lg-push-2 {
            left: 16.66667%
        }

        .col-lg-push-3 {
            left: 25%
        }

        .col-lg-push-4 {
            left: 33.33333%
        }

        .col-lg-push-5 {
            left: 41.66667%
        }

        .col-lg-push-6 {
            left: 50%
        }

        .col-lg-push-7 {
            left: 58.33333%
        }

        .col-lg-push-8 {
            left: 66.66667%
        }

        .col-lg-push-9 {
            left: 75%
        }

        .col-lg-push-10 {
            left: 83.33333%
        }

        .col-lg-push-11 {
            left: 91.66667%
        }

        .col-lg-push-12 {
            left: 100%
        }

        .col-lg-offset-0 {
            margin-left: 0%
        }

        .col-lg-offset-1 {
            margin-left: 8.33333%
        }

        .col-lg-offset-2 {
            margin-left: 16.66667%
        }

        .col-lg-offset-3 {
            margin-left: 25%
        }

        .col-lg-offset-4 {
            margin-left: 33.33333%
        }

        .col-lg-offset-5 {
            margin-left: 41.66667%
        }

        .col-lg-offset-6 {
            margin-left: 50%
        }

        .col-lg-offset-7 {
            margin-left: 58.33333%
        }

        .col-lg-offset-8 {
            margin-left: 66.66667%
        }

        .col-lg-offset-9 {
            margin-left: 75%
        }

        .col-lg-offset-10 {
            margin-left: 83.33333%
        }

        .col-lg-offset-11 {
            margin-left: 91.66667%
        }

        .col-lg-offset-12 {
            margin-left: 100%
        }
    }

    @media (min-width: 1200px) {
        .col-xl-1 {
            -webkit-box-flex:0;
            -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
            max-width: 8.33333%
        }

        .col-xl-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
            max-width: 16.66667%
        }

        .col-xl-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%
        }

        .col-xl-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
            max-width: 33.33333%
        }

        .col-xl-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
            max-width: 41.66667%
        }

        .col-xl-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%
        }

        .col-xl-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
            max-width: 58.33333%
        }

        .col-xl-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
            max-width: 66.66667%
        }

        .col-xl-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%
        }

        .col-xl-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
            max-width: 83.33333%
        }

        .col-xl-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
            max-width: 91.66667%
        }

        .col-xl-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%
        }

        .col-xl-pull-0 {
            right: auto
        }

        .col-xl-pull-1 {
            right: 8.33333%
        }

        .col-xl-pull-2 {
            right: 16.66667%
        }

        .col-xl-pull-3 {
            right: 25%
        }

        .col-xl-pull-4 {
            right: 33.33333%
        }

        .col-xl-pull-5 {
            right: 41.66667%
        }

        .col-xl-pull-6 {
            right: 50%
        }

        .col-xl-pull-7 {
            right: 58.33333%
        }

        .col-xl-pull-8 {
            right: 66.66667%
        }

        .col-xl-pull-9 {
            right: 75%
        }

        .col-xl-pull-10 {
            right: 83.33333%
        }

        .col-xl-pull-11 {
            right: 91.66667%
        }

        .col-xl-pull-12 {
            right: 100%
        }

        .col-xl-push-0 {
            left: auto
        }

        .col-xl-push-1 {
            left: 8.33333%
        }

        .col-xl-push-2 {
            left: 16.66667%
        }

        .col-xl-push-3 {
            left: 25%
        }

        .col-xl-push-4 {
            left: 33.33333%
        }

        .col-xl-push-5 {
            left: 41.66667%
        }

        .col-xl-push-6 {
            left: 50%
        }

        .col-xl-push-7 {
            left: 58.33333%
        }

        .col-xl-push-8 {
            left: 66.66667%
        }

        .col-xl-push-9 {
            left: 75%
        }

        .col-xl-push-10 {
            left: 83.33333%
        }

        .col-xl-push-11 {
            left: 91.66667%
        }

        .col-xl-push-12 {
            left: 100%
        }

        .col-xl-offset-0 {
            margin-left: 0%
        }

        .col-xl-offset-1 {
            margin-left: 8.33333%
        }

        .col-xl-offset-2 {
            margin-left: 16.66667%
        }

        .col-xl-offset-3 {
            margin-left: 25%
        }

        .col-xl-offset-4 {
            margin-left: 33.33333%
        }

        .col-xl-offset-5 {
            margin-left: 41.66667%
        }

        .col-xl-offset-6 {
            margin-left: 50%
        }

        .col-xl-offset-7 {
            margin-left: 58.33333%
        }

        .col-xl-offset-8 {
            margin-left: 66.66667%
        }

        .col-xl-offset-9 {
            margin-left: 75%
        }

        .col-xl-offset-10 {
            margin-left: 83.33333%
        }

        .col-xl-offset-11 {
            margin-left: 91.66667%
        }

        .col-xl-offset-12 {
            margin-left: 100%
        }
    }

    .col-xs-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .col-xs-last {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    @media (min-width: 544px) {
        .col-sm-first {
            -webkit-box-ordinal-group:0;
            -ms-flex-order: -1;
            order: -1
        }

        .col-sm-last {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1
        }
    }

    @media (min-width: 768px) {
        .col-md-first {
            -webkit-box-ordinal-group:0;
            -ms-flex-order: -1;
            order: -1
        }

        .col-md-last {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1
        }
    }

    @media (min-width: 993px) {
        .col-lg-first {
            -webkit-box-ordinal-group:0;
            -ms-flex-order: -1;
            order: -1
        }

        .col-lg-last {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1
        }
    }

    @media (min-width: 1200px) {
        .col-xl-first {
            -webkit-box-ordinal-group:0;
            -ms-flex-order: -1;
            order: -1
        }

        .col-xl-last {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1
        }
    }

    .row-xs-top {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start
    }

    .row-xs-center {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .row-xs-bottom {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end
    }

    @media (min-width: 544px) {
        .row-sm-top {
            -webkit-box-align:start;
            -ms-flex-align: start;
            align-items: flex-start
        }

        .row-sm-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .row-sm-bottom {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
        }
    }

    @media (min-width: 768px) {
        .row-md-top {
            -webkit-box-align:start;
            -ms-flex-align: start;
            align-items: flex-start
        }

        .row-md-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .row-md-bottom {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
        }
    }

    @media (min-width: 993px) {
        .row-lg-top {
            -webkit-box-align:start;
            -ms-flex-align: start;
            align-items: flex-start
        }

        .row-lg-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .row-lg-bottom {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
        }
    }

    @media (min-width: 1200px) {
        .row-xl-top {
            -webkit-box-align:start;
            -ms-flex-align: start;
            align-items: flex-start
        }

        .row-xl-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .row-xl-bottom {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
        }
    }

    .col-xs-top {
        -ms-flex-item-align: start;
        align-self: flex-start
    }

    .col-xs-center {
        -ms-flex-item-align: center;
        align-self: center
    }

    .col-xs-bottom {
        -ms-flex-item-align: end;
        align-self: flex-end
    }

    @media (min-width: 544px) {
        .col-sm-top {
            -ms-flex-item-align:start;
            align-self: flex-start
        }

        .col-sm-center {
            -ms-flex-item-align: center;
            align-self: center
        }

        .col-sm-bottom {
            -ms-flex-item-align: end;
            align-self: flex-end
        }
    }

    @media (min-width: 768px) {
        .col-md-top {
            -ms-flex-item-align:start;
            align-self: flex-start
        }

        .col-md-center {
            -ms-flex-item-align: center;
            align-self: center
        }

        .col-md-bottom {
            -ms-flex-item-align: end;
            align-self: flex-end
        }
    }

    @media (min-width: 993px) {
        .col-lg-top {
            -ms-flex-item-align:start;
            align-self: flex-start
        }

        .col-lg-center {
            -ms-flex-item-align: center;
            align-self: center
        }

        .col-lg-bottom {
            -ms-flex-item-align: end;
            align-self: flex-end
        }
    }

    @media (min-width: 1200px) {
        .col-xl-top {
            -ms-flex-item-align:start;
            align-self: flex-start
        }

        .col-xl-center {
            -ms-flex-item-align: center;
            align-self: center
        }

        .col-xl-bottom {
            -ms-flex-item-align: end;
            align-self: flex-end
        }
    }

    .clearfix:after {
        content: "";
        display: table;
        clear: both
    }

    .center-block {
        display: block;
        margin-left: auto;
        margin-right: auto
    }

    .pull-xs-left {
        float: left!important
    }

    .pull-xs-right {
        float: right!important
    }

    .pull-xs-none {
        float: none!important
    }

    @media (min-width: 544px) {
        .pull-sm-left {
            float:left!important
        }

        .pull-sm-right {
            float: right!important
        }

        .pull-sm-none {
            float: none!important
        }
    }

    @media (min-width: 768px) {
        .pull-md-left {
            float:left!important
        }

        .pull-md-right {
            float: right!important
        }

        .pull-md-none {
            float: none!important
        }
    }

    @media (min-width: 993px) {
        .pull-lg-left {
            float:left!important
        }

        .pull-lg-right {
            float: right!important
        }

        .pull-lg-none {
            float: none!important
        }
    }

    @media (min-width: 1200px) {
        .pull-xl-left {
            float:left!important
        }

        .pull-xl-right {
            float: right!important
        }

        .pull-xl-none {
            float: none!important
        }
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0
    }

    .sr-only-focusable:active,.sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        clip: auto
    }

    .invisible {
        visibility: hidden!important
    }

    .text-hide {
        font: "0/0" a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0
    }

    .text-justify {
        text-align: justify!important
    }

    .text-nowrap {
        white-space: nowrap!important
    }

    .text-truncate {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .text-xs-left {
        text-align: left!important
    }

    .text-xs-right {
        text-align: right!important
    }

    .text-xs-center {
        text-align: center!important
    }

    @media (min-width: 544px) {
        .text-sm-left {
            text-align:left!important
        }

        .text-sm-right {
            text-align: right!important
        }

        .text-sm-center {
            text-align: center!important
        }
    }

    @media (min-width: 768px) {
        .text-md-left {
            text-align:left!important
        }

        .text-md-right {
            text-align: right!important
        }

        .text-md-center {
            text-align: center!important
        }
    }

    @media (min-width: 993px) {
        .text-lg-left {
            text-align:left!important
        }

        .text-lg-right {
            text-align: right!important
        }

        .text-lg-center {
            text-align: center!important
        }
    }

    @media (min-width: 1200px) {
        .text-xl-left {
            text-align:left!important
        }

        .text-xl-right {
            text-align: right!important
        }

        .text-xl-center {
            text-align: center!important
        }
    }

    .text-lowercase {
        text-transform: lowercase!important
    }

    .text-uppercase {
        text-transform: uppercase!important
    }

    .text-capitalize {
        text-transform: capitalize!important
    }

    .font-weight-normal {
        font-weight: normal
    }

    .font-weight-bold {
        font-weight: bold
    }

    .font-italic {
        font-style: italic
    }

    .text-muted {
        color: #818a91
    }

    .text-primary {
        color: #0275d8!important
    }

    a.text-primary:focus,a.text-primary:hover {
        color: #025aa5
    }

    .text-success {
        color: #5cb85c!important
    }

    a.text-success:focus,a.text-success:hover {
        color: #449d44
    }

    .text-info {
        color: #5bc0de!important
    }

    a.text-info:focus,a.text-info:hover {
        color: #31b0d5
    }

    .text-warning {
        color: #f0ad4e!important
    }

    a.text-warning:focus,a.text-warning:hover {
        color: #ec971f
    }

    .text-danger {
        color: #d9534f!important
    }

    a.text-danger:focus,a.text-danger:hover {
        color: #c9302c
    }

    .m-x-auto {
        margin-right: auto!important;
        margin-left: auto!important
    }

    .m-a-0 {
        margin: 0 0!important
    }

    .m-t-0 {
        margin-top: 0!important
    }

    .m-r-0 {
        margin-right: 0!important
    }

    .m-b-0 {
        margin-bottom: 0!important
    }

    .m-l-0 {
        margin-left: 0!important
    }

    .m-x-0 {
        margin-right: 0!important;
        margin-left: 0!important
    }

    .m-y-0 {
        margin-top: 0!important;
        margin-bottom: 0!important
    }

    .m-a-1 {
        margin: 1rem 1rem!important
    }

    .m-t-1 {
        margin-top: 1rem!important
    }

    .m-r-1 {
        margin-right: 1rem!important
    }

    .m-b-1 {
        margin-bottom: 1rem!important
    }

    .m-l-1 {
        margin-left: 1rem!important
    }

    .m-x-1 {
        margin-right: 1rem!important;
        margin-left: 1rem!important
    }

    .m-y-1 {
        margin-top: 1rem!important;
        margin-bottom: 1rem!important
    }

    .m-a-2 {
        margin: 1.5rem 1.5rem!important
    }

    .m-t-2 {
        margin-top: 1.5rem!important
    }

    .m-r-2 {
        margin-right: 1.5rem!important
    }

    .m-b-2 {
        margin-bottom: 1.5rem!important
    }

    .m-l-2 {
        margin-left: 1.5rem!important
    }

    .m-x-2 {
        margin-right: 1.5rem!important;
        margin-left: 1.5rem!important
    }

    .m-y-2 {
        margin-top: 1.5rem!important;
        margin-bottom: 1.5rem!important
    }

    .m-a-3 {
        margin: 3rem 3rem!important
    }

    .m-t-3 {
        margin-top: 3rem!important
    }

    .m-r-3 {
        margin-right: 3rem!important
    }

    .m-b-3 {
        margin-bottom: 3rem!important
    }

    .m-l-3 {
        margin-left: 3rem!important
    }

    .m-x-3 {
        margin-right: 3rem!important;
        margin-left: 3rem!important
    }

    .m-y-3 {
        margin-top: 3rem!important;
        margin-bottom: 3rem!important
    }

    .p-a-0 {
        padding: 0 0!important
    }

    .p-t-0 {
        padding-top: 0!important
    }

    .p-r-0 {
        padding-right: 0!important
    }

    .p-b-0 {
        padding-bottom: 0!important
    }

    .p-l-0 {
        padding-left: 0!important
    }

    .p-x-0 {
        padding-right: 0!important;
        padding-left: 0!important
    }

    .p-y-0 {
        padding-top: 0!important;
        padding-bottom: 0!important
    }

    .p-a-1 {
        padding: 1rem 1rem!important
    }

    .p-t-1 {
        padding-top: 1rem!important
    }

    .p-r-1 {
        padding-right: 1rem!important
    }

    .p-b-1 {
        padding-bottom: 1rem!important
    }

    .p-l-1 {
        padding-left: 1rem!important
    }

    .p-x-1 {
        padding-right: 1rem!important;
        padding-left: 1rem!important
    }

    .p-y-1 {
        padding-top: 1rem!important;
        padding-bottom: 1rem!important
    }

    .p-a-2 {
        padding: 1.5rem 1.5rem!important
    }

    .p-t-2 {
        padding-top: 1.5rem!important
    }

    .p-r-2 {
        padding-right: 1.5rem!important
    }

    .p-b-2 {
        padding-bottom: 1.5rem!important
    }

    .p-l-2 {
        padding-left: 1.5rem!important
    }

    .p-x-2 {
        padding-right: 1.5rem!important;
        padding-left: 1.5rem!important
    }

    .p-y-2 {
        padding-top: 1.5rem!important;
        padding-bottom: 1.5rem!important
    }

    .p-a-3 {
        padding: 3rem 3rem!important
    }

    .p-t-3 {
        padding-top: 3rem!important
    }

    .p-r-3 {
        padding-right: 3rem!important
    }

    .p-b-3 {
        padding-bottom: 3rem!important
    }

    .p-l-3 {
        padding-left: 3rem!important
    }

    .p-x-3 {
        padding-right: 3rem!important;
        padding-left: 3rem!important
    }

    .p-y-3 {
        padding-top: 3rem!important;
        padding-bottom: 3rem!important
    }

    .pos-f-t {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030
    }

    .hidden-xs-up {
        display: none!important
    }

    @media (max-width: 543px) {
        .hidden-xs-down {
            display:none!important
        }
    }

    @media (min-width: 544px) {
        .hidden-sm-up {
            display:none!important
        }
    }

    @media (max-width: 767px) {
        .hidden-sm-down {
            display:none!important
        }
    }

    @media (min-width: 768px) {
        .hidden-md-up {
            display:none!important
        }
    }

    @media (max-width: 992px) {
        .hidden-md-down {
            display:none!important
        }
    }

    @media (min-width: 993px) {
        .hidden-lg-up {
            display:none!important
        }
    }

    @media (max-width: 1199px) {
        .hidden-lg-down {
            display:none!important
        }
    }

    @media (min-width: 1200px) {
        .hidden-xl-up {
            display:none!important
        }
    }

    .hidden-xl-down {
        display: none!important
    }

    .visible-print-block {
        display: none!important
    }

    @media print {
        .visible-print-block {
            display: block!important
        }
    }

    .visible-print-inline {
        display: none!important
    }

    @media print {
        .visible-print-inline {
            display: inline!important
        }
    }

    .visible-print-inline-block {
        display: none!important
    }

    @media print {
        .visible-print-inline-block {
            display: inline-block!important
        }
    }

    @media print {
        .hidden-print {
            display: none!important
        }
    }

    .tag {
        position: relative
    }

    .tag:after,.tag:before {
        content: '';
        display: inline-block
    }

    .heading,.project,.project__background {
        position: relative
    }

    .heading:before,.project:before,.project__background:before {
        content: '';
        display: inline-block
    }
    .heading__descript {
        margin-top: 10px;
        text-align: left;
    }
    .binhhp,.binhhp__feet,.binhhp__hand {
        position: relative
    }

    .binhhp:after,.binhhp__feet:after,.binhhp__hand:after {
        content: '';
        display: inline-block
    }

    .form__label svg,.section--outcomes .section__background {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%)
    }

    .binhhp__hand {
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    .preload {
        display: none;
        opacity: 0
    }

    .m-b-0-xs-up {
        margin-bottom: 0!important
    }

    @media (max-width: 543px) {
        .m-b-0-xs-down {
            margin-bottom:0!important
        }
    }

    @media (min-width: 544px) {
        .m-b-0-sm-up {
            margin-bottom:0!important
        }
    }

    @media (max-width: 767px) {
        .m-b-0-sm-down {
            margin-bottom:0!important
        }
    }

    @media (min-width: 768px) {
        .m-b-0-md-up {
            margin-bottom:0!important
        }
    }

    @media (max-width: 992px) {
        .m-b-0-md-down {
            margin-bottom:0!important
        }
    }

    @media (min-width: 993px) {
        .m-b-0-lg-up {
            margin-bottom:0!important
        }
    }

    @media (max-width: 1199px) {
        .m-b-0-lg-down {
            margin-bottom:0!important
        }
    }

    @media (min-width: 1200px) {
        .m-b-0-xl-up {
            margin-bottom:0!important
        }
    }

    .m-b-0-xl-down {
        margin-bottom: 0!important
    }

    .m-t-0-xs-up {
        margin-top: 0!important
    }

    @media (max-width: 543px) {
        .m-t-0-xs-down {
            margin-top:0!important
        }
    }

    @media (min-width: 544px) {
        .m-t-0-sm-up {
            margin-top:0!important
        }
    }

    @media (max-width: 767px) {
        .m-t-0-sm-down {
            margin-top:0!important
        }
    }

    @media (min-width: 768px) {
        .m-t-0-md-up {
            margin-top:0!important
        }
    }

    @media (max-width: 992px) {
        .m-t-0-md-down {
            margin-top:0!important
        }
    }

    @media (min-width: 993px) {
        .m-t-0-lg-up {
            margin-top:0!important
        }
    }

    @media (max-width: 1199px) {
        .m-t-0-lg-down {
            margin-top:0!important
        }
    }

    @media (min-width: 1200px) {
        .m-t-0-xl-up {
            margin-top:0!important
        }
    }

    .m-t-0-xl-down {
        margin-top: 0!important
    }

    .p-b-0-xs-up {
        padding-bottom: 0!important
    }

    @media (max-width: 543px) {
        .p-b-0-xs-down {
            padding-bottom:0!important
        }
    }

    @media (min-width: 544px) {
        .p-b-0-sm-up {
            padding-bottom:0!important
        }
    }

    @media (max-width: 767px) {
        .p-b-0-sm-down {
            padding-bottom:0!important
        }
    }

    @media (min-width: 768px) {
        .p-b-0-md-up {
            padding-bottom:0!important
        }
    }

    @media (max-width: 992px) {
        .p-b-0-md-down {
            padding-bottom:0!important
        }
    }

    @media (min-width: 993px) {
        .p-b-0-lg-up {
            padding-bottom:0!important
        }
    }

    @media (max-width: 1199px) {
        .p-b-0-lg-down {
            padding-bottom:0!important
        }
    }

    @media (min-width: 1200px) {
        .p-b-0-xl-up {
            padding-bottom:0!important
        }
    }

    .p-b-0-xl-down {
        padding-bottom: 0!important
    }

    .p-t-0-xs-up {
        padding-top: 0!important
    }

    @media (max-width: 543px) {
        .p-t-0-xs-down {
            padding-top:0!important
        }
    }

    @media (min-width: 544px) {
        .p-t-0-sm-up {
            padding-top:0!important
        }
    }

    @media (max-width: 767px) {
        .p-t-0-sm-down {
            padding-top:0!important
        }
    }

    @media (min-width: 768px) {
        .p-t-0-md-up {
            padding-top:0!important
        }
    }

    @media (max-width: 992px) {
        .p-t-0-md-down {
            padding-top:0!important
        }
    }

    @media (min-width: 993px) {
        .p-t-0-lg-up {
            padding-top:0!important
        }
    }

    @media (max-width: 1199px) {
        .p-t-0-lg-down {
            padding-top:0!important
        }
    }

    @media (min-width: 1200px) {
        .p-t-0-xl-up {
            padding-top:0!important
        }
    }

    .p-t-0-xl-down {
        padding-top: 0!important
    }

    body {
        overflow-x: hidden;
        background-color: #F5F5F5
    }

    #content {
        position: relative;;
    }

    @media (min-width: 768px) {
        #content {
            width:calc(100% - 200px);
            -webkit-transform: translateX(200px);
            -ms-transform: translateX(200px);
            transform: translateX(200px)
        }
    }

    .contact {
        display: block;
        -webkit-transform: translateY(-2px);
        -ms-transform: translateY(-2px);
        transform: translateY(-2px);
        line-height: 28px;
        line-height: 1.75rem;
        margin: 0 0 20px;
        margin: 0 0 1.25rem
    }

    [class*=col-] {
        position: relative;
        min-width: 0
    }

    .col-centered {
        float: none;
        margin: 0 auto
    }

    @media (max-width: 767px) {
        .col-xs-centered {
            float:none;
            margin: 0 auto
        }
    }

    @media (min-width: 34em) and (max-width:48em) {
        .col-sm-centered {
            float:none;
            margin: 0 auto
        }
    }

    @media (min-width: 48em) and (max-width:62em) {
        .col-md-centered {
            float:none;
            margin: 0 auto
        }
    }

    @media (min-width: 62em) and (max-width:75em) {
        .col-lg-centered {
            float:none;
            margin: 0 auto
        }
    }

    @media (min-width: 75em) {
        .col-xl-centered {
            float:none;
            margin: 0 auto
        }
    }

    .row-thin {
        margin-left: -5px;
        margin-left: -0.3125rem;
        margin-right: -5px;
        margin-right: -0.3125rem
    }

    .row-thin [class*=col-] {
        padding-left: 5px;
        padding-left: 0.3125rem;
        padding-right: 5px;
        padding-right: 0.3125rem
    }

    @media (min-width: 993px) {
        .row-thin {
            margin-left:-10px;
            margin-left: -0.625rem;
            margin-right: -10px;
            margin-right: -0.625rem
        }

        .row-thin [class*=col-] {
            padding-left: 10px;
            padding-left: 0.625rem;
            padding-right: 10px;
            padding-right: 0.625rem
        }
    }

    .container-fluid {
        max-width: 1200px
    }

    body {
        font-family: "ff-tisa-web-pro", Palatino, " Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
        font-size: 18px;
        font-size: 1.125rem;
        line-height: 30px;
        line-height: 1.875rem
    }

    .wf-active .h1,.wf-active .h2,.wf-active h1,.wf-active h2 {
        letter-spacing: 0
    }

    .h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
        display: block;
        font-weight: normal;
        color: #000;
        -webkit-transition: 0.2s color linear;
        -o-transition: 0.2s color linear;
        transition: 0.2s color linear
    }

    .h1,.h2,h1,h2 {
        margin: 0 0 20px;
        margin: 0 0 1.25rem
    }

    .h3,.h4,.h5,.h6,h3,h4,h5,h6 {
        margin: 0 0 10px;
        margin: 0 0 0.625rem
    }

    .h1,h1 {
        font-size: 28px;
        font-size: 1.75rem;
        line-height: 28px;
        line-height: 1.75rem
    }

    @media (min-width: 544px) {
        .h1,h1 {
            font-size:42px;
            font-size: 2.625rem;
            line-height: 42px;
            line-height: 2.625rem
        }
    }

    .h2,h2 {
        font-size: 28px;
        font-size: 1.75rem;
        line-height: 28px;
        line-height: 1.75rem
    }

    @media (min-width: 544px) {
        .h2,h2 {
            font-size:32px;
            font-size: 2rem;
            line-height: 32px;
            line-height: 2rem
        }
    }

    .h3,h3 {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 24px;
        line-height: 1.5rem
    }

    @media (min-width: 544px) {
        .h3,h3 {
            font-size:28px;
            font-size: 1.75rem;
            line-height: 28px;
            line-height: 1.75rem
        }
    }

    .h4,h4 {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 24px;
        line-height: 1.5rem
    }

    .h5,h5 {
        font-size: 16px;
        font-size: 1rem;
        line-height: 17.6px;
        line-height: 1.1rem
    }

    .h6,h6 {
        font-family: "ff-tisa-web-pro", Palatino, " Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
        font-size: 0.625rem;
        line-height: 17.5px;
        line-height: 1.09375rem
    }

    small {
        font-size: 12px;
        font-size: 0.75rem;
        line-height: 21px;
        line-height: 1.3125rem
    }

    a {
        -webkit-transition: 0.2s color linear;
        -o-transition: 0.2s color linear;
        transition: 0.2s color linear
    }

    a .h1,a .h2,a .h3,a .h4,a .h5,a .h6,a h1,a h2,a h3,a h4,a h5,a h6 {
        display: inline-block;
        color: #212529
    }

    a:active,a:focus,a:hover,a:visited {
        text-decoration: none
    }

    a:hover .h1,a:hover .h2,a:hover .h3,a:hover .h4,a:hover .h5,a:hover .h6,a:hover h1,a:hover h2,a:hover h3,a:hover h4,a:hover h5,a:hover h6 {
        color: #7851a9
    }

    ol,p,ul {
        margin: 0 0 30px;
        margin: 0 0 1.875rem
    }

    ol,ul {
        padding: 0
    }

    svg {
        display: inline-block;
        margin: 0 auto
    }
    .form__control {
        position: relative;
        max-height: 150px;
        margin: 0 0 20px;
        margin: 0 0 1.25rem
    }

    .form__label {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 45px;
        height: 45px;
        margin: 0;
        background-color: #000;
        -webkit-transition: background-color 0.5s;
        -o-transition: background-color 0.5s;
        transition: background-color 0.5s
    }

    .form__label svg {
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: scale(0.75) translateX(-50%) translateY(-50%);
        -ms-transform: scale(0.75) translateX(-50%) translateY(-50%);
        transform: scale(0.75) translateX(-50%) translateY(-50%)
    }

    .form__icon {
        width: 30px;
        height: 30px
    }

    .form__input,.form__textarea {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0;
        width: 100%;
        border: 1px solid #000;
        -webkit-transition: border 0.5s;
        -o-transition: border 0.5s;
        transition: border 0.5s;
        padding: 10px 10px 10px 55px;
        padding: 0.625rem 0.625rem 0.625rem 3.4375rem;
        font-size: 16px;
        font-size: 1rem;
        line-height: 17.6px;
        line-height: 1.1rem
    }

    .form__input:focus,.form__textarea:focus {
        border: 1px solid #7851a9;
        outline: none
    }

    .form__input:focus+.form__label,.form__textarea:focus+.form__label {
        background-color: #7851a9
    }

    .form__input {
        height: 45px
    }

    .form__textarea {
        height: 150px;
        resize: none
    }

    .form__submit {
        font-weight: normal;
        color: #FFF;
        text-transform: uppercase;
        border: none;
        outline: none;
        background-color: #000;
        -webkit-transition: background 0.5s;
        -o-transition: background 0.5s;
        transition: background 0.5s;
        padding: 10px 30px;
        padding: 0.625rem 1.875rem
    }

    .form__submit:hover {
        background-color: #7851a9
    }

    .form__error {
        display: block
    }
    .cover {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        height: 100%;
        width: 100%;
        background-color: #FFF
    }

    .section {
        position: relative;
        padding: 50px 0;
    }
    .section--bg{
        padding: 30px;
    }
    .section img {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .section__logo {
        display: block;
        max-width: 150px;
        margin: 0 auto;
        margin: 50px auto 0;
        margin: 3.125rem auto 0
    }

    @media (min-width: 768px) {
        .section__logo {
            margin:10px auto 30px;
            margin: 0.625rem auto 1.875rem
        }
    }

    @media screen and (max-width: 768px){
        .container-fluid .col-md-4{
            margin-top: 20px;
            width: 100%;
        }
    }

    .section--dark {
        background-color: rgba(0, 0, 0, 0.02)!important
    }

    .section--darker {
        background-color: rgba(0, 0, 0, 0.05)!important
    }

    .section--darkest {
        background-color: rgba(0, 0, 0, 0.07)!important
    }

    @media (min-width: 544px) {
        .section--work .section__row .col-sm-8 {
            margin-bottom:10px;
            margin-bottom: 0.625rem
        }
    }

    @media (min-width: 993px) {
        .section--work .section__row .col-sm-8 {
            margin-bottom:20px;
            margin-bottom: 1.25rem
        }
    }

    .section--more-work {
        padding: 30px 0 75px;
        padding: 1.875rem 0 4.6875rem
    }

    .section--showcase {
        padding: 0;
        margin: 50px 0 0;
        margin: 3.125rem 0 0
    }

    .section--brief {
        padding: 75px 0 55px;
        padding: 4.6875rem 0 3.4375rem
    }

    @media (min-width: 993px) {
        .section--brief {
            padding:75px 0 55px;
            padding: 4.6875rem 0 3.4375rem
        }
    }

    @media (max-width: 767px) {
        .section--brief {
            padding-top:30px;
            padding-top: 1.875rem
        }
    }

    .section--brief .section__profile {
        text-align: center;
        margin: 0 0 50px 0;
        margin: 0 0 3.125rem 0
    }

    .section--brief .section__link {
        display: inline-block
    }

    .section--brief .section__link .arrow {
        -webkit-transition: -webkit-transform 0.5s ease-in-out;
        transition: -webkit-transform 0.5s ease-in-out;
        -o-transition: transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out
    }

    .section--brief .section__link:hover {
        text-decoration: none
    }

    .section--brief .section__link:hover .arrow {
        -webkit-transform: translate(2px, -2px);
        -ms-transform: translate(2px, -2px);
        transform: translate(2px, -2px)
    }

    .section--brief .section__tags {
        margin: 0 0 0 10px;
        margin: 0 0 0 0.625rem
    }

    @media (min-width: 768px) {
        .section--brief .section__tags {
            padding:0 50px 0 0;
            padding: 0 3.125rem 0 0
        }
    }

    .section--screenshots img {
        display: block;
        max-width: 100%;
        border: 1px solid #CCC;
        margin: 0 0 30px;
        margin: 0 0 1.875rem
    }

    @media (min-width: 993px) {
        .section--screenshots img {
            margin:0 0 50px;
            margin: 0 0 3.125rem
        }
    }

    .section--outcomes .section__background {
        z-index: 0
    }

    @media (min-width: 768px) {
        .section--outcomes .section__background {
            width:130%;
            height: auto;
            top: 45%
        }
    }

    @media (min-width: 1200px) {
        .section--big-head-mode {
            background-size:contain
        }
    }

    .section--pepakura {
        padding: 75px 0 0;
        padding: 4.6875rem 0 0
    }

    .section--pepakura__bench {
        position: relative;
        top: -75px;
        margin: 0 auto
    }

    @media (min-width: 1200px) {
        .section--pepakura__bench {
            left:-50px
        }
    }

    .section--good-people ul {
        display: inline-block;
        position: relative;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        list-style: none
    }

    .section--good-people ul li {
        font-size: 12px;
        font-size: 0.75rem;
        line-height: 21px;
        line-height: 1.3125rem;
        padding: 5px 0;
        padding: 0.3125rem 0
    }

    .heading, .col-lg-8, .about--me__image{
        animation: heading 2s normal cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    @keyframes heading {
        from{opacity: 0; transform: translateY(100%);}
        to{opacity: 1;transform: translateY(0%);}
    }

    .heading:before {
        position: absolute;
        top: 75%;
        left: 8%;
        z-index: 0;
        height: 1px;
        width: 200px;
        background-color: #EEE;
        -webkit-transform: translateX(-50%) rotate(25deg);
        -ms-transform: translateX(-50%) rotate(25deg);
        transform: translateX(-50%) rotate(25deg)
    }

    @media (min-width: 544px) {
        .heading:before {
            -webkit-transform:translateX(-50%) rotate(35deg);
            -ms-transform: translateX(-50%) rotate(35deg);
            transform: translateX(-50%) rotate(35deg)
        }
    }

    .heading__subtitle,.heading__title {
        position: relative;
        z-index: 1;
        text-align: left;
        font-size: 60px;
        font-weight: 600;
        font-family: Inter,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    }

    @media screen and (max-width: 766px) {
        .heading__title{
            font-size: 26px;
        }
        .section--bg{
            padding-bottom: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        p{
            margin-bottom: 10px;
            font-size: 17px;
        }
    }
    .heading__title {
        margin: 0 0 5px;
        margin: 0 0 0.3125rem
    }
    .skrollable {
        padding-bottom: 50px;
    }
    .subheading {
        text-align: center;
        margin: 0 0 30px;
        margin: 0 0 1.875rem
    }

    @media (min-width: 993px) {
        .subheading {
            margin:0 0 50px;
            margin: 0 0 3.125rem
        }
    }

    @media (min-width: 993px) {
        .subheading--left,.subheading--right {
            margin:0 0 30px;
            margin: 0 0 1.875rem
        }
    }

    .subheading--left {
        text-align: left
    }

    .subheading--right {
        text-align: right
    }

    .project {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        height: 33.3vw;
        max-height: 235px;
        width: 100%;
        overflow: hidden;
        margin: 0 auto 10px;
        margin: 0 auto 0.625rem
    }

    @media (min-width: 544px) {
        .col-sm-8 .project {
            position:absolute;
            width: calc(100% - 10px);
            height: 100%;
            padding: 0
        }

        .col-sm-4 .project {
            height: 21.5vw;
            width: 100%;
            overflow: hidden
        }

        .col-sm-4 .project br {
            display: none!important
        }
    }

    @media (min-width: 544px) and (min-width:768px) {
        .col-sm-4 .project {
            height:15.5vw
        }
    }

    @media (min-width: 993px) {
        .project {
            margin:0 0 20px;
            margin: 0 0 1.25rem
        }

        .col-sm-8 .project {
            width: calc(100% - 20px)
        }
    }

    @media (min-width: 1200px) {
        .project {
            background-size:initial
        }
    }

    .project:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(97, 95, 95, 0.534);
        opacity: 0.6
    }

    .project:hover * {
        color: #FFF
    }

    @media (min-width: 544px) {
        .project:hover .project__background {
            -webkit-transform:translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
            -webkit-transition: 500ms -webkit-transform ease-in-out;
            transition: 500ms -webkit-transform ease-in-out;
            -o-transition: 500ms transform ease-in-out;
            transition: 500ms transform ease-in-out;
            transition: 500ms transform ease-in-out, 500ms -webkit-transform ease-in-out
        }
    }

    @media (min-width: 544px) {
        .project:hover .project__description {
            opacity:1;
            -webkit-transition: 500ms opacity ease-in-out 250ms;
            -o-transition: 500ms opacity ease-in-out 250ms;
            transition: 500ms opacity ease-in-out 250ms
        }
    }

    .project__background {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        height: 100%;
        width: 100%;
        background-color: #7851a9;
        -webkit-transform: translateX(100%) translateX(350px);
        -ms-transform: translateX(100%) translateX(350px);
        transform: translateX(100%) translateX(350px);
        -webkit-transition: 500ms -webkit-transform ease-in-out 100ms;
        transition: 500ms -webkit-transform ease-in-out 100ms;
        -o-transition: 500ms transform ease-in-out 100ms;
        transition: 500ms transform ease-in-out 100ms;
        transition: 500ms transform ease-in-out 100ms, 500ms -webkit-transform ease-in-out 100ms
    }

    .project__background:before {
        position: absolute;
        left: 0;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 350px 350px 0;
        border-color: transparent #7851a9 transparent transparent;
        -webkit-transform: translateX(-100%) translateY(-50px);
        -ms-transform: translateX(-100%) translateY(-50px);
        transform: translateX(-100%) translateY(-50px)
    }

    .project__logo {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: scale(0.35) translateX(-142.85714%) translateY(-142.85714%);
        -ms-transform: scale(0.35) translateX(-142.85714%) translateY(-142.85714%);
        transform: scale(0.35) translateX(-142.85714%) translateY(-142.85714%);
        opacity: 1
    }

    @media (min-width: 544px) {
        .project__logo {
            -webkit-transform:scale(0.35) translateX(-142.85714%) translateY(-142.85714%);
            -ms-transform: scale(0.35) translateX(-142.85714%) translateY(-142.85714%);
            transform: scale(0.35) translateX(-142.85714%) translateY(-142.85714%)
        }
    }

    @media (min-width: 993px) {
        .project__logo {
            -webkit-transform:scale(0.45) translateX(-111.11111%) translateY(-111.11111%);
            -ms-transform: scale(0.45) translateX(-111.11111%) translateY(-111.11111%);
            transform: scale(0.45) translateX(-111.11111%) translateY(-111.11111%)
        }
    }

    @media (min-width: 1200px) {
        .project__logo {
            -webkit-transform:scale(0.5) translateX(-100%) translateY(-100%);
            -ms-transform: scale(0.5) translateX(-100%) translateY(-100%);
            transform: scale(0.5) translateX(-100%) translateY(-100%)
        }
    }

    .col-sm-8 .project__logo {
        left: 50%
    }

    @media (min-width: 544px) {
        .col-sm-8 .project__logo {
            left:25%
        }
    }

    .project__description {
        opacity: 0;
        width: 100%;
        -webkit-transition: 500ms opacity ease-in-out;
        -o-transition: 500ms opacity ease-in-out;
        transition: 500ms opacity ease-in-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 99999;
        padding: 0 20px;
        padding: 0 1.25rem
    }

    @media (min-width: 768px) {
        .project__description {
            display:block;
            opacity: 0
        }
    }

    .project__description * {
        color: #FFF
    }

    .project__link,.project__title {
        margin: 0
    }

    .project__title {
        display: none
    }

    @media (min-width: 993px) {
        .project__title {
            display:block
        }
    }

    .project__caption {
        display: none;
        margin: 5px 0 15px;
        margin: 0.3125rem 0 0.9375rem
    }

    @media (min-width: 993px) {
        .project__caption {
            display:block;
            margin: 5px 0 0;
            margin: 0.3125rem 0 0
        }
    }

    @media (min-width: 1200px) {
        .project__caption {
            margin:10px 0 15px;
            margin: 0.625rem 0 0.9375rem
        }
    }

    .project__link {
        display: inline-block;
        font-family: "din-condensed-web", "Trebuchet MS", "Arial Narrow", Arial, sans-serif;
        border: 2px solid #CCC;
        text-transform: uppercase;
        padding: 7px 15px;
        padding: 0.4375rem 0.9375rem
    }

    @media (min-width: 993px) {
        .project__link {
            display:none
        }
    }

    @media (min-width: 1200px) {
        .project__link {
            display:inline-block
        }
    }

    .project--foodsters {
        background-position: right center
    }

    @media (min-width: 1200px) {
        .col-sm-4 .project--foodsters {
            background-position:-325px center
        }
    }

    .project--web-directions br {
        display: none!important
    }

    .project--big-head-mode {
        background-position: center right
    }

    .twitter {
        margin: 10px 0 20px;
        margin: 0.625rem 0 1.25rem
    }

    .twitter .twitter-tweet {
        margin: 0 auto 20px!important;
        margin: 0 auto 1.25rem!important
    }

    @media (min-width: 993px) {
        .twitter .twitter-tweet {
            margin:0 0 20px!important;
            margin: 0 0 1.25rem!important
        }
    }

    .binhhp {
        display: none;
        overflow: hidden;
        height: 425px;
        width: 100%
    }

    @media (min-width: 993px) {
        .binhhp {
            display:block
        }
    }

    .binhhp:after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.045;
        z-index: 1
    }

    .gif {
        margin: 0 0 20px;
        margin: 0 0 1.25rem
    }

    @media (min-width: 993px) {
        .gif {
            margin:0 0 30px;
            margin: 0 0 1.875rem
        }
    }

    .figure {
        display: block;
        margin: 0 auto 30px;
        margin: 0 auto 1.875rem
    }

    @media (min-width: 993px) {
        .figure {
            margin:0 auto 50px;
            margin: 0 auto 3.125rem
        }
    }

    .figure__caption {
        text-align: center;
        font-size: 12px;
        font-size: 0.75rem;
        line-height: 21px;
        line-height: 1.3125rem
    }

    .figure__image {
        display: block;
        max-width: 100%;
        -webkit-transition: 500ms opacity ease-in-out;
        -o-transition: 500ms opacity ease-in-out;
        transition: 500ms opacity ease-in-out;
        border: 1px solid #CCC;
        margin: 5px auto 10px;
        margin: 0.3125rem auto 0.625rem
    }

    .figure__image img {
        max-width: 100%
    }

    .figure__image--is-loaded {
        opacity: 1!important
    }

    .figure--gif .preload {
        display: block
    }

    @media (max-width: 992px) {
        .figure--checklist img {
            max-width:315px
        }
    }

    .blockquote {
        border-left: 1px solid #ddd;
        padding: 0 0 0 30px;
        padding: 0 0 0 1.875rem;
        margin: 0 0 30px 0;
        margin: 0 0 1.875rem 0
    }

    @media (min-width: 993px) {
        .blockquote {
            margin:0 0 50px 0;
            margin: 0 0 3.125rem 0
        }
    }

    .blockquote__quote {
        font-style: italic;
        color: #999;
        margin: 0
    }

    .showcase {
        position: relative;
        left: 50%;
        height: 175px;
        width: 1250px;
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: scale(0.25) translateX(-50%);
        -ms-transform: scale(0.25) translateX(-50%);
        transform: scale(0.25) translateX(-50%)
    }

    @media (min-width: 544px) {
        .showcase {
            height:280px;
            -webkit-transform: scale(0.4) translateX(-50%);
            -ms-transform: scale(0.4) translateX(-50%);
            transform: scale(0.4) translateX(-50%)
        }
    }

    @media (min-width: 993px) {
        .showcase {
            height:420px;
            -webkit-transform: scale(0.6) translateX(-50%);
            -ms-transform: scale(0.6) translateX(-50%);
            transform: scale(0.6) translateX(-50%)
        }
    }

    @media (min-width: 93.75em) {
        .showcase {
            height:700px;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%)
        }
    }

    .showcase__sprite {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top
    }

    .showcase__image {
        position: absolute;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        background-color: #FFF;
        image-rendering: -webkit-optimize-contrast
    }

    .showcase__image--laptop {
        top: 37px;
        left: 291px
    }

    .showcase__image--tablet {
        top: 111px;
        left: 50px
    }

    .showcase__image--mobile {
        top: 373px;
        left: 309px
    }

    .show-project{
        background-repeat: no-repeat;
        background-position: center;
    }
`;