import React, {Suspense} from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LazyLoading } from '../Components/lazyLoading'

const Home = React.lazy(()=>import('../Pages/Home/index'))
const WearDetail = React.lazy(()=>import('../Pages/WearDetail'))
const Login = React.lazy(()=>import('../Pages/Login'))
const Profile = React.lazy(()=>import('../Pages/Profile'))

/*
const Login = React.lazy(() => import('../Pages/Login').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module);
    }, 10000)
  })
}));
*/
const Signup = React.lazy(()=>import('../Pages/Signup'))


//import { Home } from '../Pages/Home'
//import { WearDetail } from '../Pages/WearDetail'

export const router = createBrowserRouter([
  {
    path :"/",
    element: (
      <Suspense fallback={<LazyLoading/>}>
        <Home />
      </Suspense>
    )
  },
  {
    path :"/wear-detail/:id",
    element: (
      <Suspense fallback={<LazyLoading/>}>
        <WearDetail />
    </Suspense>
    )
  },
  {
    path :"/login",
    element: (
      <Suspense fallback={<LazyLoading/>}>
        <Login />
    </Suspense>
    )
  },
  {
    path :"/signup",
    element: (
      <Suspense fallback={<LazyLoading/>}>
        <Signup/>
    </Suspense>
    )
  },
  {
    path :"/profile",
    element: (
      <Suspense fallback={<LazyLoading/>}>
        <Profile />
    </Suspense>
    )
  }
]);
