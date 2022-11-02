const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        purgecss({
            content: ["src/index.html"],
            variables: true,
            safelist: ["visible", "border-red", "bold"]
        })
    ]
}