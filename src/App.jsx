import React from 'react'
import Header from './components/Header'
import { Product } from './components/Product/Product'
import { ProductProvider } from './context/productContext'
import { Carousel } from 'antd';
import Search from './components/Search';

const contentStyle = {
  margin: 0,
  height: '250px',
  lineHeight: '160px',
  textAlign: 'center',
  objectFit: 'cover'
};

const App = () => {

  return (
    <ProductProvider>
      <Header />
      <div className='px-10 mt-28'>
        <Carousel autoplay>
          <div>
            <img style={contentStyle} className='w-full' src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/TVs/Abhilasha/TCL/msoj/New_Arrivals_PC_Header_1500x300_1.jpg' />
          </div>
          <div>
            <img style={contentStyle} className='w-full' src='https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/AugArt24_Logo_75x75/KSD_PC_Header.jpg' />
          </div>
          <div>
            <img style={contentStyle} className='w-full' src='https://m.media-amazon.com/images/G/31/img21/CEPC/Jup24/Changes/PC._CB563743278_.gif' />

          </div>
        </Carousel>
      </div>
      <div className='flex lg:hidden flex-col gap-4'>
        <Search
          isMobile
        />
      </div>
      <h1 className='text-[30px] md:text-[40px] text-center my-10'>Deals of the Day</h1>
      <Product />
    </ProductProvider>
  )
}

export default App