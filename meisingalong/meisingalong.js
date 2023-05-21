(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["meisingalong"] = factory();
	else
		root["meisingalong"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic event handler. Exists as singleton.
 *
 * @class
 */

var _instance = null;

var EventHandler = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Abstract constructor - must be defined in subclasses.
     *
     * @abstract
     * @public
     */
    function EventHandler() {
        _classCallCheck(this, EventHandler);

        if (_instance) {
            return;
        }
        this._eventMap = new Map();
    }

    /**
     * Adds a callback for loading events.
     *
     * @public
     * @param {string} eventType - event type to subscribe to
     * @param {function} callback - callback function
     * @static
     */


    _createClass(EventHandler, null, [{
        key: 'subscribe',
        value: function subscribe(eventType, callback, caller) {
            var eventHandler = EventHandler._getInstance();
            var callers = eventHandler._eventMap.get(eventType) || new Map();
            var callbacks = callers.get(caller) || new Set();
            callbacks.add(callback.name);
            callers.set(caller, callbacks);
            eventHandler._eventMap.set(eventType, callers);
        }

        /**
         * Removes a callback for loading events.
         *
         * @public
         * @param {string} eventType - event type to unsubscribe from
         * @param {function} callback - callback function
         * @static
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(eventType, callback, caller) {
            var eventHandler = EventHandler._getInstance();
            var callers = eventHandler._eventMap.get(eventType) || new Map();
            var callbacks = callers.get(caller) || new Set();
            callbacks.delete(callback.name);
            callers.set(caller, callbacks);
            eventHandler._eventMap.set(eventType, callers);
        }

        /**
         * Fires event for callbacks.
         *
         * @protected
         * @param {string} eventType - event type to unsubscribe from
         * @param {object} object - object to send in callbacks
         * @static
         */

    }, {
        key: 'publishEvent',
        value: function publishEvent(eventType, object) {
            console.log(eventType + ': %O', object);
            var eventHandler = EventHandler._getInstance();
            var callerMap = eventHandler._eventMap.get(eventType);
            if (callerMap) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = callerMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _step$value = _slicedToArray(_step.value, 2),
                            caller = _step$value[0],
                            callbackMap = _step$value[1];

                        callbackMap.forEach(function (callback) {
                            if (object) {
                                caller[callback](object);
                            } else {
                                caller[callback]();
                            }
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Returns instance.
         *
         * @return {EventHandler} EventHandler instance
         * @static
         */

    }, {
        key: '_getInstance',
        value: function _getInstance() {
            if (!_instance) {
                _instance = new EventHandler();
            }
            return _instance;
        }
    }]);

    return EventHandler;
}();

exports.default = EventHandler;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Enumeration of events.
 *
 * @class
 */
var SingalongEvent = function SingalongEvent() {
  _classCallCheck(this, SingalongEvent);
};

/**
 * Published when audio media has been decoded and ready to use. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */


exports.default = SingalongEvent;
SingalongEvent.AUDIO_DECODED = 'AUDIO_DECODED';

/**
 * Published when audio media has ended playing. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_ENDED = 'AUDIO_ENDED';

/**
 * Published when audio media has been loaded. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_LOADED = 'AUDIO_LOADED';

/**
 * Published when audio media loading started playing. Sends:
 *
 * - string (URL of loaded media)
 * - time: double (time index at which the play command started, in seconds).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_PLAYING = 'AUDIO_PLAYING';

/**
 * Published when audio media has been requested for loading. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_REQUESTED = 'AUDIO_REQUESTED';

/**
 * Published when audio media has stopped playing. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_STOPPED = 'AUDIO_STOPPED';

/**
 * Published when configuration file has been loaded. Sends:
 *
 * - configuration {object}: Configuration object
 *
 * @constant
 * @static
 * @see Configuration
 */
SingalongEvent.CONFIGURATION_LOADED = 'CONFIGURATION_LOADED';

/**
 * Published when an IIIF manifest has been loaded. Sends:
 *
 * - url: string (URL of IIIF manifest).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_MANIFESTLOADED = 'DISPLAY_MANIFESTLOADED';

/**
 * Published when IIIF manifest has been requested for loading. Sends:
 *
 * - url: string (URL of IIIF manifest).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_MANIFESTREQUESTED = 'DISPLAY_MANIFESTREQUESTED';

/**
 * Published when page of an IIIF manifest has been loaded. Sends:
 *
 * - url: string (URL of IIIF manifest)
 * - page: int (page index in manifest).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_PAGELOADED = 'DISPLAY_PAGELOADED';

/**
 * Published when Diva.js viewer has been loaded. Sends:
 *
 * - url: string (URL of IIIF manifest to load).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_VIEWERLOADED = 'DISPLAY_VIEWERLOADED';

/**
 * Published when MEI media has been loaded. Sends:
 *
 * - url: string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.MEI_LOADED = 'MEI_LOADED';

/**
 * Published when MEI media has been parsed. Note that this is not the same
 * as XML parsing. Rather, MEI parsing in this context means that the MEI data has
 * been parsed after XML parsing. Sends:
 *
 * - url: string (URL of loaded media).
 *
 * @constant
 * @static
 */
//SingalongEvent.MEI_PARSED = 'MEI_PARSED';

/**
 * Published when MEI media has been requested for loading. Sends:
 *
 * - url: string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.MEI_REQUESTED = 'MEI_REQUESTED';

/**
 * Published after a successful SingalongManager.load call, when all Singalongs
 * have finished loading.
 *
 * @constant
 * @static
 */
SingalongEvent.SINGALONG_ALLLOADED = 'SINGALONG_ALLLOADED';

/**
 * Published when Singalong is preloading pages. Sends:
 *
 * - singalong: Singalong (instance of Singalong).
 *
 * @constant
 * @static
 */
SingalongEvent.SINGALONG_PRELOADINGPAGES = 'SINGALONG_PRELOADINGPAGES';

/**
 * Published when Singalong is ready to play. Sends:
 *
 * - singalong: Singalong (instance of Singalong).
 *
 * @constant
 * @static
 */
SingalongEvent.SINGALONG_READY = 'SINGALONG_READY';

/**
 * Published when VerovioMedia has parsed MEI and created associated SVG. Sends:
 *
 * - url: string (URL of MEI loaded into Verovio).
 *
 * @constant
 * @static
 */
SingalongEvent.VEROVIO_SVGCREATED = 'VEROVIO_SVGCREATED';

Object.freeze(SingalongEvent);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configuration object.
 */
var Configuration = {

    // Mode.
    // 1 - User play only
    // 2 - Autoplay only.
    // 3 - Both.
    MODE: 3,

    // Autoplay interval (ms).
    AUTOPLAY_INTERVAL: 15000,

    // Application menu title.
    MENU_TITLE: 'Salzinnes Antiphonal',

    // Title div ID.
    TITLE_ID: 'meisingalong-title',

    // Single background color.
    BACKGROUND_COLOR: '#c3bbaf',

    // Polling interval, in milliseconds, for AudioMedia event handling.
    AUDIO_EVENT_INTERVAL: 10,

    // ID of <div> element that contains the DisplayMedia viewer.
    DISPLAY_DIV_ID: 'meisingalong-diva-wrapper',

    // Amount of time to wait, in milliseconds, for preloading a page.
    DISPLAY_PRELOAD_TIME: 4000,

    // Zoom level. While this is a Diva.js setting, it should be set by function
    // OUTSIDE of the initial Diva.js config.
    // THIS SHOULD STAY ABOVE 2.25 FOR PROPER HIGHLIGHTING!!!!!
    DISPLAY_DIVA_ZOOM_LEVEL: 2.25,

    // Use gradient overlay to highlight chant.
    DISPLAY_USE_GRADIENT: true,

    // Percent gradient.
    DISPLAY_GRADIENT_PERCENT: 0.75,

    // Diva settings.
    DIVA_SETTINGS: {
        // fixedPadding: 235,
        enableHighlight: true,
        enableAutoTitle: false,
        enableToolbar: false,
        adaptivePadding: 0.2
    },

    // Scale of highlight box.
    DIVA_HIGHLIGHT_SCALE: 1.2,

    // Diva highlight color.
    DIVA_HIGHLIGHT: 'rgba(0, 255, 0, 0.5)',

    // Use the height of the staff for highlighting.
    DIVA_HIGHLIGHT_USE_STAFF_HEIGHT: false,

    // ID of <div> element that contains the VerovioMedia area.
    VEROVIO_DIV_ID: 'meisingalong-verovio-wrapper',

    // Stems will be hidden iff true.
    VEROVIO_HIDESTEMS: true,

    // Percentage of original scale.
    VEROVIO_SCALE: 100,

    // Linear spacing factor for notes.
    VEROVIO_NOTE_SPACING_FACTOR: 0.23,

    // Verovio highlight color.
    VEROVIO_HIGHLIGHT: '#008800',

    // Will use scrolling Verovio iff true. Then, the VEROVIO_SCROLL configs will be used.
    VEROVIO_USE_SCROLL: false,
    VEROVIO_SCROLL: {

        // Position of 'attack' as percentage relative to containing div (right half of screen).
        VEROVIO_ATTACK_POSITION_X: 0.25,

        // Radius of 'ball'.
        VEROVIO_BALL_RADIUS: 10,

        // Bouncing ball.
        BOUNCING_BALL: true,

        // Hand.
        HAND: false,
        HAND_FONTSIZE: 40,

        // Debug playhead line.
        DEBUG_PLAYHEAD: false
    }
};

////////////////////////////////////////////////////////////////////////////////
// Loader methods
////////////////////////////////////////////////////////////////////////////////
/**
 * Requests filename from the client host. Whatever it gets from the host
 * it will merge with the default configuration.
 *
 * When finished it will fire the provided callback.
 */
Configuration.load = function (filename, callback) {
    'use strict';

    var _this = this;

    var request = new XMLHttpRequest();
    request.open('GET', filename, true);
    request.onreadystatechange = function (event) {
        return _this._handleStateChange(event, filename, callback);
    };
    request.send();
};

/**
 * Handle state change of request.
 */
Configuration._handleStateChange = function (event, filename, callback) {
    'use strict';

    var request = event.currentTarget;
    switch (request.readyState) {
        case 0:
            //UNSENT
            {
                break;
            }

        case 1:
            //OPENED
            {
                break;
            }

        case 2:
            //HEADERS_RECEIVED
            {
                break;
            }

        case 3:
            //LOADING
            {
                break;
            }

        case 4:
            {
                var configuration = JSON.parse(request.response);
                $.extend(this, configuration);
                _EventHandler2.default.publishEvent(SingalongEvent.CONFIGURATION_LOADED, { configuration: this });
                if (callback) {
                    callback();
                }
                break;
            }

        default:
            {
                // TODO error
                console.error('failed to load file ' + filename);
                break;
            }
    }
};

exports.default = Configuration;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _Configuration = __webpack_require__(3);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _verovioToolkit = null;

/**
 * Verovio media display class.
 *
 * @class
 * @see {@link http://www.verovio.org/index.xhtml}
 * @see {@link http://www.verovio.org/javascript.xhtml}
 */

var VerovioMedia = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @param {string} elementId - element ID in which the SVG will be rendered
     * @param {string} url - URL of associated MEI
     * @param {string} meiString - MEI as text
     * @param {number} noteSpacing - Verovio note spacing
     * @param {number} topMarginPercet - Verovio containing div top margin value
     * @public
     */
    function VerovioMedia(elementId, url, meiString, noteSpacing, topMarginPercent) {
        _classCallCheck(this, VerovioMedia);

        this._element = (0, _jquery2.default)('#' + elementId);
        this._url = url;
        this._meiString = meiString;

        // Set options.
        var options = { 'border': 0,
            'scale': _Configuration2.default.VEROVIO_SCALE,
            'spacingLinear': noteSpacing,
            'spacingStaff': 0,
            'spacingSystem': 0 };
        if (_Configuration2.default.VEROVIO_USE_SCROLL) {
            options.noLayout = 1;
        } else {
            this._element.css('margin-right', '5%');
            this._element.css('margin-top', '5%');
        }

        // Check for custom margin on top.
        if (topMarginPercent) {
            this._element.css('margin-top', topMarginPercent.toString() + '%');
        }

        // Create SVG.
        this._verovio = VerovioMedia._getVerovio();

        // If we're displaying all at once, we need to find the best scaling factor.
        var scaleLower = 0;
        var scaleUpper = options.scale;
        this._svg = this._verovio.renderData(this._meiString, JSON.stringify(options));
        this._element.html(this._svg);
        var defaultWidth = (0, _jquery2.default)('svg').width();
        if (!_Configuration2.default.VEROVIO_USE_SCROLL) {
            var scaled = false;
            while (!scaled) {
                var differenceWidth = this._element.find('svg#definition-scale').width() - this._element.width();
                var differenceHeight = this._element.find('svg#definition-scale').height() - this._element.height();
                if (differenceWidth > 0 || differenceHeight > 0) {
                    scaleUpper = options.scale;
                    options.scale -= (scaleUpper - scaleLower) / 2;
                } else if (scaleUpper - scaleLower > 1) {
                    scaleLower = options.scale;
                    options.scale += (scaleUpper - scaleLower) / 2;
                } else {
                    scaled = true;
                }
                this._verovio.setOptions(JSON.stringify(options));
                this._svg = this._verovio.renderData(this._meiString, JSON.stringify(options));
                this._element.html(this._svg);
            }
        }
        this._svgElement = (0, _jquery2.default)('svg');

        // Calculate offset for SVG so we can position 'nicely'.
        this._svgElementY = Math.floor((this._element.height() - this._svgElement.height()) / 2);
        this._element.css('padding-top', this._svgElementY);

        // Calculate scaling.
        var containerWidth = this._element.parent().width();
        var svgDivWidth = this._element.find('svg').width();
        var viewBoxWidth = this._element.find('svg')[1].viewBox.baseVal.width;
        this._svgScaleX = viewBoxWidth / svgDivWidth;

        var attackPosition = this._element.width() * _Configuration2.default.VEROVIO_SCROLL.VEROVIO_ATTACK_POSITION_X;

        // Set initial position.
        this._startingTransformX = _Configuration2.default.VEROVIO_USE_SCROLL ? containerWidth * this._svgScaleX : 0;
        this._attackTransformX = attackPosition * this._svgScaleX;
        this._previousTransformX = this._startingTransformX;
        this._previousTransformY = 0;

        // Add debug line.
        if (_Configuration2.default.VEROVIO_SCROLL.DEBUG_PLAYHEAD && _Configuration2.default.VEROVIO_USE_SCROLL) {
            var line = document.createElementNS(svgNS, 'line');
            line.setAttribute('x1', attackPosition);
            line.setAttribute('y1', 0);
            line.setAttribute('x2', attackPosition);
            line.setAttribute('y2', this._svgElement.height());
            line.setAttribute('style', 'stroke:rgb(255,0,0);stroke-width:2');
            this._svgElement[0].appendChild(line);
        }

        // Hide/show ball.
        if (_Configuration2.default.VEROVIO_USE_SCROLL) {
            if (_Configuration2.default.VEROVIO_SCROLL.BOUNCING_BALL) {
                // Add circle.
                var svg = document.documentElement;
                var svgNS = svg.namespaceURI;
                var circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', attackPosition);
                circle.setAttribute('cy', 0);
                circle.setAttribute('r', _Configuration2.default.VEROVIO_SCROLL.VEROVIO_BALL_RADIUS);
                circle.setAttribute('fill', _Configuration2.default.VEROVIO_HIGHLIGHT);
                circle.setAttribute('id', 'meisingalong-circle');
                this._svgElement[0].appendChild(circle);
                (0, _jquery2.default)(this._circle).hide();
            }

            // Hide/show hand.
            if (_Configuration2.default.VEROVIO_SCROLL.HAND) {
                // Add hand.
                var halfHandSize = _Configuration2.default.VEROVIO_SCROLL.HAND_FONTSIZE / 2;
                var hand = document.createElementNS(svgNS, 'text');
                hand.setAttribute('x', attackPosition - halfHandSize);
                hand.setAttribute('y', 30);
                hand.setAttribute('style', 'stroke:rgb(0,0,0); font-size: ' + _Configuration2.default.VEROVIO_SCROLL.HAND_FONTSIZE + 'px');
                hand.setAttribute('id', 'meisingalong-hand');
                hand.setAttribute('rotate', 90);
                (0, _jquery2.default)(hand).text('☞');
                this._svgElement[0].appendChild(hand);
                (0, _jquery2.default)(this._hand).hide();
            }
        }

        // Force a 'redraw' so the circle and hand show.
        this._element.html(this._element.html());
        this._circle = (0, _jquery2.default)('#meisingalong-circle')[0];
        this._hand = (0, _jquery2.default)('#meisingalong-hand')[0];

        // Hide stems if required.
        if (_Configuration2.default.VEROVIO_HIDESTEMS) {
            this._element.find('g rect').hide();
        }

        // Highlight members.
        this._previousNoteId = null;

        // Timer members.
        this._previousEventTime = 0;
        this._nextEventTime = 0;
        this._estimatedCurrentPlaytime = 0;

        // Position spline.
        this._spline = null;

        // Get layer to move.
        this._layerToMove = (0, _jquery2.default)('svg g.page-margin')[0];

        // There's an offset between the layer we wish to move and its container.
        this._offsetX = this._layerToMove.getBoundingClientRect().left * -1 / this._svgScaleX;

        this._test = this._layerToMove.getBoundingClientRect().top * 2 / this._svgScaleX;
    }

    /**
     * Highlight the note with the provided ID.
     *
     * @param {string} noteId - note ID from MEI
     * @public
     * @todo magic numbers!
     */


    _createClass(VerovioMedia, [{
        key: 'highlight',
        value: function highlight(playtime, noteId, nextPlaytime, nextHighlight) {
            this._highlightNote(noteId);
            this._estimatedCurrentPlaytime = Math.floor(playtime * 1000);
            this._previousEventTime = this._estimatedCurrentPlaytime;
            this._previousTransformX = this.getSVGTransformXForNote(noteId);
            this._previousTransformY = this.getSVGTransformYForNote(noteId);
            if (nextPlaytime && nextHighlight) {
                this._nextEventTime = Math.floor(nextPlaytime * 1000);
            }
        }

        /**
         * Start event. Starts scrolling to first note.
         *
         * @public
         * @todo
         */

    }, {
        key: 'start',
        value: function start(playtime, nextPlaytime, nextHighlight) {
            this._estimatedCurrentPlaytime = Math.floor(playtime * 1000);
            this._previousEventTime = this._estimatedCurrentPlaytime;
            if (nextPlaytime && nextHighlight) {
                this._nextEventTime = Math.floor(nextPlaytime * 1000);
            }
        }

        /**
         * Given a note ID from the Verovio MEI, returns the SVG X transform that will be used to position the SVG.
         *
         * @public
         * @param {string} noteId - MEI ID of note
         * @return {double} X transform to apply to SVG layer
         */

    }, {
        key: 'getSVGTransformXForNote',
        value: function getSVGTransformXForNote(noteId) {
            var note = (0, _jquery2.default)("#" + noteId + ' use')[0];
            return note.getAttribute('x') * -1 + this._offsetX + this._attackTransformX;
        }

        /**
         * Given a note ID from the Verovio MEI, returns the SVG Y transform that will be used to position the SVG.
         *
         * @public
         * @param {string} noteId - MEI ID of note
         * @return {double} Y SVG position
         */

    }, {
        key: 'getSVGTransformYForNote',
        value: function getSVGTransformYForNote(noteId) {
            var note = (0, _jquery2.default)("#" + noteId + ' use')[0];
            return note.getBoundingClientRect().top - this._svgElementY;
        }

        /**
         * Creates spline for smooth scrolling based on provided points.
         *
         * @public
         * @param {[[double, double]]} points - array of points; each point is [time index, SVG X transform]
         * @see {@link https://github.com/Tagussan/BSpline}
         */

    }, {
        key: 'createSpline',
        value: function createSpline(points) {
            // We have to make sure to add the start point.
            // @todo magic number
            points.unshift(0, this._startingTransformX);
            var curvePoints = this._getCurvePoints(points, 0.4, 9000);
            this._spline = new Map();
            for (var i = 0; i < curvePoints.length; i += 2) {
                this._spline.set(Math.floor(curvePoints[i]), curvePoints[i + 1]);
            }
        }

        /**
         * Returns URL.
         *
         * @public
         * @return {string} URL associated with MEI given to Verovio
         */

    }, {
        key: 'activate',


        /**
         * Shows the associated <div> holding the SVG.
         */
        value: function activate() {
            this._element.show();
            this._setTransformX(this._startingTransformX);
            this._estimatedCurrentPlaytime = 0;
            (0, _jquery2.default)('g.note').attr('fill', '#000').attr('stroke', '#000');
        }

        /**
         * Hides the associated <div> holding the SVG.
         */

    }, {
        key: 'deactivate',
        value: function deactivate() {
            this._element.hide();
        }

        /**
         * Handles timer update when active.
         *
         * @public
         */

    }, {
        key: 'update',
        value: function update(playTime) {
            if (_Configuration2.default.VEROVIO_USE_SCROLL) {
                if (this._spline.has(playTime)) {
                    var transformX = this._spline.get(playTime);
                    if (transformX < this._currentTransformX) {
                        this._setTransformX(transformX);
                    }
                }

                // Move ball.
                if (this._nextEventTime > 0 && this._previousEventTime < this._nextEventTime) {
                    var timeBetweenEvents = this._nextEventTime - this._previousEventTime;
                    var timeRemaining = this._nextEventTime - playTime;
                    timeRemaining < 0 ? 0 : timeRemaining;
                    var percentTime = timeRemaining / timeBetweenEvents;
                    var newHeight = this._test * Math.pow(2 * percentTime - 1, 2);

                    // Add the radius of the circle for safety.
                    newHeight += _Configuration2.default.VEROVIO_SCROLL.VEROVIO_BALL_RADIUS;

                    this._circle.setAttribute('cy', newHeight);
                }
            }
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Sets scroll to position.
         *
         * @todo
         */

    }, {
        key: '_setTransformX',
        value: function _setTransformX(x) {
            this._currentTransformX = x;
            this._layerToMove.transform.baseVal.getItem(0).setTranslate(this._currentTransformX, 0);
        }

        /**
         * Highlights the note at the given ID.
         *
         * @todo
         */

    }, {
        key: '_highlightNote',
        value: function _highlightNote(noteId) {
            if (this._previousNoteId) {
                //            $('#' + this._previousNoteId).attr('fill', '#000').attr('stroke', '#000');
            }
            this._element.find('#' + noteId).attr('fill', _Configuration2.default.VEROVIO_HIGHLIGHT).attr('stroke', _Configuration2.default.VEROVIO_HIGHLIGHT);
            this._previousNoteId = noteId;
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE STATIC
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Returns singleton instance of Verovio Toolkit.
         *
         * @return {Object} singleton instance of Verovio Toolkit
         * @private
         * @static
         */

    }, {
        key: 'url',
        get: function get() {
            return this._url;
        }
    }], [{
        key: '_getVerovio',
        value: function _getVerovio() {
            if (!_verovioToolkit) {
                _verovioToolkit = new verovio.toolkit();
            }
            return _verovioToolkit;
        }
    }]);

    return VerovioMedia;
}();

exports.default = VerovioMedia;

VerovioMedia.prototype._getCurvePoints = getCurvePoints;

/*  Curve calc function for canvas 2.3.6
 *  (c) Epistemex 2013-2016
 *  www.epistemex.com
 *  License: MIT
 */
function getCurvePoints(h, t, f, c) {
    if (typeof h === "undefined" || h.length < 2) {
        return new Float32Array(0);
    }t = typeof t === "number" ? t : 0.5;f = typeof f === "number" ? f : 25;var j,
        d = 1,
        e = h.length,
        n = 0,
        m = (e - 2) * f + 2 + (c ? 2 * f : 0),
        k = new Float32Array(m),
        a = new Float32Array(f + 2 << 2),
        b = 4;j = h.slice(0);if (c) {
        j.unshift(h[e - 1]);j.unshift(h[e - 2]);j.push(h[0], h[1]);
    } else {
        j.unshift(h[1]);j.unshift(h[0]);j.push(h[e - 2], h[e - 1]);
    }a[0] = 1;for (; d < f; d++) {
        var o = d / f,
            p = o * o,
            r = p * o,
            q = r * 2,
            s = p * 3;a[b++] = q - s + 1;a[b++] = s - q;a[b++] = r - 2 * p + o;a[b++] = r - p;
    }a[++b] = 1;g(j, a, e, t);if (c) {
        j = [];j.push(h[e - 4], h[e - 3], h[e - 2], h[e - 1], h[0], h[1], h[2], h[3]);g(j, a, 4, t);
    }function g(G, z, B, M) {
        for (var A = 2, H; A < B; A += 2) {
            var C = G[A],
                D = G[A + 1],
                E = G[A + 2],
                F = G[A + 3],
                I = (E - G[A - 2]) * M,
                J = (F - G[A - 1]) * M,
                K = (G[A + 4] - C) * M,
                L = (G[A + 5] - D) * M,
                u = 0,
                v,
                w,
                x,
                y;for (H = 0; H < f; H++) {
                v = z[u++];w = z[u++];x = z[u++];y = z[u++];k[n++] = v * C + w * E + x * I + y * K;k[n++] = v * D + w * F + x * J + y * L;
            }
        }
    }e = c ? 0 : h.length - 2;k[n++] = h[e++];k[n] = h[e];return k;
}if (true) {
    exports.getCurvePoints = getCurvePoints;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(2));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["diva"] = factory(require("jquery"));
	else
		root["diva"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var diva = __webpack_require__(2);
	
	diva.registerPlugin(__webpack_require__(6));
	diva.registerPlugin(__webpack_require__(44));
	diva.registerPlugin(__webpack_require__(45));
	diva.registerPlugin(__webpack_require__(46));
	diva.registerPlugin(__webpack_require__(47));
	diva.registerPlugin(__webpack_require__(48));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	
	var Events = __webpack_require__(4);
	var PluginRegistry = __webpack_require__(5);
	
	var diva = module.exports = {
	    Events: new Events(),
	
	    registerPlugin: function (plugin)
	    {
	        PluginRegistry.register(plugin);
	    },
	
	    /**
	     * Create a new Diva instance at the given element
	     *
	     * @param element {Element}
	     * @param options {Object}
	     * @returns {Diva}
	     */
	    create: function (element, options)
	    {
	        if (diva.find(element))
	            throw new Error('Diva is already initialized on ' + reprElem(element));
	
	        var $elem = $(element);
	        $elem.diva(options);
	
	        return $elem.data('diva');
	    },
	
	    /**
	     * Return the Diva instance attached to the
	     * element, if any.
	     *
	     * @param element
	     * @returns {Diva|null}
	     */
	    find: function (element)
	    {
	        return $(element).data('diva') || null;
	    }
	};
	
	function reprElem(elem)
	{
	    var id = elem.id ? '#' + elem.id : elem.id;
	    var classes = elem.className ? '.' + elem.className.split(/\s+/g).join('.') : '';
	
	    return (id ? id : elem.tagName.toLowerCase()) + classes;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Events;
	
	/**
	 *      Events. Pub/Sub system for Loosely Coupled logic.
	 *      Based on Peter Higgins' port from Dojo to jQuery
	 *      https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js
	 *
	 *      Re-adapted to vanilla Javascript
	 *
	 *      @class Events
	 */
	function Events()
	{
	    this._cache = {};
	}
	
	/**
	 *      diva.Events.publish
	 *      e.g.: diva.Events.publish("PageDidLoad", [pageIndex, filename, pageSelector], this);
	 *
	 *      @class Events
	 *      @method publish
	 *      @param topic {String}
	 *      @param args  {Array}
	 *      @param scope {Object=} Optional - Subscribed functions will be executed with the supplied object as `this`.
	 *          It is necessary to supply this argument with the self variable when within a Diva instance.
	 *          The scope argument is matched with the instance ID of subscribers to determine whether they
	 *              should be executed. (See instanceID argument of subscribe.)
	 */
	Events.prototype.publish = function (topic, args, scope)
	{
	    if (this._cache[topic])
	    {
	        var thisTopic = this._cache[topic];
	
	        if (typeof thisTopic.global !== 'undefined')
	        {
	            var thisTopicGlobal = thisTopic.global;
	            var globalCount = thisTopicGlobal.length;
	
	            for (var i=0; i < globalCount; i++)
	            {
	                thisTopicGlobal[i].apply(scope || null, args || []);
	            }
	        }
	
	        if (scope && typeof scope.getInstanceId !== 'undefined')
	        {
	            // get publisher instance ID from scope arg, compare, and execute if match
	            var instanceID = scope.getInstanceId();
	
	            if (this._cache[topic][instanceID])
	            {
	                var thisTopicInstance = this._cache[topic][instanceID];
	                var scopedCount = thisTopicInstance.length;
	
	                for (var j=0; j < scopedCount; j++)
	                {
	                    thisTopicInstance[j].apply(scope, args || []);
	                }
	            }
	        }
	    }
	};
	
	/**
	 *      diva.Events.subscribe
	 *      e.g.: diva.Events.subscribe("PageDidLoad", highlight, settings.ID)
	 *
	 *      @class Events
	 *      @method subscribe
	 *      @param topic {String}
	 *      @param callback {Function}
	 *      @param instanceID {String=} Optional - String representing the ID of a Diva instance; if provided,
	 *                                            callback only fires for events published from that instance.
	 *      @return Event handler {Array}
	 */
	Events.prototype.subscribe = function (topic, callback, instanceID)
	{
	    if (!this._cache[topic])
	    {
	        this._cache[topic] = {};
	    }
	
	    if (typeof instanceID === 'string')
	    {
	        if (!this._cache[topic][instanceID])
	        {
	            this._cache[topic][instanceID] = [];
	        }
	
	        this._cache[topic][instanceID].push(callback);
	    }
	    else
	    {
	        if (!this._cache[topic].global)
	        {
	            this._cache[topic].global = [];
	        }
	
	        this._cache[topic].global.push(callback);
	    }
	
	    var handle = instanceID ? [topic, callback, instanceID] : [topic, callback];
	
	    return handle;
	};
	
	/**
	 *      diva.Events.unsubscribe
	 *      e.g.: var handle = Events.subscribe("PageDidLoad", highlight);
	 *              Events.unsubscribe(handle);
	 *
	 *      @class Events
	 *      @method unsubscribe
	 *      @param handle {Array}
	 *      @param completely {Boolean=} - Unsubscribe all events for a given topic.
	 *      @return success {Boolean}
	 */
	Events.prototype.unsubscribe = function (handle, completely)
	{
	    var t = handle[0];
	
	    if (this._cache[t])
	    {
	        var topicArray;
	        var instanceID = handle.length === 3 ? handle[2] : 'global';
	
	        topicArray = this._cache[t][instanceID];
	
	        if (!topicArray)
	        {
	            return false;
	        }
	
	        if (completely)
	        {
	            delete this._cache[t][instanceID];
	            return topicArray.length > 0;
	        }
	
	        var i = topicArray.length;
	        while (i--)
	        {
	            if (topicArray[i] === handle[1])
	            {
	                this._cache[t][instanceID].splice(i, 1);
	                return true;
	            }
	        }
	    }
	
	    return false;
	};
	
	/**
	 *      diva.Events.unsubscribeAll
	 *      e.g.: diva.Events.unsubscribeAll('global');
	 *
	 *      @class Events
	 *      @param instanceID {String=} Optional - instance ID to remove subscribers from or 'global' (if omitted,
	 *                                   subscribers in all scopes removed)
	 *      @method unsubscribeAll
	 */
	Events.prototype.unsubscribeAll = function (instanceID)
	{
	    if (instanceID)
	    {
	        var topics = Object.keys(this._cache);
	        var i = topics.length;
	        var topic;
	
	        while (i--)
	        {
	            topic = topics[i];
	
	            if (typeof this._cache[topic][instanceID] !== 'undefined')
	            {
	                delete this._cache[topic][instanceID];
	            }
	        }
	    }
	    else
	    {
	        this._cache = {};
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @module
	 * @private
	 * The global plugin registry.
	 */
	
	var plugins = [];
	
	module.exports = {
	    register: function (plugin)
	    {
	        plugins.push(plugin);
	    },
	    getAll: function ()
	    {
	        return plugins;
	    }
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Diva.JS autoscroll plugin
	Author: Andrew Horwitz
	
	Lets Diva scroll in the primary direction (as determined by
	settings.verticallyOriented) automatically at a given/changeable rate.
	
	Relevant settings:
	    -scrollSpeed: pixels per second (defaults to 10)
	    -disableManualScroll: disables manual scroll while automatic scroll is on (defaults to false)
	    -currentlyAutoScrolling: whether or not autoscroll is currently on
	    -autoScrollRefresh: ms between scrolling actions
	    -disableAutoscrollPrefs: disables the autoscroll preferences panel
	
	Relevant methods:
	    -startScrolling, stopScrolling, toggleScrolling
	    -changeRefresh, changeScrollSpeed (setters for respective options)
	    -disableManualScroll, enableManualScroll
	*/
	
	var jQuery = __webpack_require__(3);
	var diva = __webpack_require__(7);
	
	(function ($)
	{
	    module.exports = (function()
	    {
	        var settings = {};
	        var retval =
	        {
	            init: function(divaSettings, divaInstance)
	            {
	                var pixelsPerScroll;
	                var disableManualScroll;
	                var autoScrollRefresh;
	                var defaultAutoRefresh;
	                var scrollSpeed;
	
	                function log10(x)
	                {
	                    return Math.log(x) / Math.log(10);
	                }
	
	                divaInstance.startScrolling = function()
	                {
	                    if (divaSettings.currentlyAutoScrolling)
	                    {
	                        console.warn("You are trying to start autoscrolling, but it is already scrolling.");
	                        return;
	                    }
	
	                    $("#" + divaSettings.ID + "autoscroll-toggle").text("Turn off");
	                    if (disableManualScroll)
	                    {
	                        divaInstance.disableScrollable();
	                    }
	
	                    divaSettings.currentlyAutoScrolling = true;
	                    restartScrollingInterval();
	                };
	
	                var restartScrollingInterval = function()
	                {
	                    clearInterval(divaSettings.autoScrollInterval);
	                    if (divaSettings.verticallyOriented)
	                    {
	                        divaSettings.autoScrollInterval = setInterval(function(){
	                            divaSettings.viewportObject.scrollTop(divaSettings.viewportObject.scrollTop() + pixelsPerScroll);
	                        }, autoScrollRefresh);
	                    }
	                    else
	                    {
	                        divaSettings.autoScrollInterval = setInterval(function(){
	                            divaSettings.viewportObject.scrollLeft(divaSettings.viewportObject.scrollLeft() + pixelsPerScroll);
	                        }, autoScrollRefresh);
	                    }
	                };
	
	                divaInstance.stopScrolling = function()
	                {
	                    if (!divaSettings.currentlyAutoScrolling)
	                    {
	                        console.warn("You are trying to stop autoscrolling, but it is not currently active.");
	                        return;
	                    }
	
	                    $("#" + divaSettings.ID + "autoscroll-toggle").text("Turn on");
	                    if (disableManualScroll)
	                    {
	                        divaInstance.enableScrollable();
	                    }
	
	                    divaSettings.currentlyAutoScrolling = false;
	                    clearInterval(divaSettings.autoScrollInterval);
	                };
	
	                divaInstance.toggleScrolling = function()
	                {
	                    if (divaSettings.currentlyAutoScrolling)
	                        divaInstance.stopScrolling();
	                    else
	                        divaInstance.startScrolling();
	                };
	
	                divaInstance.changeRefresh = function(newRefresh)
	                {
	                    autoScrollRefresh = newRefresh;
	                    updatePixelsPerScroll();
	                };
	
	                divaInstance.changeScrollSpeed = function(newSpeed)
	                {
	                    scrollSpeed = newSpeed;
	                    updatePixelsPerScroll();
	
	                    $("#" + divaSettings.ID + "autoscroll-pps").val(log10(scrollSpeed));
	                    if (divaSettings.currentlyAutoScrolling)
	                    {
	                        restartScrollingInterval();
	                    }
	                };
	
	                var updatePixelsPerScroll = function()
	                {
	                    autoScrollRefresh = defaultAutoRefresh;
	                    pixelsPerScroll = scrollSpeed / (1000 / autoScrollRefresh);
	
	                    //should be minimum of one otherwise it won't change the actual value
	                    //user can change autoscrollrefresh or scrollspeed; this may overwrite autoScrollRefresh
	                    if (pixelsPerScroll < 1)
	                    {
	                        autoScrollRefresh = autoScrollRefresh * (1 / pixelsPerScroll);
	                        pixelsPerScroll = scrollSpeed / (1000 / autoScrollRefresh);
	                    }
	                };
	
	                divaInstance.disableManualScroll = function()
	                {
	                    disableManualScroll = true;
	                    if (divaSettings.currentlyAutoScrolling)
	                    {
	                        divaInstance.disableScrollable();
	                    }
	                };
	
	                divaInstance.enableManualScroll = function()
	                {
	                    disableManualScroll = false;
	                    if (divaSettings.currentlyAutoScrolling)
	                    {
	                        divaInstance.enableScrollable();
	                    }
	                };
	
	                divaSettings.currentlyAutoScrolling = false;
	                divaSettings.autoScrollInterval = "";
	
	                disableManualScroll = divaSettings.disableManualScroll || false;
	                autoScrollRefresh = divaSettings.autoScrollRefresh || 50;
	                defaultAutoRefresh = autoScrollRefresh;
	
	                divaInstance.changeScrollSpeed((divaSettings.scrollSpeed || 10));
	
	                $(window).on('keyup', function(e)
	                {
	                    if (e.shiftKey && e.keyCode === 32)
	                    {
	                        divaInstance.toggleScrolling();
	                    }
	                });
	
	                if (!divaSettings.disableAutoscrollPrefs)
	                {
	                    var setPosition = function(isFullscreen)
	                    {
	                        if (divaSettings.inFullscreen)
	                        {
	                            var fullscreenTools = $(divaSettings.selector + 'tools');
	                            var toolsMargin = fullscreenTools.css('right');
	                            settings.jqObj.css({
	                                'right': toolsMargin,
	                                'margin-right': 0,
	                                'top': fullscreenTools.offset().top + fullscreenTools.outerHeight() + 15
	                            });
	                        }
	                        else
	                        {
	                            settings.jqObj.css({
	                                'right': $(window).width() - (divaSettings.viewportObject.offset().left + divaSettings.viewportObject.outerWidth()) + divaSettings.scrollbarWidth,
	                                'margin-right': '.6em'
	                            });
	                            settings.jqObj.offset({'top': divaSettings.viewportObject.offset().top + 1});
	                        }
	                    };
	
	                    diva.Events.subscribe('ModeDidSwitch', setPosition, divaSettings.ID);
	
	                    diva.Events.subscribe('ViewerDidLoad', function(s)
	                    {
	                        var autoscrollPrefsString =
	                        "<div id='" + divaSettings.ID + "autoscroll-prefs' class='diva-autoscroll-prefs diva-popup'>" +
	                            "<b>Autoscrolling options:</b><br>" +
	                            "<span class='diva-autoscroll-prefs-text'>Speed:</span>" +
	                            "<input type='range' id='" + divaSettings.ID + "autoscroll-pps' class='diva-autoscroll-pps diva-autoscroll-prefs-input' value='" + log10(scrollSpeed) + "' min='0' max='3' step='0.1'><br>" +
	                            "<span class='diva-autoscroll-prefs-text'>Allow manual scroll:</span>" +
	                            "<input type='checkbox' id='" + divaSettings.ID + "autoscroll-manual' class='diva-autoscroll-manual diva-autoscroll-prefs-input' checked='checked'><br>" +
	                            "<button id='" + divaSettings.ID + "autoscroll-toggle' class='diva-autoscroll-prefs-toggle diva-autoscroll-prefs-input'> Turn on </button>" +
	                        "</div>";
	                        $("#" + divaSettings.ID + "page-nav").before("<div id='" + divaSettings.ID + "autoscroll-icon' class='diva-button diva-autoscroll-icon' title='Expand autoscroll options'></div>");
	                        $("body").prepend(autoscrollPrefsString);
	
	                        $("#" + divaSettings.ID + "autoscroll-pps").on('change', function(e)
	                        {
	                            divaInstance.changeScrollSpeed(Math.pow(10, e.target.value));
	                        });
	
	                        $("#" + divaSettings.ID + "autoscroll-manual").on('change', function(e)
	                        {
	                            if (e.target.checked)
	                                divaInstance.enableManualScroll();
	                            else
	                                divaInstance.disableManualScroll();
	                        });
	
	                        $("#" + divaSettings.ID + "autoscroll-toggle").on('click', divaInstance.toggleScrolling);
	
	                        $("#" + divaSettings.ID + "autoscroll-icon").on('click', function(e)
	                        {
	                            settings.jqObj = $("#" + divaSettings.ID + "autoscroll-prefs");
	
	                            if (settings.jqObj.css('display') === 'none')
	                            {
	                                settings.jqObj.css({'display': 'block'});
	
	                                setPosition(divaSettings.inFullscreen);
	
	                            }
	                            else
	                            {
	                                settings.jqObj.css('display', 'none');
	                            }
	                        });
	                    }, divaSettings.ID);
	                }
	            },
	            pluginName: 'autoscroll',
	            titleText: 'Automatically scrolls page along primary axis'
	        };
	        return retval;
	    })();
	})(jQuery);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (C) 2011-2016 by Wendy Liu, Evan Magoni, Andrew Hankinson, Andrew Horwitz, Laurent Pugin
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/
	
	var jQuery = __webpack_require__(3);
	
	var elt = __webpack_require__(8);
	var HashParams = __webpack_require__(9);
	
	var ActiveDivaController = __webpack_require__(10);
	var diva = __webpack_require__(2);
	var ImageManifest = __webpack_require__(11);
	var createToolbar = __webpack_require__(13);
	var ViewerCore = __webpack_require__(14);
	
	// Start the active Diva tracker
	var activeDiva = new ActiveDivaController(); // jshint ignore: line
	
	module.exports = diva;
	
	// this pattern was taken from http://www.virgentech.com/blog/2009/10/building-object-oriented-jquery-plugin.html
	(function ($)
	{
	    var Diva = function (element, options)
	    {
	        // Global instance variables (set way down in `init`)
	        var settings, viewerState, divaState;
	        var self = this;
	
	        // These are elements that can be overridden upon instantiation
	        // See https://github.com/DDMAL/diva.js/wiki/Settings for more details
	        options = $.extend({
	            adaptivePadding: 0.05,      // The ratio of padding to the page dimension
	            arrowScrollAmount: 40,      // The amount (in pixels) to scroll by when using arrow keys
	            blockMobileMove: false,     // Prevent moving or scrolling the page on mobile devices
	            objectData: '',             // A IIIF Manifest or a JSON file generated by process.py that provides the object dimension data, or a URL pointing to such data - *REQUIRED*
	            enableAutoTitle: true,      // Shows the title within a div of id diva-title
	            enableFilename: true,       // Uses filenames and not page numbers for links (i=bm_001.tif, not p=1)
	            enableFullscreen: true,     // Enable or disable fullscreen icon (mode still available)
	            enableGotoPage: true,       // A "go to page" jump box
	            enableGotoSuggestions: true, // Controls whether suggestions are shown under the input field when the user is typing in the 'go to page' form
	            enableGridIcon: true,       // A grid view of all the pages
	            enableGridControls: 'buttons',  // Specify control of pages per grid row in Grid view. Possible values: 'buttons' (+/-), 'slider'. Any other value disables the controls.
	            enableImageTitles: true,    // Adds "Page {n}" title to page images if true
	            enableKeyScroll: true,      // Captures scrolling using the arrow and page up/down keys regardless of page focus. When off, defers to default browser scrolling behavior.
	            enableLinkIcon: true,       // Controls the visibility of the link icon
	            enableNonPagedVisibilityIcon: true, // Controls the visibility of the icon to toggle the visibility of non-paged pages. (Automatically hidden if no 'non-paged' pages).
	            enableSpaceScroll: false,   // Scrolling down by pressing the space key
	            enableToolbar: true,        // Enables the toolbar. Note that disabling this means you have to handle all controls yourself.
	            enableZoomControls: 'buttons', // Specify controls for zooming in and out. Possible values: 'buttons' (+/-), 'slider'. Any other value disables the controls.
	            fillParentHeight: true,     // Use a flexbox layout to allow Diva to fill its parent's height
	            fixedPadding: 10,           // Fallback if adaptive padding is set to 0
	            fixedHeightGrid: true,      // So each page in grid view has the same height (only widths differ)
	            goDirectlyTo: 0,            // Default initial page to show (0-indexed)
	            hashParamSuffix: null,      // Used when there are multiple document viewers on a page
	            iipServerURL: '',           // The URL to the IIPImage installation, including the `?FIF=` - *REQUIRED*, unless using IIIF
	            inFullscreen: false,        // Set to true to load fullscreen mode initially
	            inBookLayout: false,       // Set to true to view the document with facing pages in document mode
	            inGrid: false,              // Set to true to load grid view initially
	            imageDir: '',               // Image directory, either absolute path or relative to IIP's FILESYSTEM_PREFIX - *REQUIRED*, unless using IIIF
	            maxPagesPerRow: 8,          // Maximum number of pages per row in grid view
	            maxZoomLevel: -1,           // Optional; defaults to the max zoom returned in the JSON response
	            minPagesPerRow: 2,          // Minimum pages per row in grid view. Recommended default.
	            minZoomLevel: 0,            // Defaults to 0 (the minimum zoom)
	            onGotoSubmit: null,         // When set to a function that takes a string and returns a page index, this will override the default behaviour of the 'go to page' form submission
	            pageAliases: {},            // An object mapping specific page indices to aliases (has priority over 'pageAliasFunction'
	            pageAliasFunction: function(){return false;},  // A function mapping page indices to an alias. If false is returned, default page number is displayed
	            pageLoadTimeout: 200,       // Number of milliseconds to wait before loading pages
	            pagesPerRow: 5,             // The default number of pages per row in grid view
	            showNonPagedPages: false,   // Whether pages tagged as 'non-paged' (in IIIF manifests only) should be visible after initial load
	            throbberTimeout: 100,       // Number of milliseconds to wait before showing throbber
	            tileHeight: 256,            // The height of each tile, in pixels; usually 256
	            tileWidth: 256,             // The width of each tile, in pixels; usually 256
	            toolbarParentObject: null,  // The toolbar parent object.
	            verticallyOriented: true,   // Determines vertical vs. horizontal orientation
	            viewportMargin: 200,        // Pretend tiles +/- 200px away from viewport are in
	            zoomLevel: 2                // The initial zoom level (used to store the current zoom level)
	        }, options);
	
	        // Returns the page index associated with the given filename; must called after setting settings.manifest
	        var getPageIndex = function (filename)
	        {
	            return getPageIndexForManifest(settings.manifest, filename);
	        };
	
	        var getPageIndexForManifest = function (manifest, filename)
	        {
	            var i,
	                np = manifest.pages.length;
	
	            for (i = 0; i < np; i++)
	            {
	                if (manifest.pages[i].f === filename)
	                {
	                    return i;
	                }
	            }
	
	            return -1;
	        };
	
	        // Check if a page index is valid
	        var isPageValid = function (pageIndex)
	        {
	            return settings.manifest.isPageValid(pageIndex, settings.showNonPagedPages);
	        };
	
	        var reloadViewer = function (newOptions)
	        {
	            return divaState.viewerCore.reload(newOptions);
	        };
	
	        // Called when the change view icon is clicked
	        var changeView = function (destinationView)
	        {
	            switch (destinationView)
	            {
	                case 'document':
	                    return reloadViewer({
	                        inGrid: false,
	                        inBookLayout: false
	                    });
	
	                case 'book':
	                    return reloadViewer({
	                        inGrid: false,
	                        inBookLayout: true
	                    });
	
	                case 'grid':
	                    return reloadViewer({
	                        inGrid: true
	                    });
	
	                default:
	                    return false;
	            }
	        };
	
	        //toggles between orientations
	        var toggleOrientation = function ()
	        {
	            var verticallyOriented = !settings.verticallyOriented;
	
	            //if in grid, switch out of grid
	            reloadViewer({
	                inGrid: false,
	                verticallyOriented: verticallyOriented,
	                goDirectlyTo: settings.currentPageIndex,
	                verticalOffset: divaState.viewerCore.getYOffset(),
	                horizontalOffset: divaState.viewerCore.getXOffset()
	            });
	
	            return verticallyOriented;
	        };
	
	        // Called when the fullscreen icon is clicked
	        var toggleFullscreen = function ()
	        {
	            reloadViewer({
	                inFullscreen: !settings.inFullscreen
	            });
	        };
	
	        var getState = function ()
	        {
	            var view;
	
	            if (settings.inGrid)
	            {
	                view = 'g';
	            }
	            else if (settings.inBookLayout)
	            {
	                view = 'b';
	            }
	            else
	            {
	                view = 'd';
	            }
	
	            var layout = divaState.viewerCore.getCurrentLayout();
	            var pageOffset = layout.getPageToViewportCenterOffset(settings.currentPageIndex, viewerState.viewport);
	
	            var state = {
	                'f': settings.inFullscreen,
	                'v': view,
	                'z': settings.zoomLevel,
	                'n': settings.pagesPerRow,
	                'i': settings.enableFilename ? settings.manifest.pages[settings.currentPageIndex].f : false,
	                'p': settings.enableFilename ? false : settings.currentPageIndex + 1,
	                'y': pageOffset ? pageOffset.y : false,
	                'x': pageOffset ? pageOffset.x : false
	            };
	
	            return state;
	        };
	
	        var getLoadOptionsForState = function (state, manifest)
	        {
	            manifest = manifest || settings.manifest;
	
	            var options = ('v' in state) ? getViewState(state.v) : {};
	
	            if ('f' in state)
	                options.inFullscreen = state.f;
	
	            if ('z' in state)
	                options.zoomLevel = state.z;
	
	            if ('n' in state)
	                options.pagesPerRow = state.n;
	
	            // Only change specify the page if state.i or state.p is valid
	            var pageIndex = getPageIndexForManifest(manifest, state.i);
	
	            if (!(pageIndex >= 0 && pageIndex < manifest.pages.length))
	            {
	                pageIndex = state.p - 1;
	
	                // Possibly NaN
	                if (!(pageIndex >= 0 && pageIndex < manifest.pages.length))
	                    pageIndex = null;
	            }
	
	            if (pageIndex !== null)
	            {
	                var horizontalOffset = parseInt(state.x, 10);
	                var verticalOffset = parseInt(state.y, 10);
	
	                options.goDirectlyTo = pageIndex;
	                options.horizontalOffset = horizontalOffset;
	                options.verticalOffset = verticalOffset;
	            }
	
	            return options;
	        };
	
	        var getURLHash = function ()
	        {
	            var hashParams = getState();
	            var hashStringBuilder = [];
	            var param;
	
	            for (param in hashParams)
	            {
	                if (hashParams[param] !== false)
	                    hashStringBuilder.push(param + settings.hashParamSuffix + '=' + encodeURIComponent(hashParams[param]));
	            }
	
	            return hashStringBuilder.join('&');
	        };
	
	        // Returns the URL to the current state of the document viewer (so it should be an exact replica)
	        var getCurrentURL = function ()
	        {
	            return location.protocol + '//' + location.host + location.pathname + location.search + '#' + getURLHash();
	        };
	
	        var getViewState = function(view)
	        {
	            switch (view)
	            {
	                case 'd':
	                    return {
	                        inGrid: false,
	                        inBookLayout: false
	                    };
	
	                case 'b':
	                    return {
	                        inGrid: false,
	                        inBookLayout: true
	                    };
	
	                case 'g':
	                    return {
	                        inGrid: true,
	                        inBookLayout: false
	                    };
	
	                default:
	                    return null;
	            }
	        };
	
	        var showError = function(message)
	        {
	            divaState.viewerCore.showError(message);
	        };
	
	        var ajaxError = function(jqxhr, status, error)
	        {
	            // Show a basic error message within the document viewer pane
	
	            var errorMessage = ['Invalid objectData setting. Error code: ' + jqxhr.status + ' ' + error];
	
	            // Detect and handle CORS errors
	            var dataHasAbsolutePath = settings.objectData.lastIndexOf('http', 0) === 0;
	
	            if (dataHasAbsolutePath && error === '')
	            {
	                var jsonHost = settings.objectData.replace(/https?:\/\//i, "").split(/[/?#]/)[0];
	
	                if (location.hostname !== jsonHost)
	                {
	                    errorMessage.push(
	                        elt('p', 'Attempted to access cross-origin data without CORS.'),
	                        elt('p',
	                            'You may need to update your server configuration to support CORS. For help, see the ',
	                            elt('a', {
	                                href: 'https://github.com/DDMAL/diva.js/wiki/Installation#a-note-about-cross-site-requests',
	                                target: '_blank'
	                            }, 'cross-site request documentation.')
	                        )
	                    );
	                }
	            }
	
	            showError(errorMessage);
	        };
	
	        var loadObjectData = function (responseData, hashState)
	        {
	            var isIIIF, manifest;
	
	            // parse IIIF manifest if it is an IIIF manifest. TODO improve IIIF detection method
	            if (responseData.hasOwnProperty('@context') && (responseData['@context'].indexOf('iiif') !== -1 ||
	                responseData['@context'].indexOf('shared-canvas') !== -1))
	            {
	                isIIIF = true;
	
	                // trigger ManifestDidLoad event
	                // FIXME: Why is this triggered before the manifest is parsed? See https://github.com/DDMAL/diva.js/issues/357
	                diva.Events.publish('ManifestDidLoad', [responseData], self);
	
	                manifest = ImageManifest.fromIIIF(responseData);
	            }
	            else
	            {
	                // IIP support is now deprecated
	                console.warn("Usage of IIP manifests is deprecated. Consider switching to IIIF manifests. Visit http://iiif.io/ for more information.");
	
	                isIIIF = false;
	                manifest = ImageManifest.fromLegacyManifest(responseData, {
	                    iipServerURL: settings.iipServerURL,
	                    imageDir: settings.imageDir
	                });
	            }
	
	            var loadOptions = hashState ? getLoadOptionsForState(hashState, manifest) : {};
	
	            divaState.viewerCore.setManifest(manifest, isIIIF, loadOptions);
	        };
	
	        /** Parse the hash parameters into the format used by getState and setState */
	        var getHashParamState = function ()
	        {
	            var state = {};
	
	            ['f', 'v', 'z', 'n', 'i', 'p', 'y', 'x'].forEach(function (param)
	            {
	                var value = HashParams.get(param + settings.hashParamSuffix);
	
	                // `false` is returned if the value is missing
	                if (value !== false)
	                    state[param] = value;
	            });
	
	            // Do some awkward special-casing, since this format is kind of weird.
	
	            // For inFullscreen (f), true and false strings should be interpreted
	            // as booleans.
	            if (state.f === 'true')
	                state.f = true;
	            else if (state.f === 'false')
	                state.f = false;
	
	            // Convert numerical values to integers, if provided
	            ['z', 'n', 'p', 'x', 'y'].forEach(function (param)
	            {
	                if (param in state)
	                    state[param] = parseInt(state[param], 10);
	            });
	
	            return state;
	        };
	
	        var checkLoaded = function()
	        {
	            if (!viewerState.loaded)
	            {
	                console.warn("The viewer is not completely initialized. This is likely because it is still downloading data. To fix this, only call this function if the isReady() method returns true.");
	                return false;
	            }
	            return true;
	        };
	
	        var init = function ()
	        {
	            // In order to fill the height, use a wrapper div displayed using a flexbox layout
	            var wrapperElement = elt('div', {
	                class: "diva-wrapper" + (options.fillParentHeight ? " diva-wrapper-flexbox" : "")
	            });
	            element.appendChild(wrapperElement);
	            options.toolbarParentObject = options.toolbarParentObject || $(wrapperElement);
	
	            var viewerCore = new ViewerCore(wrapperElement, options, self);
	
	            viewerState = viewerCore.getInternalState();
	            settings = viewerCore.getSettings();
	
	            // Add the ID to the wrapper element now that the ID has been generated by the viewer core
	            wrapperElement.id = settings.ID + 'wrapper';
	
	            divaState = {
	                viewerCore: viewerCore,
	                toolbar: settings.enableToolbar ? createToolbar(self) : null
	            };
	
	            var hashState = getHashParamState();
	
	            if (typeof settings.objectData === 'object')
	            {
	                // Defer execution until initialization has completed
	                setTimeout(function ()
	                {
	                    loadObjectData(settings.objectData, hashState);
	                }, 0);
	            }
	            else
	            {
	                var pendingManifestRequest = $.ajax({
	                    url: settings.objectData,
	                    cache: true,
	                    dataType: 'json',
	                    error: ajaxError,
	                    success: function (responseData)
	                    {
	                        loadObjectData(responseData, hashState);
	                    }
	                });
	
	                // Store the pending request so that it can be cancelled in the event that Diva needs to be destroyed
	                viewerCore.setPendingManifestRequest(pendingManifestRequest);
	            }
	        };
	
	        /* PUBLIC FUNCTIONS
	        ===============================================
	        */
	
	        // Returns the title of the document, based on the directory name
	        this.getItemTitle = function ()
	        {
	            return settings.manifest.itemTitle;
	        };
	
	        // Go to a particular page by its page number (with indexing starting at 1)
	            //xAnchor may either be "left", "right", or default "center"; the (xAnchor) side of the page will be anchored to the (xAnchor) side of the diva-outer element
	            //yAnchor may either be "top", "bottom", or default "center"; same process as xAnchor.
	        // returns True if the page number passed is valid; false if it is not.
	        this.gotoPageByNumber = function (pageNumber, xAnchor, yAnchor)
	        {
	            console.warn("This method is deprecated. Consider using gotoPageByIndex(pageIndex, xAnchor, yAnchor) instead.");
	            var pageIndex = parseInt(pageNumber, 10) - 1;
	            return this.gotoPageByIndex(pageIndex, xAnchor, yAnchor);
	        };
	
	        // Go to a particular page (with indexing starting at 0)
	            //xAnchor may either be "left", "right", or default "center"; the (xAnchor) side of the page will be anchored to the (xAnchor) side of the diva-outer element
	            //yAnchor may either be "top", "bottom", or default "center"; same process as xAnchor.
	        // returns True if the page index is valid; false if it is not.
	        this.gotoPageByIndex = function (pageIndex, xAnchor, yAnchor)
	        {
	            pageIndex = parseInt(pageIndex, 10);
	            if (isPageValid(pageIndex))
	            {
	                var xOffset = divaState.viewerCore.getXOffset(pageIndex, xAnchor);
	                var yOffset = divaState.viewerCore.getYOffset(pageIndex, yAnchor);
	
	                viewerState.renderer.goto(pageIndex, yOffset, xOffset);
	                return true;
	            }
	            return false;
	        };
	
	        this.getNumberOfPages = function ()
	        {
	            if (!checkLoaded())
	                return false;
	
	            return settings.numPages;
	        };
	
	        // Get page dimensions in the current view and zoom level
	        this.getPageDimensions = function (pageIndex)
	        {
	            if (!checkLoaded())
	                return null;
	
	            return divaState.viewerCore.getCurrentLayout().getPageDimensions(pageIndex);
	        };
	
	        // Returns the dimensions of a given page index at a given zoom level
	        this.getPageDimensionsAtZoomLevel = function (pageIdx, zoomLevel)
	        {
	            if (!checkLoaded())
	                return false;
	
	            if (zoomLevel > settings.maxZoomLevel)
	                zoomLevel = settings.maxZoomLevel;
	
	            var pg = settings.manifest.pages[parseInt(pageIdx, 10)];
	            var pgAtZoom = pg.d[parseInt(zoomLevel, 10)];
	            return {'width': pgAtZoom.w, 'height': pgAtZoom.h};
	        };
	
	        // Returns the dimensions of a given page at the current zoom level
	        // The current page index will be used if no pageIndex is specified
	        // Also works in Grid view
	        this.getPageDimensionsAtCurrentZoomLevel = function(pageIndex)
	        {
	            pageIndex = isPageValid(pageIndex) ? pageIndex : settings.currentPageIndex;
	
	            if (!isPageValid(pageIndex))
	                throw new Error('Invalid Page Index');
	
	            return divaState.viewerCore.getCurrentLayout().getPageDimensions(pageIndex);
	        };
	
	        // Returns the dimensions of the current page at the current zoom level
	        // Also works in Grid view
	        this.getCurrentPageDimensionsAtCurrentZoomLevel = function ()
	        {
	            return this.getPageDimensionsAtCurrentZoomLevel(settings.currentPageIndex);
	        };
	
	        this.isReady = function ()
	        {
	            return viewerState.loaded;
	        };
	
	        this.getCurrentPageIndex = function ()
	        {
	            return settings.currentPageIndex;
	        };
	
	        this.getCurrentPageFilename = function ()
	        {
	            return settings.manifest.pages[settings.currentPageIndex].f;
	        };
	
	        this.getCurrentPageNumber = function ()
	        {
	            console.warn("This method is deprecated. Consider using getCurrentPageIndex() instead.");
	            return settings.currentPageIndex + 1;
	        };
	
	        // Returns an array of all filenames in the document
	        this.getFilenames = function ()
	        {
	            var filenames = [];
	
	            for (var i = 0; i < settings.numPages; i++)
	            {
	                filenames[i] = settings.manifest.pages[i].f;
	            }
	
	            return filenames;
	        };
	
	        // Returns the current zoom level
	        this.getZoomLevel = function ()
	        {
	            return settings.zoomLevel;
	        };
	
	        // gets the maximum zoom level for the entire document
	        this.getMaxZoomLevel = function ()
	        {
	            return settings.maxZoomLevel;
	        };
	
	        // gets the max zoom level for a given page
	        this.getMaxZoomLevelForPage = function (pageIdx)
	        {
	            if (!checkLoaded)
	                return false;
	
	            return settings.manifest.pages[pageIdx].m;
	        };
	
	        this.getMinZoomLevel = function ()
	        {
	            return settings.minZoomLevel;
	        };
	
	        // Use the provided zoom level (will check for validity first)
	        // Returns false if the zoom level is invalid, true otherwise
	        this.setZoomLevel = function (zoomLevel)
	        {
	            if (settings.inGrid)
	            {
	                reloadViewer({
	                    inGrid: false
	                });
	            }
	
	            return divaState.viewerCore.zoom(zoomLevel);
	        };
	
	        this.getGridPagesPerRow = function ()
	        {
	            // TODO(wabain): Add test case
	            return this.pagesPerRow;
	        };
	
	        this.setGridPagesPerRow = function (newValue)
	        {
	            // TODO(wabain): Add test case
	            if (!divaState.viewerCore.isValidOption('pagesPerRow', newValue))
	                return false;
	
	            return reloadViewer({
	                inGrid: true,
	                pagesPerRow: newValue
	            });
	        };
	
	        // Zoom in. Will return false if it's at the maximum zoom
	        this.zoomIn = function ()
	        {
	            return this.setZoomLevel(settings.zoomLevel + 1);
	        };
	
	        // Zoom out. Will return false if it's at the minimum zoom
	        this.zoomOut = function ()
	        {
	            return this.setZoomLevel(settings.zoomLevel - 1);
	        };
	
	        // Check if something (e.g. a highlight box on a particular page) is visible
	        this.isRegionInViewport = function (pageIndex, leftOffset, topOffset, width, height)
	        {
	            var layout = divaState.viewerCore.getCurrentLayout();
	
	            if (!layout)
	                return false;
	
	            var offset = layout.getPageOffset(pageIndex);
	
	            var top = offset.top + topOffset;
	            var left = offset.left + leftOffset;
	
	            return viewerState.viewport.intersectsRegion({
	                top: top,
	                bottom: top + height,
	                left: left,
	                right: left + width
	            });
	        };
	
	        //Public wrapper for isPageVisible
	        //Determines if a page is currently in the viewport
	        this.isPageInViewport = function (pageIndex)
	        {
	            return viewerState.renderer.isPageVisible(pageIndex);
	        };
	
	        //Public wrapper for isPageLoaded
	        //Determines if a page is currently in the DOM
	        this.isPageLoaded = function (pageIndex)
	        {
	            console.warn("This method is deprecated. Consider using isPageInViewport(pageIndex) instead.");
	            return this.isPageInViewport(pageIndex);
	        };
	
	        // Toggle fullscreen mode
	        this.toggleFullscreenMode = function ()
	        {
	            toggleFullscreen();
	        };
	
	        // Show/Hide non-paged pages
	        this.toggleNonPagedPagesVisibility = function ()
	        {
	            reloadViewer({ showNonPagedPages: !settings.showNonPagedPages });
	        };
	
	        // Show non-paged pages
	        this.showNonPagedPages = function ()
	        {
	            reloadViewer({ showNonPagedPages: true });
	        };
	
	        // Hide non-paged pages
	        this.hideNonPagedPages = function ()
	        {
	            reloadViewer({ showNonPagedPages: false });
	        };
	
	        // Close toolbar popups
	        this.closePopups = function ()
	        {
	            divaState.toolbar.closePopups();
	        };
	
	        // Enter fullscreen mode if currently not in fullscreen mode
	        // Returns false if in fullscreen mode initially, true otherwise
	        // This function will work even if enableFullscreen is set to false
	        this.enterFullscreenMode = function ()
	        {
	            if (!settings.inFullscreen)
	            {
	                toggleFullscreen();
	                return true;
	            }
	
	            return false;
	        };
	
	        // Leave fullscreen mode if currently in fullscreen mode
	        // Returns true if in fullscreen mode intitially, false otherwise
	        this.leaveFullscreenMode = function ()
	        {
	            if (settings.inFullscreen)
	            {
	                toggleFullscreen();
	                return true;
	            }
	
	            return false;
	        };
	
	        this.isInFullscreen = function ()
	        {
	            return settings.inFullscreen;
	        };
	
	        // Change views. Takes 'document', 'book', or 'grid' to specify which view to switch into
	        this.changeView = function(destinationView)
	        {
	            return changeView(destinationView);
	        };
	
	        // Enter grid view if currently not in grid view
	        // Returns false if in grid view initially, true otherwise
	        this.enterGridView = function ()
	        {
	            if (!settings.inGrid)
	            {
	                changeView('grid');
	                return true;
	            }
	
	            return false;
	        };
	
	        // Leave grid view if currently in grid view
	        // Returns true if in grid view initially, false otherwise
	        this.leaveGridView = function ()
	        {
	            if (settings.inGrid)
	            {
	                reloadViewer({ inGrid: false });
	                return true;
	            }
	
	            return false;
	        };
	
	        // Jump to a page based on its filename
	        // Returns true if successful and false if the filename is invalid
	        this.gotoPageByName = function (filename, xAnchor, yAnchor)
	        {
	            var pageIndex = getPageIndex(filename);
	            return this.gotoPageByIndex(pageIndex, xAnchor, yAnchor);
	        };
	
	        this.gotoPageByLabel = function (label, xAnchor, yAnchor)
	        {
	            var pages = settings.manifest.pages;
	            for (var i = 0, len = pages.length; i < len; i++)
	            {
	                if (pages[i].l.toLowerCase().indexOf(label.toLowerCase()) > -1)
	                    return this.gotoPageByIndex(i, xAnchor, yAnchor);
	            }
	
	            // If no label was found, try to parse a page number
	            var pageIndex = parseInt(label, 10) - 1;
	            return this.gotoPageByIndex(pageIndex, xAnchor, yAnchor);
	        };
	
	        // Get the page index (0-based) corresponding to a given filename
	        // If the page index doesn't exist, this will return -1
	        this.getPageIndex = function (filename)
	        {
	            return getPageIndex(filename);
	        };
	
	        // Get the current URL (exposes the private method)
	        this.getCurrentURL = function ()
	        {
	            return getCurrentURL();
	        };
	
	        // Check if a page index is within the range of the document
	        this.isPageIndexValid = function (pageIndex)
	        {
	            return isPageValid(pageIndex);
	        };
	
	        // Get the hash part only of the current URL (without the leading #)
	        this.getURLHash = function ()
	        {
	            return getURLHash();
	        };
	
	        // Get an object representing the state of this diva instance (for setState)
	        this.getState = function ()
	        {
	            return getState();
	        };
	
	        // Align this diva instance with a state object (as returned by getState)
	        this.setState = function (state)
	        {
	            reloadViewer(getLoadOptionsForState(state));
	        };
	
	        // Get the instance selector for this instance, since it's auto-generated.
	        this.getInstanceSelector = function ()
	        {
	            return settings.selector;
	        };
	
	        // Get the instance ID -- essentially the selector without the leading '#'.
	        this.getInstanceId = function ()
	        {
	            return settings.ID;
	        };
	
	        this.getSettings = function ()
	        {
	            return settings;
	        };
	
	        /*
	            Translates a measurement from the zoom level on the largest size
	            to one on the current zoom level.
	
	            For example, a point 1000 on an image that is on zoom level 2 of 5
	            translates to a position of 111.111... (1000 / (5 - 2)^2).
	
	            Works for a single pixel co-ordinate or a dimension (e.g., translates a box
	            that is 1000 pixels wide on the original to one that is 111.111 pixels wide
	            on the current zoom level).
	        */
	        this.translateFromMaxZoomLevel = function (position)
	        {
	            var zoomDifference = settings.maxZoomLevel - settings.zoomLevel;
	            return position / Math.pow(2, zoomDifference);
	        };
	
	        /*
	            Translates a measurement from the current zoom level to the position on the
	            largest zoom level.
	
	            Works for a single pixel co-ordinate or a dimension (e.g., translates a box
	            that is 111.111 pixels wide on the current image to one that is 1000 pixels wide
	            on the current zoom level).
	        */
	        this.translateToMaxZoomLevel = function (position)
	        {
	            var zoomDifference = settings.maxZoomLevel - settings.zoomLevel;
	
	            // if there is no difference, it's a box on the max zoom level and
	            // we can just return the position.
	            if (zoomDifference === 0)
	                return position;
	
	            return position * Math.pow(2, zoomDifference);
	        };
	
	        // Re-enables document dragging, scrolling (by keyboard if set), and zooming by double-clicking
	        this.enableScrollable = function()
	        {
	            divaState.viewerCore.enableScrollable();
	        };
	
	        // Disables document dragging, scrolling (by keyboard if set), and zooming by double-clicking
	        this.disableScrollable = function ()
	        {
	            divaState.viewerCore.disableScrollable();
	        };
	
	        //Changes between horizontal layout and vertical layout. Returns true if document is now vertically oriented, false otherwise.
	        this.toggleOrientation = function ()
	        {
	            return toggleOrientation();
	        };
	
	        //Returns distance between the northwest corners of diva-inner and page index
	        this.getPageOffset = function(pageIndex, options)
	        {
	            var region = divaState.viewerCore.getPageRegion(pageIndex, options);
	
	            return {
	                top: region.top,
	                left: region.left
	            };
	        };
	
	        //shortcut to getPageOffset for current page
	        this.getCurrentPageOffset = function()
	        {
	            return this.getPageOffset(settings.currentPageIndex);
	        };
	
	        //Returns the page dimensions of given page at the current zoom level
	        this.getPageDimensionsAtCurrentGridLevel = function(pageIndex)
	        {
	            console.warn("This method is deprecated. Consider using getPageDimensionsAtCurrentZoomLevel(pageIndex) instead.");
	            return this.getPageDimensionsAtCurrentZoomLevel(pageIndex);
	        };
	
	        /*
	            Given a pageX and pageY value (as could be retreived from a jQuery event object),
	                returns either the page visible at that (x,y) position or -1 if no page is.
	        */
	        this.getPageIndexForPageXYValues = function(pageX, pageY)
	        {
	            //get the four edges of the outer element
	            var outerOffset = viewerState.outerElement.getBoundingClientRect();
	            var outerTop = outerOffset.top;
	            var outerLeft = outerOffset.left;
	            var outerBottom = outerOffset.bottom;
	            var outerRight = outerOffset.right;
	
	            //if the clicked position was outside the diva-outer object, it was not on a visible portion of a page
	            if (pageX < outerLeft || pageX > outerRight)
	                return -1;
	
	            if (pageY < outerTop || pageY > outerBottom)
	                return -1;
	
	            //navigate through all diva page objects
	            var pages = document.getElementsByClassName('diva-page');
	            var curPageIdx = pages.length;
	            while (curPageIdx--)
	            {
	                //get the offset for each page
	                var curPage = pages[curPageIdx];
	                var curOffset = curPage.getBoundingClientRect();
	
	                //if this point is outside the horizontal boundaries of the page, continue
	                if (pageX < curOffset.left || pageX > curOffset.right)
	                    continue;
	
	                //same with vertical boundaries
	                if (pageY < curOffset.top || pageY > curOffset.bottom)
	                    continue;
	
	                //if we made it through the above two, we found the page we're looking for
	                return curPage.getAttribute('data-index');
	            }
	
	            //if we made it through that entire while loop, we didn't click on a page
	            return -1;
	        };
	
	        /**
	         * Returns a URL for the image of the page at the given index. The
	         * optional size parameter supports setting the image width or height
	         * (default is full-sized).
	         */
	        this.getPageImageURL = function (pageIndex, size)
	        {
	            return settings.manifest.getPageImageURL(pageIndex, size);
	        };
	
	        //Pretty self-explanatory.
	        this.isVerticallyOriented = function()
	        {
	            return settings.verticallyOriented;
	        };
	
	        this.changeObject = function(objectData)
	        {
	            viewerState.loaded = false;
	            divaState.viewerCore.clear();
	
	            if (viewerState.renderer)
	                viewerState.renderer.destroy();
	
	            viewerState.options.objectData = objectData;
	
	            if (typeof objectData === 'object')
	            {
	                setTimeout(function ()
	                {
	                    loadObjectData(objectData);
	                });
	
	                return;
	            }
	
	            viewerState.throbberTimeoutID = setTimeout(function ()
	            {
	                $(settings.selector + 'throbber').show();
	            }, settings.throbberTimeout);
	
	            $.ajax({
	                url: settings.objectData,
	                cache: true,
	                dataType: 'json',
	                error: ajaxError,
	                success: function (responseData)
	                {
	                    loadObjectData(responseData);
	                }
	            });
	        };
	
	        this.activate = function ()
	        {
	            viewerState.isActiveDiva = true;
	        };
	
	        this.deactivate = function ()
	        {
	            viewerState.isActiveDiva = false;
	        };
	
	        // Destroys this instance, tells plugins to do the same (for testing)
	        this.destroy = function ()
	        {
	            divaState.viewerCore.destroy();
	        };
	
	        // "Secretly" expose the page overlay API for the highlight plugin
	        this.__addPageOverlay = function (overlay)
	        {
	            divaState.viewerCore.addPageOverlay(overlay);
	        };
	
	        this.__removePageOverlay = function (overlay)
	        {
	            divaState.viewerCore.removePageOverlay(overlay);
	        };
	
	        /**** Page Alias Functions ****/
	        /*
	         Main function. Will return the first of these three that
	         resolves to boolean true:
	         -Explicit alias as defined in pageAliases
	         -Result of pageAliasFunction
	         -originalPageIndex + 1 (to simulate the original mapping)
	
	         Else the function will return false.
	         */
	        this.getAliasForPageIndex = function(originalPageIndex)
	        {
	            var pageIndex = parseInt(originalPageIndex, 10);
	            return settings.pageAliases[pageIndex] || settings.pageAliasFunction(pageIndex) || pageIndex + 1;
	        };
	
	        /*
	         Returns the first page index found for a given aliased number or false if not found.
	         This may cause issues if a specific alias is found for multiple page indices; use getPageIndicesForAlias and reimplement functions as necessary if this is the case.
	         */
	        this.getPageIndexForAlias = function(aliasedNumber)
	        {
	            for(var idx = 0; idx < settings.numPages; idx++)
	            {
	                if(this.getAliasForPageIndex(idx) === aliasedNumber)
	                {
	                    return idx;
	                }
	            }
	            return false;
	        };
	
	        //Returns array of page indices for a given aliased number. Returns an empty array if none are found.
	        this.getPageIndicesForAlias = function(aliasedNumber)
	        {
	            var indexArr = [];
	            for(var idx = 0; idx < settings.numPages; idx++)
	            {
	                if(this.getAliasForPageIndex(idx) === aliasedNumber)
	                {
	                    indexArr.push(idx);
	                }
	            }
	            return indexArr;
	        };
	
	
	        //Maps the current page index to getAliasForPageIndex
	        this.getCurrentAliasedPageIndex = function()
	        {
	            return this.getAliasForPageIndex(settings.currentPageIndex);
	        };
	
	        //Wrapper for gotoPageByIndex, keeping the aliased numbers in mind
	        this.gotoPageByAliasedNumber = function(aliasedNumber, xAnchor, yAnchor)
	        {
	            return this.gotoPageByIndex(this.getPageIndexForAlias(aliasedNumber), xAnchor, yAnchor);
	        };
	
	        // Call the init function when this object is created.
	        init();
	    };
	
	    $.fn.diva = function (options)
	    {
	        return this.each(function ()
	        {
	            var divaParent = $(this);
	
	            // Return early if this element already has a plugin instance
	            if (divaParent.data('diva'))
	                return;
	
	            // Throw an error if the element is not in the DOM, since it causes some problems
	            if (!document.body.contains(this))
	                throw new Error('Diva could not be initialized because this element is not attached to the DOM');
	
	            // Otherwise, instantiate the document viewer
	            var diva = new Diva(this, options);
	            divaParent.data('diva', diva);
	        });
	    };
	})(jQuery);


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = elt;
	module.exports.setAttributes = setDOMAttributes;
	
	/**
	 * Convenience function to create a DOM element, set attributes on it, and
	 * append children. All arguments which are not of primitive type, are not
	 * arrays, and are not DOM nodes are treated as attribute hashes and are
	 * handled as described for setDOMAttributes. Children can either be a DOM
	 * node or a primitive value, which is converted to a text node. Arrays are
	 * handled recursively. Null and undefined values are ignored.
	 *
	 * Inspired by the ProseMirror helper of the same name.
	 */
	function elt(tag)
	{
	    var el = document.createElement(tag);
	    var args = Array.prototype.slice.call(arguments, 1);
	
	    while (args.length)
	    {
	        var arg = args.shift();
	        handleEltConstructorArg(el, arg);
	    }
	
	    return el;
	}
	
	function handleEltConstructorArg(el, arg)
	{
	    if (arg == null)
	        return;
	
	    if (typeof arg !== 'object' && typeof arg !== 'function')
	    {
	        // Coerce to string
	        el.appendChild(document.createTextNode(arg));
	    }
	    else if (arg instanceof window.Node)
	    {
	        el.appendChild(arg);
	    }
	    else if (arg instanceof Array)
	    {
	        var childCount = arg.length;
	        for (var i = 0; i < childCount; i++)
	            handleEltConstructorArg(el, arg[i]);
	    }
	    else
	    {
	        setDOMAttributes(el, arg);
	    }
	}
	
	/**
	 * Set attributes of a DOM element. The `style` property is special-cased to
	 * accept either a string or an object whose own attributes are assigned to
	 * el.style.
	 */
	function setDOMAttributes(el, attributes)
	{
	    for (var prop in attributes)
	    {
	        if (!attributes.hasOwnProperty(prop))
	            continue;
	
	        if (prop === 'style')
	        {
	            setStyle(el, attributes.style);
	        }
	        else
	        {
	            el.setAttribute(prop, attributes[prop]);
	        }
	    }
	}
	
	function setStyle(el, style)
	{
	    if (!style)
	        return;
	
	    if (typeof style !== 'object')
	    {
	        el.style.cssText = style;
	        return;
	    }
	
	    for (var cssProp in style)
	    {
	        if (!style.hasOwnProperty(cssProp))
	            continue;
	
	        el.style[cssProp] = style[cssProp];
	    }
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports.get = getHashParam;
	module.exports.update = updateHashParam;
	
	// For getting the #key values from the URL. For specifying a page and zoom level
	// Look into caching, because we only need to get this during the initial load
	// Although for the tests I guess we would need to override caching somehow
	function getHashParam(key) {
	    var hash = window.location.hash;
	    if (hash !== '') {
	        // Check if there is something that looks like either &key= or #key=
	        var startIndex = (hash.indexOf('&' + key + '=') > 0) ? hash.indexOf('&' + key + '=') : hash.indexOf('#' + key + '=');
	
	        // If startIndex is still -1, it means it can't find either
	        if (startIndex >= 0) {
	            // Add the length of the key plus the & and =
	            startIndex += key.length + 2;
	
	            // Either to the next ampersand or to the end of the string
	            var endIndex = hash.indexOf('&', startIndex);
	            if (endIndex > startIndex) {
	                return decodeURIComponent(hash.substring(startIndex, endIndex));
	            } else if (endIndex < 0) {
	                // This means this hash param is the last one
	                return decodeURIComponent(hash.substring(startIndex));
	            }
	            // If the key doesn't have a value I think
	            return '';
	        } else {
	            // If it can't find the key
	            return false;
	        }
	    } else {
	        // If there are no hash params just return false
	        return false;
	    }
	}
	
	function updateHashParam(key, value) {
	    // First make sure that we have to do any work at all
	    var originalValue = getHashParam(key);
	    var hash = window.location.hash;
	    if (originalValue !== value) {
	        // Is the key already in the URL?
	        if (typeof originalValue == 'string') {
	            // Already in the URL. Just get rid of the original value
	            var startIndex = (hash.indexOf('&' + key + '=') > 0) ? hash.indexOf('&' + key + '=') : hash.indexOf('#' + key + '=');
	            var endIndex = startIndex + key.length + 2 + originalValue.length;
	            // # if it's the first, & otherwise
	            var startThing = (startIndex === 0) ? '#' : '&';
	            window.location.replace(hash.substring(0, startIndex) + startThing + key + '=' + value + hash.substring(endIndex));
	        } else {
	            // It's not present - add it
	            if (hash.length === 0) {
	                window.location.replace('#' + key + '=' + value);
	            } else {
	                // Append it
	                window.location.replace(hash + '&' + key + '=' + value);
	            }
	        }
	    }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var jQuery = __webpack_require__(3);
	
	//Used to keep track of whether Diva was last clicked or which Diva was last clicked when there are multiple
	var ActiveDivaController = (function ($)
	{
	    return function ()
	    {
	        var active;
	
	        //global click listener
	        $(document).on('click', function(e)
	        {
	            updateActive($(e.target));
	        });
	
	        //parameter should already be a jQuery selector
	        var updateActive = function (target)
	        {
	            var nearestOuter;
	
	            //these will find 0 or 1 objects, never more
	            var findOuter = target.find('.diva-outer');
	            var closestOuter = target.closest('.diva-outer');
	            var outers = document.getElementsByClassName('diva-outer');
	            var outerLen = outers.length;
	            var idx;
	
	            //clicked on something that was not either a parent or sibling of a diva-outer
	            if (findOuter.length > 0)
	            {
	                nearestOuter = findOuter;
	            }
	            //clicked on something that was a child of a diva-outer
	            else if (closestOuter.length > 0)
	            {
	                nearestOuter = closestOuter;
	            }
	            //clicked on something that was not in any Diva tree
	            else
	            {
	                //deactivate everything and return
	                for (idx = 0; idx < outerLen; idx++)
	                {
	                    $(outers[idx].parentElement.parentElement).data('diva').deactivate();
	                }
	                return;
	            }
	
	            //if we found one, activate it...
	            nearestOuter.parent().parent().data('diva').activate();
	            active = nearestOuter.parent();
	
	            //...and deactivate all the others
	            outers = document.getElementsByClassName('diva-outer');
	            for(idx = 0; idx < outerLen; idx++)
	            {
	                //getAttribute to attr - comparing DOM element to jQuery element
	                if (outers[idx].getAttribute('id') != nearestOuter.attr('id'))
	                    $(outers[idx].parentElement.parentElement).data('diva').deactivate();
	            }
	        };
	
	        //public accessor in case. Will return a jQuery selector.
	        this.getActive = function()
	        {
	            return active;
	        };
	    };
	})(jQuery);
	
	module.exports = ActiveDivaController;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint unused: true */
	
	var parseIIIFManifest = __webpack_require__(12);
	
	module.exports = ImageManifest;
	
	function ImageManifest(data, urlAdapter)
	{
	    // Save all the data we need
	    this.pages = data.pgs;
	    this.maxZoom = data.max_zoom;
	    this.maxRatio = data.dims.max_ratio;
	    this.minRatio = data.dims.min_ratio;
	    this.itemTitle = data.item_title;
	
	    // Only given for IIIF manifests
	    this.paged = !!data.paged;
	
	    // These are arrays, the index corresponding to the zoom level
	    this._maxWidths = data.dims.max_w;
	    this._maxHeights = data.dims.max_h;
	    this._averageWidths = data.dims.a_wid;
	    this._averageHeights = data.dims.a_hei;
	    this._totalHeights = data.dims.t_hei;
	    this._totalWidths = data.dims.t_wid;
	
	    this._urlAdapter = urlAdapter;
	}
	
	ImageManifest.fromIIIF = function (iiifManifest)
	{
	    var data = parseIIIFManifest(iiifManifest);
	    return new ImageManifest(data, new IIIFSourceAdapter());
	};
	
	ImageManifest.fromLegacyManifest = function (data, config)
	{
	    // For IIP manifests, use the page number (indexed starting from 1) as a label for each page
	    for (var i = 0, len = data.pgs.length; i < len; i++)
	        data.pgs[i].l = (i + 1).toString();
	
	    return new ImageManifest(data, new LegacyManifestSourceAdapter(config));
	};
	
	ImageManifest.prototype.isPageValid = function (pageIndex, showNonPagedPages)
	{
	    if (!showNonPagedPages && this.paged && !this.pages[pageIndex].paged)
	        return false;
	
	    return pageIndex >= 0 && pageIndex < this.pages.length;
	};
	
	ImageManifest.prototype.getMaxPageDimensions = function (pageIndex)
	{
	    var maxDims = this.pages[pageIndex].d[this.maxZoom];
	
	    return {
	        height: maxDims.h,
	        width: maxDims.w
	    };
	};
	
	ImageManifest.prototype.getPageDimensionsAtZoomLevel = function (pageIndex, zoomLevel)
	{
	    var maxDims = this.pages[pageIndex].d[this.maxZoom];
	
	    var scaleRatio = getScaleRatio(this.maxZoom, zoomLevel);
	
	    return {
	        height: maxDims.h * scaleRatio,
	        width: maxDims.w * scaleRatio
	    };
	};
	
	/**
	 * Returns a URL for the image of the given page. The optional size
	 * parameter supports setting the image width or height (default is
	 * full-sized).
	 */
	ImageManifest.prototype.getPageImageURL = function (pageIndex, size)
	{
	    return this._urlAdapter.getPageImageURL(this, pageIndex, size);
	};
	
	/**
	 * Return an array of tile objects for the specified page and integer zoom level
	 */
	ImageManifest.prototype.getPageImageTiles = function (pageIndex, zoomLevel, tileDimensions)
	{
	    var page = this.pages[pageIndex];
	
	    if (!isFinite(zoomLevel) || zoomLevel % 1 !== 0)
	        throw new TypeError('Zoom level must be an integer: ' + zoomLevel);
	
	    var rows = Math.ceil(page.d[zoomLevel].h / tileDimensions.height);
	    var cols = Math.ceil(page.d[zoomLevel].w / tileDimensions.width);
	
	    var tiles = [];
	
	    var row, col, url;
	
	    for (row = 0; row < rows; row++)
	    {
	        for (col = 0; col < cols; col++)
	        {
	            url = this._urlAdapter.getTileImageURL(this, pageIndex, {
	                row: row,
	                col: col,
	                rowCount: rows,
	                colCount: cols,
	                zoomLevel: zoomLevel,
	                tileDimensions: tileDimensions
	            });
	
	            // FIXME: Dimensions should account for partial tiles (e.g. the
	            // last row and column in a tiled image)
	            tiles.push({
	                row: row,
	                col: col,
	                zoomLevel: zoomLevel,
	                dimensions: {
	                    height: tileDimensions.height,
	                    width: tileDimensions.width
	                },
	                offset: {
	                    top: row * tileDimensions.height,
	                    left: col * tileDimensions.width
	                },
	                url: url
	            });
	        }
	    }
	
	    return {
	        zoomLevel: zoomLevel,
	        rows: rows,
	        cols: cols,
	        tiles: tiles
	    };
	};
	
	ImageManifest.prototype.getMaxWidth = zoomedPropertyGetter('_maxWidths');
	ImageManifest.prototype.getMaxHeight = zoomedPropertyGetter('_maxHeights');
	ImageManifest.prototype.getAverageWidth = zoomedPropertyGetter('_averageWidths');
	ImageManifest.prototype.getAverageHeight = zoomedPropertyGetter('_averageHeights');
	ImageManifest.prototype.getTotalWidth = zoomedPropertyGetter('_totalWidths');
	ImageManifest.prototype.getTotalHeight = zoomedPropertyGetter('_totalHeights');
	
	function zoomedPropertyGetter(privateName)
	{
	    return function (zoomLevel)
	    {
	        return this[privateName][zoomLevel];
	    };
	}
	
	function getScaleRatio(sourceZoomLevel, targetZoomLevel)
	{
	    return 1 / Math.pow(2, sourceZoomLevel - targetZoomLevel);
	}
	
	function IIIFSourceAdapter()
	{
	    // No-op
	}
	
	IIIFSourceAdapter.prototype.getPageImageURL = function (manifest, pageIndex, size)
	{
	    var dimens;
	
	    if (!size || (size.width == null && size.height == null))
	        dimens = 'full';
	    else
	        dimens = (size.width == null ? '' : size.width) + ',' + (size.height == null ? '' : size.height);
	
	    var page = manifest.pages[pageIndex];
	    var quality = (page.api > 1.1) ? 'default' : 'native';
	
	    return encodeURI(page.url + 'full/' + dimens + '/0/' + quality + '.jpg');
	};
	
	IIIFSourceAdapter.prototype.getTileImageURL = function (manifest, pageIndex, params)
	{
	    var page = manifest.pages[pageIndex];
	
	    var height, width;
	
	    if (params.row === params.rowCount - 1)
	        height = page.d[params.zoomLevel].h - (params.rowCount - 1) * params.tileDimensions.height;
	    else
	        height = params.tileDimensions.height;
	
	    if (params.col === params.colCount - 1)
	        width = page.d[params.zoomLevel].w - (params.colCount - 1) * params.tileDimensions.width;
	    else
	        width = params.tileDimensions.width;
	
	    var zoomDifference = Math.pow(2, manifest.maxZoom - params.zoomLevel);
	
	    var x = params.col * params.tileDimensions.width * zoomDifference;
	    var y = params.row * params.tileDimensions.height * zoomDifference;
	
	    if (page.hasOwnProperty('xoffset'))
	    {
	        x += page.xoffset;
	        y += page.yoffset;
	    }
	
	    var region = [x, y, width * zoomDifference, height * zoomDifference].join(',');
	
	    var quality = (page.api > 1.1) ? 'default' : 'native';
	
	    return encodeURI(page.url + region + '/' + width + ',' + height + '/0/' + quality + '.jpg');
	};
	
	function LegacyManifestSourceAdapter(config)
	{
	    this._config = config;
	}
	
	LegacyManifestSourceAdapter.prototype.getPageImageURL = function (manifest, pageIndex, size)
	{
	    // Without width or height specified, IIPImage defaults to full-size
	    var dimens = '';
	
	    if (size)
	    {
	        if (size.width != null)
	            dimens += '&WID=' + size.width;
	
	        if (size.height != null)
	            dimens += '&HEI=' + size.height;
	    }
	
	    var filename = manifest.pages[pageIndex].f;
	
	    return this._config.iipServerURL + "?FIF=" + this._config.imageDir + '/' + filename + dimens + '&CVT=JPEG';
	};
	
	LegacyManifestSourceAdapter.prototype.getTileImageURL = function (manifest, pageIndex, params)
	{
	    var page = manifest.pages[pageIndex];
	    var requestedZoomLevel = params.zoomLevel + page.m - manifest.maxZoom;
	    var index = (params.row * params.colCount) + params.col;
	    var jtl = requestedZoomLevel + ',' + index;
	
	    return encodeURI(this._config.iipServerURL + "?FIF=" + this._config.imageDir + '/' + page.f + '&JTL=' + jtl + '&CVT=JPEG');
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	/* jshint unused: true */
	
	module.exports = parseIIIFManifest;
	
	/**
	 * Parses a IIIF Presentation API Manifest and converts it into a Diva.js-format object
	 * (See https://github.com/DDMAL/diva.js/wiki/Development-notes#data-received-through-ajax-request)
	 * (This is a client-side re-implementation of generate_json.py)
	 *
	 * @param {Object} manifest - an object that represents a valid IIIF manifest
	 * @returns {Object} divaServiceBlock - the data needed by Diva to show a view of a single document
	 */
	function parseIIIFManifest(manifest)
	{
	
	    var incorporateZoom = function (imageDimension, zoomDifference)
	    {
	        return imageDimension / (Math.pow(2, zoomDifference));
	    };
	
	    var getMaxZoomLevel = function (width, height)
	    {
	        var largestDimension = Math.max(width, height);
	        return Math.ceil(Math.log((largestDimension + 1) / (256 + 1)) / Math.log(2));
	    };
	
	    var createArrayWithValue = function (length, value)
	    {
	        var array = new Array(length);
	        var i = length;
	
	        while (i--)
	        {
	            array[i] = value;
	        }
	
	        return array;
	    };
	
	    var sequence = manifest.sequences[0];
	
	    //@TODO choose a sequence intelligently
	    var canvases = sequence.canvases;
	
	    var zoomLevels = [];
	    var images = [];
	    var imageIndex = 0;
	
	    var width;
	    var height;
	    var url;
	    var filename;
	    var info;
	    var maxZoom;
	    var label;
	    var context;
	    var resource;
	    var imageAPIVersion;
	
	    var title = manifest.label;
	
	    for (var i = 0, numCanvases = canvases.length; i < numCanvases; i++)
	    {
	        resource = canvases[i].images[0].resource;
	        width = resource.width || canvases[i].width;
	        height = resource.height || canvases[i].height;
	
	        info = parseImageInfo(resource);
	        url = info.url;
	        filename = url; // For IIIF, the url is the filename
	
	        //append trailing / from url if it's not there
	        if (url.slice(-1) !== '/')
	        {
	            url = url + '/';
	        }
	
	        maxZoom = getMaxZoomLevel(width, height);
	
	        // get filenames from service block (@TODO should this be changed to 'identifiers?')
	        // get label from canvas block ('filename' is legacy)
	        label = canvases[i].label;
	
	        // indicate whether canvas has viewingHint of non-paged
	        var paged = canvases[i].viewingHint !== 'non-paged';
	        var facingPages = canvases[i].viewingHint === 'facing-pages';
	
	        context = resource.service['@context'];
	        if (context === 'http://iiif.io/api/image/2/context.json')
	        {
	            imageAPIVersion = 2.0;
	        }
	        else if (context === 'http://library.stanford.edu/iiif/image-api/1.1/context.json')
	        {
	            imageAPIVersion = 1.1;
	        }
	        else
	        {
	            imageAPIVersion = 1.0;
	        }
	
	        images[imageIndex] = {
	            'mx_w': width,
	            'mx_h': height,
	            'mx_z': maxZoom,
	            'label': label,
	            'fn': filename,
	            'url': url,
	            'api': imageAPIVersion,
	            'paged': paged,
	            'facingPages': facingPages
	        };
	
	        if (info.hasOwnProperty('x'))
	        {
	            images[imageIndex].xoffset = info.x;
	            images[imageIndex].yoffset = info.y;
	        }
	
	        zoomLevels[imageIndex] = maxZoom;
	        imageIndex++;
	    }
	
	    var lowestMaxZoom = Math.min.apply(Math, zoomLevels);
	
	    // ratio calculations
	    var maxRatio = 0;
	    var minRatio = 100; // initialize high so we can get the minimum later
	
	    var totalWidths = createArrayWithValue(lowestMaxZoom + 1, 0);
	    var totalHeights = createArrayWithValue(lowestMaxZoom + 1, 0);
	    var maxWidths = createArrayWithValue(lowestMaxZoom + 1, 0);
	    var maxHeights = createArrayWithValue(lowestMaxZoom + 1, 0);
	
	    var pages = [];
	    var currentPageZoomData; // dimensions per zoomlevel
	
	    var widthAtCurrentZoomLevel;
	    var heightAtCurrentZoomLevel;
	
	    var numImages = images.length;
	
	    // for each page image:
	    for (i = 0; i < numImages; i++)
	    {
	        currentPageZoomData = [];
	
	        // construct 'd' key. for each zoom level:
	        for (var j = 0; j < lowestMaxZoom + 1; j++)
	        {
	            // calculate current page zoom data
	            widthAtCurrentZoomLevel = Math.floor(incorporateZoom(images[i].mx_w, lowestMaxZoom - j));
	            heightAtCurrentZoomLevel = Math.floor(incorporateZoom(images[i].mx_h, lowestMaxZoom - j));
	            currentPageZoomData[j] = {
	                h: heightAtCurrentZoomLevel,
	                w: widthAtCurrentZoomLevel
	            };
	
	            // add width of image at current zoom level to total widths/heights
	            totalWidths[j] += widthAtCurrentZoomLevel;
	            totalHeights[j] += heightAtCurrentZoomLevel;
	            maxWidths[j] = Math.max(widthAtCurrentZoomLevel, maxWidths[j]);
	            maxHeights[j] = Math.max(heightAtCurrentZoomLevel, maxHeights[j]);
	
	            // calculate max/min ratios
	            var ratio = images[i].mx_h / images[i].mx_w;
	            maxRatio = Math.max(ratio, maxRatio);
	            minRatio = Math.min(ratio, minRatio);
	        }
	
	        pages[i] = {
	            d: currentPageZoomData,
	            m: images[i].mx_z,
	            l: images[i].label,
	            f: images[i].fn,
	            url: images[i].url,
	            api: images[i].api,
	            paged: images[i].paged,
	            facingPages: images[i].facingPages
	        };
	
	        if (images[i].hasOwnProperty('xoffset'))
	        {
	            pages[i].xoffset = images[i].xoffset;
	            pages[i].yoffset = images[i].yoffset;
	        }
	    }
	
	    var averageWidths = [];
	    var averageHeights = [];
	
	    // for each zoom level, calculate average of heights/widths
	    for (i = 0; i < lowestMaxZoom + 1; i++)
	    {
	        averageWidths.push(totalWidths[i] / images.length);
	        averageHeights.push(totalHeights[i] / images.length);
	    }
	
	    var dims = {
	        'a_wid': averageWidths,
	        'a_hei': averageHeights,
	        'max_w': maxWidths,
	        'max_h': maxHeights,
	        'max_ratio': maxRatio,
	        'min_ratio': minRatio,
	        't_hei': totalHeights,
	        't_wid': totalWidths
	    };
	
	
	    var divaServiceBlock = {
	        item_title: title,
	        dims: dims,
	        max_zoom: lowestMaxZoom,
	        pgs: pages,
	        paged: manifest.viewingHint === 'paged' || sequence.viewingHint === 'paged'
	    };
	
	    return divaServiceBlock;
	}
	
	/**
	 * Takes in a resource block from a canvas and outputs the following information associated with that resource:
	 * - Image URL
	 * - Image region to be displayed
	 *
	 * @param {Object} resource - an object representing the resource block of a canvas section in a IIIF manifest
	 * @returns {Object} imageInfo - an object containing image URL and region
	 */
	function parseImageInfo(resource)
	{
	    var url = resource['@id'];
	    var fragmentRegex = /#xywh=([0-9]+,[0-9]+,[0-9]+,[0-9]+)/;
	    var xywh = '';
	    var stripURL = true;
	
	    if (/\/([0-9]+,[0-9]+,[0-9]+,[0-9]+)\//.test(url))
	    {
	        // if resource in image API format, extract region x,y,w,h from URL (after 4th slash from last)
	        // matches coordinates in URLs of the form http://www.example.org/iiif/book1-page1/40,50,1200,1800/full/0/default.jpg
	        var urlArray = url.split('/');
	        xywh = urlArray[urlArray.length - 4];
	    }
	    else if (fragmentRegex.test(url))
	    {
	        // matches coordinates of the style http://www.example.org/iiif/book1/canvas/p1#xywh=50,50,320,240
	        var result = fragmentRegex.exec(url);
	        xywh = result[1];
	    }
	    else if (resource.service && resource.service['@id'])
	    {
	        // assume canvas size based on image size
	        url = resource.service['@id'];
	        // this URL excludes region parameters so we don't need to remove them
	        stripURL = false;
	    }
	
	    if (stripURL)
	    {
	        // extract URL up to identifier (we eliminate the last 5 parameters: /region/size/rotation/quality.format)
	        url = url.split('/').slice(0, -4).join('/');
	    }
	
	    var imageInfo = {
	        url: url
	    };
	
	    if (xywh.length)
	    {
	        // parse into separate components
	        var dimensions = xywh.split(',');
	        imageInfo.x = parseInt(dimensions[0], 10);
	        imageInfo.y = parseInt(dimensions[1], 10);
	        imageInfo.w = parseInt(dimensions[2], 10);
	        imageInfo.h = parseInt(dimensions[3], 10);
	    }
	
	    return imageInfo;
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	
	var diva = __webpack_require__(2);
	var elt = __webpack_require__(8);
	
	module.exports = createToolbar;
	
	function createToolbar(viewer)
	{
	    var settings = viewer.getSettings();
	
	    // FIXME(wabain): Temporarily copied from within Diva
	    var elemAttrs = function (ident, base)
	    {
	        var attrs = {
	            id: settings.ID + ident,
	            class: 'diva-' + ident
	        };
	
	        if (base)
	            return $.extend(attrs, base);
	        else
	            return attrs;
	    };
	
	    /** Convenience function to subscribe to a Diva event */
	    var subscribe = function (event, callback)
	    {
	        diva.Events.subscribe(event, callback, settings.ID);
	    };
	
	    // Creates a toolbar button
	    var createButtonElement = function(name, label, callback)
	    {
	        var button = elt('button', {
	            type: 'button',
	            id: settings.ID + name,
	            class: 'diva-' + name + ' diva-button',
	            title: label
	        });
	
	        if (callback)
	            button.addEventListener('click', callback, false);
	
	        return button;
	    };
	
	    // Higher-level function for creators of zoom and grid controls
	    var getResolutionControlCreator = function (config)
	    {
	        return function ()
	        {
	            var controls;
	
	            switch (settings[config.controllerSetting])
	            {
	                case 'slider':
	                    controls = config.createSlider();
	                    break;
	
	                case 'buttons':
	                    controls = config.createButtons();
	                    break;
	
	                default:
	                    // Don't display anything
	                    return null;
	            }
	
	            var wrapper = elt('span',
	                controls,
	                config.createLabel()
	            );
	
	            var updateWrapper = function ()
	            {
	                if (settings.inGrid === config.showInGrid)
	                    wrapper.style.display = 'inline';
	                else
	                    wrapper.style.display = 'none';
	            };
	
	            subscribe('ViewDidSwitch', updateWrapper);
	            subscribe('ObjectDidLoad', updateWrapper);
	
	            // Set initial value
	            updateWrapper();
	
	            return wrapper;
	        };
	    };
	
	    // Zoom controls
	    var createZoomControls = getResolutionControlCreator({
	        controllerSetting: 'enableZoomControls',
	        showInGrid: false,
	
	        createSlider: function ()
	        {
	            var elem = createSlider('zoom-slider', {
	                step: 0.1,
	                value: settings.zoomLevel,
	                min: settings.minZoomLevel,
	                max: settings.maxZoomLevel
	            });
	            var $elem = $(elem);
	
	            $elem.on('input', function()
	            {
	                var floatValue = parseFloat(this.value);
	                viewer.setZoomLevel(floatValue);
	            });
	
	            $elem.on('change', function ()
	            {
	                var floatValue = parseFloat(this.value);
	                if (floatValue !== settings.zoomLevel)
	                    viewer.setZoomLevel(floatValue);
	            });
	
	            var updateSlider = function ()
	            {
	                if (settings.zoomLevel !== $elem.val())
	                    $elem.val(settings.zoomLevel);
	            };
	
	            subscribe('ZoomLevelDidChange', updateSlider);
	            subscribe('ViewerDidLoad', function ()
	            {
	                elt.setAttributes(elem, {
	                    min: settings.minZoomLevel,
	                    max: settings.maxZoomLevel
	                });
	
	                updateSlider();
	            });
	
	            return elem;
	        },
	
	        createButtons: function ()
	        {
	            return elt('span',
	                createButtonElement('zoom-out-button', 'Zoom Out', function ()
	                {
	                    viewer.setZoomLevel(settings.zoomLevel - 1);
	                }),
	                createButtonElement('zoom-in-button', 'Zoom In', function ()
	                {
	                    viewer.setZoomLevel(settings.zoomLevel + 1);
	                })
	            );
	        },
	
	        createLabel: function ()
	        {
	            var elem = createLabel('diva-zoom-label', 'zoom-label', 'Zoom level: ', 'zoom-level', settings.zoomLevel);
	            var textSpan = $(elem).find(settings.selector + 'zoom-level')[0];
	
	            var updateText = function ()
	            {
	                textSpan.textContent = settings.zoomLevel.toFixed(2);
	            };
	
	            subscribe('ZoomLevelDidChange', updateText);
	            subscribe('ViewerDidLoad', updateText);
	
	            return elem;
	        }
	    });
	
	    // Grid controls
	    var createGridControls = getResolutionControlCreator({
	        controllerSetting: 'enableGridControls',
	        showInGrid: true,
	
	        createSlider: function ()
	        {
	            var elem = createSlider('grid-slider', {
	                value: settings.pagesPerRow,
	                min: settings.minPagesPerRow,
	                max: settings.maxPagesPerRow
	            });
	            var $elem = $(elem);
	
	            $elem.on('input', function()
	            {
	                var intValue = parseInt(elem.value, 10);
	                viewer.setGridPagesPerRow(intValue);
	            });
	
	            $elem.on('change', function ()
	            {
	                var intValue = parseInt(elem.value, 10);
	                if (intValue !== settings.pagesPerRow)
	                    viewer.setGridPagesPerRow(intValue);
	            });
	
	            subscribe('GridRowNumberDidChange', function ()
	            {
	                // Update the position of the handle within the slider
	                if (settings.pagesPerRow !== $elem.val())
	                    $elem.val(settings.pagesPerRow);
	            });
	
	            return elem;
	        },
	
	        createButtons: function ()
	        {
	            return elt('span',
	                createButtonElement('grid-out-button', 'Zoom Out', function ()
	                {
	                    viewer.setGridPagesPerRow(settings.pagesPerRow - 1);
	                }),
	                createButtonElement('grid-in-button', 'Zoom In', function ()
	                {
	                    viewer.setGridPagesPerRow(settings.pagesPerRow + 1);
	                })
	            );
	        },
	
	        createLabel: function ()
	        {
	            var elem = createLabel('diva-grid-label', 'grid-label', 'Pages per row: ', 'pages-per-row', settings.pagesPerRow);
	            var textSpan = $(elem).find(settings.selector + 'pages-per-row')[0];
	
	            subscribe('GridRowNumberDidChange', function ()
	            {
	                textSpan.textContent = settings.pagesPerRow;
	            });
	
	            return elem;
	        }
	    });
	
	    var createViewMenu = function()
	    {
	        var viewOptionsList = elt('div', elemAttrs('view-options'));
	
	        var changeViewButton = createButtonElement('view-icon', 'Change view', function ()
	        {
	            $(viewOptionsList).toggle();
	        });
	
	        $(document).mouseup(function (event)
	        {
	            var container = $(viewOptionsList);
	
	            if (!container.is(event.target) && container.has(event.target).length === 0 && event.target.id !== settings.ID + 'view-icon')
	            {
	                container.hide();
	            }
	        });
	
	        var selectView = function (view)
	        {
	            viewer.changeView(view);
	
	            //hide view menu
	            $(viewOptionsList).hide();
	        };
	
	        var updateViewMenu = function()
	        {
	            var viewIconClasses = ' diva-view-icon diva-button';
	
	            // display the icon of the mode we're currently in (?)
	            if (settings.inGrid)
	            {
	                changeViewButton.className = 'diva-grid-icon' + viewIconClasses;
	            }
	            else if (settings.inBookLayout)
	            {
	                changeViewButton.className = 'diva-book-icon' + viewIconClasses;
	            }
	            else
	            {
	                changeViewButton.className = 'diva-document-icon' + viewIconClasses;
	            }
	
	            var viewOptions = document.createDocumentFragment();
	
	            // then display document, book, and grid buttons in that order, excluding the current view
	            if (settings.inGrid || settings.inBookLayout)
	                viewOptions.appendChild(createButtonElement('document-icon', 'Document View', selectView.bind(null, 'document')));
	
	            if (settings.inGrid || !settings.inBookLayout)
	                viewOptions.appendChild(createButtonElement('book-icon', 'Book View', selectView.bind(null, 'book')));
	
	            if (!settings.inGrid)
	                viewOptions.appendChild(createButtonElement('grid-icon', 'Grid View', selectView.bind(null, 'grid')));
	
	            // remove old menu
	            while (viewOptionsList.firstChild)
	            {
	                viewOptionsList.removeChild(viewOptionsList.firstChild);
	            }
	
	            // insert new menu
	            viewOptionsList.appendChild(viewOptions);
	        };
	
	        subscribe('ViewDidSwitch', updateViewMenu);
	        subscribe('ObjectDidLoad', updateViewMenu);
	
	        return elt('div', elemAttrs('view-menu'),
	            changeViewButton,
	            viewOptionsList
	        );
	    };
	
	    var createSlider = function(name, options)
	    {
	        return elt('input', options, {
	            id: settings.ID + name,
	            class: 'diva-' + name + ' diva-slider',
	            type: 'range'
	        });
	    };
	
	    var createLabel = function(name, id, label, innerName, innerValue)
	    {
	        return elt('div', {
	                id: settings.ID + id,
	                class: name + ' diva-label'
	            },
	            [
	                label,
	                elt('span', {
	                    id: settings.ID + innerName
	                }, innerValue)
	            ]);
	    };
	
	    var createPageNavigationControls = function ()
	    {
	        // Go to page form
	        var gotoForm = settings.enableGotoPage ? createGotoPageForm() : null;
	
	        return elt('span', elemAttrs('page-nav'),
	            createPageLabel(), // 'Page x of y' label
	            gotoForm
	        );
	    };
	
	    var createGotoPageForm = function ()
	    {
	        var gotoPageInput = elt('input', {
	            id: settings.ID + 'goto-page-input',
	            class: 'diva-input diva-goto-page-input',
	            autocomplete: 'off',
	            type: 'text'
	        });
	
	        var gotoPageSubmit = elt('input', {
	            id: settings.ID + 'goto-page-submit',
	            class: 'diva-button diva-button-text',
	            type: 'submit',
	            value: 'Go'
	        });
	
	        var inputSuggestions = elt('div', {
	                id: settings.ID + 'input-suggestions',
	                class: 'diva-input-suggestions'
	            }
	        );
	
	        var gotoForm = elt('form', {
	                id: settings.ID + 'goto-page',
	                class: 'diva-goto-form'
	            },
	            gotoPageInput,
	            gotoPageSubmit,
	            inputSuggestions
	        );
	
	        $(gotoForm).on('submit', function ()
	        {
	            var desiredPageLabel = gotoPageInput.value;
	
	            if (settings.onGotoSubmit && typeof settings.onGotoSubmit === "function")
	            {
	                var pageIndex = settings.onGotoSubmit(desiredPageLabel);
	                if (!viewer.gotoPageByIndex(pageIndex))
	                    alert("No page could be found with that label or page number");
	
	            }
	            else // Default if no function is specified in the settings
	            {
	                if (!viewer.gotoPageByLabel(desiredPageLabel))
	                    alert("No page could be found with that label or page number");
	            }
	
	            // Hide the suggestions
	            inputSuggestions.style.display = 'none';
	
	            // Prevent the default action of reloading the page
	            return false;
	        });
	
	        $(gotoPageInput).on('input focus', function ()
	        {
	            inputSuggestions.innerHTML = ''; // Remove all previous suggestions
	
	            var value = gotoPageInput.value;
	            var numSuggestions = 0;
	            if (settings.enableGotoSuggestions && value)
	            {
	                var pages = settings.manifest.pages;
	                for (var i = 0, len = pages.length; i < len && numSuggestions < 10; i++)
	                {
	                    if (pages[i].l.toLowerCase().indexOf(value.toLowerCase()) > -1)
	                    {
	                        var newInputSuggestion = elt('div', {
	                                class: 'diva-input-suggestion'
	                            },
	                            pages[i].l
	                        );
	
	                        inputSuggestions.appendChild(newInputSuggestion);
	
	                        numSuggestions++;
	                    }
	                }
	
	                // Show label suggestions
	                if (numSuggestions > 0)
	                    inputSuggestions.style.display = 'block';
	            }
	            else
	                inputSuggestions.style.display = 'none';
	        });
	
	        $(gotoPageInput).on('keydown', function (e)
	        {
	            var el;
	            if (e.keyCode === 13) // 'Enter' key
	            {
	                var active = $('.active', inputSuggestions);
	                if (active.length)
	                    gotoPageInput.value = active.text();
	
	            }
	            if (e.keyCode === 38) // Up arrow key
	            {
	                el = $('.active', inputSuggestions);
	                var prevEl = el.prev();
	                if (prevEl.length)
	                {
	                    el.removeClass('active');
	                    prevEl.addClass('active');
	                }
	                else
	                {
	                    el.removeClass('active');
	                    $('.diva-input-suggestion:last', inputSuggestions).addClass('active');
	                }
	            }
	            else if (e.keyCode === 40) // Down arrow key
	            {
	                el = $('.active', inputSuggestions);
	                var nextEl = el.next();
	                if (nextEl.length)
	                {
	                    el.removeClass('active');
	                    nextEl.addClass('active');
	                }
	                else
	                {
	                    el.removeClass('active');
	                    $('.diva-input-suggestion:first', inputSuggestions).addClass('active');
	                }
	            }
	        });
	
	        $(inputSuggestions).on('mousedown', '.diva-input-suggestion', function()
	        {
	            gotoPageInput.value = this.textContent;
	            inputSuggestions.style.display = 'none';
	            $(gotoPageInput).trigger('submit');
	        });
	
	        $(gotoPageInput).on('blur', function ()
	        {
	            // Hide label suggestions
	            inputSuggestions.style.display = 'none';
	        });
	
	        return gotoForm;
	    };
	
	    var createPageLabel = function()
	    {
	        // Current page
	        var currentPage = elt('span', {
	            id: settings.ID + 'current-page'
	        });
	
	        var updateCurrentPage = function ()
	        {
	            currentPage.textContent = viewer.getCurrentAliasedPageIndex();
	        };
	
	        subscribe('VisiblePageDidChange', updateCurrentPage);
	        subscribe('ViewerDidLoad', updateCurrentPage);
	
	        // Number of pages
	        var numPages = elt('span', {
	            id: settings.ID + 'num-pages'
	        });
	
	        var updateNumPages = function ()
	        {
	            numPages.textContent = settings.numPages;
	        };
	
	        subscribe('NumberOfPagesDidChange', updateNumPages);
	        subscribe('ObjectDidLoad', updateNumPages);
	
	        return elt('span', {
	                class: 'diva-page-label diva-label'
	            },
	            'Page ', currentPage, ' of ', numPages
	        );
	    };
	
	    var createToolbarButtonGroup = function ()
	    {
	        var buttons = [createViewMenu()];
	
	        if (settings.enableLinkIcon)
	            buttons.push(createLinkIcon());
	
	        if (settings.enableNonPagedVisibilityIcon)
	            buttons.push(createToggleNonPagedButton());
	
	        if (settings.enableFullscreen)
	            buttons.push(createFullscreenButton());
	
	        return elt('span', elemAttrs('toolbar-button-group'), buttons);
	    };
	
	    var createLinkIcon = function ()
	    {
	        var elem = createButtonElement('link-icon', 'Link to this page');
	        var linkIcon = $(elem);
	
	        linkIcon.on('click', function ()
	        {
	            $('body').prepend(
	                elt('div', {
	                    id: settings.ID + 'link-popup',
	                    class: 'diva-popup diva-link-popup'
	                }, [
	                    elt('input', {
	                        id: settings.ID + 'link-popup-input',
	                        class: 'diva-input',
	                        type: 'text',
	                        value: viewer.getCurrentURL()
	                    })
	                ])
	            );
	
	            if (settings.inFullscreen)
	            {
	                $(settings.selector + 'link-popup').addClass('in-fullscreen');
	            }
	            else
	            {
	                // Calculate the left and top offsets
	                var leftOffset = linkIcon.offset().left - 222 + linkIcon.outerWidth();
	                var topOffset = linkIcon.offset().top + linkIcon.outerHeight() - 1;
	
	                $(settings.selector + 'link-popup').css({
	                    'top': topOffset + 'px',
	                    'left': leftOffset + 'px'
	                });
	            }
	
	            // Catch onmouseup events outside of this div
	            $('body').mouseup(function (event)
	            {
	                var targetID = event.target.id;
	
	                if (targetID !== settings.ID + 'link-popup' && targetID !== settings.ID + 'link-popup-input')
	                    $(settings.selector + 'link-popup').remove();
	            });
	
	            // Also delete it upon scroll and page up/down key events
	            // FIXME(wabain): This is aggressive
	            settings.viewportObject.scroll(function ()
	            {
	                $(settings.selector + 'link-popup').remove();
	            });
	            $(settings.selector + 'link-popup input').click(function ()
	            {
	                $(this).focus().select();
	            });
	
	            return false;
	        });
	
	        return elem;
	    };
	
	    var createFullscreenButton = function ()
	    {
	        return createButtonElement('fullscreen-icon', 'Toggle fullscreen mode', function ()
	        {
	            viewer.toggleFullscreenMode();
	        });
	    };
	
	    var createToggleNonPagedButton = function ()
	    {
	        var getClassName = function()
	        {
	            return 'toggle-nonpaged-icon' + (viewer.getSettings().showNonPagedPages ? '-active' : '');
	        };
	
	        var toggleNonPagedButton = createButtonElement(getClassName(), 'Toggle visibility of non-paged pages', function()
	        {
	            viewer.toggleNonPagedPagesVisibility();
	            var newClassName = 'diva-' + getClassName();
	            this.className = this.className.replace(/diva-toggle-nonpaged-icon(-active)?/, newClassName);
	        });
	
	        var updateNonPagedButtonVisibility = function ()
	        {
	            var pages = settings.manifest.pages;
	            for (var i = 0; i < pages.length; i++)
	            {
	                if (settings.manifest.paged && !pages[i].paged)
	                {
	                    // Show the button, there is at least one non-paged page
	                    toggleNonPagedButton.style.display = 'inline-block';
	                    return;
	                }
	            }
	
	            // No non-paged pages were found, hide the button
	            toggleNonPagedButton.style.display = 'none';
	        };
	        subscribe('ObjectDidLoad', updateNonPagedButtonVisibility);
	
	        return toggleNonPagedButton;
	    };
	
	    // Handles all status updating etc (both fullscreen and not)
	    var init = function ()
	    {
	        var leftTools = [createZoomControls(), createGridControls()];
	        var rightTools = [createPageNavigationControls(), createToolbarButtonGroup()];
	
	        var tools = elt('div', elemAttrs('tools'),
	            elt('div', elemAttrs('tools-left'), leftTools),
	            elt('div', elemAttrs('tools-right'), rightTools)
	        );
	
	        settings.toolbarParentObject.prepend(tools);
	
	        // Handle entry to and exit from fullscreen mode
	        var switchMode = function ()
	        {
	            var toolsRightElement = document.getElementById(settings.ID + 'tools-right');
	            var pageNavElement = document.getElementById(settings.ID + 'page-nav');
	
	            if (!settings.inFullscreen)
	            {
	                // Leaving fullscreen
	                $(tools).removeClass('diva-fullscreen-tools');
	
	                //move ID-page-nav to beginning of tools right
	                toolsRightElement.removeChild(pageNavElement);
	                toolsRightElement.insertBefore(pageNavElement, toolsRightElement.firstChild);
	            }
	            else
	            {
	                // Entering fullscreen
	                $(tools).addClass('diva-fullscreen-tools');
	
	                //move ID-page-nav to end of tools right
	                toolsRightElement.removeChild(pageNavElement);
	                toolsRightElement.appendChild(pageNavElement);
	            }
	        };
	
	        subscribe('ModeDidSwitch', switchMode);
	        subscribe('ViewerDidLoad', switchMode);
	
	        var toolbar = {
	            element: tools,
	            closePopups: function ()
	            {
	                $('.diva-popup').css('display', 'none');
	            }
	        };
	
	        return toolbar;
	    };
	
	    return init();
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	
	__webpack_require__(15);
	
	var elt = __webpack_require__(8);
	var getScrollbarWidth = __webpack_require__(16);
	
	var gestureEvents = __webpack_require__(17);
	var diva = __webpack_require__(2);
	var DocumentHandler = __webpack_require__(18);
	var GridHandler = __webpack_require__(25);
	var PageOverlayManager = __webpack_require__(26);
	var PluginRegistry = __webpack_require__(5);
	var Renderer = __webpack_require__(27);
	var getPageLayouts = __webpack_require__(36);
	var createSettingsView = __webpack_require__(41);
	var ValidationRunner = __webpack_require__(42);
	var Viewport = __webpack_require__(43);
	
	var debug = __webpack_require__(28)('diva:ViewerCore');
	
	module.exports = ViewerCore;
	
	// Define validations
	var optionsValidations = [
	    {
	        key: 'goDirectlyTo',
	        validate: function (value, settings)
	        {
	            if (value < 0 || value >= settings.manifest.pages.length)
	                return 0;
	        }
	    },
	    {
	        key: 'minPagesPerRow',
	        validate: function (value)
	        {
	            return Math.max(2, value);
	        }
	    },
	    {
	        key: 'maxPagesPerRow',
	        validate: function (value, settings)
	        {
	            return Math.max(value, settings.minPagesPerRow);
	        }
	    },
	    {
	        key: 'pagesPerRow',
	        validate: function (value, settings)
	        {
	            // Default to the maximum
	            if (value < settings.minPagesPerRow || value > settings.maxPagesPerRow)
	                return settings.maxPagesPerRow;
	        }
	    },
	    {
	        key: 'maxZoomLevel',
	        validate: function (value, settings, config)
	        {
	            // Changing this value isn't really an error, it just depends on the
	            // source manifest
	            config.suppressWarning();
	
	            if (value < 0 || value > settings.manifest.maxZoom)
	                return settings.manifest.maxZoom;
	        }
	    },
	    {
	        key: 'minZoomLevel',
	        validate: function (value, settings, config)
	        {
	            // Changes based on the manifest value shouldn't trigger a
	            // warning
	            if (value > settings.manifest.maxZoom)
	            {
	                config.suppressWarning();
	                return 0;
	            }
	
	            if (value < 0 || value > settings.maxZoomLevel)
	                return 0;
	        }
	    },
	    {
	        key: 'zoomLevel',
	        validate: function (value, settings, config)
	        {
	            if (value > settings.manifest.maxZoom)
	            {
	                config.suppressWarning();
	                return 0;
	            }
	
	            if (value < settings.minZoomLevel || value > settings.maxZoomLevel)
	                return settings.minZoomLevel;
	        }
	    }
	];
	
	function ViewerCore(element, options, publicInstance)
	{
	    var self = this;
	    var parentObject = $(element);
	
	    // Things that cannot be changed because of the way they are used by the script
	    // Many of these are declared with arbitrary values that are changed later on
	    var viewerState = {
	        currentPageIndex: 0,        // The current page in the viewport (center-most page)
	        horizontalOffset: 0,        // Distance from the center of the diva element to the top of the current page
	        horizontalPadding: 0,       // Either the fixed padding or adaptive padding
	        ID: null,                   // The prefix of the IDs of the elements (usually 1-diva-)
	        initialKeyScroll: false,    // Holds the initial state of enableKeyScroll
	        initialSpaceScroll: false,  // Holds the initial state of enableSpaceScroll
	        innerElement: null,         // The native .diva-outer DOM object
	        innerObject: {},            // $(settings.ID + 'inner'), for selecting the .diva-inner element
	        isActiveDiva: true,         // In the case that multiple diva panes exist on the same page, this should have events funneled to it.
	        isIIIF: false,              // Specifies whether objectData is in Diva native or IIIF Manifest format
	        isScrollable: true,         // Used in enable/disableScrollable public methods
	        isZooming: false,           // Flag to keep track of whether zooming is still in progress, for handleZoom
	        loaded: false,              // A flag for when everything is loaded and ready to go.
	        manifest: null,
	        mobileWebkit: false,        // Checks if the user is on a touch device (iPad/iPod/iPhone/Android)
	        numPages: 0,                // Number of pages in the array
	        oldZoomLevel: -1,           // Holds the previous zoom level after zooming in or out
	        options: options,
	        outerElement: null,         // The native .diva-outer DOM object
	        outerObject: {},            // $(settings.ID + 'outer'), for selecting the .diva-outer element
	        pageOverlays: new PageOverlayManager(),
	        pageTools: [],              // The plugins which are enabled as page tools
	        parentObject: parentObject, // JQuery object referencing the parent element
	        pendingManifestRequest: null, // Reference to the xhr request retrieving the manifest. Used to cancel the request on destroy()
	        plugins: [],                // Filled with the enabled plugins from the registry
	        renderer: null,
	        resizeTimer: -1,            // Holds the ID of the timeout used when resizing the window (for clearing)
	        scrollbarWidth: 0,          // Set to the actual scrollbar width in init()
	        selector: '',               // Uses the generated ID prefix to easily select elements
	        throbberTimeoutID: -1,      // Holds the ID of the throbber loading timeout
	        toolbar: null,              // Holds an object with some toolbar-related functions
	        verticalOffset: 0,          // Distance from the center of the diva element to the left side of the current page
	        verticalPadding: 0,         // Either the fixed padding or adaptive padding
	        viewHandler: null,
	        viewport: null,             // Object caching the viewport dimensions
	        viewportElement: null,
	        viewportObject: null
	    };
	
	    var settings = createSettingsView([options, viewerState]);
	
	    // Aliases for compatibilty
	    Object.defineProperties(settings, {
	        // Height of the document viewer pane
	        panelHeight: {
	            get: function ()
	            {
	                return viewerState.viewport.height;
	            }
	        },
	        // Width of the document viewer pane
	        panelWidth: {
	            get: function ()
	            {
	                return viewerState.viewport.width;
	            }
	        }
	    });
	
	    var optionsValidator = new ValidationRunner({
	        additionalProperties: [
	            {
	                key: 'manifest',
	                get: function ()
	                {
	                    return viewerState.manifest;
	                }
	            }
	        ],
	
	        validations: optionsValidations
	    });
	
	    var isValidOption = function (key, value)
	    {
	        return optionsValidator.isValid(key, value, viewerState.options);
	    };
	
	    var elemAttrs = function (ident, base)
	    {
	        var attrs = {
	            id: settings.ID + ident,
	            class: 'diva-' + ident
	        };
	
	        if (base)
	            return $.extend(attrs, base);
	        else
	            return attrs;
	    };
	
	    var getPageData = function (pageIndex, attribute)
	    {
	        return settings.manifest.pages[pageIndex].d[settings.zoomLevel][attribute];
	    };
	
	    // Reset some settings and empty the viewport
	    var clearViewer = function ()
	    {
	        viewerState.viewport.top = 0;
	
	        // Clear all the timeouts to prevent undesired pages from loading
	        clearTimeout(viewerState.resizeTimer);
	    };
	
	    /**
	     * Update settings to match the specified options. Load the viewer,
	     * fire appropriate events for changed options.
	     */
	    var reloadViewer = function (newOptions)
	    {
	        var queuedEvents = [];
	
	        newOptions = optionsValidator.getValidatedOptions(settings, newOptions);
	
	        // Set the zoom level if valid and fire a ZoomLevelDidChange event
	        if (hasChangedOption(newOptions, 'zoomLevel'))
	        {
	            viewerState.oldZoomLevel = settings.zoomLevel;
	            viewerState.options.zoomLevel = newOptions.zoomLevel;
	            queuedEvents.push(["ZoomLevelDidChange", newOptions.zoomLevel]);
	        }
	
	        // Set the pages per row if valid and fire an event
	        if (hasChangedOption(newOptions, 'pagesPerRow'))
	        {
	            viewerState.options.pagesPerRow = newOptions.pagesPerRow;
	            queuedEvents.push(["GridRowNumberDidChange", newOptions.pagesPerRow]);
	        }
	
	        // Update verticallyOriented (no event fired)
	        if (hasChangedOption(newOptions, 'verticallyOriented'))
	            viewerState.options.verticallyOriented = newOptions.verticallyOriented;
	
	        // Show/Hide non-paged pages
	        if (hasChangedOption(newOptions, 'showNonPagedPages'))
	        {
	            viewerState.options.showNonPagedPages = newOptions.showNonPagedPages;
	        }
	
	        // Update page position (no event fired here)
	        if ('goDirectlyTo' in newOptions)
	        {
	            viewerState.options.goDirectlyTo = newOptions.goDirectlyTo;
	
	            if ('verticalOffset' in newOptions)
	                viewerState.verticalOffset = newOptions.verticalOffset;
	
	            if ('horizontalOffset' in newOptions)
	                viewerState.horizontalOffset = newOptions.horizontalOffset;
	        }
	        else
	        {
	            // Otherwise the default is to remain on the current page
	            viewerState.options.goDirectlyTo = settings.currentPageIndex;
	        }
	
	        if (hasChangedOption(newOptions, 'inGrid') || hasChangedOption(newOptions, 'inBookLayout'))
	        {
	            if ('inGrid' in newOptions)
	                viewerState.options.inGrid = newOptions.inGrid;
	
	            if ('inBookLayout' in newOptions)
	                viewerState.options.inBookLayout = newOptions.inBookLayout;
	
	            queuedEvents.push(["ViewDidSwitch", settings.inGrid]);
	        }
	
	        // Note: prepareModeChange() depends on inGrid and the vertical/horizontalOffset (for now)
	        if (hasChangedOption(newOptions, 'inFullscreen'))
	        {
	            viewerState.options.inFullscreen = newOptions.inFullscreen;
	            prepareModeChange(newOptions);
	            queuedEvents.push(["ModeDidSwitch", settings.inFullscreen]);
	        }
	
	        clearViewer();
	        updateViewHandlerAndRendering();
	
	        if (viewerState.renderer)
	        {
	            // TODO: The usage of padding variables is still really
	            // messy and inconsistent
	            var rendererConfig = {
	                pageLayouts: getPageLayouts(settings),
	                padding: getPadding(),
	                maxZoomLevel: settings.inGrid ? null : viewerState.manifest.maxZoom,
	                verticallyOriented: settings.verticallyOriented || settings.inGrid,
	            };
	
	            var viewportPosition = {
	                zoomLevel: settings.inGrid ? null : settings.zoomLevel,
	                anchorPage: settings.goDirectlyTo,
	                verticalOffset: viewerState.verticalOffset,
	                horizontalOffset: viewerState.horizontalOffset
	            };
	
	            var sourceProvider = getCurrentSourceProvider();
	
	            if (debug.enabled)
	            {
	                var serialized = Object.keys(rendererConfig)
	                    .filter(function (key)
	                    {
	                        // Too long
	                        return key !== 'pageLayouts' && key !== 'padding';
	                    })
	                    .map(function (key)
	                    {
	                        var value = rendererConfig[key];
	                        return key + ': ' + JSON.stringify(value);
	                    })
	                    .join(', ');
	
	                debug('reload with %s', serialized);
	            }
	
	            viewerState.renderer.load(rendererConfig, viewportPosition, sourceProvider);
	        }
	
	        queuedEvents.forEach(function (params)
	        {
	            publish.apply(null, params);
	        });
	
	        return true;
	    };
	
	    var hasChangedOption = function (options, key)
	    {
	        return key in options && options[key] !== settings[key];
	    };
	
	    // Handles switching in and out of fullscreen mode
	    var prepareModeChange = function (options)
	    {
	        // Toggle the classes
	        var changeClass = options.inFullscreen ? 'addClass' : 'removeClass';
	        viewerState.outerObject[changeClass]('diva-fullscreen');
	        $('body')[changeClass]('diva-hide-scrollbar');
	        settings.parentObject[changeClass]('diva-full-width');
	
	        // Adjust Diva's internal panel size, keeping the old values
	        var storedHeight = settings.panelHeight;
	        var storedWidth = settings.panelWidth;
	        viewerState.viewport.invalidate();
	
	        // If this isn't the original load, the offsets matter, and the position isn't being changed...
	        if (!viewerState.loaded && !settings.inGrid && !('verticalOffset' in options))
	        {
	            //get the updated panel size
	            var newHeight = settings.panelHeight;
	            var newWidth = settings.panelWidth;
	
	            //and re-center the new panel on the same point
	            viewerState.verticalOffset += ((storedHeight - newHeight) / 2);
	            viewerState.horizontalOffset += ((storedWidth - newWidth) / 2);
	        }
	
	        //turn on/off escape key listener
	        if (options.inFullscreen)
	            $(document).on('keyup', escapeListener);
	        else
	            $(document).off('keyup', escapeListener);
	    };
	
	    // Update the view handler and the view rendering for the current view
	    var updateViewHandlerAndRendering = function ()
	    {
	        var Handler = settings.inGrid ? GridHandler : DocumentHandler;
	
	        if (viewerState.viewHandler && !(viewerState.viewHandler instanceof Handler))
	        {
	            viewerState.viewHandler.destroy();
	            viewerState.viewHandler = null;
	        }
	
	        if (!viewerState.viewHandler)
	            viewerState.viewHandler = new Handler(self);
	
	        if (!viewerState.renderer)
	            initializeRenderer();
	    };
	
	    // TODO: This could probably be done upon ViewerCore initialization
	    var initializeRenderer = function ()
	    {
	        var compatErrors = Renderer.getCompatibilityErrors();
	
	        if (compatErrors)
	        {
	            showError(compatErrors);
	        }
	        else
	        {
	            var options = {
	                viewport: viewerState.viewport,
	                outerElement: viewerState.outerElement,
	                innerElement: viewerState.innerElement
	            };
	
	            var hooks = {
	                onViewWillLoad: function ()
	                {
	                    viewerState.viewHandler.onViewWillLoad();
	                },
	                onViewDidLoad: function ()
	                {
	                    updatePageOverlays();
	                    viewerState.viewHandler.onViewDidLoad();
	                },
	                onViewDidUpdate: function (pages, targetPage)
	                {
	                    updatePageOverlays();
	                    viewerState.viewHandler.onViewDidUpdate(pages, targetPage);
	                },
	                onViewDidTransition: function ()
	                {
	                    updatePageOverlays();
	                },
	                onPageWillLoad: function (pageIndex)
	                {
	                    publish('PageWillLoad', pageIndex);
	                }
	            };
	
	            viewerState.renderer = new Renderer(options, hooks);
	        }
	    };
	
	    var getCurrentSourceProvider = function ()
	    {
	        if (settings.inGrid)
	        {
	            var gridSourceProvider = {
	                getAllZoomLevelsForPage: function (page)
	                {
	                    return [gridSourceProvider.getBestZoomLevelForPage(page)];
	                },
	                getBestZoomLevelForPage: function (page)
	                {
	                    var url = settings.manifest.getPageImageURL(page.index, {
	                        width: page.dimensions.width
	                    });
	
	                    return {
	                        zoomLevel: 1, // FIXME
	                        rows: 1,
	                        cols: 1,
	                        tiles: [{
	                            url: url,
	                            zoomLevel: 1, // FIXME
	                            row: 0,
	                            col: 0,
	                            dimensions: page.dimensions,
	                            offset: {
	                                top: 0,
	                                left: 0
	                            }
	                        }]
	                    };
	                }
	            };
	
	            return gridSourceProvider;
	        }
	
	        var tileDimens = {
	            width: settings.tileWidth,
	            height: settings.tileHeight
	        };
	
	        return {
	            getBestZoomLevelForPage: function (page)
	            {
	                return settings.manifest.getPageImageTiles(page.index, Math.ceil(settings.zoomLevel), tileDimens);
	            },
	            getAllZoomLevelsForPage: function (page)
	            {
	                var levels = [];
	
	                var levelCount = viewerState.manifest.maxZoom;
	                for (var level=0; level <= levelCount; level++)
	                {
	                    levels.push(settings.manifest.getPageImageTiles(page.index, level, tileDimens));
	                }
	
	                levels.reverse();
	
	                return levels;
	            }
	        };
	    };
	
	    var getPadding = function ()
	    {
	        var topPadding, leftPadding;
	        var docVPadding, docHPadding;
	
	        if (settings.inGrid)
	        {
	            docVPadding = settings.fixedPadding;
	            topPadding = leftPadding = docHPadding = 0;
	        }
	        else
	        {
	            topPadding = settings.verticallyOriented ? viewerState.verticalPadding : 0;
	            leftPadding = settings.verticallyOriented ? 0 : viewerState.horizontalPadding;
	
	            docVPadding = settings.verticallyOriented ? 0 : viewerState.verticalPadding;
	            docHPadding = settings.verticallyOriented ? viewerState.horizontalPadding : 0;
	        }
	
	        return {
	            document: {
	                top: docVPadding,
	                bottom: docVPadding,
	                left: docHPadding,
	                right: docHPadding
	            },
	            page: {
	                top: topPadding,
	                bottom: 0,
	                left: leftPadding,
	                right: 0
	            }
	        };
	    };
	
	    var updatePageOverlays = function ()
	    {
	        viewerState.pageOverlays.updateOverlays(viewerState.renderer.getRenderedPages());
	    };
	
	    //Shortcut for closing fullscreen with the escape key
	    var escapeListener = function (e)
	    {
	        if (e.keyCode == 27)
	        {
	            reloadViewer({
	                inFullscreen: !settings.inFullscreen
	            });
	        }
	    };
	
	    // Called to handle any zoom level
	    var handleZoom = function (newZoomLevel, focalPoint)
	    {
	        // If the zoom level provided is invalid, return false
	        if (!isValidOption('zoomLevel', newZoomLevel))
	            return false;
	
	        // If no focal point was given, zoom on the center of the viewport
	        if (focalPoint == null)
	        {
	            var viewport = viewerState.viewport;
	            var currentRegion = viewerState.renderer.layout.getPageRegion(settings.currentPageIndex);
	
	            focalPoint = {
	                anchorPage: settings.currentPageIndex,
	                offset: {
	                    left: (viewport.width / 2) - (currentRegion.left - viewport.left),
	                    top: (viewport.height / 2) - (currentRegion.top - viewport.top)
	                }
	            };
	        }
	
	        var pageRegion = viewerState.renderer.layout.getPageRegion(focalPoint.anchorPage);
	
	        // calculate distance from cursor coordinates to center of viewport
	        var focalXToCenter = (pageRegion.left + focalPoint.offset.left) -
	            (settings.viewport.left + (settings.viewport.width / 2));
	        var focalYToCenter = (pageRegion.top + focalPoint.offset.top) -
	            (settings.viewport.top + (settings.viewport.height / 2));
	
	        function getPositionForZoomLevel(zoomLevel)
	        {
	            var zoomRatio = Math.pow(2, zoomLevel - initialZoomLevel);
	
	            //TODO(jeromepl): Calculate position from page top left to viewport top left
	            // calculate horizontal/verticalOffset: distance from viewport center to page upper left corner
	            var horizontalOffset = (focalPoint.offset.left * zoomRatio) - focalXToCenter;
	            var verticalOffset = (focalPoint.offset.top * zoomRatio) - focalYToCenter;
	
	            return {
	                zoomLevel: zoomLevel,
	                anchorPage: focalPoint.anchorPage,
	                verticalOffset: verticalOffset,
	                horizontalOffset: horizontalOffset
	            };
	        }
	
	        var initialZoomLevel = viewerState.oldZoomLevel = settings.zoomLevel;
	        viewerState.options.zoomLevel = newZoomLevel;
	
	        var endPosition = getPositionForZoomLevel(newZoomLevel);
	        viewerState.options.goDirectlyTo = endPosition.anchorPage;
	        viewerState.verticalOffset = endPosition.verticalOffset;
	        viewerState.horizontalOffset = endPosition.horizontalOffset;
	
	        viewerState.renderer.transitionViewportPosition({
	            duration: 300,
	            parameters: {
	                zoomLevel: {
	                    from: initialZoomLevel,
	                    to: newZoomLevel
	                }
	            },
	            getPosition: function (parameters)
	            {
	                return getPositionForZoomLevel(parameters.zoomLevel);
	            },
	            onEnd: function (info)
	            {
	                viewerState.viewportObject.scroll(scrollFunction);
	
	                if (info.interrupted)
	                    viewerState.oldZoomLevel = newZoomLevel;
	            }
	        });
	
	        // Update the slider
	        publish("ZoomLevelDidChange", newZoomLevel);
	
	        // While zooming, don't update scroll offsets based on the scaled version of diva-inner
	        viewerState.viewportObject.off('scroll');
	
	        return true;
	    };
	
	    /*
	     Gets the Y-offset for a specific point on a specific page
	     Acceptable values for "anchor":
	     "top" (default) - will anchor top of the page to the top of the diva-outer element
	     "bottom" - top, s/top/bottom
	     "center" - will center the page on the diva element
	     Returned value will be the distance from the center of the diva-outer element to the top of the current page for the specified anchor
	     */
	    var getYOffset = function (pageIndex, anchor)
	    {
	        pageIndex = (typeof(pageIndex) === "undefined" ? settings.currentPageIndex : pageIndex);
	
	        if (anchor === "center" || anchor === "centre") //how you can tell an American coded this
	        {
	            return parseInt(getPageData(pageIndex, "h") / 2, 10);
	        }
	        else if (anchor === "bottom")
	        {
	            return parseInt(getPageData(pageIndex, "h") - settings.panelHeight / 2, 10);
	        }
	        else
	        {
	            return parseInt(settings.panelHeight / 2, 10);
	        }
	    };
	
	    //Same as getYOffset with "left" and "right" as acceptable values instead of "top" and "bottom"
	    var getXOffset = function (pageIndex, anchor)
	    {
	        pageIndex = (typeof(pageIndex) === "undefined" ? settings.currentPageIndex : pageIndex);
	
	        if (anchor === "left")
	        {
	            return parseInt(settings.panelWidth / 2, 10);
	        }
	        else if (anchor === "right")
	        {
	            return parseInt(getPageData(pageIndex, "w") - settings.panelWidth / 2, 10);
	        }
	        else
	        {
	            return parseInt(getPageData(pageIndex, "w") / 2, 10);
	        }
	    };
	
	    // updates panelHeight/panelWidth on resize
	    var updatePanelSize = function ()
	    {
	        viewerState.viewport.invalidate();
	
	        // FIXME(wabain): This should really only be called after initial load
	        if (viewerState.renderer)
	        {
	            updateOffsets();
	            viewerState.renderer.goto(settings.currentPageIndex, viewerState.verticalOffset, viewerState.horizontalOffset);
	        }
	
	        return true;
	    };
	
	    var updateOffsets = function ()
	    {
	        var pageOffset = viewerState.renderer.layout.getPageToViewportCenterOffset(settings.currentPageIndex, viewerState.viewport);
	
	        if (pageOffset)
	        {
	            viewerState.horizontalOffset = pageOffset.x;
	            viewerState.verticalOffset = pageOffset.y;
	        }
	    };
	
	    // Bind mouse events (drag to scroll, double-click)
	    var bindMouseEvents = function()
	    {
	        // Set drag scroll on first descendant of class dragger on both selected elements
	        viewerState.viewportObject.dragscrollable({dragSelector: '.diva-dragger', acceptPropagatedEvent: true});
	        viewerState.innerObject.dragscrollable({dragSelector: '.diva-dragger', acceptPropagatedEvent: true});
	
	        gestureEvents.onDoubleClick(viewerState.viewportObject, function (event, coords)
	        {
	            debug('Double click at %s, %s', coords.left, coords.top);
	            viewerState.viewHandler.onDoubleClick(event, coords);
	        });
	    };
	
	    var onResize = function()
	    {
	        updatePanelSize();
	        // Cancel any previously-set resize timeouts
	        clearTimeout(viewerState.resizeTimer);
	
	        viewerState.resizeTimer = setTimeout(function ()
	        {
	            var pageOffset = viewerState.renderer.layout.getPageToViewportCenterOffset(settings.currentPageIndex, viewerState.viewport);
	
	            if (pageOffset)
	            {
	                reloadViewer({
	                    goDirectlyTo: settings.currentPageIndex,
	                    verticalOffset: pageOffset.y,
	                    horizontalOffset: pageOffset.x
	                });
	            }
	            else
	            {
	                reloadViewer({
	                    goDirectlyTo: settings.currentPageIndex
	                });
	            }
	        }, 200);
	    };
	
	    // Bind touch and orientation change events
	    var bindTouchEvents = function()
	    {
	        // Block the user from moving the window only if it's not integrated
	        if (settings.blockMobileMove)
	        {
	            $('body').bind('touchmove', function (event)
	            {
	                var e = event.originalEvent;
	                e.preventDefault();
	
	                return false;
	            });
	        }
	
	        // Touch events for swiping in the viewport to scroll pages
	        viewerState.viewportObject.kinetic({
	            triggerHardware: true
	        });
	
	        gestureEvents.onPinch(viewerState.viewportObject, function (event, coords, start, end)
	        {
	            debug('Pinch %s at %s, %s', end - start, coords.left, coords.top);
	            viewerState.viewHandler.onPinch(event, coords, start, end);
	        });
	
	        gestureEvents.onDoubleTap(viewerState.viewportObject, function (event, coords)
	        {
	            debug('Double tap at %s, %s', coords.left, coords.top);
	            viewerState.viewHandler.onDoubleClick(event, coords);
	        });
	    };
	
	    // Handle the scroll
	    var scrollFunction = function ()
	    {
	        var previousTopScroll = viewerState.viewport.top;
	        var previousLeftScroll = viewerState.viewport.left;
	
	        var direction;
	
	        viewerState.viewport.invalidate();
	
	        var newScrollTop = viewerState.viewport.top;
	        var newScrollLeft = viewerState.viewport.left;
	
	        if (settings.verticallyOriented || settings.inGrid)
	            direction = newScrollTop - previousTopScroll;
	        else
	            direction = newScrollLeft - previousLeftScroll;
	
	        //give adjust the direction we care about
	        viewerState.renderer.adjust(direction);
	
	        var primaryScroll = (settings.verticallyOriented || settings.inGrid) ? newScrollTop : newScrollLeft;
	
	        publish("ViewerDidScroll", primaryScroll);
	
	        if (direction > 0)
	        {
	            publish("ViewerDidScrollDown", primaryScroll);
	        }
	        else if (direction < 0)
	        {
	            publish("ViewerDidScrollUp", primaryScroll);
	        }
	
	        updateOffsets();
	    };
	
	    // Binds most of the event handlers (some more in createToolbar)
	    var handleEvents = function ()
	    {
	        // Change the cursor for dragging
	        viewerState.innerObject.mousedown(function ()
	        {
	            viewerState.innerObject.addClass('diva-grabbing');
	        });
	
	        viewerState.innerObject.mouseup(function ()
	        {
	            viewerState.innerObject.removeClass('diva-grabbing');
	        });
	
	        bindMouseEvents();
	
	        viewerState.viewportObject.scroll(scrollFunction);
	
	        var upArrowKey = 38,
	            downArrowKey = 40,
	            leftArrowKey = 37,
	            rightArrowKey = 39,
	            spaceKey = 32,
	            pageUpKey = 33,
	            pageDownKey = 34,
	            homeKey = 36,
	            endKey = 35;
	
	        // Catch the key presses in document
	        $(document).on('keydown.diva', function (event)
	        {
	            if (!viewerState.isActiveDiva)
	                return true;
	
	            // Space or page down - go to the next page
	            if ((settings.enableSpaceScroll && !event.shiftKey && event.keyCode === spaceKey) || (settings.enableKeyScroll && event.keyCode === pageDownKey))
	            {
	                viewerState.viewport.top += settings.panelHeight;
	                return false;
	            }
	            else if (!settings.enableSpaceScroll && event.keyCode === spaceKey)
	            {
	                event.preventDefault();
	            }
	
	            if (settings.enableKeyScroll)
	            {
	                // Don't steal keyboard shortcuts (metaKey = command [OS X], super [Win/Linux])
	                if (event.shiftKey || event.ctrlKey || event.metaKey)
	                    return true;
	
	                switch (event.keyCode)
	                {
	                    case pageUpKey:
	                        // Page up - go to the previous page
	                        viewerState.viewport.top -= settings.panelHeight;
	                        return false;
	
	                    case upArrowKey:
	                        // Up arrow - scroll up
	                        viewerState.viewport.top -= settings.arrowScrollAmount;
	                        return false;
	
	                    case downArrowKey:
	                        // Down arrow - scroll down
	                        viewerState.viewport.top += settings.arrowScrollAmount;
	                        return false;
	
	                    case leftArrowKey:
	                        // Left arrow - scroll left
	                        viewerState.viewport.left -= settings.arrowScrollAmount;
	                        return false;
	
	                    case rightArrowKey:
	                        // Right arrow - scroll right
	                        viewerState.viewport.left += settings.arrowScrollAmount;
	                        return false;
	
	                    case homeKey:
	                        // Home key - go to the beginning of the document
	                        viewerState.viewport.top = 0;
	                        return false;
	
	                    case endKey:
	                        // End key - go to the end of the document
	                        // Count on the viewport coordinate value being normalized
	                        if (settings.verticallyOriented)
	                            viewerState.viewport.top = Infinity;
	                        else
	                            viewerState.viewport.left = Infinity;
	
	                        return false;
	
	                    default:
	                        return true;
	                }
	            }
	            return true;
	        });
	
	        diva.Events.subscribe('ViewerDidTerminate', function()
	        {
	            $(document).off('keydown.diva');
	        }, settings.ID);
	
	        bindTouchEvents();
	
	        // Handle window resizing events
	        window.addEventListener('resize', onResize, false);
	
	        diva.Events.subscribe('ViewerDidTerminate', function()
	        {
	            window.removeEventListener('resize', onResize, false);
	        }, settings.ID);
	
	        // Handle orientation change separately
	        if ('onorientationchange' in window)
	        {
	            window.addEventListener('orientationchange', onResize, false);
	
	            diva.Events.subscribe('ViewerDidTerminate', function()
	            {
	                window.removeEventListener('orientationchange', onResize, false);
	            }, settings.ID);
	        }
	
	        diva.Events.subscribe('PanelSizeDidChange', updatePanelSize, settings.ID);
	
	        // Clear page and resize timeouts when the viewer is destroyed
	        diva.Events.subscribe('ViewerDidTerminate', function ()
	        {
	            if (viewerState.renderer)
	                viewerState.renderer.destroy();
	
	            clearTimeout(viewerState.resizeTimer);
	        }, settings.ID);
	    };
	
	    var initPlugins = function ()
	    {
	        // Add all the plugins that have not been explicitly disabled to
	        // settings.plugins
	        PluginRegistry.getAll().forEach(function (plugin)
	        {
	            var pluginProperName = plugin.pluginName[0].toUpperCase() + plugin.pluginName.substring(1);
	
	            if (settings['enable' + pluginProperName])
	            {
	                // Call the init function and check return value
	                var enablePlugin = plugin.init(settings, publicInstance);
	
	                // If int returns false, consider the plugin disabled
	                if (!enablePlugin)
	                    return;
	
	                // Create the pageTools bar if handleClick is set to a function
	                if (typeof plugin.handleClick === 'function')
	                {
	                    viewerState.pageTools.push(plugin);
	                }
	
	                // Add it to settings.plugins so it can be used later
	                settings.plugins.push(plugin);
	            }
	        });
	    };
	
	    var showThrobber = function ()
	    {
	        hideThrobber();
	
	        viewerState.throbberTimeoutID = setTimeout(function ()
	        {
	            $(settings.selector + 'throbber').show();
	        }, settings.throbberTimeout);
	    };
	
	    var hideThrobber = function ()
	    {
	        // Clear the timeout, if it hasn't executed yet
	        clearTimeout(viewerState.throbberTimeoutID);
	
	        // Hide the throbber if it has already executed
	        $(settings.selector + 'throbber').hide();
	    };
	
	    var showError = function(message)
	    {
	        var errorElement = elt('div', elemAttrs('error'), [
	            elt('button', elemAttrs('error-close', {'aria-label': 'Close dialog'})),
	            elt('p',
	                elt('strong', 'Error')
	            ),
	            elt('div', message)
	        ]);
	
	        viewerState.outerObject.append(errorElement);
	
	        //bind dialog close button
	        $(settings.selector + 'error-close').on('click', function()
	        {
	            errorElement.parentNode.removeChild(errorElement);
	        });
	    };
	
	    var setManifest = function (manifest, isIIIF, loadOptions)
	    {
	        viewerState.manifest = manifest;
	
	        // FIXME: is isIIIF even needed?
	        viewerState.isIIIF = isIIIF;
	
	        hideThrobber();
	
	        // Convenience value
	        viewerState.numPages = settings.manifest.pages.length;
	
	        optionsValidator.validate(viewerState.options);
	
	        publish('NumberOfPagesDidChange', settings.numPages);
	
	        if (settings.enableAutoTitle)
	        {
	            if ($(settings.selector + 'title').length)
	                $(settings.selector + 'title').html(settings.manifest.itemTitle);
	            else
	                settings.parentObject.prepend(elt('div', elemAttrs('title'), [settings.manifest.itemTitle]));
	        }
	
	        // Calculate the horizontal and vertical inter-page padding based on the dimensions of the average zoom level
	        if (settings.adaptivePadding > 0)
	        {
	            var z = Math.floor((settings.minZoomLevel + settings.maxZoomLevel) / 2);
	            viewerState.horizontalPadding = parseInt(settings.manifest.getAverageWidth(z) * settings.adaptivePadding, 10);
	            viewerState.verticalPadding = parseInt(settings.manifest.getAverageHeight(z) * settings.adaptivePadding, 10);
	        }
	        else
	        {
	            // It's less than or equal to 0; use fixedPadding instead
	            viewerState.horizontalPadding = settings.fixedPadding;
	            viewerState.verticalPadding = settings.fixedPadding;
	        }
	
	        // Make sure the vertical padding is at least 40, if plugin icons are enabled
	        if (viewerState.pageTools.length)
	        {
	            viewerState.verticalPadding = Math.max(40, viewerState.verticalPadding);
	        }
	
	        // If we detect a viewingHint of 'paged' in the manifest or sequence, enable book view by default
	        if (settings.manifest.paged)
	        {
	            viewerState.options.inBookLayout = true;
	        }
	
	        // Plugin setup hooks should be bound to the ObjectDidLoad event
	        publish('ObjectDidLoad', settings);
	
	        // Adjust the document panel dimensions
	        updatePanelSize();
	
	        var needsXCoord, needsYCoord;
	
	        var anchoredVertically = false;
	        var anchoredHorizontally = false;
	
	        if (loadOptions.goDirectlyTo == null)
	        {
	            loadOptions.goDirectlyTo = settings.goDirectlyTo;
	            needsXCoord = needsYCoord = true;
	        }
	        else
	        {
	            needsXCoord = loadOptions.horizontalOffset == null || isNaN(loadOptions.horizontalOffset);
	            needsYCoord = loadOptions.verticalOffset == null || isNaN(loadOptions.verticalOffset);
	        }
	
	        // Set default values for the horizontal and vertical offsets
	        if (needsXCoord)
	        {
	            // FIXME: What if inBookLayout/verticallyOriented is changed by loadOptions?
	            if (loadOptions.goDirectlyTo === 0 && settings.inBookLayout && settings.verticallyOriented)
	            {
	                // if in book layout, center the first opening by default
	                loadOptions.horizontalOffset = viewerState.horizontalPadding;
	            }
	            else
	            {
	                anchoredHorizontally = true;
	                loadOptions.horizontalOffset = getXOffset(loadOptions.goDirectlyTo, "center");
	            }
	        }
	
	        if (needsYCoord)
	        {
	            anchoredVertically = true;
	            loadOptions.verticalOffset = getYOffset(loadOptions.goDirectlyTo, "top");
	        }
	
	        reloadViewer(loadOptions);
	
	        //prep dimensions one last time now that pages have loaded
	        updatePanelSize();
	
	        // FIXME: This is a hack to ensure that the outerElement scrollbars are taken into account
	        if (settings.verticallyOriented)
	            viewerState.innerElement.style.minWidth = settings.panelWidth + 'px';
	        else
	            viewerState.innerElement.style.minHeight = settings.panelHeight + 'px';
	
	        // FIXME: If the page was supposed to be positioned relative to the viewport we need to
	        // recalculate it to take into account the scrollbars
	        if (anchoredVertically || anchoredHorizontally)
	        {
	            if (anchoredVertically)
	                viewerState.verticalOffset = getYOffset(settings.currentPageIndex, "top");
	
	            if (anchoredHorizontally)
	                viewerState.horizontalOffset = getXOffset(settings.currentPageIndex, "center");
	
	            viewerState.renderer.goto(settings.currentPageIndex, viewerState.verticalOffset, viewerState.horizontalOffset);
	        }
	
	        // signal that everything should be set up and ready to go.
	        viewerState.loaded = true;
	
	        publish("ViewerDidLoad", settings);
	    };
	
	    var publish = function (event)
	    {
	        var args = Array.prototype.slice.call(arguments, 1);
	        diva.Events.publish(event, args, publicInstance);
	    };
	
	    var init = function ()
	    {
	        // First figure out the width of the scrollbar in this browser
	        // TODO(wabain): Cache this somewhere else
	        // Only some of the plugins rely on this now
	        viewerState.scrollbarWidth = getScrollbarWidth();
	
	        // If window.orientation is defined, then it's probably mobileWebkit
	        viewerState.mobileWebkit = window.orientation !== undefined;
	
	        // Generate an ID that can be used as a prefix for all the other IDs
	        var idNumber = generateId();
	        viewerState.ID = 'diva-' + idNumber + '-';
	        viewerState.selector = '#' + settings.ID;
	
	        if (options.hashParamSuffix === null)
	        {
	            // Omit the suffix from the first instance
	            if (idNumber === 1)
	                options.hashParamSuffix = '';
	            else
	                options.hashParamSuffix = idNumber + '';
	        }
	
	        // Create the inner and outer panels
	        var innerElem = elt('div', elemAttrs('inner', { class: 'diva-inner diva-dragger' }));
	        var viewportElem = elt('div', elemAttrs('viewport'), innerElem);
	        var outerElem = elt('div', elemAttrs('outer'),
	            viewportElem,
	            elt('div', elemAttrs('throbber')));
	
	        viewerState.innerElement = innerElem;
	        viewerState.viewportElement = viewportElem;
	        viewerState.outerElement = outerElem;
	
	        viewerState.innerObject = $(innerElem);
	        viewerState.viewportObject = $(viewportElem);
	        viewerState.outerObject = $(outerElem);
	
	        settings.parentObject.append(outerElem);
	
	        viewerState.viewport = new Viewport(viewerState.viewportElement, {
	            intersectionTolerance: settings.viewportMargin
	        });
	
	        // Do all the plugin initialisation
	        initPlugins();
	
	        handleEvents();
	
	        // Show the throbber while waiting for the manifest to load
	        showThrobber();
	    };
	
	    this.getSettings = function ()
	    {
	        return settings;
	    };
	
	    // Temporary accessor for the state of the viewer core
	    // TODO: Replace this with a more restricted view of whatever needs
	    // be exposed through settings for backwards compat
	    this.getInternalState = function ()
	    {
	        return viewerState;
	    };
	
	    this.getPublicInstance = function ()
	    {
	        return publicInstance;
	    };
	
	    this.getPageTools = function ()
	    {
	        return viewerState.pageTools;
	    };
	
	    this.getCurrentLayout = function ()
	    {
	        return viewerState.renderer ? viewerState.renderer.layout : null;
	    };
	
	    /** Get a copy of the current viewport dimensions */
	    this.getViewport = function ()
	    {
	        var viewport = viewerState.viewport;
	
	        return {
	            top: viewport.top,
	            left: viewport.left,
	            bottom: viewport.bottom,
	            right: viewport.right,
	
	            width: viewport.width,
	            height: viewport.height
	        };
	    };
	
	    this.addPageOverlay = function (overlay)
	    {
	        viewerState.pageOverlays.addOverlay(overlay);
	    };
	
	    this.removePageOverlay = function (overlay)
	    {
	        viewerState.pageOverlays.removeOverlay(overlay);
	    };
	
	    this.getPageRegion = function (pageIndex, options)
	    {
	        var layout = viewerState.renderer.layout;
	        var region = layout.getPageRegion(pageIndex, options);
	
	        if (options && options.incorporateViewport)
	        {
	            var secondaryDim = settings.verticallyOriented ? 'width' : 'height';
	
	            if (viewerState.viewport[secondaryDim] > layout.dimensions[secondaryDim])
	            {
	                var docOffset = (viewerState.viewport[secondaryDim] - layout.dimensions[secondaryDim]) / 2;
	
	                if (settings.verticallyOriented)
	                {
	                    return {
	                        top: region.top,
	                        bottom: region.bottom,
	
	                        left: region.left + docOffset,
	                        right: region.right + docOffset
	                    };
	                }
	                else
	                {
	                    return {
	                        top: region.top + docOffset,
	                        bottom: region.bottom + docOffset,
	
	                        left: region.left,
	                        right: region.right
	                    };
	                }
	            }
	        }
	
	        return region;
	    };
	
	    this.getPagePositionAtViewportOffset = function (coords)
	    {
	        var docCoords = {
	            left: coords.left + viewerState.viewport.left,
	            top: coords.top + viewerState.viewport.top
	        };
	
	        var renderedPages = viewerState.renderer.getRenderedPages();
	        var pageCount = renderedPages.length;
	
	        // Find the page on which the coords occur
	        for (var i=0; i < pageCount; i++)
	        {
	            var pageIndex = renderedPages[i];
	            var region = viewerState.renderer.layout.getPageRegion(pageIndex);
	
	            if (region.left <= docCoords.left && region.right >= docCoords.left &&
	                region.top <= docCoords.top && region.bottom >= docCoords.top)
	            {
	                return {
	                    anchorPage: pageIndex,
	                    offset: {
	                        left: docCoords.left - region.left,
	                        top: docCoords.top - region.top
	                    }
	                };
	            }
	        }
	
	        // Fall back to current page
	        // FIXME: Would be better to use the closest page or something
	        var currentRegion = viewerState.renderer.layout.getPageRegion(settings.currentPageIndex);
	
	        return {
	            anchorPage: settings.currentPageIndex,
	            offset: {
	                left: docCoords.left - currentRegion.left,
	                top: docCoords.top - currentRegion.top
	            }
	        };
	    };
	
	    this.setManifest = function (manifest, isIIIF, loadOptions)
	    {
	        setManifest(manifest, isIIIF, loadOptions || {});
	    };
	
	    /**
	     * Set the current page to the given index, firing VisiblePageDidChange
	     *
	     * @param pageIndex
	     */
	    this.setCurrentPage = function (pageIndex)
	    {
	        if (viewerState.currentPageIndex !== pageIndex)
	        {
	            viewerState.currentPageIndex = pageIndex;
	            publish("VisiblePageDidChange", pageIndex, this.getPageName(pageIndex));
	        }
	    };
	
	    this.getPageName = function (pageIndex)
	    {
	        return viewerState.manifest.pages[pageIndex].f;
	    };
	
	    this.reload = function (newOptions)
	    {
	        reloadViewer(newOptions);
	    };
	
	    this.zoom = function (zoomLevel, focalPoint)
	    {
	        return handleZoom(zoomLevel, focalPoint);
	    };
	
	    this.enableScrollable = function ()
	    {
	        if (!viewerState.isScrollable)
	        {
	            bindMouseEvents();
	            viewerState.options.enableKeyScroll = viewerState.initialKeyScroll;
	            viewerState.options.enableSpaceScroll = viewerState.initialSpaceScroll;
	            viewerState.viewportElement.style.overflow = 'auto';
	            viewerState.isScrollable = true;
	        }
	    };
	
	    this.disableScrollable = function ()
	    {
	        if (viewerState.isScrollable)
	        {
	            // block dragging/double-click zooming
	            if (viewerState.innerObject.hasClass('diva-dragger'))
	                viewerState.innerObject.unbind('mousedown');
	            viewerState.outerObject.unbind('dblclick');
	            viewerState.outerObject.unbind('contextmenu');
	
	            // disable all other scrolling actions
	            viewerState.viewportElement.style.overflow = 'hidden';
	
	            // block scrolling keys behavior, respecting initial scroll settings
	            viewerState.initialKeyScroll = settings.enableKeyScroll;
	            viewerState.initialSpaceScroll = settings.enableSpaceScroll;
	            viewerState.options.enableKeyScroll = false;
	            viewerState.options.enableSpaceScroll = false;
	
	            viewerState.isScrollable = false;
	        }
	    };
	
	    this.isValidOption = function (key, value)
	    {
	        return isValidOption(key, value);
	    };
	
	    this.showError = function (message)
	    {
	        // FIXME: Not totally sure it makes sense to always do that here
	        hideThrobber();
	
	        var errorElement = elt('div', elemAttrs('error'), [
	            elt('button', elemAttrs('error-close', {'aria-label': 'Close dialog'})),
	            elt('p',
	                elt('strong', 'Error')
	            ),
	            elt('div', message)
	        ]);
	
	        viewerState.outerObject.append(errorElement);
	
	        //bind dialog close button
	        $(settings.selector + 'error-close').on('click', function()
	        {
	            errorElement.parentNode.removeChild(errorElement);
	        });
	    };
	
	    this.getXOffset = function (pageIndex, xAnchor)
	    {
	        return getXOffset(pageIndex, xAnchor);
	    };
	
	    this.getYOffset = function (pageIndex, yAnchor)
	    {
	        return getYOffset(pageIndex, yAnchor);
	    };
	
	    this.publish = publish;
	
	    this.clear = function ()
	    {
	        clearViewer();
	    };
	
	    this.setPendingManifestRequest = function (pendingManifestRequest)
	    {
	        viewerState.pendingManifestRequest = pendingManifestRequest;
	    };
	
	    // Destroys this instance, tells plugins to do the same (for testing)
	    this.destroy = function ()
	    {
	        // Useful event to access elements in diva before they get destroyed. Used by the highlight plugin.
	        publish('ViewerWillTerminate', settings);
	
	        // Cancel any pending request retrieving a manifest
	        if (settings.pendingManifestRequest)
	            settings.pendingManifestRequest.abort();
	
	        // Removes the hide-scrollbar class from the body
	        $('body').removeClass('diva-hide-scrollbar');
	
	        // Empty the parent container and remove any diva-related data
	        settings.parentObject.parent().empty().removeData('diva');
	
	        // Remove any additional styling on the parent element
	        settings.parentObject.parent().removeAttr('style').removeAttr('class');
	
	        publish('ViewerDidTerminate', settings);
	
	        // Clear the Events cache
	        diva.Events.unsubscribeAll(settings.ID);
	    };
	
	    // Call the init function when this object is created.
	    init();
	}
	
	generateId.counter = 1;
	
	function generateId() {
	    return generateId.counter++;
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint unused: false */
	
	var jQuery = __webpack_require__(3);
	
	/* istanbul ignore next This is a vendored dependency */
	/*
	 * jQuery dragscrollable Plugin
	 * version: 1.0 (25-Jun-2009)
	 * Copyright (c) 2009 Miquel Herrera
	 * http://plugins.jquery.com/project/Dragscrollable
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *   http://www.gnu.org/licenses/gpl.html
	 *
	 */
	(function ($) { // secure $ jQuery alias
	
	    /**
	     * Adds the ability to manage elements scroll by dragging
	     * one or more of its descendant elements. Options parameter
	     * allow to specifically select which inner elements will
	     * respond to the drag events.
	     *
	     * options properties:
	     * ------------------------------------------------------------------------
	     *  dragSelector         | jquery selector to apply to each wrapped element
	     *                       | to find which will be the dragging elements.
	     *                       | Defaults to '>:first' which is the first child of
	     *                       | scrollable element
	     * ------------------------------------------------------------------------
	     *  acceptPropagatedEvent| Will the dragging element accept propagated
	     *                       | events? default is yes, a propagated mouse event
	     *                       | on a inner element will be accepted and processed.
	     *                       | If set to false, only events originated on the
	     *                       | draggable elements will be processed.
	     * ------------------------------------------------------------------------
	     *  preventDefault       | Prevents the event to propagate further effectivey
	     *                       | dissabling other default actions. Defaults to true
	     * ------------------------------------------------------------------------
	     *
	     *  usage examples:
	     *
	     *  To add the scroll by drag to the element id=viewport when dragging its
	     *  first child accepting any propagated events
	     *  $('#viewport').dragscrollable();
	     *
	     *  To add the scroll by drag ability to any element div of class viewport
	     *  when dragging its first descendant of class dragMe responding only to
	     *  evcents originated on the '.dragMe' elements.
	     *  $('div.viewport').dragscrollable({dragSelector:'.dragMe:first',
	 *                                    acceptPropagatedEvent: false});
	     *
	     *  Notice that some 'viewports' could be nested within others but events
	     *  would not interfere as acceptPropagatedEvent is set to false.
	     *
	     */
	    $.fn.dragscrollable = function( options ){
	
	        var settings = $.extend(
	            {
	                dragSelector:'>:first',
	                acceptPropagatedEvent: true,
	                preventDefault: true
	            },options || {});
	
	
	        var dragscroll= {
	            mouseDownHandler : function(event) {
	                // mousedown, left click, check propagation
	                if (event.which!=1 ||
	                    (!event.data.acceptPropagatedEvent && event.target != this)){
	                    return false;
	                }
	
	                // Initial coordinates will be the last when dragging
	                event.data.lastCoord = {left: event.clientX, top: event.clientY};
	
	                $.event.add( document, "mouseup",
	                    dragscroll.mouseUpHandler, event.data );
	                $.event.add( document, "mousemove",
	                    dragscroll.mouseMoveHandler, event.data );
	                if (event.data.preventDefault) {
	                    event.preventDefault();
	                    return false;
	                }
	            },
	            mouseMoveHandler : function(event) { // User is dragging
	                // How much did the mouse move?
	                var delta = {left: (event.clientX - event.data.lastCoord.left),
	                    top: (event.clientY - event.data.lastCoord.top)};
	
	                // Set the scroll position relative to what ever the scroll is now
	                event.data.scrollable.scrollLeft(
	                    event.data.scrollable.scrollLeft() - delta.left);
	                event.data.scrollable.scrollTop(
	                    event.data.scrollable.scrollTop() - delta.top);
	
	                // Save where the cursor is
	                event.data.lastCoord={left: event.clientX, top: event.clientY};
	                if (event.data.preventDefault) {
	                    event.preventDefault();
	                    return false;
	                }
	
	            },
	            mouseUpHandler : function(event) { // Stop scrolling
	                $.event.remove( document, "mousemove", dragscroll.mouseMoveHandler);
	                $.event.remove( document, "mouseup", dragscroll.mouseUpHandler);
	                if (event.data.preventDefault) {
	                    event.preventDefault();
	                    return false;
	                }
	            }
	        };
	
	        // set up the initial events
	        this.each(function() {
	            // closure object data for each scrollable element
	            var data = {scrollable : $(this),
	                acceptPropagatedEvent : settings.acceptPropagatedEvent,
	                preventDefault : settings.preventDefault };
	            // Set mouse initiating event on the desired descendant
	            $(this).find(settings.dragSelector).
	            bind('mousedown', data, dragscroll.mouseDownHandler);
	        });
	    }; //end plugin dragscrollable
	
	})( jQuery ); // confine scope
	
	/* istanbul ignore next This is a vendored dependency */
	/**
	 jQuery.kinetic v2.2.1
	 Dave Taylor http://davetayls.me
	
	 @license The MIT License (MIT)
	 @preserve Copyright (c) 2012 Dave Taylor http://davetayls.me
	 */
	(function ($){
	    'use strict';
	
	    var ACTIVE_CLASS = 'kinetic-active';
	
	    /**
	     * Provides requestAnimationFrame in a cross browser way.
	     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	     */
	    if (!window.requestAnimationFrame){
	
	        window.requestAnimationFrame = ( function (){
	
	            return window.webkitRequestAnimationFrame ||
	                window.mozRequestAnimationFrame ||
	                window.oRequestAnimationFrame ||
	                window.msRequestAnimationFrame ||
	                function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
	                    window.setTimeout(callback, 1000 / 60);
	                };
	
	        }());
	
	    }
	
	    // add touch checker to jQuery.support
	    $.support = $.support || {};
	    $.extend($.support, {
	        touch: 'ontouchend' in document
	    });
	
	
	    // KINETIC CLASS DEFINITION
	    // ======================
	
	    var Kinetic = function (element, settings) {
	        this.settings = settings;
	        this.el       = element;
	        this.$el      = $(element);
	
	        this._initElements();
	
	        return this;
	    };
	
	    Kinetic.DATA_KEY = 'kinetic';
	    Kinetic.DEFAULTS = {
	        cursor: 'move',
	        decelerate: true,
	        triggerHardware: false,
	        threshold: 0,
	        y: true,
	        x: true,
	        slowdown: 0.9,
	        maxvelocity: 40,
	        throttleFPS: 60,
	        invert: false,
	        movingClass: {
	            up: 'kinetic-moving-up',
	            down: 'kinetic-moving-down',
	            left: 'kinetic-moving-left',
	            right: 'kinetic-moving-right'
	        },
	        deceleratingClass: {
	            up: 'kinetic-decelerating-up',
	            down: 'kinetic-decelerating-down',
	            left: 'kinetic-decelerating-left',
	            right: 'kinetic-decelerating-right'
	        }
	    };
	
	
	    // Public functions
	
	    Kinetic.prototype.start = function (options){
	        this.settings = $.extend(this.settings, options);
	        this.velocity = options.velocity || this.velocity;
	        this.velocityY = options.velocityY || this.velocityY;
	        this.settings.decelerate = false;
	        this._move();
	    };
	
	    Kinetic.prototype.end = function (){
	        this.settings.decelerate = true;
	    };
	
	    Kinetic.prototype.stop = function (){
	        this.velocity = 0;
	        this.velocityY = 0;
	        this.settings.decelerate = true;
	        if ($.isFunction(this.settings.stopped)){
	            this.settings.stopped.call(this);
	        }
	    };
	
	    Kinetic.prototype.detach = function (){
	        this._detachListeners();
	        this.$el
	            .removeClass(ACTIVE_CLASS)
	            .css('cursor', '');
	    };
	
	    Kinetic.prototype.attach = function (){
	        if (this.$el.hasClass(ACTIVE_CLASS)) {
	            return;
	        }
	        this._attachListeners(this.$el);
	        this.$el
	            .addClass(ACTIVE_CLASS)
	            .css('cursor', this.settings.cursor);
	    };
	
	
	    // Internal functions
	
	    Kinetic.prototype._initElements = function (){
	        this.$el.addClass(ACTIVE_CLASS);
	
	        $.extend(this, {
	            xpos: null,
	            prevXPos: false,
	            ypos: null,
	            prevYPos: false,
	            mouseDown: false,
	            throttleTimeout: 1000 / this.settings.throttleFPS,
	            lastMove: null,
	            elementFocused: null
	        });
	
	        this.velocity = 0;
	        this.velocityY = 0;
	
	        // make sure we reset everything when mouse up
	        $(document)
	            .mouseup($.proxy(this._resetMouse, this))
	            .click($.proxy(this._resetMouse, this));
	
	        this._initEvents();
	
	        this.$el.css('cursor', this.settings.cursor);
	
	        if (this.settings.triggerHardware){
	            this.$el.css({
	                '-webkit-transform': 'translate3d(0,0,0)',
	                '-webkit-perspective': '1000',
	                '-webkit-backface-visibility': 'hidden'
	            });
	        }
	    };
	
	    Kinetic.prototype._initEvents = function(){
	        var self = this;
	        this.settings.events = {
	            touchStart: function (e){
	                var touch;
	                if (self._useTarget(e.target, e)){
	                    touch = e.originalEvent.touches[0];
	                    self.threshold = self._threshold(e.target, e);
	                    self._start(touch.clientX, touch.clientY);
	                    e.stopPropagation();
	                }
	            },
	            touchMove: function (e){
	                var touch;
	                if (self.mouseDown){
	                    touch = e.originalEvent.touches[0];
	                    self._inputmove(touch.clientX, touch.clientY);
	                    if (e.preventDefault){
	                        e.preventDefault();
	                    }
	                }
	            },
	            inputDown: function (e){
	                if (self._useTarget(e.target, e)){
	                    self.threshold = self._threshold(e.target, e);
	                    self._start(e.clientX, e.clientY);
	                    self.elementFocused = e.target;
	                    if (e.target.nodeName === 'IMG'){
	                        e.preventDefault();
	                    }
	                    e.stopPropagation();
	                }
	            },
	            inputEnd: function (e){
	                if (self._useTarget(e.target, e)){
	                    self._end();
	                    self.elementFocused = null;
	                    if (e.preventDefault){
	                        e.preventDefault();
	                    }
	                }
	            },
	            inputMove: function (e){
	                if (self.mouseDown){
	                    self._inputmove(e.clientX, e.clientY);
	                    if (e.preventDefault){
	                        e.preventDefault();
	                    }
	                }
	            },
	            scroll: function (e){
	                if ($.isFunction(self.settings.moved)){
	                    self.settings.moved.call(self, self.settings);
	                }
	                if (e.preventDefault){
	                    e.preventDefault();
	                }
	            },
	            inputClick: function (e){
	                if (Math.abs(self.velocity) > 0){
	                    e.preventDefault();
	                    return false;
	                }
	            },
	            // prevent drag and drop images in ie
	            dragStart: function (e){
	                if (self._useTarget(e.target, e) && self.elementFocused){
	                    return false;
	                }
	            },
	            // prevent selection when dragging
	            selectStart: function (e){
	                if ($.isFunction(self.settings.selectStart)){
	                    return self.settings.selectStart.apply(self, arguments);
	                } else if (self._useTarget(e.target, e)) {
	                    return false;
	                }
	            }
	        };
	
	        this._attachListeners(this.$el, this.settings);
	
	    };
	
	    Kinetic.prototype._inputmove = function (clientX, clientY){
	        var $this = this.$el;
	        var el = this.el;
	
	        if (!this.lastMove || new Date() > new Date(this.lastMove.getTime() + this.throttleTimeout)){
	            this.lastMove = new Date();
	
	            if (this.mouseDown && (this.xpos || this.ypos)){
	                var movedX = (clientX - this.xpos);
	                var movedY = (clientY - this.ypos);
	                if (this.settings.invert) {
	                    movedX *= -1;
	                    movedY *= -1;
	                }
	                if(this.threshold > 0){
	                    var moved = Math.sqrt(movedX * movedX + movedY * movedY);
	                    if(this.threshold > moved){
	                        return;
	                    } else {
	                        this.threshold = 0;
	                    }
	                }
	                if (this.elementFocused){
	                    $(this.elementFocused).blur();
	                    this.elementFocused = null;
	                    $this.focus();
	                }
	
	                this.settings.decelerate = false;
	                this.velocity = this.velocityY = 0;
	
	                var scrollLeft = this.scrollLeft();
	                var scrollTop = this.scrollTop();
	
	                this.scrollLeft(this.settings.x ? scrollLeft - movedX : scrollLeft);
	                this.scrollTop(this.settings.y ? scrollTop - movedY : scrollTop);
	
	                this.prevXPos = this.xpos;
	                this.prevYPos = this.ypos;
	                this.xpos = clientX;
	                this.ypos = clientY;
	
	                this._calculateVelocities();
	                this._setMoveClasses(this.settings.movingClass);
	
	                if ($.isFunction(this.settings.moved)){
	                    this.settings.moved.call(this, this.settings);
	                }
	            }
	        }
	    };
	
	    Kinetic.prototype._calculateVelocities = function (){
	        this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity);
	        this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity);
	        if (this.settings.invert) {
	            this.velocity *= -1;
	            this.velocityY *= -1;
	        }
	    };
	
	    Kinetic.prototype._end = function (){
	        if (this.xpos && this.prevXPos && this.settings.decelerate === false){
	            this.settings.decelerate = true;
	            this._calculateVelocities();
	            this.xpos = this.prevXPos = this.mouseDown = false;
	            this._move();
	        }
	    };
	
	    Kinetic.prototype._useTarget = function (target, event){
	        if ($.isFunction(this.settings.filterTarget)){
	            return this.settings.filterTarget.call(this, target, event) !== false;
	        }
	        return true;
	    };
	
	    Kinetic.prototype._threshold = function (target, event){
	        if ($.isFunction(this.settings.threshold)){
	            return this.settings.threshold.call(this, target, event);
	        }
	        return this.settings.threshold;
	    };
	
	    Kinetic.prototype._start = function (clientX, clientY){
	        this.mouseDown = true;
	        this.velocity = this.prevXPos = 0;
	        this.velocityY = this.prevYPos = 0;
	        this.xpos = clientX;
	        this.ypos = clientY;
	    };
	
	    Kinetic.prototype._resetMouse = function (){
	        this.xpos = false;
	        this.ypos = false;
	        this.mouseDown = false;
	    };
	
	    Kinetic.prototype._decelerateVelocity = function (velocity, slowdown){
	        return Math.floor(Math.abs(velocity)) === 0 ? 0 // is velocity less than 1?
	            : velocity * slowdown; // reduce slowdown
	    };
	
	    Kinetic.prototype._capVelocity = function (velocity, max){
	        var newVelocity = velocity;
	        if (velocity > 0){
	            if (velocity > max){
	                newVelocity = max;
	            }
	        } else {
	            if (velocity < (0 - max)){
	                newVelocity = (0 - max);
	            }
	        }
	        return newVelocity;
	    };
	
	    Kinetic.prototype._setMoveClasses = function (classes){
	        // FIXME: consider if we want to apply PL #44, this should not remove
	        // classes we have not defined on the element!
	        var settings = this.settings;
	        var $this = this.$el;
	
	        $this.removeClass(settings.movingClass.up)
	            .removeClass(settings.movingClass.down)
	            .removeClass(settings.movingClass.left)
	            .removeClass(settings.movingClass.right)
	            .removeClass(settings.deceleratingClass.up)
	            .removeClass(settings.deceleratingClass.down)
	            .removeClass(settings.deceleratingClass.left)
	            .removeClass(settings.deceleratingClass.right);
	
	        if (this.velocity > 0){
	            $this.addClass(classes.right);
	        }
	        if (this.velocity < 0){
	            $this.addClass(classes.left);
	        }
	        if (this.velocityY > 0){
	            $this.addClass(classes.down);
	        }
	        if (this.velocityY < 0){
	            $this.addClass(classes.up);
	        }
	
	    };
	
	
	    // do the actual kinetic movement
	    Kinetic.prototype._move = function (){
	        var $scroller = this._getScroller();
	        var scroller = $scroller[0];
	        var self = this;
	        var settings = self.settings;
	
	        // set scrollLeft
	        if (settings.x && scroller.scrollWidth > 0){
	            this.scrollLeft(this.scrollLeft() + this.velocity);
	            if (Math.abs(this.velocity) > 0){
	                this.velocity = settings.decelerate ?
	                    self._decelerateVelocity(this.velocity, settings.slowdown) : this.velocity;
	            }
	        } else {
	            this.velocity = 0;
	        }
	
	        // set scrollTop
	        if (settings.y && scroller.scrollHeight > 0){
	            this.scrollTop(this.scrollTop() + this.velocityY);
	            if (Math.abs(this.velocityY) > 0){
	                this.velocityY = settings.decelerate ?
	                    self._decelerateVelocity(this.velocityY, settings.slowdown) : this.velocityY;
	            }
	        } else {
	            this.velocityY = 0;
	        }
	
	        self._setMoveClasses(settings.deceleratingClass);
	
	        if ($.isFunction(settings.moved)){
	            settings.moved.call(this, settings);
	        }
	
	        if (Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0){
	            if (!this.moving) {
	                this.moving = true;
	                // tick for next movement
	                window.requestAnimationFrame(function (){
	                    self.moving = false;
	                    self._move();
	                });
	            }
	        } else {
	            self.stop();
	        }
	    };
	
	    // get current scroller to apply positioning to
	    Kinetic.prototype._getScroller = function(){
	        var $scroller = this.$el;
	        if (this.$el.is('body') || this.$el.is('html')){
	            $scroller = $(window);
	        }
	        return $scroller;
	    };
	
	    // set the scroll position
	    Kinetic.prototype.scrollLeft = function(left){
	        var $scroller = this._getScroller();
	        if (typeof left === 'number'){
	            $scroller.scrollLeft(left);
	            this.settings.scrollLeft = left;
	        } else {
	            return $scroller.scrollLeft();
	        }
	    };
	    Kinetic.prototype.scrollTop = function(top){
	        var $scroller = this._getScroller();
	        if (typeof top === 'number'){
	            $scroller.scrollTop(top);
	            this.settings.scrollTop = top;
	        } else {
	            return $scroller.scrollTop();
	        }
	    };
	
	    Kinetic.prototype._attachListeners = function (){
	        var $this = this.$el;
	        var settings = this.settings;
	
	        if ($.support.touch){
	            $this
	                .bind('touchstart', settings.events.touchStart)
	                .bind('touchend', settings.events.inputEnd)
	                .bind('touchmove', settings.events.touchMove);
	        }
	
	        $this
	            .mousedown(settings.events.inputDown)
	            .mouseup(settings.events.inputEnd)
	            .mousemove(settings.events.inputMove);
	
	        $this
	            .click(settings.events.inputClick)
	            .scroll(settings.events.scroll)
	            .bind('selectstart', settings.events.selectStart)
	            .bind('dragstart', settings.events.dragStart);
	    };
	
	    Kinetic.prototype._detachListeners = function (){
	        var $this = this.$el;
	        var settings = this.settings;
	        if ($.support.touch){
	            $this
	                .unbind('touchstart', settings.events.touchStart)
	                .unbind('touchend', settings.events.inputEnd)
	                .unbind('touchmove', settings.events.touchMove);
	        }
	
	        $this
	            .unbind('mousedown', settings.events.inputDown)
	            .unbind('mouseup', settings.events.inputEnd)
	            .unbind('mousemove', settings.events.inputMove);
	
	        $this
	            .unbind('click', settings.events.inputClick)
	            .unbind('scroll', settings.events.scroll)
	            .unbind('selectstart', settings.events.selectStart)
	            .unbind('dragstart', settings.events.dragStart);
	    };
	
	
	    // EXPOSE KINETIC CONSTRUCTOR
	    // ==========================
	    $.Kinetic = Kinetic;
	
	    // KINETIC PLUGIN DEFINITION
	    // =======================
	
	    $.fn.kinetic = function (option, callOptions) {
	        return this.each(function () {
	            var $this    = $(this);
	            var instance = $this.data(Kinetic.DATA_KEY);
	            var options  = $.extend({}, Kinetic.DEFAULTS, $this.data(), typeof option === 'object' && option);
	
	            if (!instance) {
	                $this.data(Kinetic.DATA_KEY, (instance = new Kinetic(this, options)));
	            }
	
	            if (typeof option === 'string') {
	                instance[option](callOptions);
	            }
	
	        });
	    };
	
	}(jQuery));
	
	/* istanbul ignore next
	    We should maybe be testing this, but realistically that would mean maintaining a real fork */
	
	// jQuery.kinetic core modifications for diva.js (compatible with jQuery.kinetic 2.2.1)
	// use jQuery.kinetic for touch handlers only since we are using dragscrollable for mouse handlers
	//    - (kinetic provides inertial scrolling [ease into stopped state on release] for touch events and dragscrollable
	//      allows non-inertial scrolling which we like for mice)
	
	(function($)
	{
	    $.Kinetic.prototype._attachListeners = function()
	    {
	        // attach only touch listeners
	        var $this = this.$el;
	        var settings = this.settings;
	
	        if ($.support.touch)
	        {
	            $this
	                .bind('touchstart', settings.events.touchStart)
	                .bind('touchend', settings.events.inputEnd)
	                .bind('touchmove', settings.events.touchMove);
	        }
	
	        $this
	            .click(settings.events.inputClick)
	            .scroll(settings.events.scroll)
	            .bind('selectstart', settings.events.selectStart)
	            .bind('dragstart', settings.events.dragStart);
	    };
	
	    $.Kinetic.prototype._detachListeners = function()
	    {
	        // detach only touch listeners
	        var $this = this.$el;
	        var settings = this.settings;
	
	        if ($.support.touch)
	        {
	            $this
	                .unbind('touchstart', settings.events.touchStart)
	                .unbind('touchend', settings.events.inputEnd)
	                .unbind('touchmove', settings.events.touchMove);
	        }
	
	        $this
	            .unbind('click', settings.events.inputClick)
	            .unbind('scroll', settings.events.scroll)
	            .unbind('selectstart', settings.events.selectStart)
	            .unbind('dragstart', settings.events.dragStart);
	    };
	})(jQuery);


/***/ },
/* 16 */
/***/ function(module, exports) {

	// From http://www.alexandre-gomes.com/?p=115, modified slightly
	module.exports = function getScrollbarWidth() {
	    var inner = document.createElement('p');
	    inner.style.width = '100%';
	    inner.style.height = '200px';
	
	    var outer = document.createElement('div');
	    outer.style.position = 'absolute';
	    outer.style.top = '0px';
	    outer.style.left = '0px';
	    outer.style.visibility = 'hidden';
	    outer.style.width = '200px';
	    outer.style.height = '150px';
	    outer.style.overflow = 'hidden';
	    outer.appendChild(inner);
	
	    document.body.appendChild(outer);
	
	    var w1 = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var w2 = inner.offsetWidth;
	    if (w1 == w2) {
	        w2 = outer.clientWidth; // for IE i think
	    }
	
	    document.body.removeChild(outer);
	    return w1 - w2;
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	    onDoubleClick: onDoubleClick,
	    onPinch: onPinch,
	    onDoubleTap: onDoubleTap
	};
	
	var DOUBLE_CLICK_TIMEOUT = 500;
	
	var DOUBLE_TAP_DISTANCE_THRESHOLD = 50;
	var DOUBLE_TAP_TIMEOUT = 250;
	
	function onDoubleClick(elem, callback)
	{
	    elem.on('dblclick', function (event)
	    {
	        if (!event.ctrlKey)
	        {
	            callback(event, getRelativeOffset(event.currentTarget, event));
	        }
	    });
	
	    // Handle the control key for macs (in conjunction with double-clicking)
	    // FIXME: Does a click get handled with ctrl pressed on non-Macs?
	    var tracker = createDoubleEventTracker(DOUBLE_CLICK_TIMEOUT);
	
	    elem.on('contextmenu', function (event)
	    {
	        event.preventDefault();
	
	        if (event.ctrlKey)
	        {
	            if (tracker.isTriggered())
	            {
	                tracker.reset();
	                callback(event, getRelativeOffset(event.currentTarget, event));
	            }
	            else
	            {
	                tracker.trigger();
	            }
	        }
	    });
	}
	
	function onPinch(elem, callback)
	{
	    var startDistance = 0;
	
	    elem.on('touchstart', function(event)
	    {
	        // Prevent mouse event from firing
	        event.preventDefault();
	
	        if (event.originalEvent.touches.length === 2)
	        {
	            startDistance = distance(
	                event.originalEvent.touches[0].clientX,
	                event.originalEvent.touches[0].clientY,
	                event.originalEvent.touches[1].clientX,
	                event.originalEvent.touches[1].clientY
	            );
	        }
	    });
	
	    elem.on('touchmove', function(event)
	    {
	        // Prevent mouse event from firing
	        event.preventDefault();
	
	        if (event.originalEvent.touches.length === 2)
	        {
	            var touches = event.originalEvent.touches;
	
	            var moveDistance = distance(
	                touches[0].clientX,
	                touches[0].clientY,
	                touches[1].clientX,
	                touches[1].clientY
	            );
	
	            var zoomDelta = moveDistance - startDistance;
	
	            if (Math.abs(zoomDelta) > 0)
	            {
	                var touchCenter = {
	                    pageX: (touches[0].clientX + touches[1].clientX) / 2,
	                    pageY: (touches[0].clientY + touches[1].clientY) / 2
	                };
	
	                callback(event, getRelativeOffset(event.currentTarget, touchCenter), startDistance, moveDistance);
	            }
	        }
	    });
	}
	
	function onDoubleTap(elem, callback)
	{
	    var tracker = createDoubleEventTracker(DOUBLE_TAP_TIMEOUT);
	    var firstTap = null;
	
	    elem.on('touchend', function (event)
	    {
	        // Prevent mouse event from firing
	        event.preventDefault();
	
	        if (tracker.isTriggered())
	        {
	            tracker.reset();
	
	            // Doubletap has occurred
	            var secondTap = {
	                pageX: event.originalEvent.changedTouches[0].clientX,
	                pageY: event.originalEvent.changedTouches[0].clientY
	            };
	
	            // If first tap is close to second tap (prevents interference with scale event)
	            var tapDistance = distance(firstTap.pageX, firstTap.pageY, secondTap.pageX, secondTap.pageY);
	
	            // TODO: Could give something higher-level than secondTap to callback
	            if (tapDistance < DOUBLE_TAP_DISTANCE_THRESHOLD)
	                callback(event, getRelativeOffset(event.currentTarget, secondTap));
	
	            firstTap = null;
	        }
	        else
	        {
	            firstTap = {
	                pageX: event.originalEvent.changedTouches[0].clientX,
	                pageY: event.originalEvent.changedTouches[0].clientY
	            };
	
	            tracker.trigger();
	        }
	    });
	}
	
	// Pythagorean theorem to get the distance between two points (used for
	// calculating finger distance for double-tap and pinch-zoom)
	function distance(x1, y1, x2, y2)
	{
	    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
	}
	
	// Utility to keep track of whether an event has been triggered twice
	// during a a given duration
	function createDoubleEventTracker(timeoutDuration)
	{
	    var triggered = false;
	    var timeoutId = null;
	
	    return {
	        trigger: function ()
	        {
	            triggered = true;
	            resetTimeout();
	            timeoutId = setTimeout(function ()
	            {
	                triggered = false;
	                timeoutId = null;
	            }, timeoutDuration);
	        },
	        isTriggered: function ()
	        {
	            return triggered;
	        },
	        reset: function ()
	        {
	            triggered = false;
	            resetTimeout();
	        }
	    };
	
	    function resetTimeout()
	    {
	        if (timeoutId !== null)
	        {
	            clearTimeout(timeoutId);
	            timeoutId = null;
	        }
	    }
	}
	
	function getRelativeOffset(elem, pageCoords)
	{
	    var bounds = elem.getBoundingClientRect();
	
	    return {
	        left: pageCoords.pageX - bounds.left,
	        top: pageCoords.pageY - bounds.top
	    };
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var maxBy = __webpack_require__(19);
	var PageToolsOverlay = __webpack_require__(24);
	
	module.exports = DocumentHandler;
	
	function DocumentHandler(viewerCore)
	{
	    this._viewerCore = viewerCore;
	    this._viewerState = viewerCore.getInternalState();
	    this._overlays = [];
	
	    if (viewerCore.getPageTools().length)
	    {
	        var numPages = viewerCore.getSettings().numPages;
	
	        for (var i=0; i < numPages; i++)
	        {
	            var overlay = new PageToolsOverlay(i, viewerCore);
	            this._overlays.push(overlay);
	            viewerCore.addPageOverlay(overlay);
	        }
	    }
	}
	
	// USER EVENTS
	DocumentHandler.prototype.onDoubleClick = function (event, coords)
	{
	    var settings = this._viewerCore.getSettings();
	    var newZoomLevel = event.ctrlKey ? settings.zoomLevel - 1 : settings.zoomLevel + 1;
	
	    var position = this._viewerCore.getPagePositionAtViewportOffset(coords);
	
	    this._viewerCore.zoom(newZoomLevel, position);
	};
	
	DocumentHandler.prototype.onPinch = function (event, coords, startDistance, endDistance)
	{
	    // FIXME: Do this check in a way which is less spaghetti code-y
	    var viewerState = this._viewerCore.getInternalState();
	    var settings = this._viewerCore.getSettings();
	
	    var newZoomLevel = Math.log(Math.pow(2, settings.zoomLevel) * endDistance / (startDistance * Math.log(2))) / Math.log(2);
	    newZoomLevel = Math.max(settings.minZoomLevel, newZoomLevel);
	    newZoomLevel = Math.min(settings.maxZoomLevel, newZoomLevel);
	
	    if (newZoomLevel === settings.zoomLevel)
	        return;
	
	    var position = this._viewerCore.getPagePositionAtViewportOffset(coords);
	
	    var layout = this._viewerCore.getCurrentLayout();
	    var centerOffset = layout.getPageToViewportCenterOffset(position.anchorPage, viewerState.viewport);
	    var scaleRatio = 1 / Math.pow(2, settings.zoomLevel - newZoomLevel);
	
	    this._viewerCore.reload({
	        zoomLevel: newZoomLevel,
	        goDirectlyTo: position.anchorPage,
	        horizontalOffset: (centerOffset.x - position.offset.left) + position.offset.left * scaleRatio,
	        verticalOffset: (centerOffset.y - position.offset.top) + position.offset.top * scaleRatio
	    });
	};
	
	// VIEW EVENTS
	DocumentHandler.prototype.onViewWillLoad = function ()
	{
	    this._viewerCore.publish('DocumentWillLoad', this._viewerCore.getSettings());
	};
	
	DocumentHandler.prototype.onViewDidLoad = function ()
	{
	    // TODO: Should only be necessary to handle changes on view update, not
	    // initial load
	    this._handleZoomLevelChange();
	
	    var currentPageIndex = this._viewerCore.getSettings().currentPageIndex;
	    var fileName = this._viewerCore.getPageName(currentPageIndex);
	    this._viewerCore.publish("DocumentDidLoad", currentPageIndex, fileName);
	};
	
	DocumentHandler.prototype.onViewDidUpdate = function (renderedPages, targetPage)
	{
	    var currentPage = (targetPage !== null) ?
	        targetPage :
	        getCentermostPage(renderedPages, this._viewerCore.getCurrentLayout(), this._viewerCore.getViewport());
	
	    // Don't change the current page if there is no page in the viewport
	    // FIXME: Would be better to fall back to the page closest to the viewport
	    if (currentPage !== null)
	        this._viewerCore.setCurrentPage(currentPage);
	
	    if (targetPage !== null)
	        this._viewerCore.publish("ViewerDidJump", targetPage);
	
	    this._handleZoomLevelChange();
	};
	
	DocumentHandler.prototype._handleZoomLevelChange = function ()
	{
	    var viewerState = this._viewerState;
	    var zoomLevel = viewerState.options.zoomLevel;
	
	    // If this is not the initial load, trigger the zoom events
	    if (viewerState.oldZoomLevel !== zoomLevel && viewerState.oldZoomLevel >= 0)
	    {
	        if (viewerState.oldZoomLevel < zoomLevel)
	        {
	            this._viewerCore.publish("ViewerDidZoomIn", zoomLevel);
	        }
	        else
	        {
	            this._viewerCore.publish("ViewerDidZoomOut", zoomLevel);
	        }
	
	        this._viewerCore.publish("ViewerDidZoom", zoomLevel);
	    }
	
	    viewerState.oldZoomLevel = zoomLevel;
	};
	
	DocumentHandler.prototype.destroy = function ()
	{
	    this._overlays.forEach(function (overlay)
	    {
	        this._viewerCore.removePageOverlay(overlay);
	    }, this);
	};
	
	function getCentermostPage(renderedPages, layout, viewport)
	{
	    var centerY = viewport.top + (viewport.height / 2);
	    var centerX = viewport.left + (viewport.width / 2);
	
	    // Find the minimum distance from the viewport center to a page.
	    // Compute minus the squared distance from viewport center to the page's border.
	    // http://gamedev.stackexchange.com/questions/44483/how-do-i-calculate-distance-between-a-point-and-an-axis-aligned-rectangle
	    var centerPage = maxBy(renderedPages, function (pageIndex)
	    {
	        var dims = layout.getPageDimensions(pageIndex);
	        var imageOffset = layout.getPageOffset(pageIndex, {excludePadding: false});
	
	        var midX = imageOffset.left + (dims.height / 2);
	        var midY = imageOffset.top + (dims.width / 2);
	
	        var dx = Math.max(Math.abs(centerX - midX) - (dims.width / 2), 0);
	        var dy = Math.max(Math.abs(centerY - midY) - (dims.height / 2), 0);
	
	        return -(dx * dx + dy * dy);
	    });
	
	    return centerPage != null ? centerPage : null;
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseIteratee = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);
	
	    if (current != null && (computed === undefined
	          ? (current === current && !isSymbol(current))
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments to numbers.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */
	function baseGt(value, other) {
	  return value > other;
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * This method is like `_.max` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the criterion by which
	 * the value is ranked. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @param {Array|Function|Object|string} [iteratee=_.identity]
	 *  The iteratee invoked per element.
	 * @returns {*} Returns the maximum value.
	 * @example
	 *
	 * var objects = [{ 'n': 1 }, { 'n': 2 }];
	 *
	 * _.maxBy(objects, function(o) { return o.n; });
	 * // => { 'n': 2 }
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.maxBy(objects, 'n');
	 * // => { 'n': 2 }
	 */
	function maxBy(array, iteratee) {
	  return (array && array.length)
	    ? baseExtremum(array, baseIteratee(iteratee), baseGt)
	    : undefined;
	}
	
	module.exports = maxBy;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var stringToPath = __webpack_require__(22);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}
	
	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/**
	 * Converts `set` to its value-value pairs.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the value-value pairs.
	 */
	function setToPairs(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = [value, value];
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf,
	    nativeKeys = Object.keys;
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
	    cache = this.__data__ = new MapCache(cache.__data__);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}
	
	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	/**
	 * Creates a `_.toPairs` or `_.toPairsIn` function.
	 *
	 * @private
	 * @param {Function} keysFunc The function to get the keys of a given object.
	 * @returns {Function} Returns the new pairs function.
	 */
	function createToPairs(keysFunc) {
	  return function(object) {
	    var tag = getTag(object);
	    if (tag == mapTag) {
	      return mapToArray(object);
	    }
	    if (tag == setTag) {
	      return setToPairs(object);
	    }
	    return baseToPairs(object, keysFunc(object));
	  };
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);
	
	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var result,
	      index = -1,
	      length = path.length;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	 * entries are returned.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	var toPairs = createToPairs(keys);
	
	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = baseIteratee;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module), (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseToString = __webpack_require__(23);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = stringToPath;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module), (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = baseToString;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module), (function() { return this; }())))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var elt = __webpack_require__(8);
	
	module.exports = PageToolsOverlay;
	
	function PageToolsOverlay(pageIndex, viewerCore)
	{
	    this.page = pageIndex;
	
	    this._viewerCore = viewerCore;
	
	    this._innerElement = viewerCore.getSettings().innerElement;
	    this._pageToolsElem = null;
	}
	
	PageToolsOverlay.prototype.mount = function ()
	{
	    if (this._pageToolsElem === null)
	    {
	        var buttons = this._initializePageToolButtons();
	
	        this._pageToolsElem = elt('div', {class: 'diva-page-tools-wrapper'},
	            elt('div', {class: 'diva-page-tools'}, buttons)
	        );
	    }
	
	    this.refresh();
	    this._innerElement.appendChild(this._pageToolsElem);
	};
	
	PageToolsOverlay.prototype._initializePageToolButtons = function ()
	{
	    // Callback parameters
	    var settings = this._viewerCore.getSettings();
	    var publicInstance = this._viewerCore.getPublicInstance();
	    var pageIndex = this.page;
	
	    return this._viewerCore.getPageTools().map(function (plugin)
	    {
	        // If the title text is undefined, use the name of the plugin
	        var titleText = plugin.titleText || plugin.pluginName[0].toUpperCase() + plugin.pluginName.substring(1) + " plugin";
	
	        var button = elt('div', {
	            class: 'diva-' + plugin.pluginName + '-icon',
	            title: titleText
	        });
	
	        button.addEventListener('click', function (event)
	        {
	            plugin.handleClick.call(this, event, settings, publicInstance, pageIndex);
	        }, false);
	
	        button.addEventListener('touchend', function (event)
	        {
	            // Prevent firing of emulated mouse events
	            event.preventDefault();
	
	            plugin.handleClick.call(this, event, settings, publicInstance, pageIndex);
	        }, false);
	
	        return button;
	    }, this);
	};
	
	PageToolsOverlay.prototype.unmount = function ()
	{
	    this._innerElement.removeChild(this._pageToolsElem);
	};
	
	PageToolsOverlay.prototype.refresh = function ()
	{
	    var pos = this._viewerCore.getPageRegion(this.page, {
	        excludePadding: true,
	        incorporateViewport: true
	    });
	
	    this._pageToolsElem.style.top = pos.top + 'px';
	    this._pageToolsElem.style.left = pos.left + 'px';
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var maxBy = __webpack_require__(19);
	
	module.exports = GridHandler;
	
	function GridHandler(viewerCore)
	{
	    this._viewerCore = viewerCore;
	}
	
	// USER EVENTS
	GridHandler.prototype.onDoubleClick = function (event, coords)
	{
	    var position = this._viewerCore.getPagePositionAtViewportOffset(coords);
	
	    var layout = this._viewerCore.getCurrentLayout();
	    var viewport = this._viewerCore.getViewport();
	    var pageToViewportCenterOffset = layout.getPageToViewportCenterOffset(position.anchorPage, viewport);
	
	    this._viewerCore.reload({
	        inGrid: false,
	        goDirectlyTo: position.anchorPage,
	        horizontalOffset: pageToViewportCenterOffset.x + position.offset.left,
	        verticalOffset: pageToViewportCenterOffset.y + position.offset.top
	    });
	};
	
	GridHandler.prototype.onPinch = function ()
	{
	    this._viewerCore.reload({ inGrid: false });
	};
	
	// VIEW EVENTS
	GridHandler.prototype.onViewWillLoad = function ()
	{
	    // FIXME(wabain): Should something happen here?
	    /* No-op */
	};
	
	GridHandler.prototype.onViewDidLoad = function ()
	{
	    // FIXME(wabain): Should something happen here?
	    /* No-op */
	};
	
	GridHandler.prototype.onViewDidUpdate = function (renderedPages, targetPage)
	{
	    if (targetPage !== null)
	    {
	        this._viewerCore.setCurrentPage(targetPage);
	        return;
	    }
	
	    // Select the current page from the first row if it is fully visible, or from
	    // the second row if it is fully visible, or from the centermost row otherwise.
	    // If the current page is in that group then don't change it. Otherwise, set
	    // the current page to the group's first page.
	
	    var layout = this._viewerCore.getCurrentLayout();
	    var groups = [];
	    renderedPages.forEach(function (pageIndex)
	    {
	        var group = layout.getPageInfo(pageIndex).group;
	        if (groups.length === 0 || group !== groups[groups.length - 1])
	            groups.push(group);
	    });
	
	    var viewport = this._viewerCore.getViewport();
	    var chosenGroup;
	
	    if (groups.length === 1 || groups[0].region.top >= viewport.top)
	        chosenGroup = groups[0];
	    else if (groups[1].region.bottom <= viewport.bottom)
	        chosenGroup = groups[1];
	    else
	        chosenGroup = getCentermostGroup(groups, viewport);
	
	    var currentPage = this._viewerCore.getSettings().currentPageIndex;
	
	    var hasCurrentPage = chosenGroup.pages.some(function (page)
	    {
	        return page.index === currentPage;
	    });
	
	    if (!hasCurrentPage)
	        this._viewerCore.setCurrentPage(chosenGroup.pages[0].index);
	};
	
	GridHandler.prototype.destroy = function ()
	{
	    // No-op
	};
	
	function getCentermostGroup(groups, viewport)
	{
	    var viewportMiddle = viewport.top + viewport.height / 2;
	
	    return maxBy(groups, function (group)
	    {
	        var groupMiddle = group.region.top + group.dimensions.height / 2;
	        return -Math.abs(viewportMiddle - groupMiddle);
	    });
	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = PageOverlayManager;
	
	/**
	 * Manages a collection of page overlays, which implement a low-level
	 * API for synchronizing HTML pages to the canvas. Each overlay needs
	 * to implement the following protocol:
	 *
	 *   mount(): Called when a page is first rendered
	 *   refresh(): Called when a page is moved
	 *   unmount(): Called when a previously rendered page has stopped being rendered
	 *
	 * @class
	 */
	
	function PageOverlayManager()
	{
	    this._pages = {};
	    this._renderedPages = [];
	    this._renderedPageMap = {};
	}
	
	PageOverlayManager.prototype.addOverlay = function (overlay)
	{
	    var overlaysByPage = this._pages[overlay.page] || (this._pages[overlay.page] = []);
	
	    overlaysByPage.push(overlay);
	
	    if (this._renderedPageMap[overlay.page])
	        overlay.mount();
	};
	
	PageOverlayManager.prototype.removeOverlay = function (overlay)
	{
	    var page = overlay.page;
	    var overlaysByPage = this._pages[page];
	
	    if (!overlaysByPage)
	        return;
	
	    var overlayIndex = overlaysByPage.indexOf(overlay);
	
	    if (overlayIndex === -1)
	        return;
	
	    if (this._renderedPageMap[page])
	        overlaysByPage[overlayIndex].unmount();
	
	    overlaysByPage.splice(overlayIndex, 1);
	
	    if (overlaysByPage.length === 0)
	        delete this._pages[page];
	};
	
	PageOverlayManager.prototype.updateOverlays = function (renderedPages)
	{
	    var previouslyRendered = this._renderedPages;
	    var newRenderedMap = {};
	
	    renderedPages.forEach(function (pageIndex)
	    {
	        newRenderedMap[pageIndex] = true;
	
	        if (!this._renderedPageMap[pageIndex])
	        {
	            this._renderedPageMap[pageIndex] = true;
	
	            this._invokeOnOverlays(pageIndex, function (overlay)
	            {
	                overlay.mount();
	            });
	        }
	    }, this);
	
	    previouslyRendered.forEach(function (pageIndex)
	    {
	        if (newRenderedMap[pageIndex])
	        {
	            this._invokeOnOverlays(pageIndex, function (overlay)
	            {
	                overlay.refresh();
	            });
	        }
	        else
	        {
	            delete this._renderedPageMap[pageIndex];
	
	            this._invokeOnOverlays(pageIndex, function (overlay)
	            {
	                overlay.unmount();
	            });
	        }
	    }, this);
	
	    this._renderedPages = renderedPages;
	};
	
	PageOverlayManager.prototype._invokeOnOverlays = function (pageIndex, func)
	{
	    var overlays = this._pages[pageIndex];
	    if (overlays)
	        overlays.forEach(func, this);
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var debug = __webpack_require__(28)('diva:Renderer');
	var debugPaints = __webpack_require__(28)('diva:Renderer:paints');
	
	var elt = __webpack_require__(8);
	
	var CompositeImage = __webpack_require__(31);
	var DocumentLayout = __webpack_require__(32);
	var ImageCache = __webpack_require__(33);
	var ImageRequestHandler = __webpack_require__(34);
	var InterpolateAnimation = __webpack_require__(35);
	
	var REQUEST_DEBOUNCE_INTERVAL = 250;
	
	
	module.exports = Renderer;
	
	function Renderer(options, hooks)
	{
	    this._viewport = options.viewport;
	    this._outerElement = options.outerElement;
	    this._documentElement = options.innerElement;
	
	    this._hooks = hooks || {};
	
	    this._canvas = elt('canvas', { class: 'diva-viewer-canvas' });
	    this._ctx = this._canvas.getContext('2d');
	
	    this.layout = null;
	
	    this._sourceResolver = null;
	    this._renderedPages = null;
	    this._config = null;
	    this._zoomLevel = null;
	    this._compositeImages = null;
	    this._renderedTiles = null;
	    this._animation = null;
	
	    // FIXME(wabain): What level should this be maintained at?
	    // Diva global?
	    this._cache = new ImageCache();
	    this._pendingRequests = {};
	}
	
	Renderer.getCompatibilityErrors = function ()
	{
	    if (typeof HTMLCanvasElement !== 'undefined')
	        return null;
	
	    return [
	        'Your browser lacks support for the ', elt('pre', 'canvas'),
	        ' element. Please upgrade your browser.'
	    ];
	};
	
	Renderer.prototype.load = function (config, viewportPosition, sourceResolver)
	{
	    this._clearAnimation();
	
	    if (this._hooks.onViewWillLoad)
	        this._hooks.onViewWillLoad();
	
	    this._sourceResolver = sourceResolver;
	    this._config = config;
	    this._compositeImages = {};
	    this._setLayoutToZoomLevel(viewportPosition.zoomLevel);
	
	    // FIXME(wabain): Remove this when there's more confidence the check shouldn't be needed
	    if (!this.layout.getPageInfo(viewportPosition.anchorPage))
	        throw new Error('invalid page: ' + viewportPosition.anchorPage);
	
	    if (this._canvas.width !== this._viewport.width || this._canvas.height !== this._viewport.height)
	    {
	        debug('Canvas dimension change: (%s, %s) -> (%s, %s)', this._canvas.width, this._canvas.height,
	            this._viewport.width, this._viewport.height);
	
	        this._canvas.width = this._viewport.width;
	        this._canvas.height = this._viewport.height;
	    } else {
	        debug('Reload, no size change');
	    }
	
	    // FIXME: What hooks should be called here?
	    this.goto(viewportPosition.anchorPage, viewportPosition.verticalOffset, viewportPosition.horizontalOffset);
	
	    if (this._canvas.parentNode !== this._outerElement)
	        this._outerElement.insertBefore(this._canvas, this._outerElement.firstChild);
	
	    if (this._hooks.onViewDidLoad)
	        this._hooks.onViewDidLoad();
	};
	
	Renderer.prototype._setViewportPosition = function (viewportPosition)
	{
	    if (viewportPosition.zoomLevel !== this._zoomLevel)
	    {
	        if (this._zoomLevel === null)
	            throw new TypeError('The current view is not zoomable');
	        else if (viewportPosition.zoomLevel === null)
	            throw new TypeError('The current view requires a zoom level');
	
	        this._setLayoutToZoomLevel(viewportPosition.zoomLevel);
	    }
	
	    this._goto(viewportPosition.anchorPage, viewportPosition.verticalOffset, viewportPosition.horizontalOffset);
	};
	
	Renderer.prototype._setLayoutToZoomLevel = function (zoomLevel)
	{
	    this.layout = new DocumentLayout(this._config, zoomLevel);
	    this._zoomLevel = zoomLevel;
	
	    elt.setAttributes(this._documentElement, {
	        style: {
	            height: this.layout.dimensions.height + 'px',
	            width: this.layout.dimensions.width + 'px'
	        }
	    });
	
	    this._viewport.setInnerDimensions(this.layout.dimensions);
	};
	
	Renderer.prototype.adjust = function (direction)
	{
	    this._clearAnimation();
	
	    this._render(direction);
	
	    if (this._hooks.onViewDidUpdate)
	    {
	        this._hooks.onViewDidUpdate(this._renderedPages.slice(), null);
	    }
	};
	
	// FIXME(wabain): Remove the direction argument if it doesn't end up being needed.
	Renderer.prototype._render = function (direction) // jshint ignore:line
	{
	    var newRenderedPages = [];
	    this.layout.pageGroups.forEach(function (group)
	    {
	        if (!this._viewport.intersectsRegion(group.region))
	            return;
	
	        var visiblePages = group.pages
	            .filter(function (page)
	            {
	                return this.isPageVisible(page.index);
	            }, this)
	            .map(function (page)
	            {
	                return page.index;
	            });
	
	        newRenderedPages.push.apply(newRenderedPages, visiblePages);
	    }, this);
	
	    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
	    this._paintOutline(newRenderedPages);
	
	    newRenderedPages.forEach(function (pageIndex)
	    {
	        if (!this._compositeImages[pageIndex])
	        {
	            var page = this.layout.getPageInfo(pageIndex);
	            var zoomLevels = this._sourceResolver.getAllZoomLevelsForPage(page);
	            var composite = new CompositeImage(zoomLevels);
	            composite.updateFromCache(this._cache);
	            this._compositeImages[pageIndex] = composite;
	        }
	    }, this);
	
	    this._initiateTileRequests(newRenderedPages);
	
	    var changes = findChanges(this._renderedPages || [], newRenderedPages);
	
	    changes.removed.forEach(function (pageIndex)
	    {
	        delete this._compositeImages[pageIndex];
	    }, this);
	
	    this._renderedPages = newRenderedPages;
	    this._paint();
	
	    if (this._hooks.onPageWillLoad)
	    {
	        changes.added.forEach(function (pageIndex)
	        {
	            this._hooks.onPageWillLoad(pageIndex);
	        }, this);
	    }
	};
	
	Renderer.prototype._paint = function ()
	{
	    debug('Repainting');
	
	    var renderedTiles = [];
	
	    this._renderedPages.forEach(function (pageIndex)
	    {
	        this._compositeImages[pageIndex].getTiles(this._zoomLevel).forEach(function (source)
	        {
	            var scaled = getScaledTileRecord(source, this._zoomLevel);
	
	            if (this._isTileVisible(pageIndex, scaled))
	            {
	                renderedTiles.push(source.url);
	                this._drawTile(pageIndex, scaled, this._cache.get(source.url));
	            }
	        }, this);
	    }, this);
	
	    var cache = this._cache;
	
	    var changes = findChanges(this._renderedTiles || [], renderedTiles);
	
	    changes.added.forEach(function (url)
	    {
	        cache.acquire(url);
	    });
	
	    changes.removed.forEach(function (url)
	    {
	        cache.release(url);
	    });
	
	    if (changes.removed)
	    {
	        // FIXME: Should only need to update the composite images
	        // for which tiles were removed
	        this._renderedPages.forEach(function (pageIndex)
	        {
	            this._compositeImages[pageIndex].updateFromCache(this._cache);
	        }, this);
	    }
	
	    this._renderedTiles = renderedTiles;
	};
	
	// Paint a page outline while the tiles are loading.
	Renderer.prototype._paintOutline = function (pages)
	{
	    pages.forEach(function (pageIndex)
	    {
	        var pageInfo = this.layout.getPageInfo(pageIndex);
	        var pageOffset = this._getImageOffset(pageIndex);
	
	        // Ensure the document is drawn to the center of the viewport
	        var viewportPaddingX = Math.max(0, (this._viewport.width - this.layout.dimensions.width) / 2);
	        var viewportPaddingY = Math.max(0, (this._viewport.height - this.layout.dimensions.height) / 2);
	
	        var viewportOffsetX = pageOffset.left - this._viewport.left + viewportPaddingX;
	        var viewportOffsetY = pageOffset.top - this._viewport.top + viewportPaddingY;
	
	        var destXOffset = viewportOffsetX < 0 ? -viewportOffsetX : 0;
	        var destYOffset = viewportOffsetY < 0 ? -viewportOffsetY : 0;
	
	        var canvasX = Math.max(0, viewportOffsetX);
	        var canvasY = Math.max(0, viewportOffsetY);
	
	        var destWidth = pageInfo.dimensions.width - destXOffset;
	        var destHeight = pageInfo.dimensions.height - destYOffset;
	
	        this._ctx.strokeStyle = '#AAA';
	        // In order to get a 1px wide line using strokes, we need to start at a 'half pixel'
	        this._ctx.strokeRect(canvasX + 0.5, canvasY + 0.5, destWidth, destHeight);
	    }, this);
	};
	
	// This method should be sent all visible pages at once because it will initiate
	// all image requests and cancel any remaining image requests. In the case that
	// a request is ongoing and the tile is still visible in the viewport, the old request
	// is kept active instead of restarting it. The image requests are given a timeout
	// before loading in order to debounce them and have a small reaction time
	// to cancel them and avoid useless requests.
	Renderer.prototype._initiateTileRequests = function(pages)
	{
	    // Only requests in this object are kept alive, since all others are not visible in the viewport
	    var newPendingRequests = {};
	
	    // Used later as a closure to initiate the image requests with the right source and pageIndex
	    var initiateRequest = function (source, pageIndex)
	    {
	        var composite = this._compositeImages[pageIndex];
	
	        newPendingRequests[source.url] = new ImageRequestHandler({
	            url: source.url,
	            timeoutTime: REQUEST_DEBOUNCE_INTERVAL,
	            load: function (img)
	            {
	                delete this._pendingRequests[source.url];
	                this._cache.put(source.url, img);
	
	                // Awkward way to check for updates
	                if (composite === this._compositeImages[pageIndex])
	                {
	                    composite.updateWithLoadedUrls([source.url]);
	
	                    if (this._isTileForSourceVisible(pageIndex, source))
	                        this._paint();
	                    else
	                        debugPaints('Page %s, tile %s no longer visible on image load', pageIndex, source.url);
	                }
	            }.bind(this),
	            error: function ()
	            {
	                // TODO: Could make a limited number of retries, etc.
	                delete this._pendingRequests[source.url];
	            }.bind(this)
	        });
	    }.bind(this);
	
	    for (var i = 0; i < pages.length; i++)
	    {
	        var pageIndex = pages[i];
	        var tiles = this._sourceResolver.getBestZoomLevelForPage(this.layout.getPageInfo(pageIndex)).tiles;
	
	        for (var j = 0; j < tiles.length; j++)
	        {
	            var source = tiles[j];
	            if (this._cache.has(source.url) || !this._isTileForSourceVisible(pageIndex, source))
	                continue;
	
	            // Don't create a new request if the tile is already being loaded
	            if (this._pendingRequests[source.url])
	            {
	                newPendingRequests[source.url] = this._pendingRequests[source.url];
	                delete this._pendingRequests[source.url];
	                continue;
	            }
	
	            // Use a closure since the load and error methods are going to be called later and
	            // we need to keep the right reference to the source and the page index
	            initiateRequest(source, pageIndex);
	        }
	    }
	
	    for (var url in this._pendingRequests)
	        this._pendingRequests[url].abort();
	    this._pendingRequests = newPendingRequests;
	};
	
	Renderer.prototype._drawTile = function (pageIndex, scaledTile, img)
	{
	    var tileOffset = this._getTileToDocumentOffset(pageIndex, scaledTile);
	
	    // Ensure the document is drawn to the center of the viewport
	    var viewportPaddingX = Math.max(0, (this._viewport.width - this.layout.dimensions.width) / 2);
	    var viewportPaddingY = Math.max(0, (this._viewport.height - this.layout.dimensions.height) / 2);
	
	    var viewportOffsetX = tileOffset.left - this._viewport.left + viewportPaddingX;
	    var viewportOffsetY = tileOffset.top - this._viewport.top + viewportPaddingY;
	
	    var destXOffset = viewportOffsetX < 0 ? -viewportOffsetX : 0;
	    var destYOffset = viewportOffsetY < 0 ? -viewportOffsetY : 0;
	
	    var sourceXOffset = destXOffset / scaledTile.scaleRatio;
	    var sourceYOffset = destYOffset / scaledTile.scaleRatio;
	
	    var canvasX = Math.max(0, viewportOffsetX);
	    var canvasY = Math.max(0, viewportOffsetY);
	
	    // Ensure that the specified dimensions are no greater than the actual
	    // size of the image. Safari won't display the tile if they are.
	    var destWidth = Math.min(scaledTile.dimensions.width, img.width * scaledTile.scaleRatio) - destXOffset;
	    var destHeight = Math.min(scaledTile.dimensions.height, img.height * scaledTile.scaleRatio) - destYOffset;
	
	    var sourceWidth = destWidth / scaledTile.scaleRatio;
	    var sourceHeight = destHeight / scaledTile.scaleRatio;
	
	    if (debugPaints.enabled) {
	        debugPaints('Drawing page %s, tile %sx (%s, %s) from %s, %s to viewport at %s, %s, scale %s%%',
	            pageIndex,
	            scaledTile.sourceZoomLevel, scaledTile.row, scaledTile.col,
	            sourceXOffset, sourceYOffset,
	            canvasX, canvasY,
	            Math.round(scaledTile.scaleRatio * 100));
	    }
	
	    this._ctx.drawImage(
	        img,
	        sourceXOffset, sourceYOffset,
	        sourceWidth, sourceHeight,
	        canvasX, canvasY,
	        destWidth, destHeight);
	};
	
	Renderer.prototype._isTileForSourceVisible = function (pageIndex, tileSource)
	{
	    return this._isTileVisible(pageIndex, getScaledTileRecord(tileSource, this._zoomLevel));
	};
	
	Renderer.prototype._isTileVisible = function (pageIndex, scaledTile)
	{
	    var tileOffset = this._getTileToDocumentOffset(pageIndex, scaledTile);
	
	    // FIXME(wabain): This check is insufficient during a zoom transition
	    return this._viewport.intersectsRegion({
	        top: tileOffset.top,
	        bottom: tileOffset.top + scaledTile.dimensions.height,
	        left: tileOffset.left,
	        right: tileOffset.left + scaledTile.dimensions.width
	    });
	};
	
	Renderer.prototype._getTileToDocumentOffset = function (pageIndex, scaledTile)
	{
	    var imageOffset = this._getImageOffset(pageIndex);
	
	    return {
	        top: imageOffset.top + scaledTile.offset.top,
	        left: imageOffset.left + scaledTile.offset.left
	    };
	};
	
	Renderer.prototype._getImageOffset = function (pageIndex)
	{
	    return this.layout.getPageOffset(pageIndex, {excludePadding: true});
	};
	
	// TODO: Update signature
	Renderer.prototype.goto = function (pageIndex, verticalOffset, horizontalOffset)
	{
	    this._clearAnimation();
	    this._goto(pageIndex, verticalOffset, horizontalOffset);
	    if (this._hooks.onViewDidUpdate)
	    {
	        this._hooks.onViewDidUpdate(this._renderedPages.slice(), pageIndex);
	    }
	};
	
	Renderer.prototype._goto = function (pageIndex, verticalOffset, horizontalOffset)
	{
	    // FIXME(wabain): Move this logic to the viewer
	    var pageOffset = this.layout.getPageOffset(pageIndex);
	
	    var desiredVerticalCenter = pageOffset.top + verticalOffset;
	    var top = desiredVerticalCenter - parseInt(this._viewport.height / 2, 10);
	
	    var desiredHorizontalCenter = pageOffset.left + horizontalOffset;
	    var left = desiredHorizontalCenter - parseInt(this._viewport.width / 2, 10);
	
	    this._viewport.top = top;
	    this._viewport.left = left;
	
	    this._render(0);
	};
	
	Renderer.prototype.transitionViewportPosition = function (options)
	{
	    this._clearAnimation();
	
	    var getPosition = options.getPosition;
	    var self = this;
	
	    var onViewDidTransition = this._hooks.onViewDidTransition;
	
	    this._animation = InterpolateAnimation.animate({
	        duration: options.duration,
	        parameters: options.parameters,
	        onUpdate: function (values)
	        {
	            // TODO: Do image preloading, work with that
	            self._setViewportPosition(getPosition(values));
	
	            if (onViewDidTransition)
	                onViewDidTransition();
	        },
	        onEnd: function (info)
	        {
	            if (options.onEnd)
	                options.onEnd(info);
	
	            if (self._hooks.onViewDidUpdate && !info.interrupted)
	            {
	                self._hooks.onViewDidUpdate(self._renderedPages.slice(), null);
	            }
	        }
	    });
	};
	
	Renderer.prototype._clearAnimation = function ()
	{
	    if (this._animation)
	    {
	        this._animation.cancel();
	        this._animation = null;
	    }
	};
	
	Renderer.prototype.preload = function ()
	{
	    // TODO
	};
	
	Renderer.prototype.isPageVisible = function (pageIndex)
	{
	    if (!this.layout)
	        return false;
	
	    var page = this.layout.getPageInfo(pageIndex);
	
	    if (!page)
	        return false;
	
	    return this._viewport.intersectsRegion(this.layout.getPageRegion(pageIndex));
	};
	
	Renderer.prototype.getRenderedPages = function ()
	{
	    return this._renderedPages.slice();
	};
	
	Renderer.prototype.destroy = function ()
	{
	    this._clearAnimation();
	
	    // FIXME(wabain): I don't know if we should actually do this
	    Object.keys(this._pendingRequests).forEach(function (req)
	    {
	        var handler = this._pendingRequests[req];
	        delete this._pendingRequests[req];
	
	        handler.abort();
	    }, this);
	
	    this._canvas.parentNode.removeChild(this._canvas);
	};
	
	function getScaledTileRecord(source, scaleFactor)
	{
	    var scaleRatio;
	
	    if (scaleFactor === null)
	        scaleRatio = 1;
	    else
	        scaleRatio = Math.pow(2, scaleFactor - source.zoomLevel);
	
	    return {
	        sourceZoomLevel: source.zoomLevel,
	        scaleRatio: scaleRatio,
	        row: source.row,
	        col: source.col,
	        dimensions: {
	            width: source.dimensions.width * scaleRatio,
	            height: source.dimensions.height * scaleRatio
	        },
	        offset: {
	            left: source.offset.left * scaleRatio,
	            top: source.offset.top * scaleRatio
	        },
	        url: source.url
	    };
	}
	
	function findChanges(oldArray, newArray)
	{
	    if (oldArray === newArray)
	    {
	        return {
	            added: [],
	            removed: []
	        };
	    }
	
	    var removed = oldArray.filter(function (oldEntry)
	    {
	        return newArray.indexOf(oldEntry) === -1;
	    });
	
	    var added = newArray.filter(function (newEntry)
	    {
	        return oldArray.indexOf(newEntry) === -1;
	    });
	
	    return {
	        added: added,
	        removed: removed
	    };
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(29);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(30);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = CompositeImage;
	
	/**
	 * @class CompositeImage
	 * @private
	 *
	 * Utility class to composite tiles into a complete image
	 * and track the rendered state of an image as new tiles
	 * load.
	 */
	
	/**
	 * @param levels {Array.<Array.<Tile>>}
	 * @constructor
	 */
	function CompositeImage(levels)
	{
	    this._levels = levels;  // Assume levels sorted high-res first
	    var urlsToTiles = this._urlsToTiles = {};
	
	    levels.forEach(function (level)
	    {
	        level.tiles.forEach(function (tile)
	        {
	            urlsToTiles[tile.url] = {
	                zoomLevel: level.zoomLevel,
	                row: tile.row,
	                col: tile.col
	            };
	        });
	    });
	
	    this.clear();
	}
	
	CompositeImage.prototype.clear = function ()
	{
	    var loadedByLevel = this._loadedByLevel = {};
	
	    this._levels.forEach(function (level)
	    {
	        loadedByLevel[level.zoomLevel] = new TileCoverageMap(level.rows, level.cols);
	    });
	};
	
	CompositeImage.prototype.getTiles = function (baseZoomLevel)
	{
	    var toRenderByLevel = [];
	    var highestZoomLevel = this._levels[0].zoomLevel;
	    var covered = new TileCoverageMap(this._levels[0].rows, this._levels[0].cols);
	
	    var bestLevelIndex;
	
	    // Default to the lowest zoom level
	    if (baseZoomLevel === null)
	    {
	        bestLevelIndex = 0;
	    }
	    else
	    {
	        var ceilLevel = Math.ceil(baseZoomLevel);
	        bestLevelIndex = findIndex(this._levels, function (level)
	        {
	            return level.zoomLevel <= ceilLevel;
	        });
	    }
	
	
	    // The best level, followed by higher-res levels in ascending order of resolution,
	    // followed by lower-res levels in descending order of resolution
	    var levelsByPreference = this._levels.slice(0, bestLevelIndex + 1).reverse()
	        .concat(this._levels.slice(bestLevelIndex + 1));
	
	    levelsByPreference.forEach(function (level)
	    {
	        var loaded = this._loadedByLevel[level.zoomLevel];
	
	        var additionalTiles = level.tiles.filter(function (tile)
	        {
	            return loaded.isLoaded(tile.row, tile.col);
	        });
	
	        // Filter out entirely covered tiles
	
	        // FIXME: Is it better to draw all of a partially covered tile,
	        // with some of it ultimately covered, or to pick out the region
	        // which needs to be drawn?
	        // See https://github.com/DDMAL/diva.js/issues/358
	
	        var scaleRatio = Math.pow(2, highestZoomLevel - level.zoomLevel);
	
	        additionalTiles = additionalTiles.filter(function (tile)
	        {
	            var isNeeded = false;
	
	            var highResRow = tile.row * scaleRatio;
	            var highResCol = tile.col * scaleRatio;
	
	            for (var i=0; i < scaleRatio; i++)
	            {
	                for (var j=0; j < scaleRatio; j++)
	                {
	                    if (!covered.isLoaded(highResRow + i, highResCol + j))
	                    {
	                        isNeeded = true;
	                        covered.set(highResRow + i, highResCol + j, true);
	                    }
	                }
	            }
	
	            return isNeeded;
	        });
	
	        toRenderByLevel.push(additionalTiles);
	    }, this);
	
	    // Less-preferred tiles should come first
	    toRenderByLevel.reverse();
	
	    var tiles = [];
	
	    toRenderByLevel.forEach(function (byLevel)
	    {
	        tiles.push.apply(tiles, byLevel);
	    });
	
	    return tiles;
	};
	
	/**
	 * Update the composite image to take into account all the URLs
	 * loaded in an image cache.
	 *
	 * @param cache {ImageCache}
	 */
	CompositeImage.prototype.updateFromCache = function (cache)
	{
	    this.clear();
	
	    this._levels.forEach(function (level)
	    {
	        var loaded = this._loadedByLevel[level.zoomLevel];
	
	        level.tiles.forEach(function (tile)
	        {
	            if (cache.has(tile.url))
	                loaded.set(tile.row, tile.col, true);
	        });
	    }, this);
	};
	
	CompositeImage.prototype.updateWithLoadedUrls = function (urls)
	{
	    urls.forEach(function (url)
	    {
	        var entry = this._urlsToTiles[url];
	        this._loadedByLevel[entry.zoomLevel].set(entry.row, entry.col, true);
	    }, this);
	};
	
	function TileCoverageMap(rows, cols)
	{
	    this._rows = rows;
	    this._cols = cols;
	
	    this._map = fill(rows).map(function ()
	    {
	        return fill(cols, false);
	    });
	}
	
	TileCoverageMap.prototype.isLoaded = function (row, col)
	{
	    // Return true for out of bounds tiles because they
	    // don't need to load. (Unfortunately this will also
	    // mask logical errors.)
	    if (row >= this._rows || col >= this._cols)
	        return true;
	
	    return this._map[row][col];
	};
	
	TileCoverageMap.prototype.set = function (row, col, value)
	{
	    this._map[row][col] = value;
	};
	
	function fill(count, value)
	{
	    var arr = new Array(count);
	
	    for (var i=0; i < count; i++)
	        arr[i] = value;
	
	    return arr;
	}
	
	function findIndex(array, predicate)
	{
	    var length = array.length;
	    for (var i = 0; i < length; i++)
	    {
	        if (predicate(array[i], i))
	            return i;
	    }
	
	    return -1;
	}


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = DocumentLayout;
	
	/**
	 * Translate page layouts, as generated by page-layouts, into an
	 * object which computes layout information for the document as
	 * a whole.
	 */
	function DocumentLayout(config, zoomLevel)
	{
	    var computedLayout = getComputedLayout(config, zoomLevel);
	
	    this.dimensions = computedLayout.dimensions;
	    this.pageGroups = computedLayout.pageGroups;
	    this._pageLookup = getPageLookup(computedLayout.pageGroups);
	}
	
	/**
	 * @typedef {Object} PageInfo
	 * @property {number} index
	 * @property {{index, dimensions, pages, region, padding}} group
	 * @property {{height: number, width: number}} dimensions
	 * @property {{top: number, left: number}} groupOffset
	 */
	
	/**
	 * @param pageIndex
	 * @returns {PageInfo|null}
	 */
	DocumentLayout.prototype.getPageInfo = function (pageIndex)
	{
	    return this._pageLookup[pageIndex] || null;
	};
	
	/**
	 * Get the dimensions of a page
	 *
	 * @param pageIndex
	 * @returns {{height: number, width: number}}
	 */
	DocumentLayout.prototype.getPageDimensions = function (pageIndex)
	{
	    if (!this._pageLookup || !this._pageLookup[pageIndex])
	        return null;
	
	    var region = getPageRegionFromPageInfo(this._pageLookup[pageIndex]);
	
	    return {
	        height: region.bottom - region.top,
	        width: region.right - region.left
	    };
	};
	
	// TODO(wabain): Get rid of this; it's a subset of the page region, so
	// give that instead
	/**
	 * Get the top-left coordinates of a page, including*** padding
	 *
	 * @param pageIndex
	 * @param options
	 * @returns {{top: number, left: number} | null}
	 */
	DocumentLayout.prototype.getPageOffset = function (pageIndex, options)
	{
	    var region = this.getPageRegion(pageIndex, options);
	
	    if (!region)
	        return null;
	
	    return {
	        top: region.top,
	        left: region.left
	    };
	};
	
	DocumentLayout.prototype.getPageRegion = function (pageIndex, options)
	{
	    var pageInfo = this._pageLookup[pageIndex];
	
	    if (!pageInfo)
	        return null;
	
	    var region = getPageRegionFromPageInfo(pageInfo);
	
	    if (options && options.excludePadding)
	    {
	        // FIXME?
	        var padding = pageInfo.group.padding;
	
	        return {
	            top: region.top + padding.top,
	            left: region.left + padding.left,
	            bottom: region.bottom,
	            right: region.right
	        };
	    }
	
	    return region;
	};
	
	/**
	 * Get the distance from the top-right of the page to the center of the
	 * specified viewport region
	 *
	 * @param pageIndex
	 * @param viewport {{top: number, left: number, bottom: number, right: number}}
	 * @returns {{x: number, y: number}}
	 */
	DocumentLayout.prototype.getPageToViewportCenterOffset = function (pageIndex, viewport)
	{
	    var scrollLeft = viewport.left;
	    var elementWidth = viewport.right - viewport.left;
	
	    var offset = this.getPageOffset(pageIndex);
	
	    var x = scrollLeft - offset.left + parseInt(elementWidth / 2, 10);
	
	    var scrollTop = viewport.top;
	    var elementHeight = viewport.bottom - viewport.top;
	
	    var y = scrollTop - offset.top + parseInt(elementHeight / 2, 10);
	
	    return {
	        x: x,
	        y: y
	    };
	};
	
	function getPageRegionFromPageInfo(page)
	{
	    var top    = page.groupOffset.top  + page.group.region.top;
	    var bottom = top + page.dimensions.height;
	    var left   = page.groupOffset.left + page.group.region.left;
	    var right  = left + page.dimensions.width;
	
	    return {
	        top: top,
	        bottom: bottom,
	        left: left,
	        right: right
	    };
	}
	
	function getPageLookup(pageGroups)
	{
	    var pageLookup = {};
	
	    pageGroups.forEach(function (group)
	    {
	        group.pages.forEach(function (page)
	        {
	            pageLookup[page.index] = {
	                index: page.index,
	                group: group,
	                dimensions: page.dimensions,
	                groupOffset: page.groupOffset
	            };
	        });
	    });
	
	    return pageLookup;
	}
	
	function getComputedLayout(config, zoomLevel)
	{
	    var scaledLayouts = zoomLevel === null ? config.pageLayouts : getScaledPageLayouts(config, zoomLevel);
	
	    var documentSecondaryExtent = getExtentAlongSecondaryAxis(config, scaledLayouts);
	
	    // The current position in the document along the primary axis
	    var primaryDocPosition = config.verticallyOriented ?
	        config.padding.document.top :
	        config.padding.document.left;
	
	    var pageGroups = [];
	
	    // TODO: Use bottom, right as well
	    var pagePadding = {
	        top: config.padding.page.top,
	        left: config.padding.page.left
	    };
	
	    scaledLayouts.forEach(function (layout, index)
	    {
	        var top, left;
	
	        if (config.verticallyOriented)
	        {
	            top = primaryDocPosition;
	            left = (documentSecondaryExtent - layout.dimensions.width) / 2;
	        }
	        else
	        {
	            top = (documentSecondaryExtent - layout.dimensions.height) / 2;
	            left = primaryDocPosition;
	        }
	
	        var region = {
	            top: top,
	            bottom: top + pagePadding.top + layout.dimensions.height,
	            left: left,
	            right: left + pagePadding.left + layout.dimensions.width
	        };
	
	        pageGroups.push({
	            index: index,
	            dimensions: layout.dimensions,
	            pages: layout.pages,
	            region: region,
	            padding: pagePadding
	        });
	
	        primaryDocPosition = config.verticallyOriented ? region.bottom : region.right;
	    });
	
	    var height, width;
	
	    if (config.verticallyOriented)
	    {
	        height = primaryDocPosition + pagePadding.top;
	        width = documentSecondaryExtent;
	    }
	    else
	    {
	        height = documentSecondaryExtent;
	        width = primaryDocPosition + pagePadding.left;
	    }
	
	    return {
	        dimensions: {
	            height: height,
	            width: width
	        },
	        pageGroups: pageGroups
	    };
	}
	
	function getScaledPageLayouts(config, zoomLevel)
	{
	    var scaleRatio = Math.pow(2, zoomLevel - config.maxZoomLevel);
	
	    return config.pageLayouts.map(function (group)
	    {
	        return {
	            dimensions: scaleDimensions(group.dimensions, scaleRatio),
	            pages: group.pages.map(function (page)
	            {
	                return {
	                    index: page.index,
	                    groupOffset: {
	                        top: Math.floor(page.groupOffset.top * scaleRatio),
	                        left: Math.floor(page.groupOffset.left * scaleRatio)
	                    },
	                    dimensions: scaleDimensions(page.dimensions, scaleRatio)
	                };
	            })
	        };
	    });
	}
	
	function scaleDimensions(dimensions, scaleRatio)
	{
	    return {
	        height: Math.floor(dimensions.height * scaleRatio),
	        width: Math.floor(dimensions.width * scaleRatio)
	    };
	}
	
	function getExtentAlongSecondaryAxis(config, scaledLayouts)
	{
	    // Get the extent of the document along the secondary axis
	    var secondaryDim, secondaryPadding;
	    var docPadding = config.padding.document;
	
	    if (config.verticallyOriented)
	    {
	        secondaryDim = 'width';
	        secondaryPadding = docPadding.left + docPadding.right;
	    }
	    else
	    {
	        secondaryDim = 'height';
	        secondaryPadding = docPadding.top + docPadding.bottom;
	    }
	
	    return secondaryPadding + scaledLayouts.reduce(function (maxDim, layout)
	    {
	        return Math.max(layout.dimensions[secondaryDim], maxDim);
	    }, 0);
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var debug = __webpack_require__(28)('diva:ImageCache');
	
	module.exports = ImageCache;
	
	/* FIXME(wabain): The caching strategy here is completely
	 * arbitrary and the implementation isn't especially efficient.
	 */
	
	var DEFAULT_MAX_KEYS = 100;
	
	function ImageCache(options)
	{
	    options = options || { maxKeys: DEFAULT_MAX_KEYS };
	    this.maxKeys = options.maxKeys || DEFAULT_MAX_KEYS;
	
	    this._held = {};
	    this._urls = {};
	    this._lru = [];
	}
	
	ImageCache.prototype.get = function (url)
	{
	    var record = this._urls[url];
	    return record ? record.img : null;
	};
	
	ImageCache.prototype.has = function (url)
	{
	    return !!this._urls[url];
	};
	
	ImageCache.prototype.put = function (url, img)
	{
	    var record = this._urls[url];
	    if (record)
	    {
	        // FIXME: Does this make sense for this use case?
	        record.img = img;
	        this._promote(record);
	    }
	    else
	    {
	        record = {
	            img: img,
	            url: url
	        };
	
	        this._urls[url] = record;
	        this._tryEvict(1);
	        this._lru.unshift(record);
	    }
	};
	
	ImageCache.prototype._promote = function (record)
	{
	    var index = this._lru.indexOf(record);
	    this._lru.splice(index, 1);
	    this._lru.unshift(record);
	};
	
	ImageCache.prototype._tryEvict = function (extraCapacity)
	{
	    var allowedEntryCount = this.maxKeys - extraCapacity;
	
	    if (this._lru.length <= allowedEntryCount)
	        return;
	
	    var evictionIndex = this._lru.length - 1;
	
	    for (;;)
	    {
	        var target = this._lru[evictionIndex];
	
	        if (!this._held[target.url])
	        {
	            debug('Evicting image %s', target.url);
	            this._lru.splice(evictionIndex, 1);
	            delete this._urls[target.url];
	
	            if (this._lru.length <= allowedEntryCount)
	                break;
	        }
	
	        if (evictionIndex === 0)
	        {
	            /* istanbul ignore next */
	            debug.enabled && debug('Cache overfull by %s (all entries are being held)',
	                this._lru.length - allowedEntryCount);
	
	            break;
	        }
	
	        evictionIndex--;
	    }
	};
	
	ImageCache.prototype.acquire = function (url)
	{
	    this._held[url] = (this._held[url] || 0) + 1;
	    this._promote(this._urls[url]);
	};
	
	ImageCache.prototype.release = function (url)
	{
	    var count = this._held[url];
	
	    if (count > 1)
	        this._held[url]--;
	    else
	        delete this._held[url];
	
	    this._tryEvict(0);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var debug = __webpack_require__(28)('diva:ImageRequestHandler');
	
	module.exports = ImageRequestHandler;
	
	/**
	 * Handler for the request for an image tile
	 *
	 * @param url
	 * @param callback
	 * @constructor
	 */
	function ImageRequestHandler(options)
	{
	    this._url = options.url;
	    this._callback = options.load;
	    this._errorCallback = options.error;
	    this.timeoutTime = options.timeoutTime || 0;
	    this._aborted = this._complete = false;
	
	    //Use a timeout to allow the requests to be debounced (as they are in renderer)
	    this.timeout = setTimeout(function()
	    {
	        // Initiate the request
	        this._image = new Image();
	        this._image.crossOrigin = "anonymous";
	        this._image.onload = this._handleLoad.bind(this);
	        this._image.onerror = this._handleError.bind(this);
	        this._image.src = options.url;
	
	        debug('Requesting image %s', options.url);
	    }.bind(this), this.timeoutTime);
	}
	
	ImageRequestHandler.prototype.abort = function ()
	{
	    debug('Aborting request to %s', this._url);
	
	    clearTimeout(this.timeout);
	
	    // FIXME
	    // People on the Internet say that doing this {{should/should not}} abort the request. I believe
	    // it corresponds to what the WHATWG HTML spec says should happen when the UA
	    // updates the image data if selected source is null.
	    //
	    // Sources:
	    //
	    // https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
	    // http://stackoverflow.com/questions/7390888/does-changing-the-src-attribute-of-an-image-stop-the-image-from-downloading
	    if (this._image)
	    {
	        this._image.onload = this._image.onerror = null;
	
	        this._image.src = '';
	    }
	
	    this._aborted = true;
	};
	
	ImageRequestHandler.prototype._handleLoad = function ()
	{
	    if (this._aborted)
	    {
	        console.error('ImageRequestHandler invoked on cancelled request for ' + this._url);
	        return;
	    }
	
	    if (this._complete)
	    {
	        console.error('ImageRequestHandler invoked on completed request for ' + this._url);
	        return;
	    }
	
	    this._complete = true;
	
	    debug('Received image %s', this._url);
	    this._callback(this._image);
	};
	
	ImageRequestHandler.prototype._handleError = function ()
	{
	    debug('Failed to load image %s', this._url);
	    this._errorCallback(this._image);
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	/* global performance */
	
	// TODO: requestAnimationFrame fallback
	
	module.exports = {
	    animate: animate,
	    easing: {
	        linear: linearEasing
	    }
	};
	
	function animate(options)
	{
	    var durationMs = options.duration;
	    var parameters = options.parameters;
	    var onUpdate = options.onUpdate;
	    var onEnd = options.onEnd;
	
	    // Setup
	    // Times are in milliseconds from a basically arbitrary start
	    var start = now();
	    var end = start + durationMs;
	
	    var tweenFns = {};
	    var values = {};
	    var paramKeys = Object.keys(parameters);
	
	    paramKeys.forEach(function (key)
	    {
	        var config = parameters[key];
	        tweenFns[key] = interpolate(config.from, config.to, config.easing || linearEasing);
	    });
	
	    // Run it!
	    var requestId = requestAnimationFrame(update);
	
	    return {
	        cancel: function ()
	        {
	            if (requestId !== null)
	            {
	                cancelAnimationFrame(requestId);
	                handleAnimationCompletion({
	                    interrupted: true
	                });
	            }
	        }
	    };
	
	    function update()
	    {
	        var current = now();
	        var elapsed = Math.min((current - start) / durationMs, 1);
	
	        updateValues(elapsed);
	        onUpdate(values);
	
	        if (current < end)
	            requestId = requestAnimationFrame(update);
	        else
	            handleAnimationCompletion({
	                interrupted: false
	            });
	    }
	
	    function updateValues(elapsed)
	    {
	        paramKeys.forEach(function (key)
	        {
	            values[key] = tweenFns[key](elapsed);
	        });
	    }
	
	    function handleAnimationCompletion(info)
	    {
	        requestId = null;
	
	        if (onEnd)
	            onEnd(info);
	    }
	}
	
	function interpolate(start, end, easing)
	{
	    return function (elapsed)
	    {
	        return start + (end - start) * easing(elapsed);
	    };
	}
	
	function linearEasing(e)
	{
	    return e;
	}
	
	var now;
	
	if (typeof performance !== 'undefined' && performance.now)
	{
	    now = function ()
	    {
	        return performance.now();
	    };
	}
	else
	{
	    now = function ()
	    {
	        return Date.now();
	    };
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var getBookLayoutGroups = __webpack_require__(37);
	var getSinglesLayoutGroups = __webpack_require__(39);
	var getGridLayoutGroups = __webpack_require__(40);
	
	module.exports = getPageLayouts;
	
	/** Get the relative positioning of pages for the current view */
	function getPageLayouts(settings)
	{
	    if (settings.inGrid)
	    {
	        return getGridLayoutGroups(pluck(settings, [
	            'manifest',
	            'viewport',
	            'pagesPerRow',
	            'fixedHeightGrid',
	            'fixedPadding',
	            'showNonPagedPages'
	        ]));
	    }
	    else
	    {
	        var config = pluck(settings, ['manifest', 'verticallyOriented', 'showNonPagedPages']);
	
	        if (settings.inBookLayout)
	            return getBookLayoutGroups(config);
	        else
	            return getSinglesLayoutGroups(config);
	    }
	}
	
	function pluck(obj, keys)
	{
	    var out = {};
	    keys.forEach(function (key)
	    {
	        out[key] = obj[key];
	    });
	    return out;
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var getPageDimensions = __webpack_require__(38);
	
	module.exports = getBookLayoutGroups;
	
	function getBookLayoutGroups(viewerConfig)
	{
	    var groupings = getGroupings(viewerConfig);
	
	    return groupings.map(function (grouping)
	    {
	        return getGroupLayoutsFromPageGrouping(viewerConfig, grouping);
	    });
	}
	
	function getGroupings(viewerConfig)
	{
	    var manifest = viewerConfig.manifest;
	
	    var pagesByGroup = [];
	    var leftPage = null;
	    var nonPagedPages = []; // Pages to display below the current group
	
	    var _addNonPagedPages = function()
	    {
	        for (var i = 0; i < nonPagedPages.length; i++)
	        {
	            pagesByGroup.push([ nonPagedPages[i] ]);
	        }
	        nonPagedPages = [];
	    };
	
	    manifest.pages.forEach(function (page, index)
	    {
	        var pageRecord = {
	            index: index,
	            dimensions: getPageDimensions(index, manifest),
	            paged: (!manifest.paged || page.paged)
	        };
	
	        // Only display non-paged pages if specified in the settings
	        if (!viewerConfig.showNonPagedPages && !pageRecord.paged)
	            return;
	
	        if (!pageRecord.paged)
	        {
	            nonPagedPages.push(pageRecord);
	        }
	        else if (index === 0 || page.facingPages)
	        {
	            // The first page is placed on its own
	            pagesByGroup.push([pageRecord]);
	            _addNonPagedPages();
	        }
	        else if (leftPage === null)
	        {
	            leftPage = pageRecord;
	        }
	        else
	        {
	            pagesByGroup.push([leftPage, pageRecord]);
	            leftPage = null;
	            _addNonPagedPages();
	        }
	    });
	
	    // Flush a final left page
	    if (leftPage !== null)
	    {
	        pagesByGroup.push([leftPage]);
	        _addNonPagedPages();
	    }
	
	    return pagesByGroup;
	}
	
	function getGroupLayoutsFromPageGrouping(viewerConfig, grouping)
	{
	    var verticallyOriented = viewerConfig.verticallyOriented;
	
	    if (grouping.length === 2)
	        return getFacingPageGroup(grouping[0], grouping[1], verticallyOriented);
	
	    var page = grouping[0];
	    var pageDims = page.dimensions;
	
	    // The first page is placed on its own to the right in vertical orientation.
	    // NB that this needs to be the page with index 0; if the first page is excluded
	    // from the layout then this special case shouldn't apply.
	    // If the page is tagged as 'non-paged', center it horizontally
	    var leftOffset;
	    if (page.paged)
	        leftOffset = (page.index === 0 && verticallyOriented) ? pageDims.width : 0;
	    else
	        leftOffset = (verticallyOriented) ? pageDims.width / 2 : 0;
	
	    var shouldBeHorizontallyAdjusted =
	        verticallyOriented && !viewerConfig.manifest.pages[page.index].facingPages;
	
	    // We need to left-align the page in vertical orientation, so we double
	    // the group width
	    return {
	        dimensions: {
	            height: pageDims.height,
	            width: shouldBeHorizontallyAdjusted ? pageDims.width * 2 : pageDims.width
	        },
	        pages: [{
	            index: page.index,
	            groupOffset: {
	                top: 0,
	                left: leftOffset
	            },
	            dimensions: pageDims
	        }]
	    };
	}
	
	function getFacingPageGroup(leftPage, rightPage, verticallyOriented)
	{
	    var leftDims = leftPage.dimensions;
	    var rightDims = rightPage.dimensions;
	
	    var height = Math.max(leftDims.height, rightDims.height);
	
	    var width, firstLeftOffset, secondLeftOffset;
	
	    if (verticallyOriented)
	    {
	        var midWidth = Math.max(leftDims.width, rightDims.width);
	
	        width = midWidth * 2;
	
	        firstLeftOffset = midWidth - leftDims.width;
	        secondLeftOffset = midWidth;
	    }
	    else
	    {
	        width = leftDims.width + rightDims.width;
	        firstLeftOffset = 0;
	        secondLeftOffset = leftDims.width;
	    }
	
	    return {
	        dimensions: {
	            height: height,
	            width: width
	        },
	        pages: [
	            {
	                index: leftPage.index,
	                dimensions: leftDims,
	                groupOffset: {
	                    top: 0,
	                    left: firstLeftOffset
	                }
	            },
	            {
	                index: rightPage.index,
	                dimensions: rightDims,
	                groupOffset: {
	                    top: 0,
	                    left: secondLeftOffset
	                }
	            }
	        ]
	    };
	}


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function getPageDimensions(pageIndex, manifest)
	{
	    var dims = manifest.getMaxPageDimensions(pageIndex);
	
	    return {
	        width: Math.floor(dims.width),
	        height: Math.floor(dims.height)
	    };
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var getPageDimensions = __webpack_require__(38);
	
	module.exports = function getSinglesLayoutGroups(viewerConfig)
	{
	    var manifest = viewerConfig.manifest;
	
	    // Render each page alone in a group
	    var pages = [];
	    manifest.pages.forEach(function (page, index)
	    {
	        if (!viewerConfig.showNonPagedPages && manifest.paged && !page.paged)
	            return;
	
	        var pageDims = getPageDimensions(index, manifest);
	
	        pages.push({
	            dimensions: pageDims,
	            pages: [
	                {
	                    index: index,
	                    groupOffset: {top: 0, left: 0},
	                    dimensions: pageDims
	                }
	            ]
	        });
	    });
	
	    return pages;
	};


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = getGridLayoutGroups;
	
	function getGridLayoutGroups(viewerConfig)
	{
	    var viewportWidth = viewerConfig.viewport.width;
	    var manifest = viewerConfig.manifest;
	    var pagesPerRow = viewerConfig.pagesPerRow;
	    var fixedHeightGrid = viewerConfig.fixedHeightGrid;
	    var fixedPadding = viewerConfig.fixedPadding;
	    var showNonPagedPages = viewerConfig.showNonPagedPages;
	
	    var horizontalPadding = fixedPadding * (pagesPerRow + 1);
	    var pageWidth = (viewportWidth - horizontalPadding) / pagesPerRow;
	    var gridPageWidth = pageWidth;
	
	    // Calculate the row height depending on whether we want to fix the width or the height
	    var rowHeight = (fixedHeightGrid) ? fixedPadding + manifest.minRatio * pageWidth : fixedPadding + manifest.maxRatio * pageWidth;
	
	    var groups = [];
	    var currentPages = [];
	
	    var getGridPageDimensions = function (pageData)
	    {
	        // Calculate the width, height and horizontal placement of this page
	        // Get dimensions at max zoom level, although any level should be fine
	        var pageDimenData = pageData.d[pageData.d.length - 1];
	        var heightToWidthRatio = pageDimenData.h / pageDimenData.w;
	
	        var pageWidth, pageHeight;
	
	        if (fixedHeightGrid)
	        {
	            pageWidth = (rowHeight - fixedPadding) / heightToWidthRatio;
	            pageHeight = rowHeight - fixedPadding;
	        }
	        else
	        {
	            pageWidth = gridPageWidth;
	            pageHeight = pageWidth * heightToWidthRatio;
	        }
	
	        return {
	            width: Math.round(pageWidth),
	            height: Math.round(pageHeight)
	        };
	    };
	
	    var rowDimensions = {
	        height: rowHeight,
	        width: viewportWidth
	    };
	
	    manifest.pages.forEach(function (page, pageIndex)
	    {
	        if (!showNonPagedPages && manifest.paged && !page.paged)
	            return;
	
	        // Calculate the width, height and horizontal placement of this page
	        var pageDimens = getGridPageDimensions(page);
	        var leftOffset = Math.floor(currentPages.length * (fixedPadding + gridPageWidth) + fixedPadding);
	
	        // Center the page if the height is fixed (otherwise, there is no horizontal padding)
	        if (fixedHeightGrid)
	        {
	            leftOffset += (gridPageWidth - pageDimens.width) / 2;
	        }
	
	        // TODO: Precompute page dimensions everywhere
	        currentPages.push({
	            index: pageIndex,
	            dimensions: pageDimens,
	            groupOffset: {
	                top: 0,
	                left: leftOffset
	            }
	        });
	
	        if (currentPages.length === pagesPerRow)
	        {
	            groups.push({
	                dimensions: rowDimensions,
	                pages: currentPages
	            });
	
	            currentPages = [];
	        }
	    });
	
	    if (currentPages.length > 0)
	    {
	        groups.push({
	            dimensions: rowDimensions,
	            pages: currentPages
	        });
	    }
	
	    return groups;
	}


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = createSettingsView;
	
	function createSettingsView(sources)
	{
	    var obj = {};
	
	    sources.forEach(function (source)
	    {
	        registerMixin(obj, source);
	    });
	
	    return obj;
	}
	
	function registerMixin(obj, mixin)
	{
	    Object.keys(mixin).forEach(function (key)
	    {
	        Object.defineProperty(obj, key, {
	            get: function ()
	            {
	                return mixin[key];
	            },
	            set: function ()
	            {
	                // TODO: Make everything strict mode so this isn't needed
	                throw new TypeError('Cannot set settings.' + key);
	            }
	        });
	    });
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var extend = __webpack_require__(3).extend;
	
	module.exports = ValidationRunner;
	
	function ValidationRunner(options)
	{
	    this.whitelistedKeys = options.whitelistedKeys || [];
	    this.additionalProperties = options.additionalProperties || [];
	    this.validations = options.validations;
	}
	
	ValidationRunner.prototype.isValid = function (key, value, settings)
	{
	    // Get the validation index
	    var validationIndex = null;
	
	    this.validations.some(function (validation, index)
	    {
	        if (validation.key !== key)
	            return false;
	
	        validationIndex = index;
	        return true;
	    });
	
	    if (validationIndex === null)
	        return true;
	
	    // Run the validation
	    var dummyChanges = {};
	    dummyChanges[key] = value;
	    var proxier = createSettingsProxier(settings, dummyChanges, this);
	
	    return !this._runValidation(validationIndex, value, proxier);
	};
	
	ValidationRunner.prototype.validate = function (settings)
	{
	    this._validateOptions({}, settings);
	};
	
	ValidationRunner.prototype.getValidatedOptions = function (settings, options)
	{
	    var cloned = extend({}, options);
	    this._validateOptions(settings, cloned);
	    return cloned;
	};
	
	ValidationRunner.prototype._validateOptions = function (settings, options)
	{
	    var settingsProxier = createSettingsProxier(settings, options, this);
	    this._applyValidations(options, settingsProxier);
	};
	
	ValidationRunner.prototype._applyValidations = function (options, proxier)
	{
	    this.validations.forEach(function (validation, index)
	    {
	        if (!options.hasOwnProperty(validation.key))
	            return;
	
	        var input = options[validation.key];
	        var corrected = this._runValidation(index, input, proxier);
	
	        if (corrected)
	        {
	            if (!corrected.warningSuppressed)
	                emitWarning(validation.key, input, corrected.value);
	
	            options[validation.key] = corrected.value;
	        }
	    }, this);
	};
	
	ValidationRunner.prototype._runValidation = function (index, input, proxier)
	{
	    var validation = this.validations[index];
	
	    proxier.index = index;
	
	    var warningSuppressed = false;
	    var config = {
	        suppressWarning: function ()
	        {
	            warningSuppressed = true;
	        }
	    };
	
	    var outputValue = validation.validate(input, proxier.proxy, config);
	
	    if (outputValue === undefined || outputValue === input)
	        return null;
	
	    return {
	        value: outputValue,
	        warningSuppressed: warningSuppressed
	    };
	};
	
	/**
	 * The settings proxy wraps the settings object and ensures that
	 * only values which have previously been validated are accessed,
	 * throwing a TypeError otherwise.
	 *
	 * FIXME(wabain): Is it worth keeping this? When I wrote it I had
	 * multiple validation stages and it was a lot harder to keep track
	 * of everything, so this was more valuable.
	 */
	function createSettingsProxier(settings, options, runner)
	{
	    var proxier = {
	        proxy: {},
	        index: null
	    };
	
	    var lookup = lookupValue.bind(null, settings, options);
	
	    var properties = {};
	
	    runner.whitelistedKeys.forEach(function (whitelisted)
	    {
	        properties[whitelisted] = {
	            get: lookup.bind(null, whitelisted)
	        };
	    });
	
	    runner.additionalProperties.forEach(function (additional)
	    {
	        properties[additional.key] = {
	            get: additional.get
	        };
	    });
	
	    runner.validations.forEach(function (validation, validationIndex)
	    {
	        properties[validation.key] = {
	            get: function ()
	            {
	                if (validationIndex < proxier.index)
	                    return lookup(validation.key);
	
	                var currentKey = runner.validations[proxier.index].key;
	                throw new TypeError('Cannot access setting ' + validation.key + ' while validating ' + currentKey);
	            }
	        };
	    });
	
	    Object.defineProperties(proxier.proxy, properties);
	
	    return proxier;
	}
	
	function emitWarning(key, original, corrected)
	{
	    console.warn('Invalid value for ' + key + ': ' + original + '. Using ' + corrected + ' instead.');
	}
	
	function lookupValue(base, extension, key)
	{
	    if (key in extension)
	        return extension[key];
	
	    return base[key];
	}


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = Viewport;
	
	function Viewport(outer, options)
	{
	    options = options || {};
	
	    this.intersectionTolerance = options.intersectionTolerance || 0;
	    this.maxExtent = options.maxExtent || 2000;
	
	    this.outer = outer;
	
	    this._top = this._left = this._width = this._height = this._innerDimensions = null;
	
	    this.invalidate();
	}
	
	Viewport.prototype.intersectsRegion = function (region)
	{
	    return this.hasHorizontalOverlap(region) && this.hasVerticalOverlap(region);
	};
	
	Viewport.prototype.hasVerticalOverlap = function (region)
	{
	    var top = this.top - this.intersectionTolerance;
	    var bottom = this.bottom + this.intersectionTolerance;
	
	    return (
	        fallsBetween(region.top, top, bottom) ||
	        fallsBetween(region.bottom, top, bottom) ||
	        (region.top <= top && region.bottom >= bottom)
	    );
	};
	
	Viewport.prototype.hasHorizontalOverlap = function (region)
	{
	    var left = this.left - this.intersectionTolerance;
	    var right = this.right + this.intersectionTolerance;
	
	    return (
	        fallsBetween(region.left, left, right) ||
	        fallsBetween(region.right, left, right) ||
	        (region.left <= left && region.right >= right)
	    );
	};
	
	Viewport.prototype.invalidate = function ()
	{
	    // FIXME: Should this check the inner dimensions as well?
	    this._width = clampMax(this.outer.clientWidth, this.maxExtent);
	    this._height = clampMax(this.outer.clientHeight, this.maxExtent);
	
	    this._top = this.outer.scrollTop;
	    this._left = this.outer.scrollLeft;
	};
	
	Viewport.prototype.setInnerDimensions = function (dimensions)
	{
	    this._innerDimensions = dimensions;
	
	    if (dimensions)
	    {
	        this._top = clamp(this._top, 0, dimensions.height - this._height);
	        this._left = clamp(this._left, 0, dimensions.width - this._width);
	    }
	};
	
	Object.defineProperties(Viewport.prototype, {
	    top: getCoordinateDescriptor('top', 'height'),
	    left: getCoordinateDescriptor('left', 'width'),
	
	    width: getDimensionDescriptor('width'),
	    height: getDimensionDescriptor('height'),
	
	    bottom: {
	        get: function ()
	        {
	            return this._top + this._height;
	        }
	    },
	    right: {
	        get: function ()
	        {
	            return this._left + this._width;
	        }
	    }
	});
	
	function getCoordinateDescriptor(coord, associatedDimension)
	{
	    var privateProp = '_' + coord;
	    var source = 'scroll' + coord.charAt(0).toUpperCase() + coord.slice(1);
	
	    return {
	        get: function ()
	        {
	            return this[privateProp];
	        },
	        set: function (newValue)
	        {
	            var normalized;
	
	            if (this._innerDimensions)
	            {
	                var maxAllowed = this._innerDimensions[associatedDimension] - this[associatedDimension];
	                normalized = clamp(newValue, 0, maxAllowed);
	            }
	            else
	            {
	                normalized = clampMin(newValue, 0);
	            }
	
	            this[privateProp] = this.outer[source] = normalized;
	        }
	    };
	}
	
	function getDimensionDescriptor(dimen)
	{
	    return {
	        get: function ()
	        {
	            return this['_' + dimen];
	        }
	    };
	}
	
	function fallsBetween(point, start, end)
	{
	    return point >= start && point <= end;
	}
	
	function clamp(value, min, max)
	{
	    return clampMin(clampMax(value, max), min);
	}
	
	function clampMin(value, min)
	{
	    return Math.max(value, min);
	}
	
	function clampMax(value, max)
	{
	    return Math.min(value, max);
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*
	
	Canvas plugin for diva.js
	Adds an adjustment icon next to each image
	
	*/
	
	var jQuery = __webpack_require__(3);
	var diva = __webpack_require__(7);
	
	__webpack_require__(15);
	
	(function ($)
	{
	    module.exports = (function ()
	    {
	        var canvas = {},
	            map = {},
	            settings = {},
	            image,
	            sliders,
	            sliderMode;
	
	        // Set up some default settings (can be overridden the normal way)
	        var defaults = {
	            brightnessMax: 150,
	            brightnessMin: -100,
	            brightnessStep: 1,
	            contrastMax: 3,
	            contrastMin: -1,
	            contrastStep: 0.05,
	            localStoragePrefix: 'canvas-',
	            mobileWebkitMaxZoom: 2,
	            rgbMax: 50,
	            rgbMin: -50,
	            throbberFadeSpeed: 200,
	            throbberTimeout: 100,
	            buttons: [
	                'contrast',
	                'brightness',
	                'rotation',
	                'zoom'
	            ]
	        };
	
	        // Convert an angle from degrees to radians
	        var toRadians = function (angle)
	        {
	            return angle * Math.PI / 180;
	        };
	
	        // Determine the new center of the page after rotating by the given angle
	        var getNewCenter = function (currentCenter, angle)
	        {
	            var x = currentCenter.x - canvas.centerX;
	            // Take the negative because the rotation is counterclockwise
	            var y = -(currentCenter.y - canvas.centerY);
	
	            var theta = toRadians(sliders.rotation.previous - angle);
	            var newX = Math.cos(theta) * x - Math.sin(theta) * y + canvas.centerX;
	            var newY = -(Math.sin(theta) * x + Math.cos(theta) * y) + canvas.centerY;
	
	            return {'x': newX, 'y': newY};
	        };
	
	        // Rotates the image on the given canvas by the given angle
	        var rotateCanvas = function (aCanvas, angle)
	        {
	            var context = aCanvas.context;
	            var center = aCanvas.size / 2;
	            var startX = -(aCanvas.width / 2);
	            var startY = -(aCanvas.height / 2);
	
	            // Clear the canvas so that remnants of the old image don't show
	            context.clearRect(0, 0, aCanvas.size, aCanvas.size);
	
	            // Do the rotation
	            context.save();
	            context.translate(center, center);
	            context.rotate(toRadians(angle));
	            context.drawImage(image, startX, startY, aCanvas.width, aCanvas.height);
	            context.restore();
	
	            // Save the new pixel data so that it can later be adjusted in adjustLevels
	            aCanvas.data = context.getImageData(0, 0, aCanvas.size, aCanvas.size);
	        };
	
	        // Determine if we need to update the large canvas
	        var shouldAdjustLevels = function ()
	        {
	            var slider;
	
	            // Returns true if something has been changed
	            for (slider in sliders)
	            {
	                if (sliders[slider].current !== sliders[slider].previous)
	                {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	
	        // Sets the "previous" value to the "current" value for every slider
	        var updatePreviousLevels = function ()
	        {
	            var slider;
	
	            for (slider in sliders)
	            {
	                sliders[slider].previous = sliders[slider].current;
	            }
	        };
	
	        // Update the thumbnail preview (called when a slider is moved/reset)
	        var updateMap = function ()
	        {
	            rotateCanvas(map, sliders.rotation.current);
	            adjustLevels(map);
	        };
	
	        // Update the large canvas (rotation, zooming, scrolling, pixel manipulation)
	        var updateCanvas = function ()
	        {
	            var angle = sliders.rotation.current;
	            var oldAngle = sliders.rotation.previous;
	            var zoomLevel = sliders.zoom.current;
	            var oldZoomLevel = sliders.zoom.previous;
	
	            // Scroll the user to the desired location
	            if (angle !== oldAngle || zoomLevel !== oldZoomLevel)
	            {
	                // First figure out the current center of the viewport
	                var leftScroll = $('#diva-canvas-wrapper').scrollLeft();
	                var topScroll = $('#diva-canvas-wrapper').scrollTop();
	                var leftOffset = settings.viewport.width / 2;
	                var topOffset = settings.viewport.height / 2;
	
	                // Then determine the new center (the same part of the image)
	                var newCenter = getNewCenter({x: leftScroll + leftOffset, y: topScroll + topOffset}, angle);
	
	                // Incorporate the zoom change ratio (would be 1 if no change)
	                var zoomChange = Math.pow(2, zoomLevel - oldZoomLevel);
	                var toLeftScroll = zoomChange * newCenter.x - leftOffset;
	                var toTopScroll = zoomChange * newCenter.y - topOffset;
	
	                // Rotate the large canvas
	                rotateCanvas(canvas, angle);
	
	                // Scroll to the new center
	                $('#diva-canvas-wrapper').scrollLeft(toLeftScroll);
	                $('#diva-canvas-wrapper').scrollTop(toTopScroll);
	            }
	
	            // Only call adjustLevels again if we really need to (expensive)
	            if (shouldAdjustLevels())
	            {
	                adjustLevels(canvas);
	                updatePreviousLevels();
	            }
	        };
	
	        // Copies the canvas' pixel array and returns the copy
	        var copyImageData = function (aCanvas)
	        {
	            var oldImageData = aCanvas.data;
	            var newImageData = aCanvas.context.createImageData(oldImageData);
	            var pixelArray = newImageData.data;
	            var i, length;
	
	            for (i = 0, length = pixelArray.length; i < length; i++)
	            {
	                pixelArray[i] = oldImageData.data[i];
	            }
	
	            return newImageData;
	        };
	
	        // Determines whether or not we need to adjust this level - very simple
	        var shouldAdjust = function (mode)
	        {
	            var thisChanged = sliders[mode].current !== sliders[mode].previous;
	            var thisNotDefault = sliders[mode].current !== sliders[mode].initial;
	
	            return thisChanged || thisNotDefault;
	        };
	
	        var adjustLevels = function (aCanvas)
	        {
	            // Copy the pixel array to avoid destructively modifying the original
	            var imageData = copyImageData(aCanvas);
	            var pixelArray = imageData.data;
	
	            // Store and calculate some scale factors and offsets
	            var brightness = sliders.brightness.current;
	            var contrast = sliders.contrast.current;
	
	            var brightMul = 1 + Math.min(settings.brightnessMax, Math.max(settings.brightnessMin, brightness)) / settings.brightnessMax;
	            var brightTimesContrast = brightMul * contrast;
	            var contrastOffset = 128 - (contrast * 128);
	
	            var redOffset = sliders.red.current;
	            var greenOffset = sliders.green.current;
	            var blueOffset = sliders.blue.current;
	
	            // Determine whether or not we need to adjust certain things
	            var adjustRed = shouldAdjust('red');
	            var adjustGreen = shouldAdjust('green');
	            var adjustBlue = shouldAdjust('blue');
	
	            var adjustBrightness = shouldAdjust('brightness');
	            var adjustContrast = shouldAdjust('contrast');
	            var adjustOthers = adjustBrightness || adjustContrast;
	
	            var x, y, width, height, offset, r, g, b;
	
	            for (x = 0, width = imageData.width; x < width; x++)
	            {
	                for (y = 0, height = imageData.height; y < height; y++)
	                {
	                    offset = (y * width + x) * 4;
	
	                    r = pixelArray[offset];
	                    g = pixelArray[offset + 1];
	                    b = pixelArray[offset + 2];
	
	                    // Only do something if the pixel is not black originally
	                    if (r + g + b > 0)
	                    {
	                        // Only adjust individual colour channels if necessary
	                        if (adjustRed && r)
	                            r += redOffset;
	
	                        if (adjustGreen && g)
	                            g += greenOffset;
	
	                        if (adjustBlue && b)
	                            b += blueOffset;
	
	                        // If we need to adjust brightness and/or contrast
	                        if (adjustOthers)
	                        {
	                            if (r)
	                                r = r * brightTimesContrast + contrastOffset;
	
	                            if (g)
	                                g = g * brightTimesContrast + contrastOffset;
	
	                            if (b)
	                                b = b * brightTimesContrast + contrastOffset;
	                        }
	
	                        pixelArray[offset] = r;
	                        pixelArray[offset + 1] = g;
	                        pixelArray[offset + 2] = b;
	                    }
	                }
	            }
	
	            aCanvas.context.clearRect(0, 0, width, height);
	            aCanvas.context.putImageData(imageData, 0, 0);
	        };
	
	        // Update the box in the preview showing where you currently are
	        var updateViewbox = function ()
	        {
	            // Determine the top left corner coordinates based on our current position
	            var cornerX = $('#diva-canvas-wrapper').scrollLeft() * map.scaleFactor;
	            var cornerY = $('#diva-canvas-wrapper').scrollTop() * map.scaleFactor;
	
	            // Subtract 4 to compensate for the borders
	            var height = Math.min(Math.round(settings.viewport.height * map.scaleFactor), settings.mapSize) - 4;
	            var width = Math.min(Math.round(settings.viewport.width * map.scaleFactor), settings.mapSize) - 4;
	
	            $('#diva-map-viewbox').height(height).width(width).css({top: cornerY, left: cornerX});
	        };
	
	        // Draw the thumbnail preview in the toolbar
	        var loadMap = function (image)
	        {
	            map.canvas = document.getElementById('diva-canvas-minimap');
	            map.size = settings.mapSize;
	            map.canvas.width = map.size;
	            map.canvas.height = map.size;
	
	            // Give it a black background
	            map.context = map.canvas.getContext('2d');
	            map.context.fillRect(0, 0, map.size, map.size);
	
	            // Determine the coordinates/dimensions of the preview
	            map.scaleFactor = settings.mapSize / canvas.size;
	            map.cornerX = canvas.cornerX * map.scaleFactor;
	            map.cornerY = canvas.cornerY * map.scaleFactor;
	            map.width = image.width * map.scaleFactor;
	            map.height = image.height * map.scaleFactor;
	
	            // Draw the image within the map (no adjustments) and save the pixel array
	            map.context.drawImage(image, map.cornerX, map.cornerY, map.width, map.height);
	            map.data = map.context.getImageData(0, 0, settings.mapSize, settings.mapSize);
	
	            // Show the viewbox, make it reflect where we currently are
	            $('#diva-map-viewbox').show();
	            updateViewbox();
	        };
	
	        // Load the image within the large and small canvases
	        var loadCanvas = function (imageURL, callback)
	        {
	            image = new Image();
	            image.crossOrigin = "anonymous";
	
	            image.onload = function ()
	            {
	                // Determine the size of the (square) canvas based on the hypoteneuse
	                canvas.size = Math.sqrt(image.width * image.width + image.height * image.height);
	
	                // Resize the canvas if necessary
	                canvas.canvas = document.getElementById('diva-canvas');
	                canvas.canvas.width = canvas.size;
	                canvas.canvas.height = canvas.size;
	                canvas.cornerX = (canvas.size - image.width) / 2;
	                canvas.cornerY = (canvas.size - image.height) / 2;
	                canvas.width = image.width;
	                canvas.height = image.height;
	                canvas.centerX = canvas.size / 2;
	                canvas.centerY = canvas.size / 2;
	
	                // Draw the image to the large canvas, and save the pixel array
	                canvas.context = canvas.canvas.getContext('2d');
	                canvas.context.drawImage(image, canvas.cornerX, canvas.cornerY, canvas.width, canvas.height);
	                try
	                {
	                    canvas.data = canvas.context.getImageData(0, 0, canvas.size, canvas.size);
	                }
	                catch (error)
	                {
	                    var canvasError = '<div id="diva-error" class="diva-error"><p><strong>Error</strong></p><p>' + error.message + '</p>';
	
	                    if (error.name === 'SecurityError')
	                    {
	                        canvasError += '<p>You may need to update your server configuration in order to use the image manipulation tools. ' +
	                        'For help, see the <a href="https://github.com/DDMAL/diva.js/wiki/The-API-and-Plugins#a-note-about-' +
	                        'canvas-and-cross-site-data" target="_blank">canvas cross-site data documentation</a>.</p>' +
	                        '</div>';
	                    }
	                    else
	                    {
	                        throw error;
	                    }
	
	                    canvasError += '</div>';
	                    $('#diva-canvas-backdrop').append(canvasError);
	                    hideThrobber();
	                }
	
	                // Only load the map the first time (when there is no callback)
	                if (callback === undefined) {
	                    loadMap(image);
	                }
	
	                // Update the map and the canvas if necessary
	                updateMap();
	                updateCanvas(canvas);
	
	                // Hide the throbber if it is visible
	                hideThrobber();
	
	                // If the callback function exists, execute it (for zooming)
	                if (typeof callback === 'function')
	                    callback.call(callback);
	            };
	
	            image.src = imageURL;
	
	            // make sure the load event fires for cached images too
	            if ( image.complete || image.complete === undefined ) {
	                image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
	                image.src = imageURL;
	            }
	        };
	
	        var updateSliderLabel = function ()
	        {
	            var thisSlider = sliders[sliderMode];
	            var value = thisSlider.current;
	            var stringValue = (thisSlider.transform) ? thisSlider.transform(value) : value;
	            $('#diva-canvas-value').html(stringValue);
	        };
	
	        var updateSliderValue = function ()
	        {
	            $('#diva-canvas-slider').val(sliders[sliderMode].current);
	        };
	
	        // Returns the URL for the image at the specified zoom level
	        var getImageURL = function (zoomLevel)
	        {
	            var width = settings.zoomWidthRatio * Math.pow(2, zoomLevel);
	
	            return settings.divaInstance.getPageImageURL(settings.selectedPageIndex, { width: width });
	        };
	
	        var showThrobber = function ()
	        {
	            // Only show the throbber if it will take a long time
	            if (sliders.zoom.current > 0 || settings.mobileWebkit)
	                $(settings.selector + 'throbber').addClass('canvas-throbber').show();
	        };
	
	        // Hides the loading indicator icon
	        var hideThrobber = function ()
	        {
	            $(settings.selector + 'throbber').removeClass('canvas-throbber').hide();
	        };
	
	        // If any modifications have been applied, save them to localStorage
	        var saveSettings = function ()
	        {
	            var sliderSettings = {};
	            var changed = false;
	            var storageKey = settings.localStoragePrefix + settings.filename;
	            var slider;
	
	            for (slider in sliders)
	            {
	                if (sliders[slider].previous !== sliders[slider].initial)
	                {
	                    sliderSettings[slider] = sliders[slider].previous;
	                    changed = true;
	                }
	            }
	
	            // If modifications need to be saved, update the canvas plugin icon
	            if (changed)
	            {
	                settings.pluginIcon.addClass('new');
	                storeObject(storageKey, sliderSettings);
	            }
	            else
	            {
	                settings.pluginIcon.removeClass('new');
	                localStorage.removeItem(storageKey);
	            }
	        };
	
	        // Handles zooming in when the zoom slider is changed and the change is applied
	        var updateZoom = function (newZoomLevel, callback)
	        {
	            settings.zoomLevel = newZoomLevel;
	
	            // Figure out the URL for the image at this new zoom level
	            var imageURL = getImageURL(newZoomLevel);
	
	            loadCanvas(imageURL, function ()
	            {
	                // Set the new scale factor and update the viewbox
	                map.scaleFactor = map.size / canvas.size;
	                updateViewbox();
	
	                saveSettings();
	            });
	        };
	
	        var bindCanvasKeyEvents = function (event)
	        {
	            var upArrowKey = 38,
	                downArrowKey = 40,
	                leftArrowKey = 37,
	                rightArrowKey = 39;
	
	            switch (event.keyCode)
	            {
	                case upArrowKey:
	                    // Up arrow - scroll up
	                    $('#diva-canvas-wrapper').scrollTop(document.getElementById('diva-canvas-wrapper').scrollTop - settings.arrowScrollAmount);
	                    return false;
	
	                case downArrowKey:
	                    // Down arrow - scroll down
	                    $('#diva-canvas-wrapper').scrollTop(document.getElementById('diva-canvas-wrapper').scrollTop + settings.arrowScrollAmount);
	                    return false;
	
	                case leftArrowKey:
	                    // Left arrow - scroll left
	                    $('#diva-canvas-wrapper').scrollLeft(document.getElementById('diva-canvas-wrapper').scrollLeft - settings.arrowScrollAmount);
	                    return false;
	
	                case rightArrowKey:
	                    // Right arrow - scroll right
	                    $('#diva-canvas-wrapper').scrollLeft(document.getElementById('diva-canvas-wrapper').scrollLeft + settings.arrowScrollAmount);
	                    return false;
	            }
	        };
	
	        // Serialize an object to JSON and save it in localStorage
	        var storeObject = function (key, value) {
	            localStorage.setItem(key, JSON.stringify(value));
	        };
	
	        // Load and deserialize a localStorage object
	        var loadStoredObject = function (key) {
	            var value = localStorage.getItem(key);
	            return value && JSON.parse(value);
	        };
	
	        var retval =
	        {
	            init: function (divaSettings, divaInstance)
	            {
	                // If the browser does not support canvas, do nothing
	                // And, disable this plugin
	                var canvasSupported = !!window.HTMLCanvasElement;
	                if (!canvasSupported)
	                    return false;
	
	                // Override all the configurable settings defined under canvasPlugin
	                $.extend(settings, defaults, divaSettings.canvasPlugin);
	
	                settings.divaInstance = divaInstance;
	                settings.inCanvas = false;
	                settings.iipServerURL = divaSettings.iipServerURL;
	                settings.imageDir = divaSettings.imageDir;
	                settings.selector = divaSettings.selector;
	                settings.mobileWebkit = divaSettings.mobileWebkit;
	                settings.arrowScrollAmount = divaSettings.arrowScrollAmount;
	
	                // Set up the settings for the sliders/icons
	                sliders = {
	                    'contrast': {
	                        'initial': 1,
	                        'min': settings.contrastMin,
	                        'max': settings.contrastMax,
	                        'step': settings.contrastStep,
	                        'transform': function (value) {
	                            return value.toFixed(2);
	                        },
	                        'title': 'Change the contrast'
	                    },
	                    'brightness': {
	                        'initial': 0,
	                        'min': settings.brightnessMin,
	                        'max': settings.brightnessMax,
	                        'step': settings.brightnessStep,
	                        'title': 'Adjust the brightness'
	                    },
	                    'rotation': {
	                        'initial': 0,
	                        'min': 0,
	                        'max': 359,
	                        'step': 1,
	                        'transform': function (value) {
	                            return value + '&deg;';
	                        },
	                        'title': 'Rotate the image'
	                    },
	                    'zoom': {
	                        // Default, min and max values updated within setupHook
	                        'initial': 0,
	                        'min': 0,
	                        'max': 0,
	                        'step': 1,
	                        'title': 'Adjust the zoom level'
	                    },
	                    'red': {
	                        'initial': 0,
	                        'min': settings.rgbMin,
	                        'max': settings.rgbMax,
	                        'step': 1,
	                        'title': 'Adjust the red channel'
	                    },
	                    'green': {
	                        'initial': 0,
	                        'min': settings.rgbMin,
	                        'max': settings.rgbMax,
	                        'step': 1,
	                        'title': 'Adjust the green channel'
	                    },
	                    'blue': {
	                        'initial': 0,
	                        'min': settings.rgbMin,
	                        'max': settings.rgbMax,
	                        'step': 1,
	                        'title': 'Adjust the blue channel'
	                    }
	                };
	
	                // Copy the "default" value into "value" and "previous" for each slider
	                var resetSliders = function ()
	                {
	                    var defaultValue, thisSlider, slider;
	                    for (slider in sliders)
	                    {
	                        thisSlider = sliders[slider];
	                        defaultValue = thisSlider.initial;
	                        thisSlider.current = defaultValue;
	                        thisSlider.previous = defaultValue;
	                    }
	                };
	
	                resetSliders();
	
	                // Create the DOM elements if they haven't already been created
	                if ($('#diva-canvas-backdrop').length)
	                {
	                    // Return true to keep the plugin enabled
	                    return true;
	                }
	
	                var canvasButtonsList = [];
	                var buttonHTML, button, buttonTitle, i;
	
	                for (i in settings.buttons)
	                {
	                    button = settings.buttons[i];
	                    buttonTitle = sliders[button].title;
	                    buttonHTML = '<div class="' + button + '" title="' + buttonTitle + '"></div>';
	                    canvasButtonsList.push(buttonHTML);
	                }
	                var canvasButtons = canvasButtonsList.join('');
	
	                var canvasTools = '<div id="diva-canvas-tools">' +
	                    '<div id="diva-canvas-toolbar">' +
	                        '<div id="diva-canvas-close" title="Return to the document viewer"></div>' +
	                        '<div id="diva-canvas-minimise" title="Minimise the toolbar"></div>' +
	                        '<span id="diva-canvas-info">Test</span>' +
	                    '</div>' +
	                    '<div id="diva-canvas-toolwindow">' +
	                        '<div id="diva-map-viewbox"></div>' +
	                        '<canvas id="diva-canvas-minimap"></canvas>' +
	                        '<div id="diva-canvas-buttons">' +
	                            canvasButtons +
	                        '</div>' +
	                        '<div id="diva-canvas-pane">' +
	                            '<p id="diva-canvas-tooltip">' +
	                                '<span id="diva-canvas-mode">contrast</span>: ' +
	                                '<span id="diva-canvas-value">0</span> ' +
	                                '<span id="diva-canvas-reset" class="link">(Reset)</span>' +
	                            '</p>' +
	                            '<input type="range" id="diva-canvas-slider"></input>' +
	                        '</div>' +
	                        '<br />' +
	                        '<div class="action-buttons">' +
	                            '<a href="#" id="diva-canvas-reset-all">Reset all</a>' +
	                            '<a href="#" id="diva-canvas-apply">Apply</a>' +
	                        '</div>' +
	                    '</div>' +
	                '</div>';
	                var canvasWrapper = '<div id="diva-canvas-wrapper">' +
	                    '<canvas id="diva-canvas"></canvas>' +
	                '</div>';
	                var canvasString = '<div id="diva-canvas-backdrop">' +
	                    canvasTools +
	                    canvasWrapper +
	                '</div>';
	
	                $('body').append(canvasString);
	
	                // Save the size of the map, as defined in the CSS
	                settings.mapSize = $('#diva-canvas-minimap').width();
	
	                // Adjust the slider when something is clicked, and make that the current mode
	                $('#diva-canvas-buttons div').click(function ()
	                {
	                    $('#diva-canvas-buttons .clicked').removeClass('clicked');
	                    updateSlider($(this).attr('class'));
	                });
	
	                var updateSlider = function (newMode)
	                {
	                    sliderMode = newMode;
	                    var sliderData = sliders[sliderMode];
	
	                    $('#diva-canvas-buttons .' + sliderMode).addClass('clicked');
	
	                    $('#diva-canvas-mode').text(sliderMode);
	
	                    var newValue = sliderData.current;
	                    var newValueString = (sliderData.transform) ? sliderData.transform(newValue) : newValue;
	
	                    var slider = document.getElementById('diva-canvas-slider');
	                    slider.min = sliderData.min;
	                    slider.max = sliderData.max;
	                    slider.step = sliderData.step;
	                    $('#diva-canvas-slider').val(newValue);
	                    $('#diva-canvas-value').html(newValueString);
	                };
	
	                updateSlider('contrast');
	
	                // Create the slider
	                $('#diva-canvas-slider').on('input', function(e){
	                    sliders[sliderMode].current = parseFloat(this.value);
	                    updateSliderLabel();
	                    updateMap();
	                });
	
	                // Reset all the sliders to the default value
	                $('#diva-canvas-reset-all').click(function ()
	                {
	                    var slider;
	
	                    for (slider in sliders)
	                    {
	                        sliders[slider].current = sliders[slider].initial;
	                    }
	
	                    // Change the value of the label
	                    updateSliderLabel();
	                    updateSliderValue();
	
	                    // Update the preview
	                    updateMap();
	                });
	
	                // Reset the current slider to the default value
	                $('#diva-canvas-reset').click(function ()
	                {
	                    // Update the current value and the slider
	                    sliders[sliderMode].current = sliders[sliderMode].initial;
	                    updateSliderLabel();
	                    updateSliderValue();
	
	                    // Update the preview
	                    updateMap();
	                });
	
	                // Update the large canvas when the apply button is clicked
	                $('#diva-canvas-apply').click(function ()
	                {
	                    if (shouldAdjustLevels())
	                    {
	                        showThrobber();
	
	                        setTimeout(function ()
	                        {
	                            if (sliders.zoom.current !== sliders.zoom.previous)
	                            {
	                                updateZoom(sliders.zoom.current);
	                            }
	                            else
	                            {
	                                updateCanvas();
	                                hideThrobber();
	
	                                // Save modifications to localSettings (also done in updateZoom callback)
	                                saveSettings();
	                            }
	                        }, settings.throbberTimeout);
	                    }
	                });
	
	                // Handle exiting canvas mode
	                $('#diva-canvas-close').click(function ()
	                {
	                    $('body').removeClass('overflow-hidden');
	
	                    // Clear the canvases and hide things
	                    // This needs to be improved - not done properly?
	                    canvas.context.clearRect(0, 0, canvas.size, canvas.size);
	                    map.context.clearRect(0, 0, map.size, map.size);
	                    $('#diva-canvas-wrapper').scrollTop(0).scrollLeft(0);
	                    $('#diva-canvas-backdrop').hide();
	                    $('#diva-map-viewbox').hide();
	                    hideThrobber();
	
	                    // Re-enable scrolling of diva when it is in the background
	                    divaInstance.enableScrollable();
	                    $(document).off('keydown', bindCanvasKeyEvents);
	
	                    // Reset everything
	                    resetSliders();
	                    updateSliderLabel();
	                    updateSliderValue();
	                    $('#diva-canvas-buttons .clicked').removeClass('clicked');
	                    updateSlider('contrast');
	
	                    diva.Events.publish("CanvasViewDidHide");
	                });
	
	                // Hide the toolbar when the minimise icon is clicked
	                $('#diva-canvas-minimise').click(function ()
	                {
	                    $('#diva-canvas-toolwindow').slideToggle('fast');
	                });
	
	                // Adjust the size of the canvas when the browser window is resized
	                $(window).resize(function ()
	                {
	                    settings.viewport = {
	                        height: window.innerHeight - divaSettings.scrollbarWidth,
	                        width: window.innerWidth - divaSettings.scrollbarWidth
	                    };
	
	                    // Always update the settings but only redraw if in canvas
	                    if (settings.inCanvas)
	                        updateViewbox();
	                });
	
	                // Update the viewbox when the large canvas is scrolled
	                $('#diva-canvas-wrapper').scroll(function ()
	                {
	                    if (settings.inCanvas)
	                        updateViewbox();
	                });
	
	                // Handle clicking/dragging of the viewbox (should scroll the large canvas)
	                $('#diva-canvas-minimap, #diva-map-viewbox').mouseup(function (event)
	                {
	                    // Consider caching this eventually (can't be done in init though)
	                    var offset = $('#diva-canvas-minimap').offset();
	
	                    var scaledX = (event.pageX - offset.left) / map.scaleFactor;
	                    var scaledY = (event.pageY - offset.top) / map.scaleFactor;
	
	                    $('#diva-canvas-wrapper').scrollTop(scaledY - settings.viewport.height / 2);
	                    $('#diva-canvas-wrapper').scrollLeft(scaledX - settings.viewport.width / 2);
	                });
	
	                // Enable drag scroll
	                $('#diva-canvas').mousedown(function ()
	                {
	                    $(this).addClass('grabbing');
	                }).mouseup(function ()
	                {
	                    $(this).removeClass('grabbing');
	                });
	
	                // touch events
	                $('#diva-canvas-wrapper').kinetic();
	
	                // mouse events
	                $('#diva-canvas-wrapper').dragscrollable({
	                    acceptPropagatedEvent: true
	                });
	
	                diva.Events.subscribe('ObjectDidLoad', this.setupHook, divaSettings.ID);
	                diva.Events.subscribe('ViewerDidTerminate', this.destroy, divaSettings.ID);
	                diva.Events.subscribe('PageDidLoad', this.onPageLoad, divaSettings.ID);
	
	                return true;
	            },
	
	            pluginName: 'canvas',
	
	            titleText: 'View the image on a canvas and adjust various settings',
	
	            setupHook: function(divaSettings)
	            {
	                settings.viewport = {
	                    height: window.innerHeight - divaSettings.scrollbarWidth,
	                    width: window.innerWidth - divaSettings.scrollbarWidth
	                };
	
	                // Save the min and max zoom level, and update the zoom slider
	                settings.minZoomLevel = divaSettings.minZoomLevel;
	                settings.maxZoomLevel = divaSettings.maxZoomLevel;
	
	                // If we're on the iPad, limit the max zoom level to 2
	                // Can't do canvas elements that are > 5 megapixels (issue #112)
	                if (settings.mobileWebkit)
	                    settings.maxZoomLevel = Math.min(settings.maxZoomLevel, settings.mobileWebkitMaxZoom);
	
	                sliders.zoom.min = settings.minZoomLevel;
	                sliders.zoom.max = settings.maxZoomLevel;
	            },
	
	            handleClick: function(event, divaSettings, divaInstance, selectedPageIndex)
	            {
	                // loadCanvas() calls all the other necessary functions to load
	                var filename = divaInstance.getFilenames()[selectedPageIndex];
	
	                // TODO: Move rationale for -1 from Wiki (TLDR an old IIP bug)
	                var width = divaInstance
	                    .getPageDimensions(selectedPageIndex)
	                    .width - 1;
	
	                var zoomLevel = divaSettings.zoomLevel;
	                var slider;
	
	                settings.zoomWidthRatio = width / Math.pow(2, zoomLevel);
	                settings.pluginIcon = $(this);
	
	                settings.manifest = divaSettings.manifest;
	                settings.selectedPageIndex = selectedPageIndex;
	
	                // Limit the max zoom level if we're on the iPad
	                if (settings.mobileWebkit) {
	                    zoomLevel = Math.min(settings.maxZoomLevel, zoomLevel);
	                }
	
	                settings.filename = filename;
	                sliders.zoom.initial = zoomLevel;
	                sliders.zoom.current = zoomLevel;
	
	                // Find the settings stored in localStorage, if they exist
	                var sliderSettings = loadStoredObject(settings.localStoragePrefix + settings.filename);
	                if (sliderSettings)
	                {
	                    for (slider in sliderSettings)
	                    {
	                        sliders[slider].current = sliderSettings[slider];
	
	                        // If the current slider's value has changed, update it
	                        if (slider === sliderMode)
	                        {
	                            updateSliderLabel();
	                            updateSliderValue();
	                        }
	
	                        if (slider === 'zoom')
	                        {
	                            zoomLevel = sliderSettings[slider];
	                        }
	                    }
	                }
	
	                sliders.zoom.previous = zoomLevel;
	
	                // Prevent scroll in body, and show the canvas backdrop
	                $('body').addClass('overflow-hidden');
	                $('#diva-canvas-backdrop').show();
	
	                // Disable scrolling on main diva instance
	                divaInstance.disableScrollable();
	                // Enable canvas scrolling
	                $(document).keydown(bindCanvasKeyEvents);
	
	                // Set this to true so events can be captured
	                settings.inCanvas = true;
	
	                var imageURL = getImageURL(zoomLevel);
	
	                // Change the title of the page
	                // FIXME: This is legacy behaviour. Should this be a filename/label?
	                $('#diva-canvas-info').text('Page ' + (selectedPageIndex + 1));
	
	                showThrobber();
	
	                diva.Events.publish('CanvasViewDidActivate', [selectedPageIndex]);
	
	                loadCanvas(imageURL);
	            },
	
	            onPageLoad: function(pageIndex, filename, selector)
	            {
	                // If something exists for this page in localStorage, then change icon color
	                var storageKey = settings.localStoragePrefix + filename;
	
	                if (localStorage.getItem(storageKey) !== null)
	                {
	                    $(selector).find('.diva-canvas-icon').addClass('new');
	                }
	            },
	
	            destroy: function(divaSettings, divaInstance)
	            {
	                $('#diva-canvas-backdrop').remove();
	            }
	        };
	
	        // this returns an object with all of the necessary hooks and callbacks
	        // embedded.
	        return retval;
	
	    })();
	})(jQuery);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Download plugin for diva.js
	Allows you to download images served by IIPImage or IIIF compatible image servers
	*/
	
	var jQuery = __webpack_require__(3);
	
	(function ($)
	{
	    module.exports = (function()
	    {
	        var settings = {};
	        var retval =
	        {
	            init: function(divaSettings, divaInstance)
	            {
	                settings.divaInstance = divaInstance;
	                return true;
	            },
	            pluginName: 'download',
	            titleText: 'Download image at the given zoom level',
	            handleClick: function(event, divaSettings, divaInstance, pageIndex)
	            {
	                // TODO: Move rationale for -1 from Wiki (TLDR an old IIP bug)
	                var width = divaInstance
	                        .getPageDimensions(pageIndex)
	                        .width - 1;
	
	                var image = settings.divaInstance.getPageImageURL(pageIndex, { width: width });
	
	                window.open(image);
	            }
	        };
	
	        return retval;
	    })();
	})(jQuery);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Highlight plugin for diva.js
	Allows you to highlight regions of a page image
	*/
	
	var jQuery = __webpack_require__(3);
	var elt = __webpack_require__(8);
	var diva = __webpack_require__(7);
	
	(function ($)
	{
	    module.exports = (function()
	    {
	        var retval =
	        {
	            init: function(divaSettings, divaInstance)
	            {
	                var highlightManager = new HighlightManager(divaInstance);
	                divaSettings.parentObject.data('highlightManager', highlightManager);
	
	                var currentHighlight;
	
	                /*
	                    Reset the highlights object and removes all highlights from the document.
	                */
	                divaInstance.resetHighlights = function()
	                {
	                    highlightManager.clear();
	                };
	
	                /*
	                    Resets the highlights for a single page.
	                */
	                divaInstance.removeHighlightsOnPage = function(pageIdx)
	                {
	                    highlightManager.removeHighlightsOnPage(pageIdx);
	                };
	
	                /*
	                    Highlights regions on multiple pages.
	                    @param pageIdxs An array of page index numbers
	                    @param regions  An array of regions
	                    @param colour   (optional) A colour for the highlighting, specified in RGBA CSS format
	                */
	                divaInstance.highlightOnPages = function(pageIdxs, regions, colour, divClass)
	                {
	                    var j = pageIdxs.length;
	                    while (j--)
	                    {
	                        divaInstance.highlightOnPage(pageIdxs[j], regions[j], colour, divClass);
	                    }
	                };
	
	                /*
	                    Highlights regions on a page.
	                    @param pageIdx  A page index number
	                    @param regions  An array of regions. Use {'width':i, 'height':i, 'ulx':i, 'uly': i, 'divID': str} for each region.
	                    @param colour   (optional) A colour for the highlighting, specified in RGBA CSS format
	                    @param divClass (optional) A class to identify a group of highlighted regions on a specific page by
	                */
	                divaInstance.highlightOnPage = function(pageIdx, regions, colour, divClass)
	                {
	                    if (colour === undefined)
	                    {
	                        colour = 'rgba(255, 0, 0, 0.2)';
	                    }
	
	                    if (divClass === undefined)
	                    {
	                        divClass = divaSettings.ID + 'highlight diva-highlight';
	                    }
	                    else
	                    {
	                        divClass = divaSettings.ID + 'highlight diva-highlight ' + divClass;
	                    }
	
	                    highlightManager.addHighlight({
	                        page: pageIdx,
	                        regions: regions,
	                        colour: colour,
	                        divClass: divClass
	                    });
	
	                    return true;
	                };
	
	                /*
	                    Jumps to a highlight somewhere in the document.
	                    @param divID The ID of the div to jump to. This ID must be attached to the div using .highlightOnPage(s) as the highlight may not be currently appended to the DOM.
	                */
	                divaInstance.gotoHighlight = function(divID)
	                {
	                    var result = highlightManager.getHighlightByRegionId(divID);
	
	                    if (result)
	                        return gotoDiv(result.highlight.page, result.region);
	
	                    console.warn("Diva just tried to find a highlight that doesn't exist.");
	                    return false;
	                };
	
	                /**
	                * Moves the diva pane to (page) and makes a darker border on (thisDiv)
	                */
	                var gotoDiv = function(page, thisDiv)
	                {
	                    //gets center of the div
	                    var centerYOfDiv = parseFloat(thisDiv.uly) + parseFloat(thisDiv.height) / 2;
	                    var centerXOfDiv = parseFloat(thisDiv.ulx) + parseFloat(thisDiv.width) / 2;
	
	                    var desiredY = divaInstance.translateFromMaxZoomLevel(centerYOfDiv);
	                    var desiredX = divaInstance.translateFromMaxZoomLevel(centerXOfDiv);
	
	                    //navigates to the page
	                    page = parseInt(page, 10);
	                    divaInstance.gotoPageByIndex(page);
	                    var viewportObject = divaInstance.getSettings().viewportObject;
	                    var currentTop = viewportObject.scrollTop() + desiredY - (viewportObject.height() / 2) + divaSettings.verticalPadding;
	                    var currentLeft = viewportObject.scrollLeft() + desiredX - (viewportObject.width() / 2) + divaSettings.horizontalPadding;
	
	                    //changes the scroll location to center on the div as much as is possible
	                    viewportObject.scrollTop(currentTop);
	                    viewportObject.scrollLeft(currentLeft);
	
	                    currentHighlight = {
	                        region: thisDiv,
	                        page: page
	                    };
	
	                    diva.Events.publish("SelectedHighlightChanged", [thisDiv.id, currentHighlight.page]);
	
	                    //selects the highlight
	                    updateCurrentHighlight(divaInstance, currentHighlight);
	                    return thisDiv.id;
	                };
	
	                var getDivCenter = function(thisDiv)
	                {
	                    if (divaSettings.verticallyOriented) return divaInstance.translateFromMaxZoomLevel(parseFloat(thisDiv.uly) + parseFloat(thisDiv.height) / 2);
	                    else return divaInstance.translateFromMaxZoomLevel(parseFloat(thisDiv.ulx) + parseFloat(thisDiv.width) / 2);
	                };
	
	                /*
	                    Jumps to the next highlight along the primary axis of the document.
	                */
	                var findAdjacentHighlight = function(forward)
	                {
	                    var centerOfTargetDiv;
	                    var highlightFound = false;
	                    var centerOfCurrentDiv;
	                    var currentPage;
	                    var regionArr, arrIndex;
	                    var pageDims;
	                    var centerOfDiv, targetDiv;
	
	                    var thisDiv;
	                    var compFunction;
	
	                    // If currentHighlight does not already exists,
	                    // just pretend we're starting at the northwest corner of diva-inner
	                    if (!currentHighlight)
	                    {
	                        centerOfCurrentDiv = 0;
	                        currentPage = 0;
	                    }
	                    else {
	                        currentPage = currentHighlight.page;
	
	                        //find the center of the current div
	                        centerOfCurrentDiv = getDivCenter(currentHighlight.region);
	                    }
	
	                    //if we do have a current highlight, try to find the next one in the same page
	
	                    regionArr = highlightManager.getHighlightRegions(currentPage);
	                    arrIndex = regionArr.length;
	                    pageDims = divaInstance.getPageDimensionsAtZoomLevel(currentPage, divaInstance.getZoomLevel());
	
	                    //initialize the center of the div to the maximum possible value
	                    if(forward) centerOfTargetDiv = (divaSettings.verticallyOriented) ? pageDims.height : pageDims.width;
	                    else centerOfTargetDiv = 0;
	
	                    if(forward)
	                    {
	                        compFunction = function(thisC, curC, targetC)
	                        {
	                            return (thisC > curC && thisC < targetC);
	                        };
	                    }
	                    else
	                    {
	                        compFunction = function(thisC, curC, targetC)
	                        {
	                            return (thisC < curC && thisC > targetC);
	                        };
	                    }
	
	                    while(arrIndex--)
	                    {
	                        thisDiv = regionArr[arrIndex];
	                        centerOfDiv = getDivCenter(thisDiv);
	
	                        //if this div is farther along the main axis but closer than the current closest
	                        if (compFunction(centerOfDiv, centerOfCurrentDiv, centerOfTargetDiv))
	                        {
	                            //update targetDiv
	                            highlightFound = true;
	                            centerOfTargetDiv = centerOfDiv;
	                            targetDiv = thisDiv;
	                        }
	                    }
	
	                    //if a highlight was found on the current page that was next; this can get overwritten but we're still good
	                    if (highlightFound) return gotoDiv(currentPage, targetDiv);
	                    //if it wasn't found, continue on...
	
	                    //find the minimum div on the next page with highlights and loop around if necessary
	
	                    //find the next page in the pageArr; this will be in order
	                    var pageArr = highlightManager.getHighlightedPages();
	                    var curIdx = pageArr.indexOf(currentPage.toString());
	
	                    var targetPage;
	
	                    if(forward)
	                    {
	                        while (!targetPage || !divaInstance.isPageIndexValid (targetPage))
	                        {
	                            //default to first page, move to next if possible
	                            if (curIdx == pageArr.length - 1) targetPage = pageArr[0];
	                            else targetPage = pageArr[++curIdx];
	                        }
	                    }
	
	                    else
	                    {
	                        while (!targetPage || !divaInstance.isPageIndexValid (targetPage))
	                        {
	                            //default to last page, move to previous if possible
	                            if (curIdx === 0) targetPage = pageArr[pageArr.length - 1];
	                            else targetPage = pageArr[--curIdx];
	                        }
	                    }
	
	                    //reset regionArr and centerOfTargetDiv for the new page we're testing
	                    regionArr = highlightManager.getHighlightRegions(targetPage);
	                    arrIndex = regionArr.length;
	                    pageDims = divaInstance.getPageDimensionsAtZoomLevel(targetPage, divaInstance.getMaxZoomLevel());
	
	                    if(forward) centerOfTargetDiv = (divaSettings.verticallyOriented) ? pageDims.height : pageDims.width;
	                    else centerOfTargetDiv = 0;
	
	                    //find the minimum this time
	                    if(forward)
	                    {
	                        compFunction = function(thisC, targetC)
	                        {
	                            return (thisC < targetC);
	                        };
	                    }
	                    else
	                    {
	                        compFunction = function(thisC, targetC)
	                        {
	                            return (thisC > targetC);
	                        };
	                    }
	
	                    while(arrIndex--)
	                    {
	                        thisDiv = regionArr[arrIndex];
	                        centerOfDiv = getDivCenter(thisDiv);
	                        if (compFunction(centerOfDiv, centerOfTargetDiv))
	                        {
	                            highlightFound = true;
	                            centerOfTargetDiv = centerOfDiv;
	                            targetDiv = thisDiv;
	                        }
	                    }
	
	                    //we've found it this time, as there'll be a region in the full regionArr to be the minimum
	                    return gotoDiv(targetPage, targetDiv);
	                };
	
	                /*
	                    Jumps to the next highlight along the primary axis of the document.
	                */
	                divaInstance.gotoNextHighlight = function()
	                {
	                    if (highlightManager.getHighlightCount() > 0)
	                        return findAdjacentHighlight(true);
	                    else
	                        return false;
	                };
	
	                /*
	                    Jumps to the previous highlight along the primary axis of the document.
	                */
	                divaInstance.gotoPreviousHighlight = function()
	                {
	                    if (highlightManager.getHighlightCount() > 0)
	                        return findAdjacentHighlight(false);
	                    else
	                        return false;
	                };
	
	                diva.Events.subscribe('ViewerWillTerminate', this.destroy, divaSettings.ID);
	
	                return true;
	            },
	            destroy: function (divaSettings)
	            {
	                var highlightManager = divaSettings.parentObject.data('highlightManager');
	                highlightManager.clear();
	                divaSettings.parentObject.removeData('highlightManager');
	            },
	            pluginName: 'highlight',
	            titleText: 'Highlight regions of pages',
	
	            // Exposed export
	            HighlightManager: HighlightManager
	        };
	        return retval;
	    })();
	})(jQuery);
	
	/** Manages the addition and removal of the page overlays which display the highlights */
	function HighlightManager(divaInstance, getCurrentHighlight)
	{
	    this._divaInstance = divaInstance;
	    this._overlays = {};
	    this._getCurrentHighlight = getCurrentHighlight;
	}
	
	HighlightManager.prototype.getHighlightCount = function ()
	{
	    var count = 0;
	    Object.keys(this._overlays).forEach(function (key)
	    {
	        count += this._overlays[key].highlight.regions.length;
	    }, this);
	
	    return count;
	};
	
	HighlightManager.prototype.getHighlightRegions = function (pageIndex)
	{
	    if (!this._overlays[pageIndex])
	        return [];
	
	    return this._overlays[pageIndex].highlight.regions;
	};
	
	HighlightManager.prototype.getHighlightedPages = function ()
	{
	    // FIXME: Conceptually awkward that these are strings
	    return Object.keys(this._overlays);
	};
	
	HighlightManager.prototype.getHighlightByRegionId = function (id)
	{
	    for (var i in this._overlays)
	    {
	        if (!this._overlays.hasOwnProperty(i))
	            continue;
	
	        var regions = this._overlays[i].highlight.regions;
	        for (var j in regions)
	        {
	            if (!regions.hasOwnProperty(j))
	                continue;
	
	            if (regions[j].divID === id)
	            {
	                return {
	                    highlight: this._overlays[i].highlight,
	                    region: regions[j]
	                };
	            }
	        }
	    }
	
	    return null;
	};
	
	HighlightManager.prototype.addHighlight = function (highlight)
	{
	    var existingOverlay = this._overlays[highlight.page];
	
	    if (existingOverlay)
	        this._divaInstance.__removePageOverlay(existingOverlay);
	
	    var overlay = new HighlightPageOverlay(highlight, this._divaInstance, this._getCurrentHighlight);
	    this._overlays[highlight.page] = overlay;
	    this._divaInstance.__addPageOverlay(overlay);
	};
	
	HighlightManager.prototype.removeHighlightsOnPage = function (pageIndex)
	{
	    if (!this._overlays[pageIndex])
	        return;
	
	    this._divaInstance.__removePageOverlay(this._overlays[pageIndex]);
	    delete this._overlays[pageIndex];
	};
	
	HighlightManager.prototype.clear = function ()
	{
	    for (var i in this._overlays)
	    {
	        if (!this._overlays.hasOwnProperty(i))
	            continue;
	
	        this._divaInstance.__removePageOverlay(this._overlays[i]);
	    }
	
	    this._overlays = {};
	};
	
	/**
	 When a new page is loaded, this overlay will be called with the
	 page index for the page. It looks at the 'highlights' data object
	 set on the diva parent element, and determines whether
	 highlights exist for that page.
	
	 If so, the overlay will create and render elements for every
	 highlighted box.
	
	 @param highlight
	 @param divaInstance
	 @param getCurrentHighlight (optional)
	 */
	function HighlightPageOverlay(highlight, divaInstance, getCurrentHighlight)
	{
	    this.page = highlight.page;
	    this.highlight = highlight;
	    this._highlightRegions = [];
	    this._divaInstance = divaInstance;
	    this._getCurrentHighlight = getCurrentHighlight;
	}
	
	HighlightPageOverlay.prototype.mount = function ()
	{
	    var divaSettings = this._divaInstance.getSettings();
	
	    var highlight = this.highlight;
	    var regions = highlight.regions;
	    var colour = highlight.colour;
	    var divClass = highlight.divClass;
	
	    var j = regions.length;
	    while (j--)
	    {
	        var region = regions[j];
	
	        // FIXME: Use CSS class instead of inline style
	        var box = elt('div', {
	            class: divClass,
	            style: {
	                background: colour,
	                border: "1px solid #555",
	                position: "absolute",
	                zIndex: 100
	            }
	        });
	
	        if (region.divID !== undefined)
	        {
	            box.setAttribute('data-highlight-id', region.divID);
	        }
	
	        // Used by IIIFHighlight
	        if (region.name !== undefined)
	        {
	            box.setAttribute('data-name', region.name);
	        }
	
	        this._highlightRegions.push({
	            element: box,
	            region: region
	        });
	    }
	
	    this.refresh();
	
	    var frag = document.createDocumentFragment();
	    this._highlightRegions.forEach(function (highlight)
	    {
	        frag.appendChild(highlight.element);
	    });
	
	    divaSettings.innerElement.appendChild(frag);
	
	    if (this._getCurrentHighlight)
	        updateCurrentHighlight(this._divaInstance, this._getCurrentHighlight());
	
	    diva.Events.publish("HighlightCompleted", [this.page, this._divaInstance.getFilenames()[this.page]]);
	};
	
	HighlightPageOverlay.prototype.unmount = function ()
	{
	    var innerElement = this._divaInstance.getSettings().innerElement;
	
	    this._highlightRegions.forEach(function (highlight)
	    {
	        innerElement.removeChild(highlight.element);
	    });
	
	    this._highlightRegions = [];
	};
	
	// FIXME: Updating a box per highlight region might be too expensive
	// Maybe stick all the elements in a container and then scale it using CSS transforms?
	HighlightPageOverlay.prototype.refresh = function ()
	{
	    var maxZoom = this._divaInstance.getMaxZoomLevel();
	
	    var maxZoomWidth = this._divaInstance.getPageDimensionsAtZoomLevel(this.page, maxZoom).width;
	    var currentWidth = this._divaInstance.getPageDimensions(this.page).width;
	    var zoomDifference = Math.log(maxZoomWidth / currentWidth) / Math.log(2);
	
	    var pageOffset = this._divaInstance.getPageOffset(this.page, {
	        excludePadding: true,
	        incorporateViewport: true
	    });
	
	    this._highlightRegions.forEach(function (highlight)
	    {
	        var region = highlight.region;
	
	        elt.setAttributes(highlight.element, {
	            style: {
	                width: incorporateZoom(region.width, zoomDifference) + "px",
	                height: incorporateZoom(region.height, zoomDifference) + "px",
	                top: pageOffset.top + incorporateZoom(region.uly, zoomDifference) + "px",
	                left: pageOffset.left + incorporateZoom(region.ulx, zoomDifference) + "px"
	            }
	        });
	    });
	};
	
	function incorporateZoom(position, zoomDifference)
	{
	    return position / Math.pow(2, zoomDifference);
	}
	
	function updateCurrentHighlight(divaInstance, currentHighlight)
	{
	    var classString = divaInstance.getInstanceId() + "selected-highlight";
	    var classElem = document.getElementsByClassName(classString);
	    var idx;
	    var box;
	    var boxes;
	
	    for (idx = 0; idx < classElem.length; idx++)
	    {
	        box = classElem[idx];
	        if (box.id !== currentHighlight.id)
	        {
	            box.className = box.className.replace(' '+classString, '');
	            box.style.border = "1px solid #555";
	        }
	    }
	
	    if (divaInstance.isPageInViewport(currentHighlight.page))
	    {
	        boxes = document.querySelectorAll("*[data-highlight-id=" + currentHighlight.id + "]");
	        for(idx = 0; idx < boxes.length; idx++)
	        {
	            box = boxes[idx];
	            box.className = box.className + " " + classString;
	            box.style.border = "2px solid #000";
	        }
	    }
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/*
	IIIF Highlight plugin for diva.js
	Allows you to highlight regions of a page image based off of annotations in a IIIF Manifest
	*/
	
	var jQuery = __webpack_require__(3);
	var diva = __webpack_require__(7);
	var HighlightManager = __webpack_require__(46).HighlightManager;
	
	(function ($)
	{
	    module.exports = (function()
	    {
	        var settings = {};
	        var retval =
	        {
	            init: function(divaSettings, divaInstance)
	            {
	                var highlightManager = new HighlightManager(divaInstance);
	                divaSettings.parentObject.data('highlightManager', highlightManager);
	
	                settings.highlightedPages = [];
	
	                /*
	                    Reset the highlights object and removes all highlights from the document.
	                */
	                divaInstance.resetHighlights = function()
	                {
	                    highlightManager.clear();
	                };
	
	                /*
	                    Resets the highlights for a single page.
	                */
	                divaInstance.removeHighlightsOnPage = function(pageIdx)
	                {
	                    highlightManager.removeHighlightsOnPage(pageIdx);
	                };
	
	                divaInstance.hideHighlights = function()
	                {
	                    settings.highlightsVisible = false;
	                    $(divaSettings.innerElement).addClass('annotations-hidden');
	                };
	
	                divaInstance.showHighlights = function()
	                {
	                    settings.highlightsVisible = true;
	                    $(divaSettings.innerElement).removeClass('annotations-hidden');
	                };
	
	                /*
	                    Highlights regions on multiple pages.
	                    @param pageIdxs An array of page index numbers
	                    @param regions  An array of regions
	                    @param colour   (optional) A colour for the highlighting, specified in RGBA CSS format
	                */
	                divaInstance.highlightOnPages = function(pageIdxs, regions, colour, divClass)
	                {
	                    var j = pageIdxs.length;
	                    while (j--)
	                    {
	                        divaInstance.highlightOnPage(pageIdxs[j], regions[j], colour, divClass);
	                    }
	                };
	
	                /*
	                    Highlights regions on a page.
	                    @param pageIdx  A page index number
	                    @param regions  An array of regions. Use {'width':i, 'height':i, 'ulx':i, 'uly': i, 'divID': str} for each region.
	                    @param colour   (optional) A colour for the highlighting, specified in RGBA CSS format
	                    @param divClass (optional) A class to identify a group of highlighted regions on a specific page by
	                */
	                divaInstance.highlightOnPage = function(pageIdx, regions, colour, divClass)
	                {
	                    if (colour === undefined)
	                    {
	                        colour = 'rgba(255, 0, 0, 0.2)';
	                    }
	
	                    if (divClass === undefined)
	                    {
	                        divClass = divaSettings.ID + 'highlight diva-highlight';
	                    }
	                    else
	                    {
	                        divClass = divaSettings.ID + 'highlight diva-highlight ' + divClass;
	                    }
	
	                    highlightManager.addHighlight({
	                        page: pageIdx,
	                        regions: regions,
	                        colour: colour,
	                        divClass: divClass
	                    });
	
	                    return true;
	                };
	
	                                /*
	                    Jumps to a highlight somewhere in the document.
	                    @param divID The ID of the div to jump to. This ID must be attached to the div using .highlightOnPage(s) as the highlight may not be appended to the DOM.
	                */
	                divaInstance.gotoHighlight = function(divID)
	                {
	                    var result = highlightManager.getHighlightByRegionId(divID);
	
	                    if (result)
	                        return gotoDiv(result.highlight.page, result.region);
	
	                    console.warn("Diva just tried to find a highlight that doesn't exist.");
	                    return false;
	                };
	
	                /**
	                 * Moves the diva pane to (page)
	                 */
	                var gotoDiv = function(page, thisDiv)
	                {
	                    //gets center of the div
	                    var centerYOfDiv = parseFloat(thisDiv.uly) + parseFloat(thisDiv.height) / 2;
	                    var centerXOfDiv = parseFloat(thisDiv.ulx) + parseFloat(thisDiv.width) / 2;
	
	                    var desiredY = divaInstance.translateFromMaxZoomLevel(centerYOfDiv);
	                    var desiredX = divaInstance.translateFromMaxZoomLevel(centerXOfDiv);
	
	                    //navigates to the page
	                    page = parseInt(page, 10);
	                    divaInstance.gotoPageByIndex(page);
	                    var viewportObject = divaInstance.getSettings().viewportObject;
	                    var currentTop = viewportObject.scrollTop() + desiredY - (viewportObject.height() / 2) + divaSettings.verticalPadding;
	                    var currentLeft = viewportObject.scrollLeft() + desiredX - (viewportObject.width() / 2) + divaSettings.horizontalPadding;
	
	                    //changes the scroll location to center on the div as much as is possible
	                    viewportObject.scrollTop(currentTop);
	                    viewportObject.scrollLeft(currentLeft);
	                };
	
	                var showAnnotations = function(canvasIndex)
	                {
	                    return function(data, status, jqXHR)
	                    {
	                        var canvasAnnotations = data;
	                        var numAnnotations = data.length;
	
	                        //convert annotations in annotations object to diva highlight objects
	                        var regions = [];
	
	                        //loop over annotations in a single canvas
	                        for (var k = 0; k < numAnnotations; k++)
	                        {
	                            var currentAnnotation = canvasAnnotations[k];
	                            // get text content
	                            var text = currentAnnotation.resource.chars;
	
	                            // get x,y,w,h (slice string from '#xywh=' to end)
	                            var onString = currentAnnotation.on;
	                            var coordString = onString.slice(onString.indexOf('#xywh=') + 6);
	                            var coordinates = coordString.split(',');
	
	                            var region = {
	                                ulx: parseInt(coordinates[0], 10),
	                                uly: parseInt(coordinates[1], 10),
	                                width: parseInt(coordinates[2], 10),
	                                height: parseInt(coordinates[3], 10),
	                                name: text
	                            };
	
	                            regions.push(region);
	                        }
	
	                        divaInstance.highlightOnPage(canvasIndex, regions);
	                        //flag this page's annotations as having been retrieved
	                        settings.highlightedPages.push(canvasIndex);
	                    };
	                };
	
	                var getAnnotationsList = function(pageIndex)
	                {
	                    //if page has annotationList
	                    var canvases = settings.manifest.sequences[0].canvases;
	
	                    if (canvases[pageIndex].hasOwnProperty('otherContent'))
	                    {
	                        var otherContent = canvases[pageIndex].otherContent;
	
	                        for (var j = 0; j < otherContent.length; j++)
	                        {
	                            if (otherContent[j]['@type'] === 'sc:AnnotationList')
	                            {
	                                // canvas has annotations. get the annotations:
	                                $.ajax({
	                                    url: otherContent[j]['@id'],
	                                    cache: true,
	                                    dataType: 'json',
	                                    success: showAnnotations(pageIndex)
	                                });
	                            }
	                        }
	                    }
	                };
	
	                var setManifest = function(manifest)
	                {
	                    settings.manifest = manifest;
	                };
	
	                diva.Events.subscribe('ManifestDidLoad', setManifest, divaSettings.ID);
	
	                diva.Events.subscribe('PageWillLoad', function(pageIndex)
	                {
	                    if (!settings.highlightsVisible)
	                    {
	                        return;
	                    }
	
	                    //if highlights for this page have already been checked/loaded, return
	                    for (var i = 0; i < settings.highlightedPages.length; i++)
	                    {
	                        if (settings.highlightedPages[i] === pageIndex)
	                        {
	                            return;
	                        }
	                    }
	
	                    getAnnotationsList(pageIndex, settings.manifest);
	                }, divaSettings.ID);
	
	                var activeOverlays = [];
	
	                //on mouseover, show the annotation text
	                divaSettings.innerObject.on('mouseenter', '.' + divaSettings.ID + 'highlight', function(e)
	                {
	                    var annotationElement = e.target;
	                    var name = annotationElement.dataset.name;
	                    var textOverlay = document.createElement('div');
	
	                    textOverlay.style.top = (annotationElement.offsetTop + annotationElement.offsetHeight - 1) + 'px';
	                    textOverlay.style.left = annotationElement.style.left;
	                    textOverlay.style.background = '#fff';
	                    textOverlay.style.border = '1px solid #555';
	                    textOverlay.style.position = 'absolute';
	                    textOverlay.style.zIndex = 101;
	                    textOverlay.className = 'annotation-overlay';
	                    textOverlay.textContent = name;
	
	                    annotationElement.parentNode.appendChild(textOverlay);
	                    activeOverlays.push(textOverlay);
	                });
	
	                divaSettings.innerObject.on('mouseleave', '.' + divaSettings.ID + 'highlight', function(e)
	                {
	                    while (activeOverlays.length)
	                    {
	                        var textOverlay = activeOverlays.pop();
	                        textOverlay.parentNode.removeChild(textOverlay);
	                    }
	                });
	
	                diva.Events.subscribe('ViewerDidLoad', function(){
	                    //button to toggle annotations
	                    $('#' + divaSettings.ID + 'page-nav').before('<div id="' + divaSettings.ID + 'annotations-icon" class="diva-button diva-annotations-icon" title="Turn annotations on or off"></div>');
	
	                    $(divaSettings.selector + 'annotations-icon').addClass('annotations-icon-active');
	
	                    $('#' + divaSettings.ID + 'annotations-icon').on('click', function(e)
	                    {
	                        //toggle visibility of annotations
	                        if (settings.highlightsVisible)
	                        {
	                            divaInstance.hideHighlights();
	                            $(divaSettings.selector + 'annotations-icon').removeClass('annotations-icon-active');
	                        }
	                        else
	                        {
	                            divaInstance.showHighlights();
	                            $(divaSettings.selector + 'annotations-icon').addClass('annotations-icon-active');
	                        }
	                    });
	                }, divaSettings.ID);
	
	                //enable annotations by default
	                settings.highlightsVisible = true;
	
	                return true;
	            },
	            destroy: function (divaSettings, divaInstance)
	            {
	                divaSettings.parentObject.removeData('highlights');
	            },
	            pluginName: 'IIIFHighlight',
	            titleText: 'Highlight regions of pages'
	        };
	        return retval;
	    })();
	})(jQuery);


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// IIIF Metadata plugin for diva.js
	// Displays object metadata from a IIIF manifest
	
	var jQuery = __webpack_require__(3);
	var diva = __webpack_require__(7);
	
	(function ($)
	{
	    module.exports = (function()
	    {
	        var retval =
	        {
	            init: function(divaSettings, divaInstance)
	            {
	                var _displayMetadata = function(manifest)
	                {
	                    var showMetadata = function(label, value)
	                    {
	                        var labelProper = label.charAt(0).toUpperCase() + label.slice(1);
	                        var labelFormatted = labelProper.replace('_', ' ');
	
	                        if (value.match(/^https?:\/\//))
	                        {
	                            value = '<a href="' + value + '" target="_blank">' + value + '</a>';
	                        }
	
	                        return '<div class="metadata-row"><span class="metadata-label">' + labelFormatted + ':</span> <span class="metadata-value">' +
	                            value  + '</span></div>';
	                    };
	
	                    var getDataForLanguage = function(data, language)
	                    {
	                        for (var i = 0; i < data.length; i++)
	                        {
	                            if (data[i]['@language'] === language)
	                            {
	                                return data[i]['@value'];
	                            }
	                        }
	
	                        // Handle the case where no language is specified, or when a single object is passed
	                        return data[0]['@value'] || data['@value'];
	                    };
	
	                    /**
	                     * Shows metadata from label names (if the metadata exists).
	                     * @param names {Array} - An array of strings representing field names to display.
	                     */
	                    var showMetadataFromLabelNames = function(names)
	                    {
	                        var elements = '';
	
	                        for (var i = 0; i < names.length; i++)
	                        {
	                            var field = names[i];
	
	                            if (manifest.hasOwnProperty(field))
	                            {
	                                if (manifest[field].constructor === Array)
	                                {
	                                    //multiple languages
	                                    var localizedData = getDataForLanguage(manifest[field], 'en');
	                                    elements += showMetadata(field, localizedData);
	                                }
	                                else
	                                {
	                                    elements += showMetadata(field, manifest[field]);
	                                }
	                            }
	                        }
	
	                        return elements;
	                    };
	
	                    var metadataElement = '<div id="' + divaSettings.ID + 'metadata" class="diva-modal">';
	                    metadataElement += showMetadataFromLabelNames(['label']);
	
	                    if (manifest.hasOwnProperty('metadata'))
	                    {
	                        var metadataField = manifest.metadata;
	
	                        for (var i = 0; i < metadataField.length; i++)
	                        {
	                            if (metadataField[i].value.constructor === Array)
	                            {
	                                var canonicalData = getDataForLanguage(metadataField[i].value, 'en');
	                                metadataElement += showMetadata(metadataField[i].label, canonicalData);
	                            }
	                            else
	                            {
	                                metadataElement += showMetadata(metadataField[i].label, metadataField[i].value);
	                            }
	                        }
	                    }
	
	                    metadataElement += showMetadataFromLabelNames([
	                        'description',
	                        'within',
	                        'see_also',
	                        'license',
	                        'attribution'
	                    ]);
	
	                    metadataElement += '</div>';
	
	                    divaSettings.parentObject.prepend(metadataElement);
	                    $(divaSettings.selector + 'metadata').hide();
	                };
	
	                //subscribe to ManifestDidLoad event, get the manifest
	                diva.Events.subscribe('ManifestDidLoad', _displayMetadata, divaSettings.ID);
	
	                divaSettings.parentObject.prepend('<div style="text-align: center; clear: both"><a href="#" id="' + divaSettings.ID + 'metadata-link" class="diva-metadata-link">Details</a></div>');
	                // $(divaSettings.selector + 'title').append('<div><a href="#" id="' + divaSettings.ID + 'metadata-link" class="diva-metadata-link">Details</a></div>');
	
	                $(divaSettings.selector + 'metadata-link').on('click', function(e)
	                {
	                    $(divaSettings.selector + 'metadata').fadeToggle('fast');
	                });
	
	                return true;
	            },
	            destroy: function (divaSettings, divaInstance)
	            {
	            },
	            pluginName: 'IIIFMetadata',
	            titleText: 'Show metadata from a IIIF manifest'
	        };
	        return retval;
	    })();
	})(jQuery);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=diva.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _Configuration = __webpack_require__(3);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _SingalongManager = __webpack_require__(9);

var _SingalongManager2 = _interopRequireDefault(_SingalongManager);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(7);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Main application class.
 *
 * @class
 */
var Application = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @public
     */
    function Application(divId) {
        var _this = this;

        _classCallCheck(this, Application);

        this._movedMouse = false;
        this._container = (0, _jquery2.default)('#' + divId);
        this._manager = new _SingalongManager2.default();
        this._files = null;
        this._fileReadIndex = 0;
        this._fileReader = new FileReader();
        _EventHandler2.default.subscribe(_SingalongEvent2.default.SINGALONG_ALLLOADED, this._handleAllLoaded, this);
        _EventHandler2.default.subscribe(_SingalongEvent2.default.AUDIO_ENDED, this._handleAudioEnded, this);
        this._fileReader.onload = function (event) {
            return _this._handleFileRead(event.target.result);
        };
        this._addListeners();
        this._loadDefaultConfig();
        this._intervalTimer = null;
        this._mouseCheckIntervalTimer = null;
        this._serverDefinitionFiles = ['definitions/5.json', 'definitions/2.json', 'definitions/4.json', 'definitions/1.json', 'definitions/3.json', 'definitions/7.json', 'definitions/6.json'];
    }

    /**
     * Given a JSON string, creates a new Singalong. See documentation for 
     * proper JSON object definition.
     *
     * @public
     * @param {string} jsonString - MEISingalong JSON object string
     */


    _createClass(Application, [{
        key: 'createSingalongFromDefinition',
        value: function createSingalongFromDefinition(jsonString) {
            var singalongJson = JSON.parse(jsonString);
            this._manager.createSingalongFromJson(singalongJson);
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////

    }, {
        key: '_loadDefaultConfig',
        value: function _loadDefaultConfig() {
            (0, _jquery2.default)('#MODE').val(_Configuration2.default.MODE);
            (0, _jquery2.default)('#AUTOPLAY_INTERVAL').val(_Configuration2.default.AUTOPLAY_INTERVAL);
            (0, _jquery2.default)('#BACKGROUND_COLOR').val(_Configuration2.default.BACKGROUND_COLOR);
            (0, _jquery2.default)('#AUDIO_EVENT_INTERVAL').val(_Configuration2.default.AUDIO_EVENT_INTERVAL);
            (0, _jquery2.default)('#DISPLAY_USE_GRADIENT').prop('checked', _Configuration2.default.DISPLAY_USE_GRADIENT);
            (0, _jquery2.default)('#DISPLAY_GRADIENT_PERCENT').val(_Configuration2.default.DISPLAY_GRADIENT_PERCENT);
            (0, _jquery2.default)('#DISPLAY_PRELOAD_TIME').val(_Configuration2.default.DISPLAY_PRELOAD_TIME);
            (0, _jquery2.default)('#DISPLAY_DIVA_ZOOM_LEVEL').val(_Configuration2.default.DISPLAY_DIVA_ZOOM_LEVEL);
            (0, _jquery2.default)('#DIVA_HIGHLIGHT_SCALE').val(_Configuration2.default.DIVA_HIGHLIGHT_SCALE);
            (0, _jquery2.default)('#DIVA_HIGHLIGHT').val(_Configuration2.default.DIVA_HIGHLIGHT);
            (0, _jquery2.default)('#DIVA_HIGHLIGHT_USE_STAFF_HEIGHT').prop('checked', _Configuration2.default.DIVA_HIGHLIGHT_USE_STAFF_HEIGHT);
            (0, _jquery2.default)('#VEROVIO_HIGHLIGHT').val(_Configuration2.default.VEROVIO_HIGHLIGHT);
            (0, _jquery2.default)('#VEROVIO_NOTE_SPACING_FACTOR').val(_Configuration2.default.VEROVIO_NOTE_SPACING_FACTOR);
            (0, _jquery2.default)('#DEBUG_PLAYHEAD').prop('checked', _Configuration2.default.DEBUG_PLAYHEAD);
            (0, _jquery2.default)('#BOUNCING_BALL').prop('checked', _Configuration2.default.VEROVIO_SCROLL.BOUNCING_BALL);
            (0, _jquery2.default)('#HAND').prop('checked', _Configuration2.default.VEROVIO_SCROLL.HAND);
            (0, _jquery2.default)('#HAND_FONTSIZE').val(_Configuration2.default.VEROVIO_SCROLL.HAND_FONTSIZE);
            (0, _jquery2.default)('#VEROVIO_USE_SCROLL').prop('checked', _Configuration2.default.VEROVIO_USE_SCROLL);
        }
    }, {
        key: '_loadConfig',
        value: function _loadConfig() {
            _Configuration2.default.MODE = (0, _jquery2.default)('#MODE').val();
            _Configuration2.default.AUTOPLAY_INTERVAL = (0, _jquery2.default)('#AUTOPLAY_INTERVAL').val();
            _Configuration2.default.BACKGROUND_COLOR = (0, _jquery2.default)('#BACKGROUND_COLOR').val();
            _Configuration2.default.AUDIO_EVENT_INTERVAL = parseInt((0, _jquery2.default)('#AUDIO_EVENT_INTERVAL').val());
            _Configuration2.default.DISPLAY_USE_GRADIENT = (0, _jquery2.default)('#DISPLAY_USE_GRADIENT').prop('checked');
            _Configuration2.default.DISPLAY_GRADIENT_PERCENT = parseFloat((0, _jquery2.default)('#DISPLAY_GRADIENT_PERCENT').val());
            _Configuration2.default.DISPLAY_PRELOAD_TIME = parseInt((0, _jquery2.default)('#DISPLAY_PRELOAD_TIME').val());
            _Configuration2.default.DISPLAY_DIVA_ZOOM_LEVEL = parseFloat((0, _jquery2.default)('#DISPLAY_DIVA_ZOOM_LEVEL').val());
            _Configuration2.default.DIVA_HIGHLIGHT_SCALE = parseFloat((0, _jquery2.default)('#DIVA_HIGHLIGHT_SCALE').val());
            _Configuration2.default.DIVA_HIGHLIGHT = (0, _jquery2.default)('#DIVA_HIGHLIGHT').val();
            _Configuration2.default.DIVA_HIGHLIGHT_USE_STAFF_HEIGHT = (0, _jquery2.default)('#DIVA_HIGHLIGHT_USE_STAFF_HEIGHT').prop('checked');
            _Configuration2.default.VEROVIO_HIGHLIGHT = (0, _jquery2.default)('#VEROVIO_HIGHLIGHT').val();
            _Configuration2.default.VEROVIO_NOTE_SPACING_FACTOR = parseFloat((0, _jquery2.default)('#VEROVIO_NOTE_SPACING_FACTOR').val());
            _Configuration2.default.VEROVIO_SCROLL.DEBUG_PLAYHEAD = (0, _jquery2.default)('#DEBUG_PLAYHEAD').prop('checked');
            _Configuration2.default.VEROVIO_SCROLL.BOUNCING_BALL = (0, _jquery2.default)('#BOUNCING_BALL').prop('checked');
            _Configuration2.default.VEROVIO_SCROLL.HAND = (0, _jquery2.default)('#HAND').prop('checked');
            _Configuration2.default.VEROVIO_SCROLL.HAND_FONTSIZE = parseInt((0, _jquery2.default)('#HAND_FONTSIZE').val());
            _Configuration2.default.VEROVIO_USE_SCROLL = (0, _jquery2.default)('#VEROVIO_USE_SCROLL').prop('checked');
        }
    }, {
        key: '_prepareDom',
        value: function _prepareDom() {
            this._loadConfig();
            (0, _jquery2.default)('#config').remove();
            var titleEntry = (0, _jquery2.default)('#template-main').text();
            titleEntry = titleEntry.replace('%menu_title', _Configuration2.default.MENU_TITLE);
            this._container.append(titleEntry);

            (0, _jquery2.default)('body').css('background-color', _Configuration2.default.BACKGROUND_COLOR);

            this._showDisplay();
        }
    }, {
        key: '_handleFileSelect',
        value: function _handleFileSelect(files) {
            this._files = files;
            this._prepareDom();
            this._processNextFile();
        }
    }, {
        key: '_processNextFile',
        value: function _processNextFile() {
            if (this._fileReadIndex < this._files.length) {
                var file = this._files[this._fileReadIndex];
                this._fileReadIndex++;
                this._fileReader.readAsText(file);
            } else {
                this._manager.load();
            }
        }
    }, {
        key: '_handleFileRead',
        value: function _handleFileRead(result) {
            this.createSingalongFromDefinition(result);
            this._processNextFile();
        }
    }, {
        key: '_addListeners',
        value: function _addListeners() {
            var _this2 = this;

            (0, _jquery2.default)('#jsonFile').on('change', function (event) {
                return _this2._handleFileSelect(event.target.files);
            });
            (0, _jquery2.default)('#start').on('click', function (event) {
                return _this2._startLoad();
            });
            (0, _jquery2.default)('body').mousemove(function (event) {
                return _this2._onMouseMove(event);
            });
        }
    }, {
        key: '_startLoad',
        value: function _startLoad() {
            this._prepareDom();
            this._loadDefinitionFiles();
        }
    }, {
        key: '_loadDefinitionFiles',
        value: function _loadDefinitionFiles() {
            var _this3 = this;

            if (this._serverDefinitionFiles.length > 0) {
                var filename = this._serverDefinitionFiles.pop();
                var request = new XMLHttpRequest();
                request.open('GET', filename, true);
                request.onreadystatechange = function (event) {
                    return _this3._handleDefinitionFile(event, filename);
                };
                request.send();
            } else {
                this._manager.load();
            }
        }
    }, {
        key: '_handleDefinitionFile',
        value: function _handleDefinitionFile(event, filename) {
            var request = event.currentTarget;
            switch (request.readyState) {
                case 0:
                    //UNSENT
                    {
                        break;
                    }

                case 1:
                    //OPENED
                    {
                        break;
                    }

                case 2:
                    //HEADERS_RECEIVED
                    {
                        break;
                    }

                case 3:
                    //LOADING
                    {
                        break;
                    }

                case 4:
                    {
                        this.createSingalongFromDefinition(request.response);
                        this._loadDefinitionFiles();
                        break;
                    }

                default:
                    {
                        // TODO error
                        console.error('failed to load file ' + filename);
                        break;
                    }
            }
        }

        /**
         * Show menu (and hide media displays).
         */

    }, {
        key: '_showMenu',
        value: function _showMenu() {
            (0, _jquery2.default)('#' + _Configuration2.default.TITLE_ID).hide();
            (0, _jquery2.default)('#' + _Configuration2.default.DISPLAY_DIV_ID).hide();
            (0, _jquery2.default)('#' + _Configuration2.default.VEROVIO_DIV_ID).hide();
            (0, _jquery2.default)('div#meisingalong-menu-wrapper').show();
        }

        /**
         * Show display media (and hide menu).
         */

    }, {
        key: '_showDisplay',
        value: function _showDisplay() {
            (0, _jquery2.default)('div#meisingalong-menu-wrapper').hide();
            (0, _jquery2.default)('#' + _Configuration2.default.TITLE_ID).show();
            (0, _jquery2.default)('#' + _Configuration2.default.DISPLAY_DIV_ID).show();
            (0, _jquery2.default)('#' + _Configuration2.default.VEROVIO_DIV_ID).show();
        }
    }, {
        key: '_createMenu',
        value: function _createMenu() {
            var _this4 = this;

            var templateEntry = (0, _jquery2.default)('#template-menu_entry').text();
            var templateEntryNoButton = (0, _jquery2.default)('#template-menu_entry_nobutton').text();
            var list = this._manager.getSingalongList();
            for (var i = 0; i < list.length; i++) {
                var entry = list[i];
                var rowEntry = _Configuration2.default.Mode == 2 ? templateEntryNoButton : templateEntry.replace('%id', entry.id);
                rowEntry = rowEntry.replace('%title', entry.name);
                (0, _jquery2.default)('div#meisingalong-menu_entries').append(rowEntry);
            }

            // Set button handler.
            (0, _jquery2.default)('.play_button').click(function (event) {
                return _this4._handlePlayButton(event);
            });
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE - UI
        ////////////////////////////////////////////////////////////////////////////////

    }, {
        key: '_initializeUI',
        value: function _initializeUI() {
            var that = this;
            this._showMenu();
            if (_Configuration2.default.MODE == 3) {
                this._mouseCheckIntervalTimer = setInterval(function () {
                    return that._checkMouseMove();
                }, 500);
            } else if (_Configuration2.default.MODE == 2) {
                this._intervalTimer = setInterval(function () {
                    return that._play();
                }, _Configuration2.default.AUTOPLAY_INTERVAL);
            }
        }
    }, {
        key: '_deinitializeUI',
        value: function _deinitializeUI() {
            if (this._mouseCheckIntervalTimer) {
                clearInterval(this._mouseCheckIntervalTimer);
            }
            if (this._intervalTimer) {
                clearInterval(this._intervalTimer);
            }
        }
    }, {
        key: '_play',
        value: function _play(singalongId) {
            this._deinitializeUI();
            if (typeof singalongId === 'number') {
                this._manager.play(singalongId);
            } else {
                this._manager.playRandom();
            }
            this._showDisplay();
        }
    }, {
        key: '_handlePlayButton',
        value: function _handlePlayButton(event) {
            var singalongId = parseInt(event.target.value);
            this._play(singalongId);
        }
    }, {
        key: '_handleAllLoaded',
        value: function _handleAllLoaded() {
            this._createMenu();
            this._initializeUI();
        }
    }, {
        key: '_handleAudioEnded',
        value: function _handleAudioEnded() {
            this._initializeUI();
        }
    }, {
        key: '_onMouseMove',
        value: function _onMouseMove() {
            this._movedMouse = true;
        }
    }, {
        key: '_checkMouseMove',
        value: function _checkMouseMove() {
            if (this._movedMouse) {
                if (this._intervalTimer) {
                    clearInterval(this._intervalTimer);
                }
                console.log('starting autoplay timer: ' + _Configuration2.default.AUTOPLAY_INTERVAL + ' ms');
                var that = this;
                this._intervalTimer = setInterval(function () {
                    return that._play();
                }, _Configuration2.default.AUTOPLAY_INTERVAL);
            }
            this._movedMouse = false;
        }
    }]);

    return Application;
}();

exports.default = Application;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Enumeration of events.
 *
 * @class
 */
var SingalongEvent = function SingalongEvent() {
  _classCallCheck(this, SingalongEvent);
};

/**
 * Published when audio media has been decoded and ready to use. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */


exports.default = SingalongEvent;
SingalongEvent.AUDIO_DECODED = 'AUDIO_DECODED';

/**
 * Published when audio media has ended playing. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_ENDED = 'AUDIO_ENDED';

/**
 * Published when audio media has been loaded. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_LOADED = 'AUDIO_LOADED';

/**
 * Published when audio media loading started playing. Sends:
 *
 * - string (URL of loaded media)
 * - time: double (time index at which the play command started, in seconds).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_PLAYING = 'AUDIO_PLAYING';

/**
 * Published when audio media has been requested for loading. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_REQUESTED = 'AUDIO_REQUESTED';

/**
 * Published when audio media has stopped playing. Sends:
 *
 * - string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.AUDIO_STOPPED = 'AUDIO_STOPPED';

/**
 * Published when configuration file has been loaded. Sends:
 *
 * - configuration {object}: Configuration object
 *
 * @constant
 * @static
 * @see Configuration
 */
SingalongEvent.CONFIGURATION_LOADED = 'CONFIGURATION_LOADED';

/**
 * Published when an IIIF manifest has been loaded. Sends:
 *
 * - url: string (URL of IIIF manifest).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_MANIFESTLOADED = 'DISPLAY_MANIFESTLOADED';

/**
 * Published when IIIF manifest has been requested for loading. Sends:
 *
 * - url: string (URL of IIIF manifest).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_MANIFESTREQUESTED = 'DISPLAY_MANIFESTREQUESTED';

/**
 * Published when page of an IIIF manifest has been loaded. Sends:
 *
 * - url: string (URL of IIIF manifest)
 * - page: int (page index in manifest).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_PAGELOADED = 'DISPLAY_PAGELOADED';

/**
 * Published when Diva.js viewer has been loaded. Sends:
 *
 * - url: string (URL of IIIF manifest to load).
 *
 * @constant
 * @static
 */
SingalongEvent.DISPLAY_VIEWERLOADED = 'DISPLAY_VIEWERLOADED';

/**
 * Published when MEI media has been loaded. Sends:
 *
 * - url: string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.MEI_LOADED = 'MEI_LOADED';

/**
 * Published when MEI media has been parsed. Note that this is not the same
 * as XML parsing. Rather, MEI parsing in this context means that the MEI data has
 * been parsed after XML parsing. Sends:
 *
 * - url: string (URL of loaded media).
 *
 * @constant
 * @static
 */
//SingalongEvent.MEI_PARSED = 'MEI_PARSED';

/**
 * Published when MEI media has been requested for loading. Sends:
 *
 * - url: string (URL of loaded media).
 *
 * @constant
 * @static
 */
SingalongEvent.MEI_REQUESTED = 'MEI_REQUESTED';

/**
 * Published after a successful SingalongManager.load call, when all Singalongs
 * have finished loading.
 *
 * @constant
 * @static
 */
SingalongEvent.SINGALONG_ALLLOADED = 'SINGALONG_ALLLOADED';

/**
 * Published when Singalong is preloading pages. Sends:
 *
 * - singalong: Singalong (instance of Singalong).
 *
 * @constant
 * @static
 */
SingalongEvent.SINGALONG_PRELOADINGPAGES = 'SINGALONG_PRELOADINGPAGES';

/**
 * Published when Singalong is ready to play. Sends:
 *
 * - singalong: Singalong (instance of Singalong).
 *
 * @constant
 * @static
 */
SingalongEvent.SINGALONG_READY = 'SINGALONG_READY';

/**
 * Published when VerovioMedia has parsed MEI and created associated SVG. Sends:
 *
 * - url: string (URL of MEI loaded into Verovio).
 *
 * @constant
 * @static
 */
SingalongEvent.VEROVIO_SVGCREATED = 'VEROVIO_SVGCREATED';

Object.freeze(SingalongEvent);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _AudioMediaManager = __webpack_require__(11);

var _AudioMediaManager2 = _interopRequireDefault(_AudioMediaManager);

var _Configuration = __webpack_require__(3);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _DisplayMediaManager = __webpack_require__(13);

var _DisplayMediaManager2 = _interopRequireDefault(_DisplayMediaManager);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _MEIMediaManager = __webpack_require__(15);

var _MEIMediaManager2 = _interopRequireDefault(_MEIMediaManager);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

var _VerovioMedia = __webpack_require__(4);

var _VerovioMedia2 = _interopRequireDefault(_VerovioMedia);

var _VerovioMediaManager = __webpack_require__(16);

var _VerovioMediaManager2 = _interopRequireDefault(_VerovioMediaManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _audioMediaManager = null;
var _displayMediaManager = null;
var _meiMediaManager = null;
var _nextSingalongId = 0;
var _verovioMediaManager = null;

/**
 * Simple class that holds URLs for a Singalong.
 *
 * @class
 */

var Singalong = function () {
	////////////////////////////////////////////////////////////////////////////////
	// PUBLIC
	////////////////////////////////////////////////////////////////////////////////
	/**
  * Constructor.
  *
  * @private
  * @param {String} name - name of Singalong
  * @param {String} audio - URL of audio to play/download
  * @param {Object} display - {"iiif": string (URI of associated IIIF manifest), "pages": [int] (array of page indices)}
  * @param {String} verovioMeiUrl - URL of MEI file that has been loaded; the MEI will be displayed in Verovio
  * @param [String] meiUrls - (unordered) array of URLs of associated MEI files
  * @param [{Object}] events - [{"start": (String - time index event starts), "data": (String - data ID of associated neume)}]
  */
	function Singalong(name, audio, display, verovioMeiUrl, meiUrls, events, verovioNoteSpacing, verovioTopMarginPercent) {
		_classCallCheck(this, Singalong);

		this._id = Singalong._createSingalongId();

		this._name = name;

		this._audioUrl = audio;

		this._displayPages = display.pages;
		this._displayUrl = display.iiif;
		this._displayMode = display.mode || 'document';
		this._displayFullscreen = display.fullscreen || false;
		this._displayOffsets = display.offsets;
		this._displayGradients = display.gradients;

		this._verovioMeiUrl = verovioMeiUrl;
		this._verovioNoteSpacingFactor = verovioNoteSpacing ? verovioNoteSpacing : _Configuration2.default.VEROVIO_NOTE_SPACING_FACTOR;
		this._verovioTopMarginPercent = verovioTopMarginPercent ? verovioTopMarginPercent : null;

		this._eventDefinitions = events;

		this._meiUrls = meiUrls;

		this._displayMedia = null;
		this._audioMedia = null;
		this._verovioMedia = null;

		this._pagesNotYetDisplayed = this._displayPages.slice(0, this._displayPages.length);

		this._loaded = { audio: false, display: false, verovio: true, mei: new Map() };
		for (var i = 0; i < this._meiUrls.length; i++) {
			this._loaded.mei.set(this._meiUrls[i], false);
		}
		this._registerEvents();
	}

	/**
  * Returns name.
  *
  * @return {string} name
  */


	_createClass(Singalong, [{
		key: 'load',


		/**
   * Starts loading media.
   *
   * @public
   */
		value: function load() {
			for (var i = 0; i < this._meiUrls.length; i++) {
				Singalong._getMEIMediaManager().load(this._meiUrls[i]);
			}
		}
	}, {
		key: 'play',
		value: function play() {
			(0, _jquery2.default)('#' + _Configuration2.default.TITLE_ID).html(this.name);
			Singalong._getVerovioMediaManager().activate(this._verovioMeiUrl);
			Singalong._getDisplayMediaManager().activate(this._displayUrl);
			Singalong._getDisplayMediaManager().getDisplayMedia(this._displayUrl).clearHighlight();
			Singalong._getAudioMediaManager().play(this._audioUrl, 0);
		}
	}, {
		key: 'getPlayTime',
		value: function getPlayTime() {
			return this._audioMedia.playTime;
		}

		/**
   * Returns true iff all Media has been loaded.
   *
   * @public
   * @return {boolean} true iff all Media has been loaded
   */

	}, {
		key: 'isLoaded',
		value: function isLoaded() {
			return this._loaded.audio && this._loaded.display && this._loaded.verovio && this._isMeiLoaded();
		}

		////////////////////////////////////////////////////////////////////////////////
		// PRIVATE
		////////////////////////////////////////////////////////////////////////////////
		/**
   * Handle playback event.
   *
   * @TODO
   * @gabriel don't touch me!!!!!
   */

	}, {
		key: '_handlePlaybackEvent',
		value: function _handlePlaybackEvent(playtime, actions) {
			if (actions.highlight) {
				var action = actions.highlight;
				this._handlePlaybackHighlightEvent(playtime, action);
			}

			if (actions.highlight_facs) {
				var action = actions.highlight_facs;
				this._handlePlaybackHighlightFacsimileEvent(playtime, action);
			}

			if (actions.page) {
				var action = actions.page;
				this._handlePlaybackPageEvent(playtime, action);
			}

			if (actions.start) {
				var action = actions.start;
				this._handlePlaybackStartEvent(playtime, action);
			}
		}

		/**
   * Handles AudioMedia play time update. The play time can be fed to other
   * Media to keep sync.
   *
   * @param {double} playTime - play time from AudioMedia
   * @private
   */

	}, {
		key: '_handleAudioPlayTimeUpdate',
		value: function _handleAudioPlayTimeUpdate(playTime) {
			var media = Singalong._getVerovioMediaManager().getVerovioMedia(this._verovioMeiUrl);
			var time = Math.floor(playTime * 1000);
			media.update(time);
		}

		/**
   * Handles playback highlight event (Verovio SVG).
   *
   * @todo
   */

	}, {
		key: '_handlePlaybackHighlightEvent',
		value: function _handlePlaybackHighlightEvent(playtime, action) {
			var media = Singalong._getVerovioMediaManager().getVerovioMedia(action.mei);
			if (action.next_data) {
				var nextTime = action.next_time ? action.next_time : null;
				var nextData = action.next_data ? action.next_data : null;
				if (nextData) {
					media.highlight(playtime, action.data, nextTime, nextData);
				} else {
					media.highlight(playtime, action.data, nextTime, null);
				}
			} else {
				media.highlight(playtime, action.data, null, null);
			}
		}

		/**
   * Handles playback start event (Verovio SVG).
   *
   * @todo
   */

	}, {
		key: '_handlePlaybackStartEvent',
		value: function _handlePlaybackStartEvent(playtime, action) {
			var media = Singalong._getVerovioMediaManager().getVerovioMedia(action.mei);
			if (action.next_data) {
				var nextTime = action.next_time ? action.next_time : null;
				var nextData = action.next_data ? action.next_data : null;
				if (nextData) {
					media.start(playtime, nextTime, nextData);
				} else {
					media.start(playtime, nextTime, null);
				}
			} else {
				media.start(playtime, null, null);
			}
		}

		/**
   * Handles playback highlight facsimile event.
   *
   * @private
   * @param {double} playtime - time from beginning of audio track at which this function was called
   * @param {object} argument - argument defined in callback
   */

	}, {
		key: '_handlePlaybackHighlightFacsimileEvent',
		value: function _handlePlaybackHighlightFacsimileEvent(playtime, argument) {
			var x = parseInt(argument.ulx) + this._displayOffsets[argument.page][0];
			var y = parseInt(argument.uly) + this._displayOffsets[argument.page][1];
			this._displayMedia.highlight(argument.page, argument.width, argument.height, x, y);
		}

		/**
   * Handles playback page event.
   *
   * @private
   * @param {double} playtime - time from beginning of audio track at which this function was called
   * @param {object} argument - argument defined in callback
   */

	}, {
		key: '_handlePlaybackPageEvent',
		value: function _handlePlaybackPageEvent(playtime, argument) {
			var displayMedia = Singalong._getDisplayMediaManager().getDisplayMedia(this._displayUrl);
			displayMedia.loadPage(argument.page, this._displayGradients[argument.page]);
		}

		/**
   * Handles playback clear event. All highlights are clear.
   *
   * @private
   * @param {double} playtime - time from beginning of audio track at which this function was called
   * @param {object} argument - argument defined in callback
   */

	}, {
		key: '_handlePlaybackClearEvent',
		value: function _handlePlaybackClearEvent(playtime, argument) {
			var displayMedia = Singalong._getDisplayMediaManager().getDisplayMedia(this._displayUrl);
			displayMedia.clearHighlight();
		}

		/**
   * Handle SingalongEvent.AUDIO_DECODED.
   *
   * @param {Object} object - object with return values
   * @see {@link SingalongEvent.AUDIO_DECODED}
   */

	}, {
		key: '_handleAudioDecoded',
		value: function _handleAudioDecoded(object) {
			var _this = this;

			// @todo make events context sensitive
			if (object.url !== this._audioUrl) {
				return;
			}
			_EventHandler2.default.unsubscribe(_SingalongEvent2.default.AUDIO_DECODED, this._handleAudioDecoded, this);
			this._loaded.audio = true;
			this._audioMedia = Singalong._getAudioMediaManager().getAudioMedia(this._audioUrl);
			this._audioMedia.setPlayTimeCallback(function (playTime) {
				return _this._handleAudioPlayTimeUpdate(playTime);
			});
			Singalong._getDisplayMediaManager().load(this._displayUrl);
		}

		/**
   * Handle SingalongEvent.DISPLAY_VIEWERLOADED.
   *
   * @param {Object} object - object with return values
   * @see {@link SingalongEvent.DISPLAY_VIEWERLOADED}
   */

	}, {
		key: '_handleDisplayViewerLoaded',
		value: function _handleDisplayViewerLoaded(object) {
			// @todo make events context sensitive
			if (object.url !== this._displayUrl) {
				return;
			}
			this._displayMedia = Singalong._getDisplayMediaManager().getDisplayMedia(this._displayUrl);
			this._displayMedia.setFullscreenMode(this._displayFullscreen);
			this._displayMedia.setLayoutMode(this._displayMode);
			this._loaded.display = true;
			if (this.isLoaded()) {
				_EventHandler2.default.unsubscribe(_SingalongEvent2.default.DISPLAY_VIEWERLOADED, this._handleDisplayViewerLoaded, this);
				this._processEvents();
			}
		}

		/**
   * Handle SingalongEvent.MEI_LOADED.
   *
   * @param {Object} object - object with return values
   * @throws {Error} if no page in graphic target URL
   * @see {@link SingalongEvent.MEI_LOADED}
   */

	}, {
		key: '_handleMEILoaded',
		value: function _handleMEILoaded(object) {
			// @todo make events context sensitive
			if (!this._loaded.mei.has(object.url)) {
				return;
			}
			this._loaded.mei.set(object.url, true);

			// Load Display when MEI loaded.
			if (this._isMeiLoaded()) {
				_EventHandler2.default.unsubscribe(_SingalongEvent2.default.MEI_LOADED, this._handleMEILoaded, this);
				var meiMedia = Singalong._getMEIMediaManager().getMEIMedia(this._verovioMeiUrl);
				Singalong._getVerovioMediaManager().load(this._verovioMeiUrl, meiMedia.text, this._verovioNoteSpacingFactor, this._verovioTopMarginPercent);
			}
		}

		/**
   * Handle SingalongEvent.VEROVIO_SVGCREATED.
   *
   * @param {Object} object - object with return values
   * @see {@link SingalongEvent.VEROVIO_SVGCREATED}
   * @private
   */

	}, {
		key: '_handleVerovioSVGCreated',
		value: function _handleVerovioSVGCreated(object) {
			// @todo make events context sensitive
			if (object.url !== this._verovioMeiUrl) {
				return;
			}

			_EventHandler2.default.unsubscribe(_SingalongEvent2.default.VEROVIO_SVGCREATED, this._handleVerovioSVGCreated, this);
			this._loaded.verovio = true;
			Singalong._getAudioMediaManager().load(this._audioUrl);
		}

		/**
   * Registers event listeners.
   *
   * @private
   */

	}, {
		key: '_registerEvents',
		value: function _registerEvents() {
			_EventHandler2.default.subscribe(_SingalongEvent2.default.AUDIO_DECODED, this._handleAudioDecoded, this);
			_EventHandler2.default.subscribe(_SingalongEvent2.default.DISPLAY_VIEWERLOADED, this._handleDisplayViewerLoaded, this);
			_EventHandler2.default.subscribe(_SingalongEvent2.default.MEI_LOADED, this._handleMEILoaded, this);
			_EventHandler2.default.subscribe(_SingalongEvent2.default.VEROVIO_SVGCREATED, this._handleVerovioSVGCreated, this);
		}

		/**
   * Returns true iff all MEIMedia has been loaded.
   *
   * @private
   * @return {boolean} true iff all MEIMedia has been loaded
   */

	}, {
		key: '_isMeiLoaded',
		value: function _isMeiLoaded() {
			var loaded = true;
			this._loaded.mei.forEach(function (value, key) {
				loaded &= value;
				if (!loaded) {
					return;
				}
			});
			return loaded;
		}

		/**
   * Parse events and send them to the AudioMedia.
   *
   * @private
   */

	}, {
		key: '_processEvents',
		value: function _processEvents() {
			var _this2 = this;

			var verovioMediaSplinePoints = [];
			var events = new Map();
			this._sortEventDefinitions();
			for (var i = 0; i < this._eventDefinitions.length; i++) {
				var eventDefinition = this._eventDefinitions[i];
				var eventTime = Singalong._convertTimeIndexToDouble(eventDefinition.time);
				var actions = {};
				for (var j = 0; j < eventDefinition.actions.length; j++) {
					var actionDefinition = eventDefinition.actions[j];
					if (actionDefinition.next_time) {
						actionDefinition.next_time = Singalong._convertTimeIndexToDouble(actionDefinition.next_time);
					}
					switch (actionDefinition.type) {
						case 'highlight':
							{
								actions.highlight = actionDefinition;

								// Create spline def point and check event time domain.
								var eventTimeMs = Math.floor(eventTime * 1000);
								var verovioTransformX = Singalong._getVerovioMediaManager().getVerovioMedia(actionDefinition.mei).getSVGTransformXForNote(actionDefinition.data);
								verovioMediaSplinePoints.push(eventTimeMs, verovioTransformX);
								break;
							}

						case 'highlight_facs':
							{
								actions.highlight_facs = this._processHighlightFacsimileActionDefinition(actionDefinition);
								break;
							}

						case 'page':
							{
								actions.page = actionDefinition;
								break;
							}

						case 'start':
							{
								actions.start = actionDefinition;
								break;
							}

						default:
							{
								console.error('unknown action type: ' + actionDefinition.type);
								break;
							}
					}
				}
				var callbackObject = { callback: function callback(eventTime, actions, nextEvent) {
						return _this2._handlePlaybackEvent(eventTime, actions);
					},
					argument: actions };
				events.set(eventTime, callbackObject);
			}

			// Register events and Verovio spline.
			Singalong._getVerovioMediaManager().getVerovioMedia(this._verovioMeiUrl).createSpline(verovioMediaSplinePoints);
			Singalong._getAudioMediaManager().registerPlaybackEvents(this._audioUrl, events);

			// Next step - preloading.
			this._preloadPages();
		}

		/**
   * Sorts the event definitions.
   *
   * @private
   */

	}, {
		key: '_sortEventDefinitions',
		value: function _sortEventDefinitions() {
			this._eventDefinitions = this._eventDefinitions.sort(function (a, b) {
				var eventTimeA = Singalong._convertTimeIndexToDouble(a.time);
				var eventTimeB = Singalong._convertTimeIndexToDouble(b.time);
				return eventTimeA - eventTimeB;
			});
		}

		/**
   * Processes a highlight action definition.
   *
   * @private
   * @param {Object} actionDefinition - Singalong highlight action definition (see docs)
   * @return TODO
   */

	}, {
		key: '_processHighlightFacsimileActionDefinition',
		value: function _processHighlightFacsimileActionDefinition(actionDefinition) {
			var meiMedia = Singalong._getMEIMediaManager().getMEIMedia(actionDefinition.mei);
			var elementId = actionDefinition.data;
			var coordinates = meiMedia.getAssociatedCoordinates(elementId);
			var systemCoordinates = meiMedia.getAssociatedSystemCoordinates(coordinates.ulx, coordinates.uly);
			var uly = coordinates.uly;
			var height = coordinates.lry - coordinates.uly;
			if (_Configuration2.default.DIVA_HIGHLIGHT_USE_STAFF_HEIGHT) {
				uly = actionDefinition.upper_y;
				height = actionDefinition.lower_y - actionDefinition.upper_y;
			}
			var action = { 'type': actionDefinition.type,
				'ulx': coordinates.ulx,
				'uly': uly,
				'width': coordinates.lrx - coordinates.ulx,
				'height': height,
				'system': systemCoordinates,
				'page': actionDefinition.page };
			return action;
		}

		/**
   * Starts preloading of pages. This makes sure that the DisplayMedia doesn't
   * have to load anything during playback.
   *
   * @private
   * @see {@link SingalongEvent.SINGALONG_PRELOADINGPAGES}
   * @see {@link SingalongEvent.SINGALONG_READY}
   */

	}, {
		key: '_preloadPages',
		value: function _preloadPages() {
			_EventHandler2.default.publishEvent(_SingalongEvent2.default.SINGALONG_PRELOADINGPAGES, { singalong: this });
			this._preloadNextPage();
		}

		/**
   * Tells the DisplayMedia to render the next page that has not yet been rendered.
   *
   * @private
   */

	}, {
		key: '_preloadNextPage',
		value: function _preloadNextPage() {
			var _this3 = this;

			if (this._pagesNotYetDisplayed.length > 0) {
				Singalong._getDisplayMediaManager().activate(this._displayUrl);
				var pageIndex = this._pagesNotYetDisplayed.pop();
				Singalong._getDisplayMediaManager().loadPage(this._displayUrl, pageIndex);
				setTimeout(function () {
					return _this3._preloadNextPage();
				}, _Configuration2.default.DISPLAY_PRELOAD_TIME);
			} else {
				_EventHandler2.default.publishEvent(_SingalongEvent2.default.SINGALONG_READY, { singalong: this });
			}
		}

		////////////////////////////////////////////////////////////////////////////////
		// PRIVATE STATIC
		////////////////////////////////////////////////////////////////////////////////
		/**
   * Returns next ID for a Singalong.
   *
   * @return {int} next unique ID for Singalong instance
   * @private
   * @static
   */

	}, {
		key: 'name',
		get: function get() {
			return this._name;
		}

		/**
   * Returns ID.
   *
   * @return {int} unique ID of this Singalong instance
   */

	}, {
		key: 'id',
		get: function get() {
			return this._id;
		}
	}], [{
		key: '_createSingalongId',
		value: function _createSingalongId() {
			var id = _nextSingalongId;
			_nextSingalongId++;
			return id;
		}

		/**
   * Returns an instance of the AudioMediaManager to use. Only one instance is
   * created.
   * 
   * @private
   * @static
   * @return {AudioMediaManager} instance of AudioMediaManager
   */

	}, {
		key: '_getAudioMediaManager',
		value: function _getAudioMediaManager() {
			if (!_audioMediaManager) {
				_audioMediaManager = new _AudioMediaManager2.default(_Configuration2.default.AUDIO_EVENT_INTERVAL);
			}
			return _audioMediaManager;
		}

		/**
   * Returns an instance of the MEIMediaManager to use. Only one instance is
   * created.
   * 
   * @private
   * @static
   * @return {MEIMediaManager} instance of MEIMediaManager
   */

	}, {
		key: '_getMEIMediaManager',
		value: function _getMEIMediaManager() {
			if (!_meiMediaManager) {
				_meiMediaManager = new _MEIMediaManager2.default();
			}
			return _meiMediaManager;
		}

		/**
   * Returns an instance of the DisplayMediaManager to use. Only one instance 
   * is created.
   * 
   * @private
   * @static
   * @return {DisplayMediaManager} instance of DisplayMediaManager
   */

	}, {
		key: '_getDisplayMediaManager',
		value: function _getDisplayMediaManager() {
			if (!_displayMediaManager) {
				_displayMediaManager = new _DisplayMediaManager2.default(_Configuration2.default.DISPLAY_DIV_ID);
			}
			return _displayMediaManager;
		}

		/**
   * Returns an instance of the VerovioMediaManager to use. Only one instance 
   * is created.
   * 
   * @private
   * @static
   * @return {VerovioMediaManager} instance of VerovioMediaManager
   */

	}, {
		key: '_getVerovioMediaManager',
		value: function _getVerovioMediaManager() {
			if (!_verovioMediaManager) {
				_verovioMediaManager = new _VerovioMediaManager2.default(_Configuration2.default.VEROVIO_DIV_ID);
			}
			return _verovioMediaManager;
		}

		/**
   * Given an hour:minute:second:millisecond time index, converts to a double.
   *
   * @param {string} timeIndex - hour:minute:second:millisecond time index
   * @return {double} double - seconds of timeIndex
   * @static
   * @private
   */

	}, {
		key: '_convertTimeIndexToDouble',
		value: function _convertTimeIndexToDouble(timeIndex) {
			var values = timeIndex.split(':');
			var returnValue = parseFloat(values[0]) * 3600.0;
			returnValue += parseFloat(values[1]) * 60.0;
			returnValue += parseFloat(values[2]);
			return returnValue;
		}
	}]);

	return Singalong;
}();

exports.default = Singalong;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _Singalong = __webpack_require__(8);

var _Singalong2 = _interopRequireDefault(_Singalong);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 * @todo
 */
var SingalongManager = function () {
	////////////////////////////////////////////////////////////////////////////////
	// PUBLIC
	////////////////////////////////////////////////////////////////////////////////
	/**
  * Constructor.
  *
  * @public
  */
	function SingalongManager() {
		_classCallCheck(this, SingalongManager);

		this._singalongMap = new Map();
		this._singalongLoadQueue = [];
		this._singalongLoading = null;
		_EventHandler2.default.subscribe(_SingalongEvent2.default.SINGALONG_READY, this._handleSingalongReady, this);
	}

	/**
  * Creates a Singalong instance from a Singalong JSON object definition.
  *
  * @public
  * @param {Object} singalongJson - JSON Object Singalong definition
  * @return {Singalong} created Singalong instance
  */


	_createClass(SingalongManager, [{
		key: 'createSingalongFromJson',
		value: function createSingalongFromJson(singalongJson) {
			var singalong = new _Singalong2.default(singalongJson.name, singalongJson.audio, singalongJson.display, singalongJson.verovio, singalongJson.mei, singalongJson.events, singalongJson.verovio_note_spacing ? singalongJson.verovio_note_spacing : null, singalongJson.verovio_top_margin_percent ? singalongJson.verovio_top_margin_percent : null);
			this._singalongMap.set(singalong.id, singalong);
			this._singalongLoadQueue.push(singalong);
			return singalong;
		}

		/**
   * Loads the next Singalong in the queue iff no other Singalong is currently
   * being loaded.
   *
   * @public
   * @throws {Error} throws generic Error if load fails
   */

	}, {
		key: 'load',
		value: function load() {
			try {
				if (this._singalongLoadQueue.length > 0 && !this._singalongLoading) {
					this._singalongLoading = this._singalongLoadQueue.pop();
					this._singalongLoading.load();
				} else {
					_EventHandler2.default.publishEvent(_SingalongEvent2.default.SINGALONG_ALLLOADED, {});
				}
			} catch (error) {
				console.error(error);
				throw new Error('Singalong failed to load');
			}
		}

		/**
   * Returns Singalong IDs and names.
   */

	}, {
		key: 'getSingalongList',
		value: function getSingalongList() {
			var returnArray = [];
			this._singalongMap.forEach(function (singalong) {
				returnArray.push({ 'id': singalong.id, 'name': singalong.name });
			});
			return returnArray;
		}

		/**
   * Plays a singalong.
   */

	}, {
		key: 'play',
		value: function play(id) {
			var singalong = this._singalongMap.get(id);
			singalong.play();
		}

		/**
   * Plays a random singalong.
   */

	}, {
		key: 'playRandom',
		value: function playRandom() {
			var id = Math.floor(Math.random() * 10) % this._singalongMap.size;
			this.play(id);
		}

		////////////////////////////////////////////////////////////////////////////////
		// PRIVATE
		////////////////////////////////////////////////////////////////////////////////
		/**
   * Handle SingalongEvent.SINGALONG_READY. Media has been loaded and pages
   * preloaded.
   *
   * @private
   * @param {Object} object - event object
   * @see {@link SingalongEvent.SINGALONG_READY}
   */

	}, {
		key: '_handleSingalongReady',
		value: function _handleSingalongReady(object) {
			this._singalongLoading = null;
			this.load();
		}
	}]);

	return SingalongManager;
}();

exports.default = SingalongManager;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Wraps audio media data, including Web Audio API-specific values. This holds
 * a reference to an AudioContext so the AudioMediaSource can handle its own
 * processing outside of the AudioMediaManager.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API}
 */
var AudioMedia = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @param {string} url - URL associated with audio
     * @param {AudioContext} audioContext - AudioContext to use for audio tasks
     * @param {ArrayBuffer} rawAudio - raw audio for processing (not yet decoded)
     * @throws {Error} thrown if an instance of AudioContext was not provided
     * @throws {Error} thrown if raw audio ArrayBuffer was not provided
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
     */
    function AudioMedia(url, audioContext, rawAudio) {
        var _this = this;

        _classCallCheck(this, AudioMedia);

        if (!audioContext || !(audioContext instanceof AudioContext)) {
            throw new Error('an instance of AudioContext must be provided');
        }
        if (!rawAudio) {
            throw new Error('no audio ArrayBuffer provided');
        }

        // Init.
        this._url = url;
        this._audioBuffer = null;
        this._audioContext = audioContext;
        this._audioBufferSourceNode = this._audioContext.createBufferSource();
        this._rawAudio = rawAudio;
        this._eventMap = null;

        // Internal playback members.
        this._timer = null;
        this._playbackEventMap = null;
        this._playTime = 0;
        this._eventArray = [];
        this._eventArrayIndex = 0;
        this._playTimeCallback = null;

        // Send event.
        _EventHandler2.default.publishEvent(_SingalongEvent2.default.AUDIO_LOADED, { url: url });

        // Start decoding.
        this._audioContext.decodeAudioData(this._rawAudio).then(function (audioBuffer) {
            return _this._handleDecodedAudioData(audioBuffer);
        });

        var that = this;
        (0, _jquery2.default)(window).keypress(function (e) {
            if (e.keyCode === 0 || e.keyCode === 32) {
                e.preventDefault();
                console.log(that._playTime);
            } else if (e.keyCode === 115) {
                debugger;
            }
        });
    }

    /**
     * Returns duration of audio.
     *
     * @public
     * @return {double} duration of audio in seconds
     */


    _createClass(AudioMedia, [{
        key: 'getDuration',
        value: function getDuration() {
            return this._audioBuffer.duration;
        }

        /**
         * Plays audio track associated with URL from beginning. If the audio is not
         * yet ready an error is thrown. For a track of duration x seconds:
         *
         * - time < 0 will play at time index 0.0
         * - time > x will not play
         *
         * @public
         * @param {double} time - time in track at which to start playing
         * @param {int} timerInterval - granularity of polling of AudioContext.currentTime
         */

    }, {
        key: 'play',
        value: function play(time, timerInterval) {
            var _this2 = this;

            // Attempt play.
            var offsetTime = time < 0 ? 0 : time;
            if (this._audioBuffer.duration > offsetTime) {
                // Set some internal housekeeping.
                this._audioContext.currentTime;
                var startTime = this._audioContext.currentTime;
                this._timer = setInterval(function () {
                    return _this2._updatePlayTime(startTime, offsetTime);
                }, timerInterval);

                // Prepare playback events. Trim, then get array of keys.
                if (this._eventMap) {
                    this._playbackEventMap = this._trimMap(offsetTime, this._eventMap);
                    var iterator = this._playbackEventMap.entries();
                    this._eventArray = [];
                    var timeEvent = iterator.next();
                    while (!timeEvent.done) {
                        this._eventArray.push(timeEvent.value);
                        var timeEvent = iterator.next();
                    }
                    this._eventArrayIndex = 0;
                }

                // Get it ready to go...
                this._audioBufferSourceNode.buffer = this._audioBuffer;
                this._audioBufferSourceNode.onended = function (event) {
                    return _this2._handleEnded(event);
                };
                this._audioBufferSourceNode.connect(this._audioContext.destination);

                // Play and publish!
                this._audioBufferSourceNode.start(this._audioContext.currentTime, offsetTime);
                _EventHandler2.default.publishEvent(_SingalongEvent2.default.AUDIO_PLAYING, { url: this._url, time: offsetTime });
            }
        }

        /**
         * Returns Map of time indeces to duples: function callbacks and an object
         * to pass back in the callback.
         *
         * @public
         * @return {Map} map of time indices to {callback: function, argument: object (may be null)}
         */

    }, {
        key: 'setPlayTimeCallback',


        /**
         * Sets a callback function that is called every time the playtime is updated.
         *
         * @param {function} callback - callback that takes an integer
         * @public
         */
        value: function setPlayTimeCallback(callback) {
            this._playTimeCallback = callback;
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * "Cleans up" - that is, play has stopped, so we should reset.
         *
         * @private
         */

    }, {
        key: '_cleanUp',
        value: function _cleanUp() {
            clearInterval(this._timer);
            this._timer = null;
            this._playbackEventMap = null;
            this._audioBufferSourceNode.disconnect();
            this._audioBufferSourceNode = this._audioContext.createBufferSource(); // new source node
        }

        /**
         * Handles completion of audio data decoding.
         *
         * @private
         * @param {AudioBuffer} audioBuffer - decoded audio data
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
         */

    }, {
        key: '_handleDecodedAudioData',
        value: function _handleDecodedAudioData(audioBuffer) {
            this._audioBuffer = audioBuffer;
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.AUDIO_DECODED, { url: this._url });
        }

        /**
         * Handles 'ended' event of AudioBufferSourceNode.
         *
         * @param {Event} event - 'ended' event
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events/ended_(Web_Audio)}
         */

    }, {
        key: '_handleEnded',
        value: function _handleEnded(event) {
            this._cleanUp();
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.AUDIO_ENDED, { url: this._url });
        }

        /**
         * Trims map so events that exist before a certain time are not fired.
         *
         * @param {double} start - keys in map that are less than this are removed
         * @param {Map} map - Map with numbers as keys
         * @return {Map} Map with entries with keys less than start removed
         */

    }, {
        key: '_trimMap',
        value: function _trimMap(start, map) {
            var iterator = map.entries();
            var entry = iterator.next();
            while (!entry.done) {
                if (entry.value[0] < start) {
                    map.delete(entry.value[0]);
                }
                entry = iterator.next();
            }
            return map;
        }

        /**
         * Callback for play timer. Updates current time index for display.
         * Also call playback events.
         *
         * @private
         * @param {double} startTime - time in AudioContext at which the current playback started
         * @param {double} offset - offset requested in track to start playing
         */

    }, {
        key: '_updatePlayTime',
        value: function _updatePlayTime(startTime, offset) {
            this._playTime = this._audioContext.currentTime - startTime + offset;

            if (this._playTimeCallback) {
                this._playTimeCallback(this._playTime);
            }

            // Check event map.
            if (this._playbackEventMap) {
                for (; this._eventArrayIndex < this._eventArray.length; this._eventArrayIndex++) {
                    var current = this._eventArray[this._eventArrayIndex];
                    if (current[0] <= this._playTime) {
                        var func = current[1].callback;
                        var argument = current[1].argument ? current[1].argument : null;
                        func(this._playTime, argument);
                    } else {
                        break;
                    }
                }
            }
        }
    }, {
        key: 'eventMap',
        get: function get() {
            return this._eventMap;
        }

        /**
         * Returns URL.
         *
         * @public
         * @return {string} URL associated with audio
         */
        ,


        /**
         * Set event Map. Indicies should be doubles that map to a function callback
         * and an object (may be null) to pass back.
         *
         * @param {Map} map - map of time indices to {callback: function, argument: object (may be null)}
         * @public
         */
        set: function set(map) {
            this._eventMap = map;
        }

        /**
         * Returns play time index in seconds.
         *
         * @public
         * @return {String} play time
         */

    }, {
        key: 'url',
        get: function get() {
            return this._url;
        }
    }, {
        key: 'playTime',
        get: function get() {
            return this._playTime;
        }
    }]);

    return AudioMedia;
}();

exports.default = AudioMedia;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AudioMedia = __webpack_require__(10);

var _AudioMedia2 = _interopRequireDefault(_AudioMedia);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Simple interface for loading and managing audio tracks.
 *
 * @class
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
 */
var AudioMediaManager = function () {
    ///////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ///////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor. Takes an int defining how often the AudioContext will be
     * polled to geet AudioContext.currentTime. This is used to update the 
     * playtime event firing.
     *
     * @param {int} timerInterval - granularity of polling of AudioContext.currentTime
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/currentTime}
     */
    function AudioMediaManager(timerInterval) {
        _classCallCheck(this, AudioMediaManager);

        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this._audioContext = new AudioContext();
        this._timerInterval = timerInterval;
        this._audioMediaMap = new Map();
    }

    /**
     * Loads audio located at provided URL, async. When loading finishes - due
     * to success or error - an event will be fired. If the audio has already
     * been loaded, a SingalongEvent.AUDIO_LOADED event will immediately be fired.
     * Else, SingalongEvent.AUDIO_REQUESTED will be fired.
     *
     * @public
     * @param {string} url - URL of audio to load
     */


    _createClass(AudioMediaManager, [{
        key: 'load',
        value: function load(url) {
            var _this = this;

            // Check if media already exists.
            if (this.getAudioMedia(url)) {
                _EventHandler2.default.publishEvent(_SingalongEvent2.default.AUDIO_LOADED, { url: url });
                return;
            }

            // Request.
            var request = new XMLHttpRequest();
            this._audioMediaMap.set(event.target.responeURL, null);
            request.responseType = 'arraybuffer';
            request.addEventListener('abort', function (event) {
                return _this._handleAbort(event);
            });
            request.addEventListener('error', function (event) {
                return _this._handleError(event);
            });
            request.addEventListener('load', function (event) {
                return _this._handleLoad(event);
            });
            request.open('GET', url);
            request.send();
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.AUDIO_REQUESTED, { url: url });
        }

        /**
         * Plays audio track associated with URL from beginning. If the audio is not
         * yet ready an error is thrown. For a track of duration x seconds:
         *
         * - time < 0 will play at time index 0.0
         * - time > x will not play
         *
         * @public
         * @param {string} url - URL of audio to play
         * @param {double} time - time in track at which to start playing
         * @throws {Error} thrown if audio track has not been loaded
         */

    }, {
        key: 'play',
        value: function play(url, time) {
            var audioMedia = this.getAudioMedia(url);
            if (!audioMedia) {
                throw new Error('no AudioMedia exists for ' + url);
            }
            audioMedia.play(time, this._timerInterval);
        }

        /**
         * Registers callbacks to be called when playback of a particular track 
         * reaches specific points. The callback will send the time index at which
         * it was fired in the track (double) as well as an object (may be null) as 
         * defined in the Map.
         *
         * @public
         * @param {string} url - URL of audio track to associate with callbacks
         * @param {Map} map - Map of doubles to {callback: function, argument: object (may be null)}
         * @throws {Error} thrown if audio track has not been loaded
         */

    }, {
        key: 'registerPlaybackEvents',
        value: function registerPlaybackEvents(url, map) {
            var audioMedia = this.getAudioMedia(url);
            if (!audioMedia) {
                throw new Error('no AudioMedia exists for ' + url);
            }
            audioMedia.eventMap = map;
        }

        /**
         * Returns associated AudioMedia instance for URL, null if DNE.
         *
         * @public
         * @param {string} url - URL of audio
         * @return {AudioMedia} associated AudioMedia if loaded, else null
         */

    }, {
        key: 'getAudioMedia',
        value: function getAudioMedia(url) {
            return this._audioMediaMap.get(url) || null;
        }

        ///////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ///////////////////////////////////////////////////////////////////////////////
        /**
         * Handles abort event of XMLHttpRequest.
         *
         * @private
         * @param {Event} event - Event
         */

    }, {
        key: '_handleAbort',
        value: function _handleAbort(event) {
            throw new Error('load failed');
            // EventHandler.publishEvent(SingalongEvent.AUDIO_ENDED, {url: url, event: event});
        }

        /**
         * Handles error event of XMLHttpRequest.
         *
         * @private
         * @param {Event} event - Event
         * @throws {Error} thrown if load failed
         */

    }, {
        key: '_handleError',
        value: function _handleError(event) {
            throw new Error('load failed');
        }

        /**
         * Handles load event of XMLHttpRequest.
         *
         * @private
         * @param {Event} event - Event
         */

    }, {
        key: '_handleLoad',
        value: function _handleLoad(event) {
            var url = event.target.responseURL;
            var audioMedia = new _AudioMedia2.default(url, this._audioContext, event.target.response);
            this._audioMediaMap.set(url, audioMedia);
        }
    }]);

    return AudioMediaManager;
}();

exports.default = AudioMediaManager;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _Configuration = __webpack_require__(3);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _diva = __webpack_require__(5);

var _diva2 = _interopRequireDefault(_diva);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Diva.js media display class.
 *
 * @class
 */
var DisplayMedia = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @param {string} elementId - element ID for Diva.js instance to attach to
     * @param {string} url - IIIF URL of image manifest
     */
    function DisplayMedia(elementId, url) {
        _classCallCheck(this, DisplayMedia);

        this._diva = null;
        this._element = (0, _jquery2.default)('#' + elementId);
        this._url = url;
        this._initializeDiva();
        this._highlightScaleRepositionFactor = (_Configuration2.default.DIVA_HIGHLIGHT_SCALE - 1) / 2;
    }

    /**
     * Activates the associated Diva.js instance of this DisplayMedia.
     *
     * @see {@link https://github.com/DDMAL/diva.js/wiki/Public-Methods#activate}
     */


    _createClass(DisplayMedia, [{
        key: 'activate',
        value: function activate() {
            this._element.show();
            this._diva.activate();
        }

        /**
         * Deactivates the associated Diva.js instance of this Displaymedia.
         *
         * @see {@link https://github.com/DDMAL/diva.js/wiki/Public-Methods#activate}
         */

    }, {
        key: 'deactivate',
        value: function deactivate() {
            this._element.hide();
            this._diva.deactivate();
        }

        /**
         * Loads pages by index in manifest.
         *
         * @param {int} pageIndex - page index to load
         * @param [int, int] gradients - highlight gradients (top, bottom) in percent
         */

    }, {
        key: 'loadPage',
        value: function loadPage(pageIndex, gradients) {
            this.clearHighlight();
            // @todo this looks like a diva bug; have to reset the zoom to 2 before loading page, then can rezoom
            this.setZoomLevel(2);
            this._diva.gotoPageByIndex(pageIndex);
            this.setZoomLevel(_Configuration2.default.DISPLAY_DIVA_ZOOM_LEVEL);
            if (_Configuration2.default.DISPLAY_USE_GRADIENT && gradients) {
                this._applyGradient(gradients);
            }
        }

        /**
         * Highlight a rectangular area of the image.
         *
         * @param {int} pageIndex - index of page to highlight
         * @param {int} width - width of area
         * @param {int} height - height of area
         * @param {int} ulx - upper left X coordinate
         * @param {int} uly - upper left Y coordinate
         */

    }, {
        key: 'highlight',
        value: function highlight(pageIndex, width, height, ulx, uly) {
            this._diva.highlightOnPage(pageIndex, [{ 'width': width * _Configuration2.default.DIVA_HIGHLIGHT_SCALE,
                'height': height * _Configuration2.default.DIVA_HIGHLIGHT_SCALE,
                'ulx': ulx - this._highlightScaleRepositionFactor * width,
                'uly': uly - this._highlightScaleRepositionFactor * height }], _Configuration2.default.DIVA_HIGHLIGHT);
        }

        /**
         * Clears all highlighting.
         */

    }, {
        key: 'clearHighlight',
        value: function clearHighlight() {
            this._diva.resetHighlights();
        }

        /**
         * Toggles fullscreen mode.
         *
         * @param {boolean} fullscreen - goes to fullscreen iff true
         * @public
         */

    }, {
        key: 'setFullscreenMode',
        value: function setFullscreenMode(fullscreen) {
            if (fullscreen) {
                this._diva.enterFullscreenMode();
            } else {
                this._diva.leaveFullscreenMode();
            }
        }

        /**
         * Sets the layout mode of the Diva viewer. This is one of 'document', 'book',
         * or 'grid'.
         *
         * @param {string} mode - layout mode ('document' (default), 'book', 'grid')
         * @public
         * @see {@link https://github.com/DDMAL/diva.js/wiki/Public-Methods#changeview}
         */

    }, {
        key: 'setLayoutMode',
        value: function setLayoutMode(mode) {
            this._diva.changeView(mode);
        }

        /**
         * Returns URL.
         *
         * @public
         * @return {string} URL associated with audio
         */

    }, {
        key: 'setZoomLevel',


        /**
         * Sets zoom level.
         *
         * @param {float} zoomLevel - zoom level
         * @see {@link https://github.com/DDMAL/diva.js/wiki/Public-Methods#setzoomlevel}
         */
        value: function setZoomLevel(zoomLevel) {
            this._diva.setZoomLevel(zoomLevel);
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Creates and initializes a new Diva.js viewer.
         */

    }, {
        key: '_initializeDiva',
        value: function _initializeDiva() {
            var _this = this;

            // Create Diva.js!
            var settings = _Configuration2.default.DIVA_SETTINGS;
            settings.objectData = this._url;
            this._diva = _diva2.default.create(this._element, settings);
            this._diva.disableScrollable();

            // Subscribe to events.
            // @todo - note that we explicitly pass the diva instance ID instead of 'self' as documented in https://github.com/DDMAL/diva.js/wiki/Events-System, which doesn't seem to work
            _diva2.default.Events.subscribe('ManifestDidLoad', function (manifest) {
                return _this._handleManifestDidLoad(manifest);
            }, this);
            _diva2.default.Events.subscribe('ViewerDidLoad', function (settings) {
                return _this._handleViewerDidLoad(settings);
            }, this);
        }

        /**
         * Handles 'ManifestDidLoad' event. Fires SingalongEvent.DISPLAY_MANIFESTLOADED.
         *
         * @param {Object} manifest - IIIF manifest
         */

    }, {
        key: '_handleManifestDidLoad',
        value: function _handleManifestDidLoad(manifest) {
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.DISPLAY_MANIFESTLOADED, { url: this._url });
        }

        /**
         * Handles 'ViewerDidLoad' event.
         *
         * @param {Object} settings - Diva.js viewer settings
         */

    }, {
        key: '_handleViewerDidLoad',
        value: function _handleViewerDidLoad(settings) {
            // this._diva.changeView('book');
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.DISPLAY_VIEWERLOADED, { url: this._url });
        }

        /**
         * Applies gradient class to highlight particular area.
         */

    }, {
        key: '_applyGradient',
        value: function _applyGradient(gradients) {
            // Get rgb color.
            var rgb = this._hexToRgb(_Configuration2.default.BACKGROUND_COLOR.substring(1));
            var topGradientStart = Math.max(0, gradients[0] - 1);
            topGradientStart = topGradientStart.toString();
            var topGradientEnd = gradients[0].toString();
            var bottomGradientStart = Math.max(0, gradients[1] - 1);
            bottomGradientStart = bottomGradientStart.toString();
            var bottomGradientEnd = gradients[1].toString();

            var gradientStyle = 'div.gradient:after {';
            gradientStyle += 'position: absolute;';
            gradientStyle += 'bottom: 0;';
            gradientStyle += 'height: 100%;';
            gradientStyle += 'width: 100%;';
            gradientStyle += 'content: "";';
            gradientStyle += 'background: linear-gradient(to top, rgba(' + rgb + ', ' + _Configuration2.default.DISPLAY_GRADIENT_PERCENT.toString() + ') ' + bottomGradientStart + '%, rgba(255,255,255, 0) ' + bottomGradientEnd + '%),';
            gradientStyle += 'linear-gradient(to bottom, rgba(' + rgb + ', ' + _Configuration2.default.DISPLAY_GRADIENT_PERCENT.toString() + ') ' + topGradientStart + '%, rgba(255,255,255, 0) ' + topGradientEnd + '%);';
            gradientStyle += 'pointer-events: none;}';
            (0, _jquery2.default)('style#gradient').text(gradientStyle);
            this._element.find('div.diva-inner').addClass('gradient');
        }
    }, {
        key: '_hexToRgb',
        value: function _hexToRgb(hex) {
            var bigint = parseInt(hex, 16);
            var r = bigint >> 16 & 255;
            var g = bigint >> 8 & 255;
            var b = bigint & 255;
            return r + "," + g + "," + b;
        }
    }, {
        key: 'url',
        get: function get() {
            return this._url;
        }
    }]);

    return DisplayMedia;
}();

exports.default = DisplayMedia;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _DisplayMedia = __webpack_require__(12);

var _DisplayMedia2 = _interopRequireDefault(_DisplayMedia);

var _diva = __webpack_require__(5);

var _diva2 = _interopRequireDefault(_diva);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIV_ELEMENT_PREFIX = 'div_meisingalong_displaymedia';

/**
 * Simple interface for loading and showing IIIF images. Uses Diva.js to display.
 * It is important to note that since each individual instance of DisplayMedia
 * has its own Diva.js instance, initial loading of DisplayMedias should be done
 * sequentially, else images will not be shown.
 *
 * @class
 * @see {@link http://ddmal.github.io/diva.js/}
 * @see {@link http://iiif.io/}
 */

var DisplayMediaManager = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @public
     * @param {string} elementId - ID of div element to attach displays to
     * @throws {Error} thrown if elementId is not provided
     */
    function DisplayMediaManager(elementId) {
        _classCallCheck(this, DisplayMediaManager);

        if (!elementId) {
            throw new Error('a string value is required for "elementId"');
        }
        this._element = (0, _jquery2.default)('#' + elementId);
        this._displayMediaMap = new Map();
        this._displayMediaIndex = 0;
        this._currentActive = null;
    }

    /**
     * Returns associated DisplayMedia instance for URL, null if DNE.
     *
     * @public
     * @param {string} url - URL of audio
     * @return {DisplayMedia} associated DisplayMedia if loaded, else null
     */


    _createClass(DisplayMediaManager, [{
        key: 'getDisplayMedia',
        value: function getDisplayMedia(url) {
            return this._displayMediaMap.get(url) || null;
        }

        /**
         * Loads IIIF manifest located at provided URL, async. When loading finishes
         * - due to success or error - an event will be fired. If the manifest has already
         * been loaded, a SingalongEvent.DISPLAY_MANIFESTLOADED event will immediately be 
         * fired. Else, SingalongEvent.DISPLAY_MANIFESTREQUESTED will be fired.
         *
         * @public
         * @param {string} url - URL of IIIF manifest to load
         */

    }, {
        key: 'load',
        value: function load(url) {
            // Check if media already exists.
            if (this.getDisplayMedia(url)) {
                _EventHandler2.default.publishEvent(_SingalongEvent2.default.DISPLAY_VIEWERLOADED, { url: url });
                return;
            }

            var newDivId = this._createNewDiv();
            var displayMedia = new _DisplayMedia2.default(newDivId, url);
            this._displayMediaMap.set(url, displayMedia);
        }

        /**
         * Given an IIIF manifest URL, sets the associated display of that manifest
         * as the active display. Throws an error if DisplayMedia does not exist for URL.
         *
         * @param {string} url - URL of associated IIIF manifest
         * @throws {Error} thrown if DisplayMedia for URL does not exist
         */

    }, {
        key: 'activate',
        value: function activate(url) {
            // Check if exists.
            var displayMedia = this.getDisplayMedia(url);
            if (!displayMedia) {
                throw new Error('no DisplayMedia exists for ' + url);
            }

            if (this._currentActive) {
                this._currentActive.deactivate();
                this._currentActive = null;
            }

            this.deactivate(url);
            this._currentActive = displayMedia;
            displayMedia.activate();
        }

        /**
         * Deactivates the current active display.
         */

    }, {
        key: 'deactivate',
        value: function deactivate(url) {
            this.getDisplayMedia(url).deactivate();
        }

        /**
         * Loads a page associated with the given IIIF manifest URL. Takes the page
         * index.
         *
         * @param {string} url - URL of associated IIIF manifest
         * @param {[int]} pages - index of page to load (indices out of range are ignored)
         * @throws {Error} thrown if DisplayMedia for URL does not exist
         * @throws {Error} thrown if DisplayMedia for URL is not active
         */

    }, {
        key: 'loadPage',
        value: function loadPage(url, index) {
            // Check if exists.
            var displayMedia = this.getDisplayMedia(url);
            if (!displayMedia) {
                throw new Error('no DisplayMedia exists for ' + url);
            } else if (displayMedia !== this._currentActive) {
                throw new Error('DisplayMedia for ' + url + ' must be active to load pages');
            }
            displayMedia.loadPage(index);
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Creates a div element and attaches it to the base div defined when the 
         * DisplayMediaManager was created.
         *
         * return {string} ID of new div
         */

    }, {
        key: '_createNewDiv',
        value: function _createNewDiv() {
            var newDivId = DIV_ELEMENT_PREFIX + this._displayMediaIndex;
            this._element.append('<div id="' + newDivId + '" class="' + DIV_ELEMENT_PREFIX + '"></div>');
            this._displayMediaIndex++;
            return newDivId;
        }
    }]);

    return DisplayMediaManager;
}();

exports.default = DisplayMediaManager;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _nextRecordingId2 = 0;

/**
 * Wraps MEI media data, including DOM.
 *
 * @class
 */

var MEIMedia = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @param {string} url - URL associated with MEI
     * @param {XML DOM object} dom - associated XML DOM object
     * @param {string} meiString - MEI text
     * @throws {Error} thrown if XML DOM object was not provided
     */
    function MEIMedia(url, dom, meiString) {
        _classCallCheck(this, MEIMedia);

        if (!dom) {
            throw new Error('no XML DOM object provided');
        }

        // Init.
        this._url = url;
        this._dom = dom;
        this._jDom = (0, _jquery2.default)(this._dom);
        this._meiString = meiString;
        //        this._recordingEventMap = new Map();
    }

    /**
     * Parses the MEI.
     *
     * @public
     */
    /*   parse()
       {
           this._parseMEI();
       }*/

    /**
     * Returns URL.
     *
     * @public
     * @return {string} URL associated with audio
     */


    _createClass(MEIMedia, [{
        key: 'getAssociatedCoordinates',


        /**
         * Given an xml:id for a <recording> MEI element and an xml:id for an <avFile>
         * element within the <recording>, returns the associated target URL for the
         * AV resource.
         *
         * @param {string} recordingId - xml:id of <recording> in MEI
         * @param {string} avFileId - xml:id of <avFile> in <recording>
         * @return {string} URL of target AV resource
         * @throws {Error} thrown if recordingId or avFileId do not exist
         */
        /*   getTargetAvUrl(recordingId, avFileId)
           {
               if (!this._recordingEventMap.has(recordingId))
               {
                   throw new Error('recording ' + recordingId + ' does not exist');
               }
                var recording = this._recordingEventMap.get(recordingId);
               if (!recording.files.has(avFileId))
               {
                   throw new Error('avFile ' + avFileId + ' does not exist in recording ' + recordingId);
               }
                return recording.files.get(avFileId).target;
           }*/

        /**
         * Given an xml:id for a <graphic> MEI element, returns the associated target 
         * URL.
         *
         * @param {string} graphicId - xml:id of <graphic> in MEI
         * @return {string} URL of target <graphic> resource
         * @throws {Error} thrown if <graphic> with given ID does not exist
         */
        /*  getTargetGraphicUrl(graphicId)
          {
              var elements = this._jDom.find("[xml\\:id='" + graphicId + "']");
              if (elements.length === 0)
              {
                  throw new Error('graphic ' + graphicId + ' does not exist');
              }
              return $(elements[0]).attr('target');
          }*/

        /**
         * Given an MEI <recording> ID, returns a sorted array of objects. The objects
         * are defined as follows:
         *
         * {
         * 'time': string (time index relative to associated recording),,
         * 'ulx': int (upper-left x coordinate of associated area in <graphic>),
         * 'uly': int (upper-left y coordinate of associated area in <graphic>),
         * 'lrx': int (lower-right x coordinate of associated area in <graphic>),
         * 'lry': int (lower-right y coordinate of associated area in <graphic>)
         * }
         *
         * The returned array is sorted, ascending, by 'time'
         *
         * @public
         * @param {string} recordingId - xml:id of <recording> in MEI
         * @return {[object]} array of 5-uples as defined above
         * @throws {Error} thrown if recordingId do not exist
         */
        /* getEvents(recordingId)
         {
             if (!this._recordingEventMap.has(recordingId))
             {
                 throw new Error('recording ' + recordingId + ' does not exist');
             }
              var recording = this._recordingEventMap.get(recordingId);
             return recording.events;
         }*/

        /**
         * Given the ID of an element in the MEI, returns the facsimile coordinates
         * associated with it (if any), else null.
         *
         * @public
         * @param {String} elementId - ID of element
         * @return {
         * 'ulx': int (upper-left x coordinate of associated area in <graphic>),
         * 'uly': int (upper-left y coordinate of associated area in <graphic>),
         * 'lrx': int (lower-right x coordinate of associated area in <graphic>),
         * 'lry': int (lower-right y coordinate of associated area in <graphic>)
         * } - coordinates in the associated facsimile (may be null)
         */
        value: function getAssociatedCoordinates(elementId) {
            try {
                var element = this._jDom.find("[xml\\:id='" + elementId + "']")[0];
                var zoneId = (0, _jquery2.default)(element).attr('facs');
                var zone = this._jDom.find("[xml\\:id='" + zoneId + "']")[0];
                return { 'ulx': (0, _jquery2.default)(zone).attr('ulx'),
                    'uly': (0, _jquery2.default)(zone).attr('uly'),
                    'lrx': (0, _jquery2.default)(zone).attr('lrx'),
                    'lry': (0, _jquery2.default)(zone).attr('lry') };
            } catch (error) {
                console.error('could not find coordinates for element with ID ' + elementId);
                return null;
            }
        }

        /**
         * Given ulx/uly, determines associated system coordinates.
         */

    }, {
        key: 'getAssociatedSystemCoordinates',
        value: function getAssociatedSystemCoordinates(x, y) {
            var systems = this._jDom.find('sb');
            var candidateCoordinates = null;
            var candidateDiff = 0;
            for (var i = 0; i < systems.length; i++) {
                var systemId = (0, _jquery2.default)(systems[i]).attr('xml:id');
                var coordinates = this.getAssociatedCoordinates(systemId);
                if (x >= coordinates.ulx && y >= coordinates.uly && x <= coordinates.lrx && y <= coordinates.lry) {
                    return coordinates;
                } else {
                    var yDiffTop = Math.abs(coordinates.uly - y);
                    var yDiffBottom = Math.abs(coordinates.lry - y);
                    var yDiff = Math.min(yDiffTop, yDiffBottom);
                    if (!candidateCoordinates) {
                        candidateCoordinates = coordinates;
                        candidateDiff = yDiff;
                    } else {
                        var yDiffTop = Math.abs(coordinates.uly - y);
                        var yDiffBottom = Math.abs(coordinates.lry - y);
                        var yDiff = Math.min(yDiffTop, yDiffBottom);
                        if (yDiff < candidateDiff) {
                            candidateDiff = yDiff;
                            candidateCoordinates = coordinates;
                        }
                    }
                }
            }
            return candidateCoordinates;
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Parses the MEI DOM for "Singalong" data. That is, the MEI should have 
         * <when> elements in a <recording> element (itself contained in
         * <performance>). These <when> elements should have absolute time events
         * that reference elements in the <layer> level. The referenced elements
         * should have @facs IDs that map to facsimilie <zone> elements.
         *
         * The end result is an ordered sequence of "events" that map time indices of
         * a recording to square areas of the referenced facsimile.
         *
         * @private
         * @throws {Error} error depending on parsing
         * @see {@link http://music-encoding.org/support/guidelines/}
         */
        /*   _parseMEI()
           {
               var recordings = this._jDom.find('mei music performance recording');
               for (var i = 0; i < recordings.length; i++)
               {
                   // New recording object.
                   var recording = {'events': [], 'files': new Map()};
                    // Get files.
                   var files = $(recordings[i]).find('avFile');
                   for (var j = 0; j < files.length; j++)
                   {
                       var file = files[j];
                       recording.files.set($(file).attr('xml:id'),
                                           {'mimetype': $(file).attr('mimetype'), 'target': $(file).attr('target')});
                   }
                    // Get events ('whens');
                   var whens = $(recordings[i]).find('when');
                   for (var j = 0; j < whens.length; j++)
                   {
                       var when = whens[j];
                        // Check for the 'data' attribute and find the associated element.
                       var elementId = $(when).attr('data').substring(1);
                       var element = this._jDom.find("[xml\\:id='" + elementId + "']")[0];
                        // That element should reference a zone. Find it.
                       var zoneId = $(element).attr('facs');
                       var zone = this._jDom.find("[xml\\:id='" + zoneId + "']")[0];
                        // Add zone with event.
                       recording.events.push({'time': $(when).attr('absolute'),
                                           'ulx': $(zone).attr('ulx'),
                                           'uly': $(zone).attr('uly'),
                                           'lrx': $(zone).attr('lrx'),
                                           'lry': $(zone).attr('lry')});
                   }
                    // Sort the event array.
                   recording.events.sort(function(a, b) { return a.time > b.time; });
                    // Save.
                   this._recordingEventMap.set($(recordings[i]).attr('xml:id'), recording);
               }
               EventHandler.publishEvent(SingalongEvent.MEI_PARSED, {url: this._url});
           }*/

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE STATIC
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Returns next ID for a recording in the event map.
         *
         * @return {int} next unique ID for recording
         * @private
         * @static
         */

    }, {
        key: 'url',
        get: function get() {
            return this._url;
        }

        /**
         * Returns MEI text string.
         *
         * @public
         * @return {string} MEI
         */

    }, {
        key: 'text',
        get: function get() {
            return this._meiString;
        }
    }], [{
        key: '_nextRecordingId',
        value: function _nextRecordingId() {
            var id = _nextRecordingId2;
            _nextRecordingId2++;
            return id;
        }
    }]);

    return MEIMedia;
}();

exports.default = MEIMedia;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _MEIMedia = __webpack_require__(14);

var _MEIMedia2 = _interopRequireDefault(_MEIMedia);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Simple interface for loading and parsing MEI files.
 *
 * @class
 */
var MEIMediaManager = function () {
    ///////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ///////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @public
     */
    function MEIMediaManager() {
        _classCallCheck(this, MEIMediaManager);

        this._meiMediaMap = new Map();
        this._domParser = new DOMParser();
    }

    /**
     * Loads MEI located at provided URL, async. When loading finishes - due
     * to success or error - an event will be fired. If the audio has already
     * been loaded, a SingalongEvent.MEI_LOADED event will immediately be fired.
     * Else, SingalongEvent.MEI_REQUESTED will be fired.
     *
     * @public
     * @param {string} url - URL of MEI to load
     */


    _createClass(MEIMediaManager, [{
        key: 'load',
        value: function load(url) {
            var _this = this;

            // Check if media already exists.
            if (this.getMEIMedia(url)) {
                _EventHandler2.default.publishEvent(_SingalongEvent2.default.MEI_LOADED, { url: url });
                return;
            }

            // Request.
            var request = new XMLHttpRequest();
            this._meiMediaMap.set(url, null);
            request.addEventListener('abort', function (event) {
                return _this._handleAbort(event);
            });
            request.addEventListener('error', function (event) {
                return _this._handleError(event);
            });
            request.addEventListener('load', function (event) {
                return _this._handleLoad(event);
            });
            request.open('GET', url);
            request.send();
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.MEI_REQUESTED, { url: url });
        }

        /**
         * Returns associated MEIMedia instance for URL, null if DNE.
         *
         * @public
         * @param {string} url - URL of audio
         * @return {MEIMedia} associated MEIMedia if loaded, else null
         */

    }, {
        key: 'getMEIMedia',
        value: function getMEIMedia(url) {
            return this._meiMediaMap.get(url) || null;
        }

        ///////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ///////////////////////////////////////////////////////////////////////////////

        /**
         * Handles abort event of XMLHttpRequest.
         *
         * @private
         * @param {Event} event - Event
         */

    }, {
        key: '_handleAbort',
        value: function _handleAbort(event) {
            console.error('@todo');
            //EventHandler.publishEvent(SingalongEvent.AUDIO_ENDED, {url: url, event: event});
        }

        /**
         * Handles error event of XMLHttpRequest.
         *
         * @private
         * @param {Event} event - Event
         * @throws {Error} thrown if load failed
         */

    }, {
        key: '_handleError',
        value: function _handleError(event) {
            throw new Error('load failed');
        }

        /**
         * Handles load event of XMLHttpRequest.
         *
         * @private
         * @param {Event} event - Event
         */

    }, {
        key: '_handleLoad',
        value: function _handleLoad(event) {
            var url = event.target.responseURL;
            var dom = this._domParser.parseFromString(event.target.responseText, 'text/xml');
            var meiMedia = new _MEIMedia2.default(url, dom, event.target.responseText);
            this._meiMediaMap.set(url, meiMedia);
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.MEI_LOADED, { url: url });
            //meiMedia.parse();
        }
    }]);

    return MEIMediaManager;
}();

exports.default = MEIMediaManager;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _EventHandler = __webpack_require__(0);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _SingalongEvent = __webpack_require__(1);

var _SingalongEvent2 = _interopRequireDefault(_SingalongEvent);

var _VerovioMedia = __webpack_require__(4);

var _VerovioMedia2 = _interopRequireDefault(_VerovioMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIV_ELEMENT_PREFIX = 'div_meisingalong_veroviomedia';

/**
 * Simple interface for loading and showing Verovio-rendered MEI
 *
 * @class
 */

var VerovioMediaManager = function () {
    ////////////////////////////////////////////////////////////////////////////////
    // PUBLIC
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Constructor.
     *
     * @public
     * @param {string} elementId - ID of div element to attach Verovio SVG to
     * @throws {Error} thrown if elementId is not provided
     */
    function VerovioMediaManager(elementId) {
        _classCallCheck(this, VerovioMediaManager);

        if (!elementId) {
            throw new Error('a string value is required for "elementId"');
        }
        this._element = (0, _jquery2.default)('#' + elementId);
        this._verovioMediaMap = new Map();
        this._verovioMediaIndex = 0;
        this._currentActive = null;
    }

    /**
     * Returns associated VerovioMedia instance for URL, null if DNE.
     *
     * @public
     * @param {string} url - URL of audio
     * @return {VerovioMedia} associated VerovioMedia if loaded, else null
     */


    _createClass(VerovioMediaManager, [{
        key: 'getVerovioMedia',
        value: function getVerovioMedia(url) {
            return this._verovioMediaMap.get(url) || null;
        }

        /**
         * Loads MEI into a new VerovioMedia instance (if one does not already exist
         * for the specified MEI).
         *
         * @public
         * @param {string} url - URL of MEI
         * @param {string} meiString - MEI text
         * @param {number} noteSpacing - Verovio note spacing
         * @param {number} topMarginPercet - Verovio containing div top margin value
         */

    }, {
        key: 'load',
        value: function load(url, meiString, noteSpacing, topMarginPercet) {
            if (this._currentActive) {
                this._currentActive.deactivate();
                this._currentActive = null;
            }

            // Check if media already exists.
            if (this.getVerovioMedia(url)) {
                _EventHandler2.default.publishEvent(_SingalongEvent2.default.VEROVIO_SVGCREATED, { url: url });
                return;
            }

            var newDivId = this._createNewDiv();
            var media = new _VerovioMedia2.default(newDivId, url, meiString, noteSpacing, topMarginPercet);
            this._verovioMediaMap.set(url, media);
            this.activate(url);
            _EventHandler2.default.publishEvent(_SingalongEvent2.default.VEROVIO_SVGCREATED, { url: url });
        }

        /**
         * Given a MEI URL, sets the associated Verovio SVG of that MEI
         * as the active Verovio SVG and displays.
         *
         * @param {string} url - URL of associated MEI
         * @throws {Error} thrown if VerovioMedia for URL does not exist
         */

    }, {
        key: 'activate',
        value: function activate(url) {
            // Check if exists.
            var media = this.getVerovioMedia(url);
            if (!media) {
                throw new Error('no VerovioMedia exists for ' + url);
            }

            if (this._currentActive) {
                this._currentActive.deactivate();
                this._currentActive = null;
            }
            this._currentActive = media;
            media.activate();
        }

        /**
         * Deactivates the current active Verovio SVG.
         */

    }, {
        key: 'deactivate',
        value: function deactivate(url) {
            this.getVerovioMedia(url).deactivate();
        }

        ////////////////////////////////////////////////////////////////////////////////
        // PRIVATE
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Creates a div element and attaches it to the base div defined when the 
         * VerovioMediaManager was created.
         *
         * @return {string} ID of new div
         * @private
         */

    }, {
        key: '_createNewDiv',
        value: function _createNewDiv() {
            var newDivId = DIV_ELEMENT_PREFIX + this._verovioMediaIndex;
            this._element.append('<div id="' + newDivId + '" class="' + DIV_ELEMENT_PREFIX + '"></div>');
            this._verovioMediaIndex++;
            return newDivId;
        }
    }]);

    return VerovioMediaManager;
}();

exports.default = VerovioMediaManager;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Application = __webpack_require__(6);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var application = new _Application2.default('meisingalong'); /**
                                                              * Entry point of production application.
                                                              */

/***/ })
/******/ ]);
});