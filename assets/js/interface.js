/** APPLICATION
 *
 *  @desc lorem ipsum dolor ...
 *
 * @package Webapplication
 * @module header, navbar
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019-10-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION, INITIALISATION
    let myAnchors = document.querySelectorAll('a[href]');
    let myNavBar = document.querySelector('.navbar');

    // FUNCTIONS
    function onAnchorClick(event) {
        // DECLARATION
        let tagName = event.target.tagName;
        let url = event.target;
        let target = event.target.dataset.target;

        // CONTROL
        // stop the browser action
        event.preventDefault();

        switch (tagName) {
            case 'A':
                loadData(url, target);
                break;
            default:
                break;
        }
    }

    function loadData(url, target) {
        // AJAX:
        let request = new XMLHttpRequest();

        request.addEventListener('readystatechange', function (event) {
            console.log(request.readyState);

            switch (request.readyState) {
                default:
                case 0:
                    break;
                case 1:
                    console.log('request opened.');
                    break;
                case 2:
                    console.log('request sent.');
                    break;
                case 3:
                    console.log('response head + first data.');
                    break;
                case 4:
                    console.dir(request);
                    console.log('response next data + ok.');
                    changeContent(request.responseText, target);
                    break;
            }

        });

        // open(http-method, url)
        request.open('get', url);
        request.send();
    }

    function changeContent(content, target) {
        document.querySelector(target).innerHTML = content;
    }

    // EVENT LISTENER (CONTROL)
    // for (let i = 0; i < myAnchors.length; i += 1) {
    //     myAnchors[i].addEventListener('click', onAnchorClick);
    // }
    // Delegated Event
    // myNavBar.addEventListener('click', onAnchorClick);
    // - - - - - - - - - -
}())

// jQuery Code
jQuery('a[href]').on('click', function (event) {
    event.preventDefault();
    console.dir(event);
});

// Delegated Event
jQuery('.navbar').on('click', 'a[href]', function (event) {
    // DECLARATION
    let request = undefined;
    let url = event.target.href;
    let target = event.target.dataset.target;

    // CONTROL
    event.preventDefault();
    request = jQuery.ajax(url);
    request.done(function (response) {
        console.log('done');
        jQuery(target).html(response);
    }).fail(function () {
        console.log('fail');
    }).always(function () {
        console.log('always');
    });

});