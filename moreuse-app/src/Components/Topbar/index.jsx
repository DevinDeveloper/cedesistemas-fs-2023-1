import { IoReorderThreeOutline } from 'react-icons/io5';
import { MenuIconContainer, TopbarContainer } from './style';


export const Topbar = () => {
  return(
    <TopbarContainer>
      <MenuIconContainer>
        <IoReorderThreeOutline />
      </MenuIconContainer>
      <div>
        <img width="20%" alt="logo" src="assets/logo.png"/>
      </div>
    </TopbarContainer>
  )
}
