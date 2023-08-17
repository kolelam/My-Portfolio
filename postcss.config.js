const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./my-app/tailwind.config.js'),
        require('autoprefixer')
    ],
};
