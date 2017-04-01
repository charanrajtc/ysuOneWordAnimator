 /*!
  * plugin for ysu youseeu one Word animator using animateccs
  * Author: @charanraj.tc
  * Licensed under the IISC license
  */
 ;
 (function($) {
     if (!$.ysu) {
         $.ysu = {};
     }

     $.ysu.animateOneWordText = function(el, uniqueIdentifier, options) {
         // To avoid scope issues, use 'base' instead of 'this'
         // to reference this class from internal events and functions.
         var base = this;
         // set the plugin name 
         base.pluginName = 'ysu.animateOneWordText';

         // Access to jQuery and DOM versions of element
         base.$el = $(el);
         base.el = el;



         // Add a reverse reference to the DOM object
         base.$el.data("ysu.animateOneWordText", base);

         base.isAnimationinProgress = false;


         base.currentTextIndex = 0;

         base.intervalPromise = null;

         base._falshAnimIn = function() {
             if (base.isAnimationinProgress == false) {
                 base.logMessage('starting In Animation' + base.options.animateTypeIn);
                 base.isAnimationinProgress = true;
                 base.$el.removeClass('animated ' + base.options.animateDurationIn +
                     ' ' + base.options.animateTypeIn).addClass('animated ' + base.options.animateDurationIn +
                     ' ' + base.options.animateTypeIn).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                     function() {
                         base.$el.removeClass('animated ' + base.options.animateDurationIn +
                             ' ' + base.options.animateTypeIn);
                         base.logMessage('ending In Animation' + base.options.animateTypeIn);
                         base.isAnimationinProgress = false;
                         setTimeout(function() {
                             base.logMessage('Time Out Ended');
                             base._falshAnimOut();
                         }, base.options.delayInOut);
                     });
             }
         }

         base._falshAnimOut = function() {
             if (base.isAnimationinProgress == false) {
                 base.logMessage('starting Out Animation' + base.options.animateTypeOut);
                 base.isAnimationinProgress = true;
                 base.$el.removeClass('animated ' + base.options.animateDurationOut + ' ' +
                     base.options.animateTypeOut).addClass('animated ' + base.options.animateDurationOut + ' ' +
                     base.options.animateTypeOut).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                     function() {
                         base.$el.removeClass('animated ' + base.options.animateDurationOut + ' ' +
                             base.options.animateTypeOut);
                         base.logMessage('ending Out Animation' + base.options.animateTypeOut);
                         base.isAnimationinProgress = false;
                         base.$el.html("");
                         base.falshAnim();
                     });
             }

         }


         base.falshAnim = function() {
             base.rotateText();
             base._falshAnimIn();
         };

         base.handleInterval = function() {
             base.logMessage('handling Interval');
             base.rotateText();
             base.falshAnim();
         }

         base.rotateText = function() {
             if (base.isAnimationinProgress == false) {
                 base.currentTextIndex += 1;
                 base.currentTextIndex = base.currentTextIndex % base.options.animateWords.length;
                 base.$el.html(base.options.animateWords[base.currentTextIndex]);
                 base.logMessage('rotating text : ' + base.options.animateWords[base.currentTextIndex]);
             }
         }

         base.init = function() {
             base.uniqueIdentifier = uniqueIdentifier;

             base.options = $.extend({}, $.ysu.animateOneWordText.defaultOptions, options);

             // Put your initialization code here
             base.logMessage('initializing the plugin');
             if (typeof base.uniqueIdentifier !== 'string') {
                 base.logMessage('has no uniqueIdentifier or not a string ', base.uniqueIdentifier);
                 return;
             }

             base.$el.html("");
             base.currentTextIndex = 0;
             base.falshAnim();
             // base.intervalPromise = setInterval(base.handleInterval, 6000);
         };

         // Sample Function, Uncomment to use
         base.logMessage = function(logMessage, logValue) {
             if (base.options.logging) {

                 logMessage = base.pluginName + ': ' + logMessage;
                 if (typeof logValue === typeof undefined) {
                     console.log(logMessage);
                 } else {
                     console.log(logMessage, logValue);
                 }
             }

         };
         // Run initializer
         base.init();
     };

     $.ysu.animateOneWordText.defaultOptions = {
         animateTypeIn: "flipInX",
         animateDurationIn: "duration4",
         animateTypeOut: "flipOutX",
         animateDurationOut: "duration4",
         delayInOut: 300,
         logging: false,
         animateWords: ["Charan Raj T C", "Kiran Kumar", "Sharath Chandra", "sheetal jain"]
     };

     $.fn.ysu_animateOneWordText = function(uniqueIdentifier, options) {
         return this.each(function() {
             (new $.ysu.animateOneWordText(this,
                 uniqueIdentifier, options));
         });
     };

 })(jQuery);

