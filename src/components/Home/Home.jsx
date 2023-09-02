import React, { useEffect } from 'react'
import Poster from '../Poster/Poster'
import Products from '../Porducts/Products'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'
import { filterByPrice } from '../../features/products/productsSlice'

const Home = () => {
  const dispatch = useDispatch();
  const { products : { list , filtred } , categories } = useSelector(( state ) => state )

  useEffect(()=>{
    if(!list.length) return;

    dispatch(filterByPrice(100))
  },[dispatch,list.length])


  return (
    <>
      <Poster/>
      <Products products={list}  amount={10} title="Trending" />
      <Categories categories={categories.list}  amount={5} title="Worth seeing" />
      <Banner  />
      <Products products={filtred}  amount={5} title="Less than 100$" />

    </>
  )
}

export default Home
