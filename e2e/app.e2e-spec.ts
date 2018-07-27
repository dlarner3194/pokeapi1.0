import { PokemonObservablePage } from './app.po';

describe('pokemon-observable App', function() {
  let page: PokemonObservablePage;

  beforeEach(() => {
    page = new PokemonObservablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
