import React from "react";
import {
  EuiHeader,
  EuiHeaderSectionItem,
 
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiIcon,
} from "@elastic/eui";

export default () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiIcon type="logoSiteSearch" size="xl" />
        <EuiHeaderLink>Dala Events</EuiHeaderLink>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
        <EuiHeaderLink isActive>Organize</EuiHeaderLink>
          <EuiHeaderLink isActive>Login</EuiHeaderLink>

          <EuiHeaderLink>Sign Up</EuiHeaderLink>

          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};
