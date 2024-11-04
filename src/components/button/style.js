import styled from "styled-components";

export const buttonBody = styled.button`
border: none;
color: white;
border: ${({ border }) => border};
background-color: ${({ backgroundColor }) => backgroundColor || '#F9AC54'};
padding: .7rem 1.5rem;
border-radius: 5px;
font-size: 1rem;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  display: ${({ display }) => display || 'block'};
  justify-content: ${({ justContent }) => justContent || 'space-between'};
  align-items: ${({ alignItem }) => alignItem || 'stretch'};
  padding: ${({padding}) => padding || '.7rem 1.5rem'};
  gap: ${({gap}) => gap};
  flex-direction: ${({flexDirection}) => flexDirection || 'column'};

&:hover{
background-color: ${({hoverColor}) => hoverColor || '#D79447'};
transition: background-color 0.3s ease, transform 0.3s ease;
cursor: pointer;
}
`