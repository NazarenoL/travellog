import slugify from "slugify";

/* Load chapters */
let chapterFiles = require.context("../../content/chapters/", true, /\.md$/);
let chapters = chapterFiles.keys().map(chapter => {
  let chapterData = chapterFiles(chapter);
  return {
    slug: slugify(chapterData.attributes.title, { lower: true }),
    content: chapterData.attributes,
  };
}).filter(chapter => chapter.content.visible);

let settings = require("../../content/settings/site_settings.md").attributes;

export { chapters, settings };
