import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/setupDefaults.js
var require_setupDefaults = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/setupDefaults.js"(exports, module) {
    "use strict";
    var setupDefaults = {
      cookies: {
        path: "/"
      },
      treeOptions: {
        parentKey: "parentId",
        key: "id",
        children: "children"
      },
      parseDateFormat: "yyyy-MM-dd HH:mm:ss",
      firstDayOfWeek: 1
    };
    module.exports = setupDefaults;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperStringUpperCase.js
var require_helperStringUpperCase = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperStringUpperCase.js"(exports, module) {
    function helperStringUpperCase(str) {
      return str.toUpperCase();
    }
    module.exports = helperStringUpperCase;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetDateFullYear.js
var require_helperGetDateFullYear = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetDateFullYear.js"(exports, module) {
    function helperGetDateFullYear(date) {
      return date.getFullYear();
    }
    module.exports = helperGetDateFullYear;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetDateMonth.js
var require_helperGetDateMonth = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetDateMonth.js"(exports, module) {
    function helperGetDateMonth(date) {
      return date.getMonth();
    }
    module.exports = helperGetDateMonth;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticParseInt.js
var require_staticParseInt = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticParseInt.js"(exports, module) {
    var staticParseInt = parseInt;
    module.exports = staticParseInt;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetUTCDateTime.js
var require_helperGetUTCDateTime = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetUTCDateTime.js"(exports, module) {
    function helperGetUTCDateTime(resMaps) {
      return Date.UTC(resMaps.y, resMaps.M || 0, resMaps.d || 1, resMaps.H || 0, resMaps.m || 0, resMaps.s || 0, resMaps.S || 0);
    }
    module.exports = helperGetUTCDateTime;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetDateTime.js
var require_helperGetDateTime = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetDateTime.js"(exports, module) {
    function helperGetDateTime(date) {
      return date.getTime();
    }
    module.exports = helperGetDateTime;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateInTypeof.js
var require_helperCreateInTypeof = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateInTypeof.js"(exports, module) {
    function helperCreateInTypeof(type) {
      return function(obj) {
        return typeof obj === type;
      };
    }
    module.exports = helperCreateInTypeof;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isString.js
var require_isString = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isString.js"(exports, module) {
    var helperCreateInTypeof = require_helperCreateInTypeof();
    var isString = helperCreateInTypeof("string");
    module.exports = isString;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticObjectToString.js
var require_staticObjectToString = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticObjectToString.js"(exports, module) {
    var objectToString = Object.prototype.toString;
    module.exports = objectToString;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateInInObjectString.js
var require_helperCreateInInObjectString = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateInInObjectString.js"(exports, module) {
    var objectToString = require_staticObjectToString();
    function helperCreateInInObjectString(type) {
      return function(obj) {
        return "[object " + type + "]" === objectToString.call(obj);
      };
    }
    module.exports = helperCreateInInObjectString;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isDate.js
var require_isDate = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isDate.js"(exports, module) {
    var helperCreateInInObjectString = require_helperCreateInInObjectString();
    var isDate = helperCreateInInObjectString("Date");
    module.exports = isDate;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toStringDate.js
var require_toStringDate = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toStringDate.js"(exports, module) {
    var staticParseInt = require_staticParseInt();
    var helperGetUTCDateTime = require_helperGetUTCDateTime();
    var helperGetDateTime = require_helperGetDateTime();
    var isString = require_isString();
    var isDate = require_isDate();
    function getParseRule(txt) {
      return "(\\d{" + txt + "})";
    }
    function toParseMs(num) {
      if (num < 10) {
        return num * 100;
      } else if (num < 100) {
        return num * 10;
      }
      return num;
    }
    function toParseNum(num) {
      return isNaN(num) ? num : staticParseInt(num);
    }
    var d2 = getParseRule(2);
    var d1or2 = getParseRule("1,2");
    var d1or7 = getParseRule("1,7");
    var d3or4 = getParseRule("3,4");
    var place = ".{1}";
    var d1Or2RE = place + d1or2;
    var dzZ = "(([zZ])|([-+]\\d{2}:?\\d{2}))";
    var defaulParseStrs = [d3or4, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, place + d1or7, dzZ];
    var defaulParseREs = [];
    for (len = defaulParseStrs.length - 1; len >= 0; len--) {
      rule = "";
      for (i = 0; i < len + 1; i++) {
        rule += defaulParseStrs[i];
      }
      defaulParseREs.push(new RegExp("^" + rule + "$"));
    }
    var rule;
    var i;
    var len;
    function parseDefaultRules(str) {
      var matchRest, resMaps = {};
      for (var i2 = 0, dfrLen = defaulParseREs.length; i2 < dfrLen; i2++) {
        matchRest = str.match(defaulParseREs[i2]);
        if (matchRest) {
          resMaps.y = matchRest[1];
          resMaps.M = matchRest[2];
          resMaps.d = matchRest[3];
          resMaps.H = matchRest[4];
          resMaps.m = matchRest[5];
          resMaps.s = matchRest[6];
          resMaps.S = matchRest[7];
          resMaps.Z = matchRest[8];
          break;
        }
      }
      return resMaps;
    }
    var customParseStrs = [
      ["yyyy", d3or4],
      ["yy", d2],
      ["MM", d2],
      ["M", d1or2],
      ["dd", d2],
      ["d", d1or2],
      ["HH", d2],
      ["H", d1or2],
      ["mm", d2],
      ["m", d1or2],
      ["ss", d2],
      ["s", d1or2],
      ["SSS", getParseRule(3)],
      ["S", d1or7],
      ["Z", dzZ]
    ];
    var parseRuleMaps = {};
    var parseRuleKeys = ["\\[([^\\]]+)\\]"];
    for (i = 0; i < customParseStrs.length; i++) {
      itemRule = customParseStrs[i];
      parseRuleMaps[itemRule[0]] = itemRule[1] + "?";
      parseRuleKeys.push(itemRule[0]);
    }
    var itemRule;
    var i;
    var customParseRes = new RegExp(parseRuleKeys.join("|"), "g");
    var cacheFormatMaps = {};
    function parseCustomRules(str, format) {
      var cacheItem = cacheFormatMaps[format];
      if (!cacheItem) {
        var posIndexs = [];
        var re = format.replace(/([$(){}*+.?\\^|])/g, "\\$1").replace(customParseRes, function(text, val) {
          var firstChar = text.charAt(0);
          if (firstChar === "[") {
            return val;
          }
          posIndexs.push(firstChar);
          return parseRuleMaps[text];
        });
        cacheItem = cacheFormatMaps[format] = {
          _i: posIndexs,
          _r: new RegExp(re)
        };
      }
      var resMaps = {};
      var matchRest = str.match(cacheItem._r);
      if (matchRest) {
        var _i = cacheItem._i;
        for (var i2 = 1, len2 = matchRest.length; i2 < len2; i2++) {
          resMaps[_i[i2 - 1]] = matchRest[i2];
        }
        return resMaps;
      }
      return resMaps;
    }
    function parseTimeZone(resMaps) {
      if (/^[zZ]/.test(resMaps.Z)) {
        return new Date(helperGetUTCDateTime(resMaps));
      } else {
        var matchRest = resMaps.Z.match(/([-+])(\d{2}):?(\d{2})/);
        if (matchRest) {
          return new Date(helperGetUTCDateTime(resMaps) - (matchRest[1] === "-" ? -1 : 1) * staticParseInt(matchRest[2]) * 36e5 + staticParseInt(matchRest[3]) * 6e4);
        }
      }
      return /* @__PURE__ */ new Date("");
    }
    function toStringDate(str, format) {
      if (str) {
        var isDType = isDate(str);
        if (isDType || !format && /^[0-9]{11,15}$/.test(str)) {
          return new Date(isDType ? helperGetDateTime(str) : staticParseInt(str));
        }
        if (isString(str)) {
          var resMaps = format ? parseCustomRules(str, format) : parseDefaultRules(str);
          if (resMaps.y) {
            if (resMaps.M) {
              resMaps.M = toParseNum(resMaps.M) - 1;
            }
            if (resMaps.S) {
              resMaps.S = toParseMs(toParseNum(resMaps.S.substring(0, 3)));
            }
            if (resMaps.Z) {
              return parseTimeZone(resMaps);
            } else {
              return new Date(resMaps.y, resMaps.M || 0, resMaps.d || 1, resMaps.H || 0, resMaps.m || 0, resMaps.s || 0, resMaps.S || 0);
            }
          }
        }
      }
      return /* @__PURE__ */ new Date("");
    }
    module.exports = toStringDate;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticDayTime.js
var require_staticDayTime = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticDayTime.js"(exports, module) {
    var staticDayTime = 864e5;
    module.exports = staticDayTime;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticWeekTime.js
var require_staticWeekTime = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticWeekTime.js"(exports, module) {
    var staticDayTime = require_staticDayTime();
    var staticWeekTime = staticDayTime * 7;
    module.exports = staticWeekTime;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isNumber.js"(exports, module) {
    var helperCreateInTypeof = require_helperCreateInTypeof();
    var isNumber = helperCreateInTypeof("number");
    module.exports = isNumber;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isValidDate.js
var require_isValidDate = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isValidDate.js"(exports, module) {
    var isDate = require_isDate();
    var helperGetDateTime = require_helperGetDateTime();
    function isValidDate(val) {
      return isDate(val) && !isNaN(helperGetDateTime(val));
    }
    module.exports = isValidDate;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getWhatWeek.js
var require_getWhatWeek = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getWhatWeek.js"(exports, module) {
    var setupDefaults = require_setupDefaults();
    var staticDayTime = require_staticDayTime();
    var staticWeekTime = require_staticWeekTime();
    var helperGetDateTime = require_helperGetDateTime();
    var toStringDate = require_toStringDate();
    var isValidDate = require_isValidDate();
    var isNumber = require_isNumber();
    function getWhatWeek(date, offsetWeek, offsetDay, firstDay) {
      date = toStringDate(date);
      if (isValidDate(date)) {
        var hasCustomDay = isNumber(offsetDay);
        var hasStartDay = isNumber(firstDay);
        var whatDayTime = helperGetDateTime(date);
        if (hasCustomDay || hasStartDay) {
          var viewStartDay = hasStartDay ? firstDay : setupDefaults.firstDayOfWeek;
          var currentDay = date.getDay();
          var customDay = hasCustomDay ? offsetDay : currentDay;
          if (currentDay !== customDay) {
            var offsetNum = 0;
            if (viewStartDay > currentDay) {
              offsetNum = -(7 - viewStartDay + currentDay);
            } else if (viewStartDay < currentDay) {
              offsetNum = viewStartDay - currentDay;
            }
            if (customDay > viewStartDay) {
              whatDayTime += ((customDay === 0 ? 7 : customDay) - viewStartDay + offsetNum) * staticDayTime;
            } else if (customDay < viewStartDay) {
              whatDayTime += (7 - viewStartDay + customDay + offsetNum) * staticDayTime;
            } else {
              whatDayTime += offsetNum * staticDayTime;
            }
          }
        }
        if (offsetWeek && !isNaN(offsetWeek)) {
          whatDayTime += offsetWeek * staticWeekTime;
        }
        return new Date(whatDayTime);
      }
      return date;
    }
    module.exports = getWhatWeek;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateGetDateWeek.js
var require_helperCreateGetDateWeek = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateGetDateWeek.js"(exports, module) {
    var setupDefaults = require_setupDefaults();
    var staticWeekTime = require_staticWeekTime();
    var isNumber = require_isNumber();
    var isValidDate = require_isValidDate();
    var getWhatWeek = require_getWhatWeek();
    var helperGetDateTime = require_helperGetDateTime();
    function helperCreateGetDateWeek(getStartDate) {
      return function(date, firstDay) {
        var viewStartDay = isNumber(firstDay) ? firstDay : setupDefaults.firstDayOfWeek;
        var targetDate = getWhatWeek(date, 0, viewStartDay, viewStartDay);
        if (isValidDate(targetDate)) {
          var targetOffsetDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
          var targerStartDate = getStartDate(targetDate);
          var targetFirstDay = targerStartDate.getDay();
          if (targetFirstDay > viewStartDay) {
            targerStartDate.setDate(7 - targetFirstDay + viewStartDay + 1);
          }
          if (targetFirstDay < viewStartDay) {
            targerStartDate.setDate(viewStartDay - targetFirstDay + 1);
          }
          return Math.floor((helperGetDateTime(targetOffsetDate) - helperGetDateTime(targerStartDate)) / staticWeekTime + 1);
        }
        return NaN;
      };
    }
    module.exports = helperCreateGetDateWeek;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getYearWeek.js
var require_getYearWeek = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getYearWeek.js"(exports, module) {
    var helperCreateGetDateWeek = require_helperCreateGetDateWeek();
    var getYearWeek = helperCreateGetDateWeek(function(targetDate) {
      return new Date(targetDate.getFullYear(), 0, 1);
    });
    module.exports = getYearWeek;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticStrFirst.js
var require_staticStrFirst = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticStrFirst.js"(exports, module) {
    var staticStrFirst = "first";
    module.exports = staticStrFirst;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetYMD.js
var require_helperGetYMD = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetYMD.js"(exports, module) {
    var helperGetDateFullYear = require_helperGetDateFullYear();
    var helperGetDateMonth = require_helperGetDateMonth();
    function helperGetYMD(date) {
      return new Date(helperGetDateFullYear(date), helperGetDateMonth(date), date.getDate());
    }
    module.exports = helperGetYMD;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetYMDTime.js
var require_helperGetYMDTime = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperGetYMDTime.js"(exports, module) {
    var helperGetDateTime = require_helperGetDateTime();
    var helperGetYMD = require_helperGetYMD();
    function helperGetYMDTime(date) {
      return helperGetDateTime(helperGetYMD(date));
    }
    module.exports = helperGetYMDTime;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticStrLast.js
var require_staticStrLast = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticStrLast.js"(exports, module) {
    var staticStrLast = "last";
    module.exports = staticStrLast;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getWhatMonth.js
var require_getWhatMonth = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getWhatMonth.js"(exports, module) {
    var staticStrFirst = require_staticStrFirst();
    var staticStrLast = require_staticStrLast();
    var staticDayTime = require_staticDayTime();
    var helperGetDateFullYear = require_helperGetDateFullYear();
    var helperGetDateTime = require_helperGetDateTime();
    var helperGetDateMonth = require_helperGetDateMonth();
    var toStringDate = require_toStringDate();
    var isValidDate = require_isValidDate();
    var isNumber = require_isNumber();
    function getWhatMonth(date, offsetMonth, offsetDay) {
      var monthNum = offsetMonth && !isNaN(offsetMonth) ? offsetMonth : 0;
      date = toStringDate(date);
      if (isValidDate(date)) {
        if (offsetDay === staticStrFirst) {
          return new Date(helperGetDateFullYear(date), helperGetDateMonth(date) + monthNum, 1);
        } else if (offsetDay === staticStrLast) {
          return new Date(helperGetDateTime(getWhatMonth(date, monthNum + 1, staticStrFirst)) - 1);
        } else if (isNumber(offsetDay)) {
          date.setDate(offsetDay);
        }
        if (monthNum) {
          var currDate = date.getDate();
          date.setMonth(helperGetDateMonth(date) + monthNum);
          if (currDate !== date.getDate()) {
            date.setDate(1);
            return new Date(helperGetDateTime(date) - staticDayTime);
          }
        }
      }
      return date;
    }
    module.exports = getWhatMonth;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getWhatYear.js
var require_getWhatYear = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getWhatYear.js"(exports, module) {
    var staticStrFirst = require_staticStrFirst();
    var staticStrLast = require_staticStrLast();
    var helperGetDateFullYear = require_helperGetDateFullYear();
    var getWhatMonth = require_getWhatMonth();
    var toStringDate = require_toStringDate();
    var isValidDate = require_isValidDate();
    function getWhatYear(date, offset, month) {
      var number;
      date = toStringDate(date);
      if (isValidDate(date)) {
        if (offset) {
          number = offset && !isNaN(offset) ? offset : 0;
          date.setFullYear(helperGetDateFullYear(date) + number);
        }
        if (month || !isNaN(month)) {
          if (month === staticStrFirst) {
            return new Date(helperGetDateFullYear(date), 0, 1);
          } else if (month === staticStrLast) {
            date.setMonth(11);
            return getWhatMonth(date, 0, staticStrLast);
          } else {
            date.setMonth(month);
          }
        }
      }
      return date;
    }
    module.exports = getWhatYear;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getYearDay.js
var require_getYearDay = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/getYearDay.js"(exports, module) {
    var staticDayTime = require_staticDayTime();
    var staticStrFirst = require_staticStrFirst();
    var helperGetYMDTime = require_helperGetYMDTime();
    var getWhatYear = require_getWhatYear();
    var toStringDate = require_toStringDate();
    var isValidDate = require_isValidDate();
    function getYearDay(date) {
      date = toStringDate(date);
      if (isValidDate(date)) {
        return Math.floor((helperGetYMDTime(date) - helperGetYMDTime(getWhatYear(date, 0, staticStrFirst))) / staticDayTime) + 1;
      }
      return NaN;
    }
    module.exports = getYearDay;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/arrayEach.js"(exports, module) {
    function arrayEach(list, iterate, context) {
      if (list) {
        if (list.forEach) {
          list.forEach(iterate, context);
        } else {
          for (var index = 0, len = list.length; index < len; index++) {
            iterate.call(context, list[index], index, list);
          }
        }
      }
    }
    module.exports = arrayEach;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isArray.js
var require_isArray = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isArray.js"(exports, module) {
    var helperCreateInInObjectString = require_helperCreateInInObjectString();
    var isArray = Array.isArray || helperCreateInInObjectString("Array");
    module.exports = isArray;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/hasOwnProp.js
var require_hasOwnProp = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/hasOwnProp.js"(exports, module) {
    function hasOwnProp(obj, key) {
      return obj && obj.hasOwnProperty ? obj.hasOwnProperty(key) : false;
    }
    module.exports = hasOwnProp;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/objectEach.js
var require_objectEach = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/objectEach.js"(exports, module) {
    var hasOwnProp = require_hasOwnProp();
    function objectEach(obj, iterate, context) {
      if (obj) {
        for (var key in obj) {
          if (hasOwnProp(obj, key)) {
            iterate.call(context, obj[key], key, obj);
          }
        }
      }
    }
    module.exports = objectEach;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/each.js
var require_each = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/each.js"(exports, module) {
    var isArray = require_isArray();
    var arrayEach = require_arrayEach();
    var objectEach = require_objectEach();
    function each(obj, iterate, context) {
      if (obj) {
        return (isArray(obj) ? arrayEach : objectEach)(obj, iterate, context);
      }
      return obj;
    }
    module.exports = each;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateGetObjects.js
var require_helperCreateGetObjects = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperCreateGetObjects.js"(exports, module) {
    var each = require_each();
    function helperCreateGetObjects(name, getIndex) {
      var proMethod = Object[name];
      return function(obj) {
        var result = [];
        if (obj) {
          if (proMethod) {
            return proMethod(obj);
          }
          each(obj, getIndex > 1 ? function(key) {
            result.push(["" + key, obj[key]]);
          } : function() {
            result.push(arguments[getIndex]);
          });
        }
        return result;
      };
    }
    module.exports = helperCreateGetObjects;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/keys.js
var require_keys = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/keys.js"(exports, module) {
    var helperCreateGetObjects = require_helperCreateGetObjects();
    var keys = helperCreateGetObjects("keys", 1);
    module.exports = keys;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/clone.js
var require_clone = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/clone.js"(exports, module) {
    var objectToString = require_staticObjectToString();
    var objectEach = require_objectEach();
    var arrayEach = require_arrayEach();
    function getCativeCtor(val, args) {
      var Ctor = val.__proto__.constructor;
      return args ? new Ctor(args) : new Ctor();
    }
    function handleValueClone(item, isDeep) {
      return isDeep ? copyValue(item, isDeep) : item;
    }
    function copyValue(val, isDeep) {
      if (val) {
        switch (objectToString.call(val)) {
          case "[object Object]": {
            var restObj = Object.create(val.__proto__);
            objectEach(val, function(item, key) {
              restObj[key] = handleValueClone(item, isDeep);
            });
            return restObj;
          }
          case "[object Date]":
          case "[object RegExp]": {
            return getCativeCtor(val, val.valueOf());
          }
          case "[object Array]":
          case "[object Arguments]": {
            var restArr = [];
            arrayEach(val, function(item) {
              restArr.push(handleValueClone(item, isDeep));
            });
            return restArr;
          }
          case "[object Set]": {
            var restSet = getCativeCtor(val);
            restSet.forEach(function(item) {
              restSet.add(handleValueClone(item, isDeep));
            });
            return restSet;
          }
          case "[object Map]": {
            var restMap = getCativeCtor(val);
            restMap.forEach(function(item, key) {
              restMap.set(key, handleValueClone(item, isDeep));
            });
            return restMap;
          }
        }
      }
      return val;
    }
    function clone(obj, deep) {
      if (obj) {
        return copyValue(obj, deep);
      }
      return obj;
    }
    module.exports = clone;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/assign.js
var require_assign = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/assign.js"(exports, module) {
    var arrayEach = require_arrayEach();
    var keys = require_keys();
    var isArray = require_isArray();
    var clone = require_clone();
    var objectAssignFns = Object.assign;
    function handleAssign(destination, args, isClone) {
      var len = args.length;
      for (var source, index = 1; index < len; index++) {
        source = args[index];
        arrayEach(keys(args[index]), isClone ? function(key) {
          destination[key] = clone(source[key], isClone);
        } : function(key) {
          destination[key] = source[key];
        });
      }
      return destination;
    }
    var assign = function(target) {
      if (target) {
        var args = arguments;
        if (target === true) {
          if (args.length > 1) {
            target = isArray(target[1]) ? [] : {};
            return handleAssign(target, args, true);
          }
        } else {
          return objectAssignFns ? objectAssignFns.apply(Object, args) : handleAssign(target, args);
        }
      }
      return target;
    };
    module.exports = assign;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isFunction.js"(exports, module) {
    var helperCreateInTypeof = require_helperCreateInTypeof();
    var isFunction = helperCreateInTypeof("function");
    module.exports = isFunction;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isNull.js
var require_isNull = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isNull.js"(exports, module) {
    function isNull(obj) {
      return obj === null;
    }
    module.exports = isNull;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticStrUndefined.js
var require_staticStrUndefined = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/staticStrUndefined.js"(exports, module) {
    var staticStrUndefined = "undefined";
    module.exports = staticStrUndefined;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isUndefined.js
var require_isUndefined = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/isUndefined.js"(exports, module) {
    var staticStrUndefined = require_staticStrUndefined();
    var helperCreateInTypeof = require_helperCreateInTypeof();
    var isUndefined = helperCreateInTypeof(staticStrUndefined);
    module.exports = isUndefined;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/eqNull.js
var require_eqNull = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/eqNull.js"(exports, module) {
    var isNull = require_isNull();
    var isUndefined = require_isUndefined();
    function eqNull(obj) {
      return isNull(obj) || isUndefined(obj);
    }
    module.exports = eqNull;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperStringRepeat.js
var require_helperStringRepeat = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperStringRepeat.js"(exports, module) {
    var staticParseInt = require_staticParseInt();
    function helperStringRepeat(str, count) {
      if (str.repeat) {
        return str.repeat(count);
      }
      var list = isNaN(count) ? [] : new Array(staticParseInt(count));
      return list.join(str) + (list.length > 0 ? str : "");
    }
    module.exports = helperStringRepeat;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperNumberOffsetPoint.js
var require_helperNumberOffsetPoint = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/helperNumberOffsetPoint.js"(exports, module) {
    function helperNumberOffsetPoint(str, offsetIndex) {
      return str.substring(0, offsetIndex) + "." + str.substring(offsetIndex, str.length);
    }
    module.exports = helperNumberOffsetPoint;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toNumberString.js
var require_toNumberString = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toNumberString.js"(exports, module) {
    var helperStringRepeat = require_helperStringRepeat();
    var helperNumberOffsetPoint = require_helperNumberOffsetPoint();
    function toNumberString(num) {
      var rest = "" + num;
      var scienceMatchs = rest.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/);
      if (scienceMatchs) {
        var isNegative = num < 0;
        var absFlag = isNegative ? "-" : "";
        var intNumStr = scienceMatchs[3] || "";
        var dIntNumStr = scienceMatchs[5] || "";
        var dFloatNumStr = scienceMatchs[6] || "";
        var sciencFlag = scienceMatchs[7];
        var scienceNumStr = scienceMatchs[8];
        var floatOffsetIndex = scienceNumStr - dFloatNumStr.length;
        var intOffsetIndex = scienceNumStr - intNumStr.length;
        var dIntOffsetIndex = scienceNumStr - dIntNumStr.length;
        if (sciencFlag === "+") {
          if (intNumStr) {
            return absFlag + intNumStr + helperStringRepeat("0", scienceNumStr);
          }
          if (floatOffsetIndex > 0) {
            return absFlag + dIntNumStr + dFloatNumStr + helperStringRepeat("0", floatOffsetIndex);
          }
          return absFlag + dIntNumStr + helperNumberOffsetPoint(dFloatNumStr, scienceNumStr);
        }
        if (intNumStr) {
          if (intOffsetIndex > 0) {
            return absFlag + "0." + helperStringRepeat("0", Math.abs(intOffsetIndex)) + intNumStr;
          }
          return absFlag + helperNumberOffsetPoint(intNumStr, intOffsetIndex);
        }
        if (dIntOffsetIndex > 0) {
          return absFlag + "0." + helperStringRepeat("0", Math.abs(dIntOffsetIndex)) + dIntNumStr + dFloatNumStr;
        }
        return absFlag + helperNumberOffsetPoint(dIntNumStr, dIntOffsetIndex) + dFloatNumStr;
      }
      return rest;
    }
    module.exports = toNumberString;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toValueString.js
var require_toValueString = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toValueString.js"(exports, module) {
    var eqNull = require_eqNull();
    var isNumber = require_isNumber();
    var toNumberString = require_toNumberString();
    function toValueString(obj) {
      if (isNumber(obj)) {
        return toNumberString(obj);
      }
      return "" + (eqNull(obj) ? "" : obj);
    }
    module.exports = toValueString;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/padStart.js
var require_padStart = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/padStart.js"(exports, module) {
    var toValueString = require_toValueString();
    var isUndefined = require_isUndefined();
    var helperStringRepeat = require_helperStringRepeat();
    function padStart(str, targetLength, padString) {
      var rest = toValueString(str);
      targetLength = targetLength >> 0;
      padString = isUndefined(padString) ? " " : "" + padString;
      if (rest.padStart) {
        return rest.padStart(targetLength, padString);
      }
      if (targetLength > rest.length) {
        targetLength -= rest.length;
        if (targetLength > padString.length) {
          padString += helperStringRepeat(padString, targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + rest;
      }
      return rest;
    }
    module.exports = padStart;
  }
});

// node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toDateString.js
var require_toDateString = __commonJS({
  "node_modules/.pnpm/xe-utils@3.5.20/node_modules/xe-utils/toDateString.js"(exports, module) {
    var setupDefaults = require_setupDefaults();
    var helperStringUpperCase = require_helperStringUpperCase();
    var helperGetDateFullYear = require_helperGetDateFullYear();
    var helperGetDateMonth = require_helperGetDateMonth();
    var toStringDate = require_toStringDate();
    var getYearWeek = require_getYearWeek();
    var getYearDay = require_getYearDay();
    var assign = require_assign();
    var isValidDate = require_isValidDate();
    var isFunction = require_isFunction();
    var padStart = require_padStart();
    function handleCustomTemplate(date, formats, match, value) {
      var format = formats[match];
      if (format) {
        if (isFunction(format)) {
          return format(value, match, date);
        } else {
          return format[value];
        }
      }
      return value;
    }
    var dateFormatRE = /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g;
    function toDateString(date, format, options) {
      if (date) {
        date = toStringDate(date);
        if (isValidDate(date)) {
          var result = format || setupDefaults.parseDateFormat || setupDefaults.formatString;
          var hours = date.getHours();
          var apm = hours < 12 ? "am" : "pm";
          var formats = assign({}, setupDefaults.parseDateRules || setupDefaults.formatStringMatchs, options ? options.formats : null);
          var fy = function(match, length) {
            return ("" + helperGetDateFullYear(date)).substr(4 - length);
          };
          var fM = function(match, length) {
            return padStart(helperGetDateMonth(date) + 1, length, "0");
          };
          var fd = function(match, length) {
            return padStart(date.getDate(), length, "0");
          };
          var fH = function(match, length) {
            return padStart(hours, length, "0");
          };
          var fh = function(match, length) {
            return padStart(hours <= 12 ? hours : hours - 12, length, "0");
          };
          var fm = function(match, length) {
            return padStart(date.getMinutes(), length, "0");
          };
          var fs = function(match, length) {
            return padStart(date.getSeconds(), length, "0");
          };
          var fS = function(match, length) {
            return padStart(date.getMilliseconds(), length, "0");
          };
          var fZ = function(match, length) {
            var zoneHours = date.getTimezoneOffset() / 60 * -1;
            return handleCustomTemplate(date, formats, match, (zoneHours >= 0 ? "+" : "-") + padStart(zoneHours, 2, "0") + (length === 1 ? ":" : "") + "00");
          };
          var fW = function(match, length) {
            return padStart(handleCustomTemplate(date, formats, match, getYearWeek(date, (options ? options.firstDay : null) || setupDefaults.firstDayOfWeek)), length, "0");
          };
          var fD = function(match, length) {
            return padStart(handleCustomTemplate(date, formats, match, getYearDay(date)), length, "0");
          };
          var parseDates = {
            yyyy: fy,
            yy: fy,
            MM: fM,
            M: fM,
            dd: fd,
            d: fd,
            HH: fH,
            H: fH,
            hh: fh,
            h: fh,
            mm: fm,
            m: fm,
            ss: fs,
            s: fs,
            SSS: fS,
            S: fS,
            ZZ: fZ,
            Z: fZ,
            WW: fW,
            W: fW,
            DDD: fD,
            D: fD,
            a: function(match) {
              return handleCustomTemplate(date, formats, match, apm);
            },
            A: function(match) {
              return handleCustomTemplate(date, formats, match, helperStringUpperCase(apm));
            },
            e: function(match) {
              return handleCustomTemplate(date, formats, match, date.getDay());
            },
            E: function(match) {
              return handleCustomTemplate(date, formats, match, date.getDay());
            },
            q: function(match) {
              return handleCustomTemplate(date, formats, match, Math.floor((helperGetDateMonth(date) + 3) / 3));
            }
          };
          return result.replace(dateFormatRE, function(match, skip) {
            return skip || (parseDates[match] ? parseDates[match](match, match.length) : match);
          });
        }
        return "Invalid Date";
      }
      return "";
    }
    module.exports = toDateString;
  }
});
export default require_toDateString();
//# sourceMappingURL=xe-utils_toDateString.js.map
