import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import {PageContainer,PageTitleContainer} from '../Page/style'
import { useLocation } from "react-router-dom"
import { useContext, useEffect } from "react"
import { MenuContext } from "../../Contexts/MenuContext"

export const Page = (props) => {

  const location = useLocation();

  const {onCloseMenu} = useContext(MenuContext);

  useEffect (()=>{
    //única vez al inicio del componente
    console.log('location',location);
    hideMenu();
  },[]);

  const hideMenu = () => {
    onCloseMenu();
  }

  return (
    <PageContainer>
      <Topbar />
        {
          props.title && (
            <PageTitleContainer>
              <h1>{props.title}</h1>
            </PageTitleContainer>
          )
        }
        <div>
        {props.children}
        </div>
      <Menu />
    </PageContainer>
  )
}
