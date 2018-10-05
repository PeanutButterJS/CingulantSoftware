"use strict";var precacheConfig=[["favicon.png","7750e7eb4201df0015ede6d0862d8be7"],["index.html","bce1d27f4b446863359257419fa613b9"],["main.js","f9f95d7061aaed3cef9c2e55822f3d7c"],["main.js.gz","b38e619da67c2c89b06fc3716908f7a6"],["manifest.json","56a6f2921e13d4a5a6a87093661af058"],["src/assets/fonts/OpenSans-Light.9ff12f694e5951a6f51a9d63b05062e7.ttf","9ff12f694e5951a6f51a9d63b05062e7"],["src/assets/fonts/OpenSans-Regular.d7d5d4588a9f50c99264bc12e4892a7c.ttf","d7d5d4588a9f50c99264bc12e4892a7c"],["src/assets/fonts/SourceSansPro-Black.e495a7368e5f4d3c155daf129b841378.ttf","e495a7368e5f4d3c155daf129b841378"],["src/assets/fonts/icomoon.bf57e68852a198e059a0bf49e488a63e.svg","bf57e68852a198e059a0bf49e488a63e"],["src/assets/fonts/segoesc.5c452fb7a0f5751f4e94e9d84eb01154.ttf","5c452fb7a0f5751f4e94e9d84eb01154"],["src/assets/images/image2.85da19e61cff210363f256cde7d42882.jpg","85da19e61cff210363f256cde7d42882"],["src/assets/images/image3.6f24548cf2cfcca13d056c6e6b532458.jpg","6f24548cf2cfcca13d056c6e6b532458"],["src/assets/images/image4.9890b15fa104c064283732fb99a8d131.jpg","9890b15fa104c064283732fb99a8d131"],["src/assets/images/skyline-district-3302126.5cc3fd116dbe85285791387742d3feac.jpg","5cc3fd116dbe85285791387742d3feac"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});