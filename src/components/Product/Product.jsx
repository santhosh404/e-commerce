import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from '../../context/productContext'
import Loader from '../Loader';

export const Product = () => {

    const { product, loading } = useContext(ProductContext);

    return (
        <div className='flex justify-center flex-wrap'>
            {
                loading ? <Loader /> : product.length === 0 && !loading ? <h1>No products found</h1> :
                    !loading && product.map(prd => {
                        return <ProductCard
                            key={prd._id}
                            title={prd.title}
                            description={prd.description}
                            price={prd.price}
                            category={prd.category}
                            image={prd.image}
                            rating={prd.rating}
                        />
                    })
            }
        </div>
    )
}
