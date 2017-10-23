process.env.DISABLE_NOTIFIER = true; 

var elixir = require('laravel-elixir');
var postcss = require('laravel-elixir-postcss');

require('laravel-elixir-livereload');

elixir(function(mix) {
  mix.sass([
      'application.sass'
  ], 'public/css/application.css')
  .styles([
      'public/css/application.css'
  ], 'public/css/all.css', __dirname);

  mix.webpack([
    "app.js"
  ]);

  mix.livereload();
});

elixir(function(mix) {
  mix.postcss('app.css', {
    options: {
      parser: require('postcss-scss')
    },
  });
});
