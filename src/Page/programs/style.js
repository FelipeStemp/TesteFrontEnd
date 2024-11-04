import styled from "styled-components";

export const bodyProgram = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
margin: 10vw 0;
`

export const divTitulo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 60vw;
margin-bottom: 3vw;
`

export const divNav = styled.div`
display: flex;
gap: 20px;
`

export const divCards= styled.div`
width: 60vw;
display: flex;
justify-content: space-between;

`
export const buttonCard = styled.div`
display: flex;
align-items: center;
gap: 0.3vw;
width: fit-content;
&:hover{
color: #D79447;
transition: color 0.3s ease, transform 0.3s ease;
cursor: pointer;
}
`