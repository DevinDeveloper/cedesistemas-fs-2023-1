import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItem";
import { WearListContainer } from "./style";

const WEAR_LIST = [
  {
    _id:1,
    image: 'https://i0.wp.com/www.legends.com.co/wp-content/uploads/2021/05/lenadora-nino.png?fit=1102%2C892&ssl=1',
    name:'Camisa Leñadora',
    target: '4-5 años',
    size: '2 meses',
    gender: 'Masculino'
  },
  {
    _id:2,
    image: 'data:image/jpeg;base64,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',
    name:'Pantalon Corto',
    target: '4-5 años',
    size: '6 meses',
    gender: 'Masculino'
  },
  {
    _id:3,
    image: 'https://http2.mlstatic.com/D_NQ_NP_999895-MCO52149562770_102022-O.jpg',
    name:'Vestido',
    target: '4-5 años',
    size: '1 meses',
    gender: 'Femenino'
  },
  {
    _id:4,
    image: 'https://http2.mlstatic.com/D_NQ_NP_999895-MCO52149562770_102022-O.jpg',
    name:'Vestido',
    target: '4-5 años',
    size: '1 meses',
    gender: 'Femenino'
  },
  {
    _id:5,
    image: 'https://http2.mlstatic.com/D_NQ_NP_999895-MCO52149562770_102022-O.jpg',
    name:'Vestido',
    target: '4-5 años',
    size: '1 meses',
    gender: 'Femenino'
  },
  {
    _id:6,
    image: 'https://http2.mlstatic.com/D_NQ_NP_999895-MCO52149562770_102022-O.jpg',
    name:'Vestido',
    target: '4-5 años',
    size: '1 meses',
    gender: 'Femenino'
  },
  {
    _id:7,
    image: 'https://http2.mlstatic.com/D_NQ_NP_999895-MCO52149562770_102022-O.jpg',
    name:'Vestido',
    target: '4-5 años',
    size: '1 meses',
    gender: 'Femenino'
  }
]

const Home = () => {

  return (
    <Page>
      <WearListContainer>
        {
          WEAR_LIST.map((item,key)=><WearItem key={key} {...item}/>)
          // image={item.image} name={item.name}
        }
      </WearListContainer>
    </Page>
  )
}

export default Home;
