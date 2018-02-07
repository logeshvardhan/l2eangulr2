import { Like2eatPage } from './app.po';

describe('like2eat App', () => {
  let page: Like2eatPage;

  beforeEach(() => {
    page = new Like2eatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
