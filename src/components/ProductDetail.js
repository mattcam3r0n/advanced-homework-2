import React from "react";
import PropTypes from "prop-types";

export default function ProductDetail(props) {
  const { name, description, price, imgUrl } = props.product;
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={imgUrl} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string
  })
};
