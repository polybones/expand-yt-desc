// ==UserScript==
// @name        Expand Youtube Video Description
// @match       https://www.youtube.com/watch?v=*
// @grant       none
// @version     1.0
// @author      polybones
// @description Automatically expands youtube video descriptions.
// ==/UserScript==
(function() {
    'use strict';

    const query = 'tp-yt-paper-button#expand';
    const observer = new MutationObserver(mutations => {
      if(document.querySelector(query)) {
        observer.disconnect();
        document.querySelector(query).click();
      }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
