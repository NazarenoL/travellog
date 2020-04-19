import slugify from "slugify";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

/* Load chapters */
let chapterFiles = requireAll(
  require.context("../../content/chapters/", true, /\.md$/)
);
let chapters = chapterFiles.map(chapter => ({
  slug: slugify(chapter.attributes.title, { lower: true }),
  content: chapter.attributes
}));

/* Load regions */
let regionFiles = requireAll(
  require.context("../../content/regions/", true, /\.md$/)
);
let regions = regionFiles.reduce(
  (obj, region) =>
    Object.assign(obj, {
      [slugify(region.attributes.title, { lower: true })]: region.attributes
    }),
  {}
);

/* Load locations */
let locationFiles = requireAll(
  require.context("../../content/locations/", true, /\.md$/)
);
let locations = locationFiles.reduce(
  (obj, location) =>
    Object.assign(obj, {
      [slugify(location.attributes.title, { lower: true })]: location.attributes
    }),
  {}
);

let settings = require("../../content/settings/site_settings.md").attributes;

export { chapters, regions, locations, settings };
