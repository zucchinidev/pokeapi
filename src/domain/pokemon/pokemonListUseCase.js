import UseCase from '../useCase';

export default class PokemonListUseCase extends UseCase {

  /**
   * @contructor
   * @param {ApiPokemonRepository} repository permite el acceso a datos, no implementar llamadas a API para no acoplar
   */
  constructor({repository} = {}) {
    super(repository);
    this.repository = repository;
  }

  execute({query = ''} = {}) {
    return new Promise((resolve, reject) => {
      this.repository
          .list({query})
          .then(pokemons => {
            Promise
                .all(pokemons.map(pokemon => {
                  return this.repository.sprite({resource_uri: pokemon.sprites[0].resource_uri})
                }))
                .then(sprites => {
                  return pokemons.map(pokemon => {
                    pokemon.image = sprites.filter(s => s.pokemon.resource_uri === pokemon.resource_uri)[0].image;
                    return pokemon;
                  });
                })
                .then(resolve);
          });
    });
  }
}