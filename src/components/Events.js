import React from 'react';
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
} from '@elastic/eui';

const cardFooterContent = (
  <EuiFlexGroup justifyContent="flexEnd">
    <EuiFlexItem grow={false}>
      <EuiButton>Go for it</EuiButton>
    </EuiFlexItem>
  </EuiFlexGroup>
);
const getDescription = `<h1>This is a header </h1>`;
export default () => (
  <EuiFlexGroup gutterSize="l">
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img
              src="https://source.unsplash.com/400x200/?Nature"
              alt="Nature"
            />
          </div>
        }
        title="Elastic in Nature"
        description="Example of a card's description. Stick to one or two sentences."
        footer={cardFooterContent}
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image="https://source.unsplash.com/400x200/?Water"
        title="Elastic in Water"
        description="Example of a card's description. Stick to one or two sentences."
        footer={cardFooterContent}
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        href="https://elastic.github.io/eui/"
        image="https://source.unsplash.com/400x200/?City"
        icon={<EuiIcon size="xxl" type="logoBeats" />}
        title={'Beats in the City'}
        description={getDescription}
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);

