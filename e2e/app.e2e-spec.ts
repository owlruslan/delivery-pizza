import { DeliveryPage } from './app.po';

describe('delivery App', () => {
  let page: DeliveryPage;

  beforeEach(() => {
    page = new DeliveryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
