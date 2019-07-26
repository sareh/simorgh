import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import {
  getSansRegular,
  getSerifRegular,
  // getSansBold,
  // getSerifLight,
} from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getCanon,
  getGreatPrimer,
  getTrafalgar,
  // getRoyal,
} from '@bbc/gel-foundations/typography';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';

const EasternArabic = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰'];

const MostPopular = ({ script, service, title, links }) => {
  console.log('script', script);
  console.log('service', service);

  const StyledHeading = styled.h2`
    ${getSansRegular(script)}
    ${getTrafalgar(script)}
  `;
  const StyledOl = styled.ol`
    list-style-type: none;
  `;
  const StyledLi = styled.li``;
  const StyledNumeral = styled.span`
    color: ${C_POSTBOX};
    ${getSerifRegular(script)}
    ${getCanon(script)}
    padding: ${GEL_SPACING}
  `;
  const StyledLink = styled.a`
    color: ${C_EBON};
    ${getGreatPrimer(script)}
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div role="region">
      <StyledHeading>{title}</StyledHeading>
      <StyledOl>
        {links.map((link, i) => (
          <StyledLi key={link.text}>
            <StyledNumeral>{EasternArabic[i + 1]}</StyledNumeral>
            <StyledLink href={link.href}>{link.text}</StyledLink>
          </StyledLi>
        ))}
      </StyledOl>
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
