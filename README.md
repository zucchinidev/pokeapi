# Readme

## Synopsis

Presentación en formato tarjeta de 20 pokemos obtenidos de la pokeapi. 
Trabajo realizado mediante **ES2015**

## Code Example

```
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

```

## Motivación

Aprendizaje acerca del desarrollo con el nuevo estándar javascript **ES2015**
 
## Instalación



* Instalar NPM modules.
```
npm install
```

## Inicio

```
npm start
Navegar a: http://localhost:3000/dist/main
```

## Compilación
```
npm build
```

## Tests
TODO


## Licencia
MIT License