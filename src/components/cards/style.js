import styled from "styled-components";

export const CardBody = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  display: ${({ display }) => display || 'block'};
  justify-content: ${({ justContent }) => justContent || 'space-between'};
  align-items: ${({ alignItem }) => alignItem || 'stretch'};
  padding: ${({padding}) => padding};
  gap: ${({gap}) => gap};
  flex-direction: ${({flexDirection}) => flexDirection || 'column'};
  border: 1px solid transparent;
  background-color: #1F2125;
  border-radius: 5px;
  &:hover{
    background-color: #35373B;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    border: 1px solid #F9AC54;
  }
`;