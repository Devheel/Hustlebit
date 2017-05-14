import { WFBitcoinsPage } from './app.po';

describe('wf-bitcoins App', () => {
  let page: WFBitcoinsPage;

  beforeEach(() => {
    page = new WFBitcoinsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
