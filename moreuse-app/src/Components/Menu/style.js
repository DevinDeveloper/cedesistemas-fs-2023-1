import styled from 'styled-components'


export const MenuContainer = styled.section`
  border-right: 4px solid #2EAAE2;
  width: 300px;
  position: fixed;
  top: 0px;
  background-color: #2c2e83;
  height: 100%;
  display: ${props => props.isShown ? 'block' : 'none'};
`;


export const MenuItemsWrapper = styled.ul`
  padding: 20px 15px;
  a {
    color: white;
    text-decoration: none;
    :hover {
      color: #2EAAE2;
    }
  }

  li {
    list-style: none;
    margin-top: 10px;
    font-size: 1.3em;
  }
`;

export const MenuCloseWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding: 20px;
  svg{
    color:#fff;
    font-size: 1.4em;
    cursor: pointer;
    :hover{
      color: #2EAAE2;
    }
  }
`;
