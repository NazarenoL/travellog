import React from "react";

import Location from "../../js/components/location";
import Map from "../../js/components/map";

CMS = window.NetlifyCms;
CMS.registerPreviewStyle(
  require("!css-loader!sass-loader!../../sass/preview.scss").toString(),
  { raw: true }
);

CMS.registerPreviewTemplate("location", ({ entry }) => {
  return <Location isVisible={true} {...entry.toJS().data} />;
});
