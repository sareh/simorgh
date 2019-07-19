import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getSansRegular, getSansBold } from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getLongPrimer } from '@bbc/gel-foundations/typography';

const numerals = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰'];

const MostPopular = ({ script, service, title, links }) => {
  const StyledHeading = styled.h2`
    ${script ? getLongPrimer(script) : ''}
    ${getSansRegular(service)}
  `;
  const StyledNumeral = styled.span`
    ${script ? getLongPrimer(script) : ''}
  `;
  const StyledLink = styled.a`
    ${getSansBold(service)}
  `;

  return (
    <div role="region">
      <StyledHeading>{title}</StyledHeading>
      <ol>
        {links.forEach((link, index) => (
          <li>
            <StyledNumeral>{numerals[index]}</StyledNumeral>
            <StyledLink href={link.href}>{link.text}</StyledLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

MostPopular.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  title: string.isRequired,
  links: arrayOf(
    shape({
      text: string.isRequired,
      href: string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MostPopular;
