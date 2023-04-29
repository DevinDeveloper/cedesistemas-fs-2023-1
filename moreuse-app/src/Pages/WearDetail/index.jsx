import { useParams } from 'react-router-dom';
import {Button} from '../../Components/Button/index,';
import {Page} from '../../Components/Page'
import {WearDetailContainer,WearImageContainer,WearDetailContent} from './styles'



const WearDetail = () => {

  const {id} = useParams();

  return (
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src='https://http2.mlstatic.com/D_NQ_NP_999895-MCO52149562770_102022-O.jpg'/>
        </WearImageContainer>
        <WearDetailContent>
          <h6>Referencia: {id}</h6>
          <h3>Camisa Leñadora</h3>
          <h4>2 meses / Masculino</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, eveniet consequuntur itaque dignissimos modi vitae expedita, quia voluptates autem molestiae fuga voluptate excepturi id assumenda tenetur natus deleniti rerum quidem.</p>
        </WearDetailContent>
      </WearDetailContainer>
      <Button text='Comprar'/>
    </Page>
  )
}

export default WearDetail;
