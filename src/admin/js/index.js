import React from "react";
import CMS from "netlify-cms-app";

import Location from "../../js/components/location";

CMS.init();
CMS.registerPreviewStyle(
  require("!css-loader!sass-loader!../../sass/preview.scss").toString(),
  { raw: true }
);

CMS.registerPreviewTemplate("location", ({ entry }) => {
  return <Location isVisible={true} {...entry.toJS().data} />;
});
