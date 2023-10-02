module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/script.js");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/admin");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  }
};