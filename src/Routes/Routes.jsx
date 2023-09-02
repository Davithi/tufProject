import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import SingleProduct from '../components/Porducts/SingleProduct'
import { ROUTES } from '../utils/routes'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct/>} />
    </Routes>
  )
}

export default AppRoutes
