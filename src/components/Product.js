// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
            <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color.length} scoops: {this.props.color.join(', ')}</li>
          <li> {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark:false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark:PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let value = props[propName];

    if (value == null && typeof value !== 'number') {
       return new TypeError(`your input should be a number`);
     }

  if (80<value<300) {
        return null;
     }

      return new Error("${value} weight is not in the specific range");

  }.isRequired
};
