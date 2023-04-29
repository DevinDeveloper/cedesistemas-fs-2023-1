import styled from "styled-components";

export const WearDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const WearImageContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid green;
  justify-content: center;
  img {
    width: 15%;
    //Tablets y Smartphones
    @media only screen and (max-width: 768px) {
      width: 50%;
    }
    height: auto;
  }
`;

export const WearDetailContent = styled.div`
  margin: 0 15px;
`;
