module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the build.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Current year for the footer.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Collect the distinct publication "type" values (in first-seen order) so the
  // Publications filters build themselves from whatever categories the editor uses.
  // Pass true to only consider items marked "featured" (homepage).
  eleventyConfig.addFilter("pubTypes", function (items, onlyFeatured) {
    const seen = [];
    (items || []).forEach((i) => {
      if (!i || !i.type) return;
      if (onlyFeatured && !i.featured) return;
      if (!seen.includes(i.type)) seen.push(i.type);
    });
    return seen;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
