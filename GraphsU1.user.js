// ==UserScript==
// @name         AT-Zek-GraphsU1
// @namespace    https://github.com/Zorn192/AutoTrimps
// @version      3.0.0-Zek
// @updateURL    https://github.com/Zorn192/AutoTrimps/GraphsU1.user.js
// @description  Graphs Module (only for U1) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Zek
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var script = document.createElement('script');
script.id = 'AutoTrimps-GraphsU1';
script.src = 'https://kahojyun.github.io/AutoTrimps/GraphsU1.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
