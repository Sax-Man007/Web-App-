
var SWSG;

(function($){




﻿/**
* A simple jQuery plugin for creating animated drilldown menus.
* https://github.com/Cinamonas/jquery-drilldown
* @name jQuery Drilldown
* @version 1.1.1
* @requires jQuery v1.7+
* @author Aleksandras Nelkinas
* @license [MIT]{@link http://opensource.org/licenses/mit-license.php}
*
* Copyright (c) 2015 Aleksandras Nelkinas
*/
!function (t) { "function" === typeof define && define.amd ? define(["jquery"], t) : "object" === typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t, s) { "use strict"; var i = "drilldown", e = "data-next-parent", n = { event: "click", selector: ".subnav-trigger", speed: 100, cssClass: { container: i + "-container", root: i + "-root", sub: i + "-sub", back: i + "-back" } }, o = function () { function o(s, e) { var o = this; this._name = i, this._defaults = n, this.element = s, this.$element = t(s), this.options = t.extend({}, n, e), this._history = [], this._css = { float: "left", width: null }, this.$container = this.$element.find("." + this.options.cssClass.container), this.$element.on(this.options.event + "." + i, this.options.selector, function (s) { h.call(o, s, t(this)) }) } function h(t, s) { var i = s.nextAll("." + this.options.cssClass.sub), e = !0; i.length ? a.call(this, i) : s.closest("." + this.options.cssClass.back).length ? r.call(this) : e = !1, e && "A" === s.prop("tagName") && t.preventDefault() } function a(t, i) { var n = i && i.speed !== s ? i.speed : this.options.speed; t.length && (this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), t.parent().attr(e, !0), t = t.removeClass(this.options.cssClass.sub).addClass(this.options.cssClass.root), this.$container.append(t), c.call(this, { marginLeft: -1 * this._css.width, speed: n }, function () { var s = t.prev(); this._history.push(s.detach()), l.call(this, t) }.bind(this))) } function r(t) { var i = t && t.speed !== s ? t.speed : this.options.speed, n = this._history.pop(); this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), this.$container.prepend(n), c.call(this, { marginLeft: 0, speed: i }, function () { var t = n.next(); t.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find("[" + e + "]").last().removeAttr(e).append(t), l.call(this, n) }.bind(this)) } function c(t, s) { var i = this.$container.children("." + this.options.cssClass.root); i.css(this._css), i.first().animate({ marginLeft: t.marginLeft }, t.speed, s) } function l(t) { t.css({ float: "", width: "", marginLeft: "" }), this.$container.css("width", "") } return o.prototype = { destroy: function () { this.reset(), this.$element.off(this.options.event + "." + i, this.options.selector) }, reset: function () { var t; for (t = this._history.length; t > 0; t--) r.call(this, { speed: 0 }); this._history = [], this._css = { float: "left", width: null } } }, o }(); t.fn[i] = function (s) { return this.each(function () { var e = t.data(this, i), n = s; e ? "string" === typeof n && ("destroy" === n && t.removeData(this, i), "function" === typeof e[n] && e[n]()) : t.data(this, i, new o(this, s)) }) } });


SWSG = {
   Helpers: {
       getQueryParams: function () {
            var queryParams = {};
            if (window.location.search !== "") {
                var splitParams = window.location.search.substring(1).split('&');
                for (var i = 0; i < splitParams.length; i++) {
                    var indParam = splitParams[i].split('=');
                    queryParams[indParam[0]] = decodeURIComponent(indParam[1]);
                }
            }

            return queryParams;
      },

      updateQueryStringParam: function(uri, key, newValue){
          var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
          var separator = uri.indexOf('?') !== -1 ? "&" : "?";
          if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + newValue + '$2');
          } else {
            return uri + separator + key + "=" + newValue;
          }
      },

      objectFitImagesIeFallback: function(){
         /*! npm.im/object-fit-images 3.2.4 */
         //https://github.com/bfred-it/object-fit-images
         var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
         objectFitImages();
      },
      init: function(){
         SWSG.Helpers.objectFitImagesIeFallback();
         SWSG.Query = SWSG.Helpers.getQueryParams();
      }
   },
   Nav: {
      navOpen: false,
      searchOpen: false,
      drilldownWasActivated: false,
      initialWindowWidth: $(window).outerWidth(),
      fixedWrapHeight: $('#fixed-header-wrap').outerHeight(),
      currentfixedWrapHeight: 0,

      //Speed for the drilldown slide down/up
      options: {
         speed: 250
      },

      destroyDrilldown: function () {
         $('#drilldown').drilldown('destroy');
         $("#drilldown").attr("style", "");
         $(".header-menu-btn .menu-icon, .header").removeClass("is-open");
         $("body, html").removeClass("is-locked");
         $("#drilldown").removeClass("keep-on-top");
         this.navOpen = false;
         this.searchOpen = false;
         this.storeDetailOpen = false;
         $(".primary-subnav").attr("style", "");
         $("#fixed-header-wrap").removeClass("drilldownOpen");
         $("#fixed-header-wrap").removeClass("drilldownClosed");
         $('.body-overlay').removeClass('lv-display-block');

         //Set drilldownWasActivated to false determine if we need to reinit if the user resizes back to mobile
         this.drilldownWasActivated = false;
      },

      mobileNavExpand: function () {
         var $headerElem = $('.header');

         // Prevent the body from scrolling
         $('body').toggleClass('is-locked');
         $('html').toggleClass('is-locked');

         // If search is open, close it before opening the menu
         if (!this.navOpen) {
            // Open the nav full-height on mobile
            $headerElem.addClass('is-open');
            this.navOpen = true;
         } else if (this.navOpen) {
            // Close the nav full-height on mobile
            $headerElem.removeClass('is-open');
            this.navOpen = false;
         };
      },

      openSearch: function () {

         // Only open the search on input-click if its not open
         if (!this.searchOpen) {

            // If menu is open, close it before opening the search
            if (this.navOpen) {
               this.mobileNavExpand();
            }
            $('body').addClass('is-locked');
            $('html').addClass('is-locked');
            $('.body-overlay, .header-search').addClass('is-open');
            $('.header-search-btn').removeClass('js-prevent-default');
            $('.header-logo, .utility').addClass('is-hidden');
            $('.header-search-input').focus();

            if($(window).outerWidth() <= 767){
               $('.header-mobile-cta').addClass('is-hidden');
               $('.header-menu-btn .menu-icon').addClass('is-open is-search');
            } else {
               $('.header-search-close').addClass('is-open');
            }

            this.searchOpen = true;
         }
      },

      closeSearch: function () {

         // Only open the search on close-click if it is open
         if (this.searchOpen) {
            $('body').removeClass('is-locked');
            $('html').removeClass('is-locked');
            $('.body-overlay, .header-search').removeClass('is-open');
            $('.header-search-btn').addClass('js-prevent-default');
            $('.header-logo, .utility').removeClass('is-hidden');

            if($(window).outerWidth() <= 767){
               $('.header-mobile-cta').removeClass('is-hidden');
               $('.header-menu-btn .menu-icon').removeClass('is-open is-search');
            } else {
               $('.header-search-close').removeClass('is-open');
            }

            this.searchOpen = false;
         }
      },

      windowResizeHandler: function (_fixedWrapHeight) {
         var widthCheck = $(window).outerWidth();

         //We only check for width because mobile browsers that hide the address bar on scroll (and thus have their height change) triggers the resize event. That is why mobile browsers were jumpy before
         if (widthCheck != this.initialWindowWidth) {

            //Reinit the drilldown mobile menu options when the page is resized to mobile
            if (widthCheck <= 767) {

               if (!this.drilldownWasActivated) {
                  $("#drilldown").drilldown(this.options);

                  //Set drilldownWasActivated to true so we can use this to detect if we need to reset the menu on window resize
                  this.drilldownWasActivated = true;
               }

               //Close the search box if the user resizes to mobile
               if (this.searchOpen) {
                  this.closeSearch();
               }
            }

            //Reset this so if a user is on a mobile device and rotates, we have a new comparison
            this.initialWindowWidth = widthCheck;
         }

         if (widthCheck >= 768) {
            //Get rid of the plugins and mobile-specific transparent background styling when resizing from mobile to desktop if the drilldown has been activated. We only do it if it was activated; otherwise the drilldown turns on on desktop which causes styling issues
            if (this.drilldownWasActivated) {
               this.destroyDrilldown();
            }
         }
      },

      windowScrollHandler: function () {

          // TODO: hiding the pink bar messes up the calculation for when to stick the nav back to the top


          var snapAt = $('.header-utility').outerHeight();

          // check for wordpress admin bar -> needless detail (except that u can't click anything on the pink bar when you're logged into wordpress)
          var wp = $('#wpadminbar');
          if( wp.length > 0 ){
              snapAt += wp.outerHeight();
              $('#fixed-header-wrap').css("top", wp.outerHeight());
          }




         //Add/remove a class to the header when the user scrolls the height of the fixed-header-wrap (this class controls the styling of the header on sticky)
         // if ($(window).scrollTop() > this.fixedWrapHeight) {
         if ($(window).scrollTop() > snapAt) {
            $('#fixed-header-wrap, .body-overlay').addClass('is-fixed');
         } else {
            $('#fixed-header-wrap, .body-overlay').removeClass('is-fixed');
         }
      },

      init: function () {
         var fixedheight = $('#fixed-header-wrap').outerHeight();
         SWSG.Nav.fixedWrapHeight = fixedheight;
         SWSG.Nav.currentfixedWrapHeight = fixedheight;
         var widthCheck = $(window).outerWidth();

         // Mobile Functions
         if (widthCheck <= 767) {
            // Set up the drilldown mobile menu options when the page is loaded on mobile
            $("#drilldown").drilldown(SWSG.Nav.options);

            //Set to true so we can use this to detect if we need to destroy/reinit the menu on window resize
            SWSG.Nav.drilldownWasActivated = true;

            // If on mobile, toggle the drilldown mobile menu on menu button click
            $('.menu-icon').on('click', function (e) {
               e.preventDefault();

               // Control the menu button styling
               $('.header-menu-btn .menu-icon').toggleClass('is-open');

               if (!SWSG.Nav.searchOpen) {
                  SWSG.Nav.mobileNavExpand();
               } else {
                  SWSG.Nav.closeSearch();
               }
            });
        }

         // Mobile Global Search Functionality & Width Expand
         $('input[name="search"]').keydown(function (e) {
            if (e.keyCode === 13) {
               e.stopPropagation();
            }
         });

         // Either open search, or if search is open, allow the sumbmit button to submit
         $('.header-search-btn.js-prevent-default').click(function (e) {
            if($(this).hasClass('js-prevent-default')){
               e.preventDefault();
               SWSG.Nav.openSearch();
            } else{
               return true;
            }
         });

         // Close search on mobile
         $('.menu-icon.is-open.is-search, .body-overlay').click(function () {
            SWSG.Nav.closeSearch();
         });

         // Close search on desktop
         $('.header-search-close').click(function () {
            SWSG.Nav.closeSearch();
         });

         // Nav Resize & Scroll Handlers
         $(window).resize(function () {
            widthCheck = $(window).outerWidth();
            SWSG.Nav.windowResizeHandler($('#fixed-header-wrap').height());
         });

         $(window).scroll(function (e) {
            SWSG.Nav.windowScrollHandler(widthCheck);
         });

         // check for wordpress admin bar
         var wp = $('#wpadminbar');
         if( wp.length > 0 ){
             $('#fixed-header-wrap').css("top", wp.outerHeight());
         }
      }
   },

   FormsUI: {
      placeholderTextSwap: function () {
         // Move placeholder to new label position on focus
         var placeholderText = '',
            inputElement = $('input, textarea, select'),
            inputName = '';

         function addPlaceholder(element) {
            element.siblings('.form-placeholder-swap-label').text(placeholderText);
            element.siblings('.form-placeholder-swap-label').addClass('is-active');
         }

         function removePlaceholder(element) {
            element.siblings('.form-placeholder-swap-label').text('');
            element.siblings('.form-placeholder-swap-label').removeClass('is-active');
         }

         // Swap input elements
         inputElement.on('focusin', function () {
            inputName = $(this).attr('name');
            placeholderText = $('label.lv-visually-hidden[for=' + inputName + '').text();
            $(this).attr('placeholder', '');
            addPlaceholder($(this));
         });

         inputElement.on('focusout', function () {
            $(this).attr('placeholder', placeholderText);
            removePlaceholder($(this));
         });
      },
      init: function () {
         SWSG.FormsUI.placeholderTextSwap();
      }
   },

   FormsValidate: {
      getValidateStyles: function (form, validator) {
         setTimeout(function () {
            // For each input, get the label and add to the error-details div if there is an error
            // If no error or the error has been fixed, clear the error styling
            $.each($(':input'), function () {
               var field = $(this);
               var labelHtml = field[0].labels[1];
               var errorLabelStr = '<i class="fas fa-exclamation-triangle"></i>';

               var fieldParent = $(this).parent();
               if (fieldParent.hasClass("custom-select") && !fieldParent.hasClass("is-disabled")) {
                  fieldParent.addClass('error');
               }

               if (field.hasClass('error')) {
                  // We only need to add it once; so if they submit again and there are still errors, we don't want to add it again
                  if (!$(labelHtml).hasClass('is-error')) {
                     $(labelHtml).prepend(errorLabelStr);
                     $(labelHtml).addClass('is-error');
                     $(labelHtml).find('span').addClass('is-error');
                  }
               } else {
                  if ($(labelHtml).hasClass('is-error')) {
                     var iconElem = $(labelHtml).find('<i class="fas fa-exclamation-triangle"></i>');
                     iconElem.detach();
                     $(labelHtml).removeClass('is-error');
                     $(labelHtml).find('span').removeClass('is-error');
                  }
               }
            });
         }, 20);
      },
      init: function () {
         //----------------------------------------------
         // Default validator options
         //----------------------------------------------
         $.validator.setDefaults({
            submitHandler: function () {
               // To do - how to handle reCaptcha
            },
            debug: true,
            invalidHandler: function (form, validator) {
               SWSG.FormsValidate.getValidateStyles(form, validator);
            },
            onkeyup: false,
            onfocusout: false
         });

         //----------------------------------------------
         // Global rules & methods
         //----------------------------------------------

         // Method for validating zipcodes
         $.validator.addMethod("zipcode", function (value, element) {
            return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$|^[a-zA-Z][0-9][a-zA-Z](| )?[0-9][a-zA-Z][0-9]$/.test(value);
         }, "Your ZIP code is invalid");

         // Method for validating date format as mm/dd/yyyy
         $.validator.addMethod("dateUS", function (value, element) {
            var check = false;
            var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            if (re.test(value)) {
               var adata = value.split('/');
               var mm = parseInt(adata[0], 10);
               var dd = parseInt(adata[1], 10);
               var yyyy = parseInt(adata[2], 10);
               var xdata = new Date(yyyy, mm - 1, dd);
               if ((xdata.getFullYear() === yyyy) && (xdata.getMonth() === mm - 1) && (xdata.getDate() === dd))
                  check = true;
               else
                  check = false;
            } else
               check = false;
            return this.optional(element) || check;
         },
               "Please enter a date in the format mm/dd/yyyy"
           );

         // Rules
         var requiredrule = {
            required: true
         }
         var nameRule = {
            required: true,
            minlength: 2,
            lettersonly: true
         };
         var emailRule = {
            required: true,
            email: true
         }
         var address1Rule = {
            required: true,
            maxlength: 200
         }
         var cityRule = {
            required: true,
            maxlength: 200
         }
         var dropdownRule = {
            required: true
         }
         var zipRule = {
            required: true,
            zipcode: true
         }
         var phoneRule = {
            number: true,
            maxlength: 200
         }
         var phoneRuleRequired = {
            required: true,
            number: true,
            maxlength: 200
         }
         var commentsRule = {
            required: true,
            maxlength: 3500
         }
         var dateRule = {
            required: true,
            dateUS: true
         }

         //----------------------------------------------
         // Find the form(s) you want to
         // validate by it's class name
         //----------------------------------------------
         $("#form-contact").validate({
            ignore: ":hidden:not(#State)",
            errorContainer: '#form-contact .form-error-details',
            errorLabelContainer: '#form-contact .form-error-details ul',
            wrapper: 'li',
            rules: {
               FirstName: nameRule,
               LastName: nameRule,
               AddressLine1: address1Rule,
               City: cityRule,
               State: dropdownRule,
               Zip: zipRule,
               Email: emailRule,
               Phone: phoneRuleRequired,
               Date: dateRule,
               Comments: commentsRule
            },
            messages: {
               FirstName: "Please enter your first name",
               LastName: "Please enter your last name",
               AddressLine1: {
                  required: "Address is required",
                  maxlength: "Address must be less than 200 characters"
               },
               City: {
                  required: "City is required",
                  maxlength: "City must be less than 200 characters"
               },
               State: "State is required",
               Zip: {
                  required: "Zip is required",
                  zipcode: "Zip code is invalid"
               },
               Email: "Please enter a valid email address",
               Phone: {
                  required: "Phone is required",
                  number: "Phone may only include numbers"
               },
               Comments: {
                  required: "Comments are required",
                  maxlength: "Comments must be less than 3500 characters"
               },
               Date: {
                  required: "A valid date is required",
                  dateRule: "Dates must be in the format 01/01/2020"
               }
            }
         });
      }
   },

   FilterReports: {

      toggleFilterPanel: function(){
         $('.filter-panel').toggleClass('is-open');
         $('html, body').toggleClass('is-locked');
      },

      selectAllFilters: function(e){
         $(e).parent().find('input[type=checkbox]').prop('checked', true);
         $(e).addClass('js-all-selected');
         $(e).text('Unselect All');
      },

      clearSelectedFilters: function(e){
         $(e).parent().find('input[type=checkbox]').prop('checked', false);

         $(e).removeClass('js-all-selected');
         $(e).text('Select All');
      },

      clearAllFilters: function(e){
         $('.filter-panel input[type=checkbox]').prop('checked', false);
         SWSG.FilterReports.buildApplyUrl();
      },

      clickListeners: function(){
         // Popout the filter panel
         $('.js-filters-panel-toggle').click(function(){
            SWSG.FilterReports.toggleFilterPanel();
         });

         // Select/unselect all filters in a category
         $('.js-filters-select-all').click(function(){
            if(!$(this).hasClass('js-all-selected')){
               SWSG.FilterReports.selectAllFilters(this);
            } else {
               SWSG.FilterReports.clearSelectedFilters(this);
            }
            SWSG.FilterReports.buildApplyUrl();
         });

         // Clear all filters
         $('.js-filters-clear-all').click(function(){
            SWSG.FilterReports.clearAllFilters(this);
         });

         // Apply all filters
         $('.js-filters-apply-filters').click(function(){
             window.location.href = $(this).attr('data-url');
         });

         $('.filter-panel .accordion-item input[type=checkbox]').on("change", function(){
             SWSG.FilterReports.buildApplyUrl();
         })

         $("input[name=pagination-input]").on("keydown",function search(e) {
            if(e.keyCode == 13) {
                var newPage = parseInt($(this).val());
                var maxPage = parseInt($('.pagination-total').text());

                if( isNaN(newPage) || newPage < 1 || newPage > maxPage ){
                    alert("That page number is out of range. Please type in a number between 1 and " + maxPage + " to jump to that page.");
                    $(this).val(1);
                } else {
                    SWSG.FilterReports.goToPage(newPage);
                }
            }
         });

         $('.pagination .next-page').on("click", function(e){
            e.preventDefault();

            var curPage = SWSG.Query["page"] || 1;
            curPage = parseInt(curPage);

            SWSG.FilterReports.goToPage( curPage + 1 );
         });

         $('.pagination .prev-page').on("click", function(e){
            e.preventDefault();

            var curPage = SWSG.Query["page"] || 1;
            curPage = parseInt(curPage);

            SWSG.FilterReports.goToPage( curPage - 1 );
         });


      },

      goToPage: function(page){
          var url = SWSG.Helpers.updateQueryStringParam(document.location.pathname + document.location.search, "page", page);
          window.location.href = url;
      },


      // get active filters on page load
      setActive: function(){
          var curQuery = SWSG.Query;
          var groups = $('.filter-panel .accordion-item');
          var filterString = "";

          if( groups.length > 0 ){
              groups.each( function(){
                  var activeFilters = [];

                  var q = $(this).attr('data-query');
                  if( curQuery[q] ){
                      var items = $(this).find('input[type=checkbox]');
                      if( items.length > 0 ){
                          items.each(function(){
                              var val = $(this).attr('value');

                              if( curQuery[q].indexOf(val) !== -1 ){
                                  this.checked = true;
                                  activeFilters.push( $(this).attr('data-title') );
                              }
                          })
                      }

                  }

                  if( activeFilters.length > 0 ){
                      filterString += "<span><strong>" + $(this).attr('data-title') + ":</strong> " + activeFilters.join(", ") + "</span><br />";
                  }
              });
          }

          if( filterString !== "" ){
              $(".j-filters").empty().append(filterString).parent().show();
          }
      },




      // build and set the resulting filter url
      buildApplyUrl: function(){
          var urlBase = document.location.pathname;
          var url = "";

          var groups = $('.filter-panel .accordion-item');

          groups.each( function(){
              var q = $(this).attr('data-query');
              var items = $(this).find('input[type=checkbox]:checked');

              if( items.length > 0 ){

                  if( url === "" ){
                      url += "?" + q + "=";
                  } else {
                      url += "&" + q + "=";
                  }

                  var valArray = [];

                  items.each(function(){
                      var val = $(this).attr('value');
                      valArray.push(val);
                  });

                  url += valArray.join(",");
              }
          });

          $('.js-filters-apply-filters').attr('data-url', urlBase + url);
      },

      init: function(){
         SWSG.FilterReports.clickListeners();
         SWSG.FilterReports.setActive();
      }
   },

   UI: {
      clickListeners: function(){
         // Accordions
         $('.accordion-expand-trigger').click(function(){
            $(this).parent().toggleClass('is-open');
         });
      },
      init: function(){
         SWSG.UI.clickListeners();
      }
   }
};

$(document).ready(function () {
   SWSG.Helpers.init();
   SWSG.UI.init();
   SWSG.Nav.init();
   SWSG.FormsUI.init();
   // SWSG.FormsValidate.init();
   SWSG.FilterReports.init();
   SWSG.maps.init();

   if ($('.testimonial-slider').length) {
      TestimonialSlider.init();
   }

   var slider;
   if( $('.slider-wrapper').length ){
       console.log('slider')
       slider = $('.slider-wrapper').slick({
           arrows: false,
           autoplay: true,
           dots: true,
           pauseOnHover: false,
           autoplaySpeed: 5000
       });


       slider.on('init', function(){
           console.log('slider initialized');
       })
   }


});



})(jQuery)
