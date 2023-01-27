import React from 'react'
import Carousel from '../carousel/Carousel'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ProductsList from '../product/ProductsList';

export default function Home() {

  return (
    <>
    <Header showParam/>
    <Carousel/>
    <ProductsList />
    <Footer />
    </>
  );
  }
