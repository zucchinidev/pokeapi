/**
 * @class
 * PokemonRepository
 */
export default class PokemonRepository {
  list() {
    throw new Error('PokemonRepository#list must be implemented');
  }

  sprite({resource_uri} = {}) {
    throw new Error('PokemonRepository#sprite must be implemented');
  }
}