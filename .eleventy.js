module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the build.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Current year for the footer.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

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
