// ==UserScript==
// @name           OPPL Links
// @namespace      http://www.etlafins.com
// @description    Modifies book links on the Oak Park Public Library website to remove javascript cruft, thus allowing them to be opened in tabs.
// @include        http://catalog.oppl.org/*
// @require        http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js
// ==/UserScript==

$(document).ready(function() {
    $("a[href^='javascript:buildNewList']").each(function() {
        // Strip URL out of method call--bypasses some silly Javascript for handling the "bookbag".
        var href = $(this).attr('href');
        var bits = href.split("'");
        $(this).attr('href', unescape(bits[1]));
    });
});