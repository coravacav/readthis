/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['content/**/*.md', 'layouts/**/*.html', 'assets/**/*.js'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
