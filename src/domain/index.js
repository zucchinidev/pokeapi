import PokemonFactory from './factories/pokemon';


class Pokedex {
  constructor() {
    this._dependencies = new Map();
    this._dependencies.set('pokemonListUseCase', PokemonFactory.pokemonListUseCase());
  }

  get(key) {
    if (this.hasUseCase(key)) {
      return this.getUseCase(key);
    }
    const msg = `Service ${key} is not implemented in the current version of the domain.`;
    throw new ReferenceError(key, msg);
  }
  
  hasUseCase(key) {
    return this._dependencies.has(key);
  }
  
  getUseCase(key) {
    return this._dependencies.get(key);
  }
}

export default new Pokedex();