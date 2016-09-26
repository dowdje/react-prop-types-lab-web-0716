const React = require('react')

export default class Product extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <li>
          <title>{this.props.name}</title>
          <ul>{this.props.producer}</ul>
          <ul>{this.props.hasWatermark}</ul>
          <ul>{this.props.color}</ul>
          <ul>{this.props.weight}</ul>
        </li>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    if (props[propName] === undefined ) {
      return new Error('Weight must be defined')
    }
    else if (isNaN(props[propName])){
      return new Error('Must be a number')
    }
    else if (!(props[propName] > 80 && props[propName] < 300)){
      return new Error('You too skinny or too fat')
    }
  }
};

module.exports = Product