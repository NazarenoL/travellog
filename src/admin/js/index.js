import React from "react";

import Location from "../../js/components/location";
import Map from "../../js/components/map";

CMS = window.NetlifyCms;
CMS.registerPreviewStyle(
  require("!css-loader!sass-loader!../../sass/preview.scss").toString(),
  { raw: true }
);

CMS.registerPreviewTemplate(
  "location",
  ({ entry, _widgetFor, _widgetsFor, getAsset }) => {
    let data = entry.toJS().data;

    // Override images with temp asset path
    // @see https://www.netlifycms.org/docs/customization/
    if (data.photos) {
      data.photos = data.photos.map((photo, photoIndex) => {
        return { size: photo.size, image: getAsset(photo.image).toString() };
      });
    }

    return <Location isVisible={true} {...data} />;
  }
);
