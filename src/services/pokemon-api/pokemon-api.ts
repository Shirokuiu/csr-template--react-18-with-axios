import { api } from 'src/services/api';

const pokemonApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getPokemonByName: query<any, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    loadAllPokemons: query<any, void>({
      query: () => 'pokemon',
    }),
  }),
  overrideExisting: false,
});

export const { useGetPokemonByNameQuery, useLazyLoadAllPokemonsQuery } = pokemonApi;
