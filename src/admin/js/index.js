import React from "react";

import ChapterPreview from "./chapterPreview";

CMS = window.NetlifyCms;
CMS.registerPreviewStyle(
  require("!css-loader!sass-loader!../../sass/preview.scss").toString(),
  { raw: true }
);

CMS.registerPreviewStyle("/css/mapglyphs.css");

CMS.registerPreviewTemplate(
  "chapter",
  ({ entry, _widgetFor, _widgetsFor, getAsset }) => (
    <ChapterPreview {...entry.toJS().data} getAsset={getAsset} />
  )
);
