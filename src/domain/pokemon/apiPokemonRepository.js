import PokemonRepository from './pokemonRepository';
import PokemonFactory from '../factories/pokemon';

/**
 * @extends {PokemonRepository}
 */
export default class ApiPokemonRepository extends PokemonRepository {
  constructor(fecher) {
    super(fecher);
    this.fecher = fecher;
  }

  list({query = ''} = {}) {
    return new Promise((resolve, reject) => {
      this.fecher
          .get('http://pokeapi.co/api/v1/pokemon')
          .query({limit: 20})
          .end((err, resp) => {
            if (err) {
              reject(err);
              return;
            }
            try {
              console.log(resp);
              resolve(JSON.parse(resp.text).objects.map(PokemonFactory.pokemonEntity));
            } catch(e) {
              reject(e);
            }
          });
    });
  }

  sprite({resource_uri} = {}) {
    return new Promise((resolve, reject) => {
      this.fecher
          .get(`http://pokeapi.co${resource_uri}`)
          .end((err, resp) => {
            if (err) {
              reject(err);
              return;
            }
            try {
              resolve(PokemonFactory.spriteEntity(JSON.parse(resp.text)));
            } catch(e) {
              reject(e);
            }
          });
    });
  }

  get fecher() {
    return this._fetcher;
  }

  set fecher(value) {
    this._fetcher = value;
  }
}