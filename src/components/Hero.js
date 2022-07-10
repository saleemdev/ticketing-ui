import React from "react";
import {
  EuiPage,
  EuiPageContent,
  
  EuiSpacer,
  EuiPageBody,
} from "@elastic/eui";
import HeroContent from "./HeroContent";
import Events from "./Events";
import EventCategories from "./EventCategories";

export default () => (
  <EuiPage paddingSize="none">
    <EuiPageBody>
      <EuiPageContent
        borderRadius="none"
        hasShadow={false}
        style={{ display: "flex" }}
      >
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none"
          color="subdued"
          hasShadow={false}
        >
          <HeroContent />
          <EuiSpacer />

          <EventCategories />
          <EuiSpacer />

          <Events />
        </EuiPageContent>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);
