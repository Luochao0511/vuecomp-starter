import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/debounce.js
var require_debounce = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/debounce.js"(exports, module) {
    function debounce(callback, wait, options) {
      var args, context;
      var opts = options || {};
      var runFlag = false;
      var isDestroy = false;
      var timeout = 0;
      var isLeading = typeof options === "boolean";
      var optLeading = "leading" in opts ? opts.leading : isLeading;
      var optTrailing = "trailing" in opts ? opts.trailing : !isLeading;
      var runFn = function() {
        if (!isDestroy) {
          runFlag = true;
          timeout = 0;
          callback.apply(context, args);
        }
      };
      var endFn = function() {
        if (optLeading === true) {
          timeout = 0;
        }
        if (!isDestroy && !runFlag && optTrailing === true) {
          runFn();
        }
      };
      var cancelFn = function() {
        var rest = timeout !== 0;
        clearTimeout(timeout);
        args = null;
        context = null;
        timeout = 0;
        return rest;
      };
      var debounced = function() {
        runFlag = false;
        args = arguments;
        context = this;
        if (timeout === 0) {
          if (optLeading === true) {
            runFn();
          }
        } else {
          clearTimeout(timeout);
        }
        timeout = setTimeout(endFn, wait);
      };
      debounced.cancel = cancelFn;
      return debounced;
    }
    module.exports = debounce;
  }
});
export default require_debounce();
//# sourceMappingURL=xe-utils_debounce.js.map
