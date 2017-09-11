/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-header/app-header.html","611b00b75388e2a548c3656087e9b4ec"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","354cc13dae18b154ae055036e959e2ae"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","387b0a58c54afa617265a50ab25c792c"],["bower_components/app-layout/helpers/helpers.html","33fa00d106b9bc07ab162dbe88d1b664"],["bower_components/app-localize-behavior/app-localize-behavior.html","a76c581985b223c114ccd0f34ae2fe45"],["bower_components/font-roboto/roboto.html","31c2e28f3f926e78961662fcfc98bd44"],["bower_components/intl-messageformat/dist/intl-messageformat.min.js","7399b33d4036b8fbaf5e7c780923501e"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","032ddccbe04fadf233db599b63b171b9"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","e416e843a80e32d5ac1cf3d99f92a290"],["bower_components/iron-ajax/iron-ajax.html","cdb34647662aa97819437b199ca0dc3e"],["bower_components/iron-ajax/iron-request.html","2cd86cb426f03e5ac050e5b9534ca01e"],["bower_components/iron-behaviors/iron-button-state.html","9fb410eb4dd2cf074011b4d7565fe520"],["bower_components/iron-behaviors/iron-control-state.html","26408b231f3184ed4c861a77090782d0"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","fc0c50a581a28e9269400ddd3e98f802"],["bower_components/iron-flex-layout/iron-flex-layout.html","ff9477722c978e3fdd3fbf292cc3f2fc"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","8ea5b57ab9067df1c61dc124c496120b"],["bower_components/iron-input/iron-input.html","a5d349036184737889ebb3d2ab4fa754"],["bower_components/iron-meta/iron-meta.html","048f486e348206798370e3e2a61f27ee"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","b935952337df172121dae50aa75d0ff6"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","a70e5917cb2f5bb64e53e44b2f0cd764"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","7227fe9e747518edb9676d3d5bce48ff"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","dfcf04b2b9b17dceb9176c5d4a1233b8"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","26731b518fc39146a6ef617bf2446cab"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","33c023f229cd353ec7d21b5a3b9e137b"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","3fb306c07a03ea899a4a29b582e75567"],["bower_components/neon-animation/animations/fade-in-animation.html","32e6403f666f0a23bf0a12d9d13ac7e0"],["bower_components/neon-animation/animations/fade-out-animation.html","0b7783df10a3455dd3079d5dabfc1882"],["bower_components/neon-animation/neon-animatable-behavior.html","ff071e084f0046cb0d74204891f95fc5"],["bower_components/neon-animation/neon-animation-behavior.html","7bea601b65a14b9d7389d806db6cbfec"],["bower_components/neon-animation/neon-animation-runner-behavior.html","0d0e9eeccf315df7c0c6330049c2cd45"],["bower_components/neon-animation/web-animations.html","b9b5d0a4f7234c3c7c21b5078cdf77d5"],["bower_components/paper-behaviors/paper-button-behavior.html","1e6e9794c87cb389d4191911ec554890"],["bower_components/paper-behaviors/paper-ripple-behavior.html","ed51cc379e55570173529cd58ca00b59"],["bower_components/paper-button/paper-button.html","75b7eeb8537f75878109d678fd6fd47a"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","7be71396f6425cdd3034470114251938"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","53a7280f7f749585af412cd0fdd02e72"],["bower_components/paper-dialog/paper-dialog.html","be9adca3e4e1f0b7f9c4cb7b33854a3b"],["bower_components/paper-input/paper-input-addon-behavior.html","9f7c79f09b3e662a7a0a0ec2210c5331"],["bower_components/paper-input/paper-input-behavior.html","f64c17333d2b269948f4421fc6e85bd5"],["bower_components/paper-input/paper-input-char-counter.html","3afc53a558e36ccdbb0718b8da52b33a"],["bower_components/paper-input/paper-input-container.html","d90f28b41fbe59cfaae6433e4998716d"],["bower_components/paper-input/paper-input-error.html","270d241c108123335bf6dbe30d9e768f"],["bower_components/paper-input/paper-input.html","66a89eddb35c26f75fa78e894b0773af"],["bower_components/paper-ripple/paper-ripple.html","2dd5636235492ffa1865097755a07c7a"],["bower_components/paper-styles/color.html","2b6b926e5bd4005bdbdcd15a34a50b95"],["bower_components/paper-styles/default-theme.html","9480969fcd665e90201b506a4737fa1a"],["bower_components/paper-styles/element-styles/paper-material-styles.html","b0a38bd2eb6f4c4844d4903a46268c92"],["bower_components/paper-styles/shadow.html","2fbe595f966eebe419b9b91611d6392a"],["bower_components/paper-styles/typography.html","772d86cecdd75864b7d5f6760255665c"],["bower_components/paper-tooltip/paper-tooltip.html","96c31acf8708311eae1c970146126170"],["bower_components/polymer/lib/elements/array-selector.html","9ae9bcc7fe5e256238675eb842b9cfb6"],["bower_components/polymer/lib/elements/custom-style.html","d968919ce88620bba7378b4ea8c4b0c3"],["bower_components/polymer/lib/elements/dom-bind.html","9bb2a5bf62f0b75e779d565e878ef798"],["bower_components/polymer/lib/elements/dom-if.html","0577704b7147fb8fd9b9bb52301ea167"],["bower_components/polymer/lib/elements/dom-module.html","e780c0d0338f3946e0b3f127f28130b0"],["bower_components/polymer/lib/elements/dom-repeat.html","4644973602c21dd56079419a365fbcfb"],["bower_components/polymer/lib/legacy/class.html","2c2bbab65129b0f9d3dd4140ebf3dcc8"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","e0fabe05a80a2842edb9b7b5a163f3dc"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","e89ca5e9c1421be4d784ab41dcc6f0a0"],["bower_components/polymer/lib/legacy/polymer-fn.html","586629197d105f270e1e366ea4cbddb6"],["bower_components/polymer/lib/legacy/polymer.dom.html","cb01670bdf9352728da463243f39e21f"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","4e4e7daa069703e1ba95758389c7d4a2"],["bower_components/polymer/lib/mixins/element-mixin.html","82617886c6826bcf7f7eeef4202d7ae8"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","7f35f61e57ea510704ed3fc90a654627"],["bower_components/polymer/lib/mixins/mutable-data.html","6d79ae84fab84b02860b84c1e4dee7ac"],["bower_components/polymer/lib/mixins/property-accessors.html","e1ec15317f0f386d6a794f00a22842fc"],["bower_components/polymer/lib/mixins/property-effects.html","5e8dabffe931032de8c128dab36e6c32"],["bower_components/polymer/lib/mixins/template-stamp.html","86934301e699a293d2898f920468e884"],["bower_components/polymer/lib/utils/array-splice.html","432cc693e0d2c7e7bcb978f135e3a79b"],["bower_components/polymer/lib/utils/async.html","91c36acd52a46ab7eaaa641f99c61202"],["bower_components/polymer/lib/utils/boot.html","949dbdfda05719804d009b4e584af51c"],["bower_components/polymer/lib/utils/case-map.html","61c3f85b8314adf2d309fdf3e97fddba"],["bower_components/polymer/lib/utils/debounce.html","c697c74f0aee7f7604a3c3f9f64e9c0f"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","6ad9230280900543a8c863499ef1fe23"],["bower_components/polymer/lib/utils/flush.html","2b4324e1cab5c4388ea129e7b17c11c9"],["bower_components/polymer/lib/utils/gestures.html","e951f770d03535bf4fb18de0531cd05f"],["bower_components/polymer/lib/utils/import-href.html","815682f29a28a4ab4ee4e2eeff56f414"],["bower_components/polymer/lib/utils/mixin.html","a9da57f0dc1038c7944c692c3b7e4457"],["bower_components/polymer/lib/utils/path.html","112b4c58b4832d42d5bafed8cb5c512d"],["bower_components/polymer/lib/utils/render-status.html","9a929f20dbe0cb11548c404f1d1a6f55"],["bower_components/polymer/lib/utils/resolve-url.html","0ca3297a6a00175f976ae84425368f9b"],["bower_components/polymer/lib/utils/settings.html","dfd3fa141e4c2f9fd6c21a044c9d1a14"],["bower_components/polymer/lib/utils/style-gather.html","822630aec48921d1ad551396bf7324ad"],["bower_components/polymer/lib/utils/templatize.html","ab78dcd9bc59ca750fa4ceda9b18383c"],["bower_components/polymer/lib/utils/unresolved.html","a1ede4a050418cf897d096dcc8b3bc01"],["bower_components/polymer/polymer-element.html","b2e7dd936aaf08f01c67236ac6f96c33"],["bower_components/polymer/polymer.html","b20eb4dd015d93b8153cc6c3d79662c4"],["bower_components/shadycss/apply-shim.html","f220299c2be1b5040111843d640b70a5"],["bower_components/shadycss/apply-shim.min.js","9cfbbf627603a5a3073f4fc9b97712d1"],["bower_components/shadycss/custom-style-interface.html","0a68ea0f3af7bcb1ca6617e512f720cb"],["bower_components/shadycss/custom-style-interface.min.js","9d7ccbd58300a6ef52a9108de2b6cb7f"],["bower_components/web-animations-js/web-animations-next-lite.min.js","fa336dd9110f3e62dd0f6663cc910b3a"],["bower_components/webcomponentsjs/webcomponents-lite.js","fc5fd8d2c8b27139307536abb8aecda7"],["elements/nexpaq-driver-actions.html","1d1ad9dea7a2ae70baf0c9230322fdf2"],["elements/nexpaq-driver-form-argument.html","4af6203c7414a7410a03803bec73d05f"],["elements/nexpaq-driver-form-command.html","a0979e58b659ad81f8715c7c9dfe04dd"],["elements/nexpaq-driver-form-commands.html","3df804492e2fdb5aa5993dc16efb14c9"],["elements/nexpaq-driver-form-data.html","d0b4f67f6615a1e0eae5fbfbdc40e5f6"],["elements/nexpaq-driver-form-received-data.html","05f27893e80268607c5bb0617213131c"],["elements/nexpaq-driver-form-received-datas.html","b513d8326d29b5726dc9ddd268125459"],["elements/nexpaq-driver-form-states.html","37ce3eca0c05376f901b213545331ff7"],["elements/nexpaq-driver-form-variables.html","4e9ed660ab0f963aa39e35c6e7d20ef0"],["elements/nexpaq-driver-form.html","aaaf3da8811285f4588cc5abd21ad19d"],["elements/nexpaq-driver-interface.html","658d2a7779a4dc643a5792cec63262f5"],["elements/nexpaq-driver-view.html","7dab91ee11ffc82cfc964826df72fc69"],["index.html","d1313105f43532f76fcb384fb4e7b8a0"],["mixins/nexpaq-driver-common-functions.html","50caafd86c1a37a4f863954b71a9f9ac"],["nexpaq-driver-generator.html","412ff7d24cedb3e9b312ec2b5cb2fb85"],["styles/nexpaq-driver-form-common-styles.html","244cdea08dd41642981e78bca5c92045"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







