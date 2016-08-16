import Card from './components/card/index';
import Pokedex from './domain';
import './index.scss';

Pokedex.get('pokemonListUseCase')
  .execute()
  .then((pokemons) => pokemons.map(pok => new Card(pok)))
  .then((cards) => {
    for (let card of cards) {
      document.body.appendChild(card.render());
    }
  });
