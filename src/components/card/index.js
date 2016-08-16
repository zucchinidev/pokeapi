import {Image, Div, Text} from '../html';
import HtmlComponent from '../html/htmlComponent';

class Card extends HtmlComponent {
  constructor({name, image} = {}) {
    super(name, image);
    this._name = name;
    this._image = image;
    console.log('daleee');
    
  }
  
  render() {
    const divCard = new Div('card');
    const divCardContent = new Div('card-content');
    const title = new Div('card-title');
    const image = new Image({className: 'card-image', src: this._image});
    const name = new Text({text: this._name});
    title.appendChild(name);
    divCardContent.appendChild(title);
    divCard.appendChild(divCardContent);
    divCard.appendChild(image);
    return divCard.render();
  }
}

export default Card;