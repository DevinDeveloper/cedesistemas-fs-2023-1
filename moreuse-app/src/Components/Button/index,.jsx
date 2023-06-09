import styled from "styled-components"

const ButtonStyled = styled.button`
  width: 100%;
  background-color: #2EAAE2;
  color: #2C2E83;
  font-size: 1.2em;
  font-weight: 700;
  padding: 8px 8px;
  border-radius: 8px;
  opacity: 0.96;
  cursor: pointer;
  border: none;
  &:hover{
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = ({ text='',type, onPress}) => {
  return (
    <ButtonContainer>
      <ButtonStyled type={type} onClick={onPress}>
            {text}
      </ButtonStyled>
    </ButtonContainer>

  )
}
