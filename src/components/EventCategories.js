import React from "react";
import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer
} from "@elastic/eui";

export default () => (
  <>
    
    <EuiSpacer />
    <EuiText>
      <h3>Check out the trending categories</h3>
    </EuiText>
    <EuiSpacer />
    <EuiFlexGroup gutterSize="l">
      <EuiFlexItem>
        <EuiCard
          layout="horizontal"
          icon={<EuiIcon size="xl" type={"workplaceSearchApp"} />}
          title={"Career Expos"}
          description=""
          onClick={() => {}}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          layout="horizontal"
          icon={<EuiIcon size="l" type={"monitoringApp"} />}
          titleSize="xs"
          title={"Health & Fitness"}
          description=""
          onClick={() => {}}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          layout="horizontal"
          icon={<EuiIcon size="l" type={"casesApp"} />}
          titleSize="xs"
          title={"Business"}
          description=""
          onClick={() => {}}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  </>
);
