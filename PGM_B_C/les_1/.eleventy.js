module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("input/main.css");
    eleventyConfig.addPassthroughCopy("input/images/");

    return {
        dir: {
            input: 'input',
            output: 'output'
        }
    }
}