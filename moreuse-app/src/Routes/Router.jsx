import React, {Suspense} from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = React.lazy(()=>import('../Pages/Home/index'))
const WearDetail = React.lazy(()=>import('../Pages/WearDetail'))

//import { Home } from '../Pages/Home'
//import { WearDetail } from '../Pages/WearDetail'

export const router = createBrowserRouter([
  {
    path :"/",
    element: (
      <Suspense fallback={<div>Cargando..</div>}>
        <Home />
      </Suspense>
    )
  },
  {
    path :"/wear-detail",
    element: (
      <Suspense fallback={<div>Cargando..</div>}>
        <WearDetail />
    </Suspense>
    )
  }
]);
