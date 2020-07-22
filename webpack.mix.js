const mix = require('laravel-mix');

mix.babelConfig({
   plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.js('resources/js/app.js', 'public/js').extract(['vue']);
//mix.sass('resources/sass/fonts.scss', 'public/css');
//mix.sass('resources/sass/app.scss', 'public/css');
