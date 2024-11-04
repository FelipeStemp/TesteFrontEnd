import styled from "styled-components";

export const navBody = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
gap: 10vw;
align-items: center;
position: absolute;
top: 20px;
`

export const navOption = styled.nav`
display: flex;
color: white;
gap: 2vw;

li{
    &:hover{
        color: #F9AC54;
        cursor: pointer;
    }
}
`