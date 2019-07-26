import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import MostPopular from '.';

const links = linkText =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => ({
    text: linkText,
    href: 'https://www.bbc.com/persian',
  }));

storiesOf('Components|MostPopular', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'Link text' }],
      ({ slotTexts: [linkText], script, service }) => (
        <Fragment>
          <MostPopular
            links={links(linkText)}
            script={script || 'arabic'}
            service={service || 'persian'}
            title={linkText}
          />
          <br />
          <br />
          <div lang="en-GB" dir="ltr">
            Please note this component is currently in an alpha state - it has
            not had a full accessibility review carried out. It is not ready for
            use in production environments.
          </div>
        </Fragment>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
