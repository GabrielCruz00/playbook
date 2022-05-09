import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  // expect(myPokemon.name).toBe('Pikachussssssss'); // Corrige esta prueba
  // la linea anterior arroja un error pues el nombre del pokemon no es Pikachussss
  expect(myPokemon.name).toBe('Pikachu');
});