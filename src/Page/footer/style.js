import styled from "styled-components";

export const footerBody = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: start;
margin: 4vw 0 ;
gap: 3vw;
`

export const contatos = styled.div`
display: flex;
flex-direction: column;
gap: 1.5vw;
align-items: left;
`
export const socialMedia = styled.div`
display: flex;
gap: 1rem;
`

export const infos = styled.div`
display: flex;
flex-direction: column;

li{
    margin-bottom: 1vw;
    &:hover {
        color:#F9AC54;
        cursor: pointer;
    }
}
h3{
    margin: 0;
    margin-bottom: 2vw;
}
`

export const divInfos = styled.div`
display: flex;
gap: 10rem;
`