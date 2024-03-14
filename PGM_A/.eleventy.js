module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addFilter('uppercase', (value) => {
        return value.toUpperCase();
    });

    eleventyConfig.addFilter('sortByOrder', (array) => {
        const sortedArray = array.sort((a, b) => {
            return parseInt(a.data.order) - parseInt(b.data.order);
        });

        return sortedArray;
    })

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    }
}