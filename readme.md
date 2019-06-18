# Welcome to ECMAScript 6+

## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt einen Foliensatz zu unserem Seminar und Workshop im Verzeichnis `docs`: **ECMAScript 6+.pdf**. Dort ist alles enthalten, was innerhalb des Seminars erläutert wird.

## Links
- http://es6-features.org
- https://kangax.github.io/compat-table/es6/
- https://developer.mozilla.org/de/docs/Web/JavaScript/Reference
- https://itnext.io/ecmascript-6-features-823b1a44c024
- https://docs.microsoft.com/de-de/visualstudio/javascript/tutorial-nodejs-with-react-and-jsx?view=vs-2019

# Code Snippets
Code Snippets die in Atom in die Snippetsdammlung kopiert werden können.

```CoffeeScript
# - - - - - - - - - -
# JAVASCRIPT SNIPPETS
# - - - - - - - - - -
'.source.js':
  'docblock':
    'prefix': 'docblock'
    'body': """
            /* global console, window, document */
            /**
             * $1
             *
             * @package Webapplication
             * @author Michael [michael@zenbox.de]
             * @since $2
             * @version v1.0.0
             * @copyright (c) 2019 Michael Reichart, Cologne
             * @license MIT License [https://opensource.org/licenses/MIT]
             */

            $3
            """

  'methodblock':
    'prefix': 'methodblock'
    'body': """
            /**
             * $1
             *
             * @param $2
             * @return $3
             */
            $4
            """

  'iife':
    'prefix': 'iife'
    'body':"""
                 !(function() {
                     'use strict';
                     // - - - - - - - - - -
                     // DECLARATION
                     let init = undefined;

                     // METHODS
                     init = function () {};

                     // CONTROL
                     window.addEventListener('load', init);
                     // - - - - - - - - - -
                 }());
           """
```
