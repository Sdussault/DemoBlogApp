import { DemoBlogAppPage } from './app.po';

describe('demo-blog-app App', () => {
  let page: DemoBlogAppPage;

  beforeEach(() => {
    page = new DemoBlogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
