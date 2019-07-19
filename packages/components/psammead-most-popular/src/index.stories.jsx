import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { arabic } from '@bbc/gel-foundations/scripts';
import MostPopular from '.';
import notes from '../README.md';

const links = [
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
  {
    href: 'https://www.bbc.com/persian',
    text: 'ایستگاه خبر؛ چهارشنبه ۳ بهمن',
  },
];

/* eslint-disable */
storiesOf('Components|MostPopular', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    <MostPopular
      links={links}
      script={arabic}
    service="persian"
      title="بیشتر بخوانید"
  />,
    { notes, knobs: { escapeHTML: false } },
  );
