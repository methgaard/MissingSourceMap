import { SourceMapMissingPage } from './app.po';

describe('source-map-missing App', () => {
  let page: SourceMapMissingPage;

  beforeEach(() => {
    page = new SourceMapMissingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
