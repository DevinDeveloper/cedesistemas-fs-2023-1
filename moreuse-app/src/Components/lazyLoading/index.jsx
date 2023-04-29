import styled from 'styled-components';

const PageLoading = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  border:4px solid #0000;
  border-radius: 50%;
  border-color:#E4E4ED #0000;
  animation: s6 1s infinite linear;
  @keyframes s6 {
  100%{transform: rotate(1turn)}
}
`;

export const LazyLoading = () => {

  return (
    <PageLoading>
      <CustomLoader />
    </PageLoading>
  )
}
