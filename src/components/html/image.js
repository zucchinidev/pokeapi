import HtmlComponent from './htmlComponent';

// URLs for Sprites have moved permanently!
// This is due to people abusing them and hot linking. Do not hotlink images.
// see: https://github.com/PokeAPI/sprites
// npm install --save github:PokeAPI/sprites
export default class Image extends HtmlComponent {
  constructor({className, src}) {
    super({className, src});
    this._src = src;
    this._className = className;
  }

  render() {
    const img = document.createElement('img');
    img.setAttribute('src', this.getSrc());
    img.className = this._className;
    return img;
  }

  getSrc() {
    return `${Image.getPath()}${this._src}`;
  }

  static getPath() {
    return './public/images';
  }
}