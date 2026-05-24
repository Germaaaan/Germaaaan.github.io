(function() {
  'use strict';
  var existCurrentScriptFn = true;
  if (!document.currentScript) {
    existCurrentScriptFn = false;
    document.currentScript = (function() {
      var scripts = document.getElementsByTagName('script');
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        var src = script.src;
        if (src.indexOf('cercalia.com/maps/loader.js') !== -1) {
          return script;
        }
      }
      return scripts[scripts.length - 1]; //Default.
    })();
  }

  if (!document.currentScript.get) {
    document.currentScript.get = function(variable) {
      if (variable = (new RegExp('[?&]' + encodeURIComponent(variable) + '=([^&]*)')).exec(this.src)) {
        return decodeURIComponent(variable[1]);
      }
    };
  }

  var DEFAULT_VERSION = 4;
  var DEFAULT_THEME = 'teal-800';
  var DEFAULT_LANGUAGE = 'en';
  var SERVER_DOMAIN = 'maps.cercalia.com';
  var WEBCOMPONENTS_VERSION = '%WEBCOMPONENTS_VERSION%';
  var protocol = ['http:', 'https:'].indexOf(window.location.protocol) > -1 ? window.location.protocol : 'https:';
  var urlServlet = protocol + '//maps.cercalia.com/api/auth';
  var key = document.currentScript.get('key');
  var version = document.currentScript.get('v') ? document.currentScript.get('v') : DEFAULT_VERSION;
  var theme = document.currentScript.get('theme') ? document.currentScript.get('theme') : DEFAULT_THEME;
  var lang = document.currentScript.get('lang') ? document.currentScript.get('lang') : DEFAULT_LANGUAGE;
  var debug = document.currentScript.get('debug') ? document.currentScript.get('debug') : false;
  var noconflict = document.currentScript.get('noconflict') === '1';

  var timeout = 6000;
  if (['ca', 'de', 'en', 'es', 'fr', 'pt', 'it'].indexOf(lang) === -1) {
    lang = DEFAULT_LANGUAGE;
  }

  var baseApi = protocol + '//' + SERVER_DOMAIN + '/maps/v' + version;
  var urlApiJs = baseApi + (!debug ? '/cercalia.min.js' : '/cercalia.debug.js');
  var urlApiCss = baseApi + '/cercalia.css';
  if (!existCurrentScriptFn) {
    document.currentScript = undefined;
  }

  var getCss = function(src) {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', src);
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  /**
   * @param {string} src Src.
   */
  var getScript = function(src) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  /**
   * @param {Object} data Data response.
   */
  var callbackFn = function(data) {
    if (data.error) {
      console.error('Error loading Cercalia APP', data.errorMessage);
    } else {
      var authkey = data.authkey;
      urlApiJs += '?' +
          'v=' + version +
          '&lang=' + lang +
          '&key=' + key +
          '&authkey=' + authkey +
          '&theme=' + theme +
          '&wcv=' + WEBCOMPONENTS_VERSION +
          (noconflict ? '&noconflict=1' : '');
      getCss(urlApiCss);
      getScript(urlApiJs);
    }
  };

  /**
   * @param {Object} data Data
   */
  var callbackFnError = function(data) {
    console.error('Error ajax request getting auth', data);
  };

  /**
   * @param {string} urlServlet Servlet
   * @param {string} key Key
   * @param {string=} opt_version Version
   */
  var ajaxRequest = function() {
    urlServlet += '?key=' + key + '&v=' + version;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlServlet, true);
    xhr.timeout = timeout;
    xhr.onload = function(event) {
      if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
        var data = /** @type {Object} */ (JSON.parse(xhr.responseText));
        if (callbackFn) {
          callbackFn.call(this, data);
        }
      } else {
        callbackFnError.call(this, event);
      }
    };
    xhr.ontimeout = function(event) {
      console.error('Ajax request timeout [' + urlServlet + ']', event);
    };
    xhr.send();
  };
  ajaxRequest();
}).call(this, {});
