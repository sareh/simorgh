import {
  // clickInlineLinkAndTestPageHasHTML,
  checkElementStyles,
  getElement,
  placeholderImageLoaded,
  renderedTitle,
  shouldContainText,
  shouldContainStyles,
  visibleImageNoCaption,
  visibleImageWithCaption,
} from '../support/bodyTestHelper';

describe('Article Body Tests', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // Only 'c9rpqy7pmypo' & 'c85pqyj5m2ko' are available within the PROD enviroment
    cy.visit('/news/articles/c9rpqy7pmypo');
  });

  it('should render a headline', () => {
    checkElementStyles(
      'h1',
      'Royal wedding 2018: Bouquet laid on tomb of unknown warrior',
      'rgb(34, 34, 34)',
      'ReithSerifNewsMedium, Helvetica, Arial, sans-serif',
    );
  });

  it('should render a timestamp', () => {
    cy.window().then(win => {
      const { lastUpdated } = win.SIMORGH_DATA.data.metadata;
      const timeStamp = Cypress.moment(lastUpdated).format('D MMMM YYYY');

      checkElementStyles(
        'time',
        timeStamp,
        'rgb(90, 90, 90)',
        'ReithSansNewsRegular, Helvetica, Arial, sans-serif',
      );
    });
  });

  it('should render a subheading', () => {
    checkElementStyles(
      'h2',
      "Queen Victoria's myrtle",
      'rgb(64, 64, 64)',
      'ReithSansNewsRegular, Helvetica, Arial, sans-serif',
    );
  });

  it('should render a paragraph', () => {
    const p = getElement('p');
    shouldContainText(
      p,
      'The Duchess of Sussex has followed tradition by having her bridal bouquet placed on the tomb of the unknown warrior at Westminster Abbey.',
    );
  });

  it('should have a placeholder image', () => {
    placeholderImageLoaded(getElement('figure div').eq(0));
  });

  it('should have a visible image without a caption', () => {
    visibleImageNoCaption(getElement('figure').eq(0));
  });

  it('should have a visible image with a caption', () => {
    visibleImageWithCaption(getElement('figure').eq(2));
  });

  it('should have an image copyright label with styling', () => {
    const copyrightLabel = getElement('figure')
      .eq(0)
      .within(() => {
        getElement('p').eq(0);
      });
    copyrightLabel.should('contain', 'PA');
    shouldContainStyles(
      copyrightLabel,
      'background-color',
      'rgba(34, 34, 34, 0.75)',
    );
    shouldContainStyles(copyrightLabel, 'color', 'rgb(255, 255, 255)');
  });

  it('should render a title', () => {
    cy.window().then(win => {
      const { seoHeadline } = win.SIMORGH_DATA.data.promo.headlines;
      renderedTitle(`${seoHeadline} – BBC News`);
    });
  });

  it('should have an inline link with focus styling', () => {
    const firstInlineLink = getElement('main a');

    firstInlineLink.focus();
    shouldContainStyles(
      firstInlineLink,
      'background-color',
      'rgb(15, 85, 108)',
    );
    shouldContainStyles(firstInlineLink, 'color', 'rgb(245, 243, 241)');
    shouldContainStyles(
      firstInlineLink,
      'border-bottom',
      '1px solid rgb(245, 243, 241)',
    );
  });

  /*
    The following test is commented out due to it breaking the E2E tests once we are integrated with Mozart and Ares.
    The issue https://github.com/BBC-News/simorgh/issues/930 has further details.
  */

  // it('should have a working first inline link', () => {
  //   clickInlineLinkAndTestPageHasHTML('main a', '/news/articles/c85pqyj5m2ko');
  // });
});
