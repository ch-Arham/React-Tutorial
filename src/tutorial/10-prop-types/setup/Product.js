import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image,name,price}) => {
  console.log(image,name,price);
  return( 
    <article className='product'>  
      <img src={(image && image.url) || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
};
console.log(Product)
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps ={
//   name: 'defualt name',
//   price: 3.99,
//   image: {url:defaultImage}
// };

export default Product;
