import styled from 'styled-components'

export const FacePersonalWrapper = styled.div`
    #face{
    display: flex;
    flex-wrap: wrap;   
}
.section--face__personal{
    width: calc(100% - 200px);
    transform: translateX(200px);
}
.personal{
    width: 525px;
    height: 600px;
    text-align: center;
    position: absolute;
    top: 0;
}
`