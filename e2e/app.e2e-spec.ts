import { DeliveryPage } from './app.po';

describe('delivery-header App', () => {
  let page: DeliveryPage;

  beforeEach(() => {
    page = new DeliveryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
