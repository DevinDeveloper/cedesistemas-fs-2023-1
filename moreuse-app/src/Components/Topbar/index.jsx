import { IoReorderThreeOutline } from 'react-icons/io5';
import { MenuIconContainer, TopbarContainer } from './style';
import { MenuContext } from '../../Contexts/MenuContext';
import { useContext } from 'react';


export const Topbar = () => {

  const {menuState,onChangeOpenCloseMenu} = useContext(MenuContext)

  const toggleMenu = () => {
    onChangeOpenCloseMenu();
  }

  return(
    <TopbarContainer>
      <MenuIconContainer onClick={toggleMenu}>
        <IoReorderThreeOutline />
      </MenuIconContainer>
      <div>
        <img width="20%" alt="logo" src="/assets/logo.png"/>
      </div>
    </TopbarContainer>
  )
}
