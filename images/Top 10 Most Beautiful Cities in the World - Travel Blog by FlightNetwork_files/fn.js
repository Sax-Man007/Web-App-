/*
 * FlightNetwork Global Currencies
 * @fileoverview Utilities for handling FlightNetwork Global Currencies.
 * @author narendra.patel@flightnetwork.com (Narendra Patel)
 */
/**
 * @name FNAPP
 * @namespace Namespace of JavaScript Module for FlightNetwork Global Currencies
 */
var FNAPP = FNAPP || {};
/*jshint -W030 */
FNAPP.Currency = (function() {
    'use strict';
    var constants = {
            'en': {
                'SELECT_CURRENCY': 'Select a Currency',
                'SEE_ALL_CURRENCIES': 'All currencies'
            },
            'fr': {
                'SELECT_CURRENCY': 'S&eacute;lectionner une devise',
                'SEE_ALL_CURRENCIES': 'Toute les devises'
            },
            'ZERO': 0,
            'ONE': 1,
            'TWENTY': 20,
            'THREE_THOUSAND_SIX_HUNDRED': 3600,
            'ONE_THOUSAND': 1000,
            'TWENTY_FOUR': 24,
            'THREE_HUNDRED_SIXTY_FIVE': 365,
            'GET': 'GET',
            'JSON': 'json',
            'SLASH': '/',
            'EQUAL': '=',
            'AMPERSAND': '&',
            'QUESTION_MARK': '?',
            'UTILITY': '/flights/utility',
            'ACTION_PARAM': 'action_param',
            'ACTIVE_CURRENCIES': 'active_currencies',
            'LANG': 'lang',
            'EN': 'en',
            'FR': 'fr'
        },
        currencyCSSObj = {
            'currencyMenuEleCssObj': {
                'height': '100%',
                'min-height': '260px',
                'max-height': '430px',
                'overflow-x': 'hidden',
                'overflow-y': 'scroll',
                'position': 'relative'
            },
            'block': {
                'display': 'block'
            },
            'none': {
                'display': 'none'
            },
            'selectedCurrencyEleCSSObj': {
                'min-width': '175px'
            }
        },
        /**
         * Get a value of lang cookie
         * @name getLangCookieVal
         * @return {String} value of cookie
         */
        getLangCookieVal = function() {
            var langCookieVal = getCookie(constants.LANG),
                langParam = langCookieVal === constants.EN.toUpperCase() ? constants.EN :
                langCookieVal === constants.FR.toUpperCase() ? constants.FR :
                constants.EN;
            return langParam;
        },
        /**
         * Set a currency cookie value
         * @name _setCurrencyCookie
         * @param {String} selcurval Value of Currency
         */
        _setCurrencyCookie = function(selcurval) {
            var curVal = selcurval;
            var curCookieExpire = new Date();
            var curCookieExpireTime = constants.THREE_THOUSAND_SIX_HUNDRED * constants.ONE_THOUSAND * constants.TWENTY_FOUR * constants.THREE_HUNDRED_SIXTY_FIVE;
            curCookieExpire.setTime(curCookieExpire.getTime() + curCookieExpireTime);
            document.cookie = "cur_pref=" + escape(curVal) + ";domain=.flightnetwork.com;path=/;expires=" + curCookieExpire.toUTCString();
        },
        /**
         * Get a value from query string params
         * @name _getQueryStringParams
         * @param  {String} sParam Name of param
         * @return {String} sParameterName Return a value of param
         */
        _getQueryStringParams = function(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    return sParameterName[1];
                }
            }
        },
        /**
         * Get a value of currency cookie
         * @name _getCurrencyCookieVal
         * @return {String} Return a cookie value
         */
        _getCurrencyCookieVal = function() {
            return (_getQueryStringParams('currency')) ? _getQueryStringParams('currency').toUpperCase() : getCookie('cur_pref');
        },
        /**
         * Behaviour of Top currencies UI
         * @name setTopCurrenciesHTML
         * @return {Object} HTML of Top currencies
         */
        setTopCurrenciesHTML = function(topCurrenciesJSONObject) {
            var topCurrenciesJSONObjectLength = topCurrenciesJSONObject.length,
                topCurrenciesHTML = '',
                topCurrenciesIncrement = constants.ZERO,
                topCurrenciesSymbol,
                topCurrenciesName,
                topCurrenciesCode;

            for (topCurrenciesIncrement; topCurrenciesIncrement < topCurrenciesJSONObjectLength; topCurrenciesIncrement++) {
                topCurrenciesSymbol = topCurrenciesJSONObject[topCurrenciesIncrement].symbol,
				topCurrenciesName = topCurrenciesJSONObject[topCurrenciesIncrement].name,
				topCurrenciesCode = topCurrenciesJSONObject[topCurrenciesIncrement].code;
                topCurrenciesHTML += '<li>';
                topCurrenciesHTML += '<span class="right-part-link" id="get-curr">';
                topCurrenciesHTML += '<span class="cur-symbol">' + topCurrenciesSymbol + '</span>';
                topCurrenciesHTML += '<span class="cur-country">' + topCurrenciesName + '</span>';
                topCurrenciesHTML += '<span class="currency">' + topCurrenciesCode + '</span>';
                topCurrenciesHTML += '</span>';
                topCurrenciesHTML += '</li>';
            }
            return topCurrenciesHTML;
        },
        /**
         * Behaviour of All currencies UI
         * @name setAllCurrenciesHTML
         * @return {Object} HTML of All currencies
         */
        setAllCurrenciesHTML = function(allCurrenciesJSONObject) {
            var allCurrenciesJSONObjectLength = allCurrenciesJSONObject.length,
                allCurrenciesHTML = '',
                allCurrenciesIncrement = constants.ZERO,
                allCurrenciesSymbol,
                allCurrenciesName,
                allCurrenciesCode;

            for (allCurrenciesIncrement; allCurrenciesIncrement < allCurrenciesJSONObjectLength; allCurrenciesIncrement++) {
                allCurrenciesSymbol = allCurrenciesJSONObject[allCurrenciesIncrement].symbol,
				allCurrenciesName = allCurrenciesJSONObject[allCurrenciesIncrement].name,
				allCurrenciesCode = allCurrenciesJSONObject[allCurrenciesIncrement].code;
                allCurrenciesHTML += '<li>';
                allCurrenciesHTML += '<span class="right-part-link" id="get-curr">';
                allCurrenciesHTML += '<span class="cur-symbol">' + allCurrenciesSymbol + '</span>';
                allCurrenciesHTML += '<span class="cur-country">' + allCurrenciesName + '</span>';
                allCurrenciesHTML += '<span class="currency">' + allCurrenciesCode + '</span>';
                allCurrenciesHTML += '</span>';
                allCurrenciesHTML += '</li>';
            }
            return allCurrenciesHTML;
        },
        /**
         * See all Currencies click event handler
         * @name seeAllCurrenciesClickEvent
         * @return {Object} HTML DOM update
         */
        seeAllCurrenciesClickEvent = function() {
            var currencyMenuListsEle = $('div.dd-menu3 ul li'),
                seeAllCurrenciesEle = $('#seeAllCurrencies'),
                currencyMenuEle = $('div.dd-menu3 ul'),
                selectedCurrencyEle = $('div.dd-menu3 ul > li > span.right-part-link span.cur-country');

            seeAllCurrenciesEle.click(function() {
                var seeAllCurrenciesLiEle = $('div.dd-menu3 ul li#seeAllCurrencies'),
                    currenciesListsUlEle = $('#currenciesLists ul'),
                    currencyNameAnchorEle = $(this).find('#all-curr'),
                    seeAllCurrenciesLiEleIndex = seeAllCurrenciesLiEle.index() + constants.ONE,
                    topCurrenciesLiEle = $('div.dd-menu3 ul li:lt(' + seeAllCurrenciesLiEleIndex + ')'),
                    seeAllCurrenciesScrollTop = constants.ZERO;

                topCurrenciesLiEle.each(function() {
                    seeAllCurrenciesScrollTop += $(this).height();
                });

                $(this).css(currencyCSSObj.none);
                currencyMenuListsEle.css(currencyCSSObj.block);
                currencyMenuEle.css(currencyCSSObj.currencyMenuEleCssObj);
                selectedCurrencyEle.css(currencyCSSObj.selectedCurrencyEleCSSObj);
                currenciesListsUlEle.scrollTop(seeAllCurrenciesScrollTop - constants.TWENTY);
                currencyNameAnchorEle.attr('style', 'color: #4b5054 !important');
                currencyNameAnchorEle.css('text-decoration', 'none');
            });
        },
        /**
         * Currency click event handler
         * @name currencyClickEvent
         * @return {Object} HTML DOM update
         */
        currencyClickEvent = function() {
            var currencyMenuListsEle = $('div.dd-menu3 ul li'),
                seeAllCurrenciesEle = $('#seeAllCurrencies'),
                currencyMenuEle = $('div.dd-menu3 ul'),
                currencyEle = $('#currency'),
                seeAllCurrenciesLiEle = $('div.dd-menu3 ul li#seeAllCurrencies'),
                seeAllCurrenciesLiEleIndex = seeAllCurrenciesLiEle.index() + constants.ONE,
                topCurrenciesLiEle = $('div.dd-menu3 ul li:lt(' + seeAllCurrenciesLiEleIndex + ')'),
                langParam = getLangCookieVal();

            currencyEle.click(function() {
                $(this).parent().css('z-index', '999');
                currencyMenuEle.removeAttr('style');
                seeAllCurrenciesEle.find('#all-curr').removeAttr('style');
                currencyMenuListsEle.css(currencyCSSObj.none);
                seeAllCurrenciesEle.find('#all-curr').html(constants[langParam].SEE_ALL_CURRENCIES);
                if (seeAllCurrenciesEle.css('display') === 'none') {
                    currencyMenuListsEle.css(currencyCSSObj.none);
                    topCurrenciesLiEle.css(currencyCSSObj.block);
                }
            });
        },
        /**
         * Currency drop down click event handler
         * @name currenciesListsulliClickEvent
         * @return {Object} HTML DOM update
         */
        currenciesListsulliClickEvent = function() {
            $('#currenciesLists ul li').not('#seeAllCurrencies, #currenciesSpaceLine').click(function() {
                var selectedCurrencyVal = $(this).find('span#get-curr span.currency').text(),
                    defaultCurrencyEle = $('#currency > span.txt-lable'),
                    currenciesListsEle = $('#currenciesLists'),
                    currencyArrowEle = $('.top-navigation .right-part > ul').find('.up-arrow');

                _setCurrencyCookie(selectedCurrencyVal);
                currenciesListsEle.css(currencyCSSObj.none);
                defaultCurrencyEle.empty().text(selectedCurrencyVal);
                currencyArrowEle.removeClass('up-arrow').addClass('down-arrow');
				updatePriceByCurrency();
            });
        },
        /**
         * Behaviour of currency UI
         * @name currencyHTMLUIActions
         * @return {Object} HTML DOM update
         */
        currencyHTMLUIActions = function() {
            var currencyMenuListsEle = $('div.dd-menu3 ul li'),
                seeAllCurrenciesLiEle = $('div.dd-menu3 ul li#seeAllCurrencies'),
                seeAllCurrenciesLiEleIndex = seeAllCurrenciesLiEle.index() + constants.ONE,
                topCurrenciesLiEle = $('div.dd-menu3 ul li:lt(' + seeAllCurrenciesLiEleIndex + ')');

            currencyMenuListsEle.css(currencyCSSObj.none);
            topCurrenciesLiEle.css(currencyCSSObj.block);
            seeAllCurrenciesClickEvent();
            currencyClickEvent();
            currenciesListsulliClickEvent();
        },
        /**
         * Set a currencies to HTML DOM
         * @name setCurrencies
         * @param {Object} response Response of ajax call
         * @return {Object} HTML DOM update
         */
        setCurrencies = function(response) {
            var currencyJSONObject = response,
                currencyHTML = '',
                topCurrenciesHTML = setTopCurrenciesHTML(currencyJSONObject.top_currencies),
                allCurrenciesHTML = setAllCurrenciesHTML(currencyJSONObject.all_currencies),
                langParam = getLangCookieVal(),
                seeAllCurrenciesSelector = '#seeAllCurrencies',
                currenciesSpaceLineSelector = '#currenciesSpaceLine',
                selectedCurrencyEle = $('#selectedCurrency');

            currencyHTML += '<div id="currenciesLists" class="dd-menu3">';
            currencyHTML += '<span class="select-cur">' + constants[langParam].SELECT_CURRENCY + '</span>';
            currencyHTML += '<ul>';
            currencyHTML += '<li id="currenciesSpaceLine" style="display: block;">';
            currencyHTML += '<span style="border-top: 1px solid #d4d4d4; display: inline-block; margin: 2% 8% 2% 4%; width: 88%;"></span>';
            currencyHTML += '</li>';
            currencyHTML += '<li id="seeAllCurrencies">';
            currencyHTML += '<span class="more-link" id="all-curr">' + constants[langParam].SEE_ALL_CURRENCIES + '</span>';
            currencyHTML += '</li>';
            currencyHTML += '</ul>';
            currencyHTML += '</div>';

            selectedCurrencyEle.find('#currency').after(currencyHTML);
            selectedCurrencyEle.find(currenciesSpaceLineSelector).before(topCurrenciesHTML);
            selectedCurrencyEle.find(seeAllCurrenciesSelector).after(allCurrenciesHTML);
            currencyHTMLUIActions();
        },
        /**
         * Get a top and all currencies from back-end
         * @name getCurrencies
         * @return {Object} Response
         */
        getCurrencies = function() {
            var langParam = getLangCookieVal(),
                seeAllCurrenciesEle = $('#seeAllCurrencies');
            var reqURL = constants.UTILITY + constants.QUESTION_MARK + constants.ACTION_PARAM + constants.EQUAL +
                constants.ACTIVE_CURRENCIES + constants.AMPERSAND + constants.LANG + constants.EQUAL + langParam;

            var jqxhr = $.ajax({
                type: constants.GET,
                async: false,
                url: reqURL,
                dataType: constants.JSON
            });
            jqxhr.done(function(data) {
                setCurrencies(data);
            });
            jqxhr.fail(function() {
                seeAllCurrenciesEle.css(currencyCSSObj.none);
            });
        },
        /**
         * Set a default currency
         * @name setDefaultCurrency
         * @return {Object} HTML DOM update
         */
        setDefaultCurrency = function() {
            var defaultCurrencyEle = $('#currency > span.txt-lable');
            defaultCurrencyEle.empty().text(_getCurrencyCookieVal());
        },
        /**
         * Reset currency drop down when click on body
         * @name resetCurrencyDropdown
         * @return {Object} HTML DOM update
         */
        resetCurrencyDropdown = function() {
            $(document).mouseup(function(e) {
                var currenciesListsEle = '#currenciesLists',
                    currencyArrowEle = $('.top-navigation .right-part > ul').find('.up-arrow');
                if ($(e.target).parents(currenciesListsEle).length === 0 && !$(e.target).is(currenciesListsEle)) {
                    $(currenciesListsEle).css(currencyCSSObj.none);
                    currencyArrowEle.removeClass('up-arrow').addClass('down-arrow');
                }
            });
        },
        /**
         * Register event to reset currency cookie on tab switch.
         * @name resetCurrencyCookie
         * @return {Object} HTML DOM update
         */
        registerCurrencyCookieCheck = function() {
            $(window).focus(function() {
                var cookieCurrency = getCookie('cur_pref');
                var dropDownCurrency = $('#currency > span.txt-lable').html();
                if (cookieCurrency != dropDownCurrency) {
                    _setCurrencyCookie(dropDownCurrency);
                }
            });
        },
        /**
         * Init methods
         * @name init
         * @return {Object} Calling functions
         */
        init = function() {
            setDefaultCurrency();
            resetCurrencyDropdown();
            getCurrencies();
            registerCurrencyCookieCheck();
        },
        /**
         * Private methods
         * @name privateMethods
         */
        privateMethods = {
            constants: constants,
            getCurrencies: getCurrencies,
            setCurrencies: setCurrencies,
            setTopCurrenciesHTML: setTopCurrenciesHTML,
            setAllCurrenciesHTML: setAllCurrenciesHTML,
            currencyHTMLUIActions: currencyHTMLUIActions,
            seeAllCurrenciesClickEvent: seeAllCurrenciesClickEvent,
            currencyClickEvent: currencyClickEvent,
            currenciesListsulliClickEvent: currenciesListsulliClickEvent,
            setDefaultCurrency: setDefaultCurrency,
            resetCurrencyDropdown: resetCurrencyDropdown,
            getLangCookieVal: getLangCookieVal,
            _getQueryStringParams: _getQueryStringParams,
            _getCurrencyCookieVal: _getCurrencyCookieVal,
            _setCurrencyCookie: _setCurrencyCookie
        };
    /**
     * Return a public methods
     */
    return {
        init: init,
        _: privateMethods
    };
})();

$(function() {
    FNAPP.Currency.init();
});