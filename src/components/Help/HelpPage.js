import React from 'react'
import styled from 'styled-components'
import { Devices24, Partnership24, Catalog24 } from '@carbon/icons-react';
import { GridThreeUp } from '../pageStyles'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7]};
`

const { REACT_APP_ORG } = process.env;

let url;
let title;
let email;
switch (REACT_APP_ORG) {
  case 'BlockPower':
    url = "https://www.blockpower.vote/faq-blockpower";
    title = "BlockPower Support";
    email = "organizer@blockpower.vote";
    break;
  case 'NGP':
    url = "https://www.blockpower.vote/nga/faq-nga";
    title = "New Georgia Project Support";
    email = "reach@ngpaf.org";
    break;
  case 'ColorOfChange':
    url = "https://www.blockpower.vote/cocpac/faq-cocpac";
    title = "Color of Change Support";
    email = "organizer+colorofchange@blockpower.vote";
    break;
}

export default () => (
  <PageLayout title="Help">
    <TopParagraph>Have questions? Here’s how to get answers.</TopParagraph>
    <GridThreeUp>
    <CardButton
      icon={<Catalog24 />}
      title="FAQ"
      description="See answers to common questions asked by other Voting Ambassadors"
      onClick={() => {
        window.open(url, "_blank")
      }}
    />
    <CardButton
      icon={<Devices24 />}
      title="Technical Support"
      description="blockpower@zammad.com"
      onClick={() => {
        window.open("mailto:blockpower@zammad.com");
      }}
    />
    <CardButton
      icon={<Partnership24 />}
      title={title}
      description={email}
      onClick={() => {
        window.open(`mailto:${email}`);
      }}
    />
    </GridThreeUp>
  </PageLayout>
);