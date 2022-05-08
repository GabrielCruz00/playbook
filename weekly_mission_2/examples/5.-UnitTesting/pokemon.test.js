import pokemon from './pokemon.js';

test('1) Create a new object pokemon', () => {
    const myPokemon = new pokemon('Pikachu');
    expect(myPokemon.name).toBe('Pikachuuu');
});