module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/script.js");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/img/uploads");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  }
};