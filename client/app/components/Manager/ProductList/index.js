/**
 *
 * ProductList
 *
 */

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getImageViaUrl } from '../../../../../firebase/getImageViaUrl';

const ProductList = props => {
  const { products } = props;

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async (path) => {
      const image = await getImageViaUrl(path);
      if (image) {
        setImages(prev => {
          if (prev.includes(image)) {
            return [...prev]
          } else {
            return [...prev, image]
          }
        })
      }
    }

    products.map(product => {
      getImages(product.image);
    })
  }, [])

  console.log(images);

  return (
    <div className='p-list'>
      {products.map((product, index) => (
        <Link
          to={`/dashboard/product/edit/${product._id}`}
          key={index}
          className='d-flex flex-row align-items-center mx-0 mb-3 product-box'
        >
          <img
            className='item-image'
            src={`${product && product.image
              ? images[index]
              : '/images/placeholder-image.png'
              }`}
          />
          <div className='d-flex flex-column justify-content-center px-3 text-truncate'>
            <h4 className='text-truncate'>{product.name}</h4>
            <p className='mb-2 text-truncate'>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
