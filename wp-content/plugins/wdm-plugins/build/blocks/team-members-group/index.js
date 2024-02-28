/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cssesc/cssesc.js":
/*!***************************************!*\
  !*** ./node_modules/cssesc/cssesc.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
/*! https://mths.be/cssesc v3.0.0 by @mathias */


var object = {};
var hasOwnProperty = object.hasOwnProperty;
var merge = function merge(options, defaults) {
	if (!options) {
		return defaults;
	}
	var result = {};
	for (var key in defaults) {
		// `if (defaults.hasOwnProperty(key) { … }` is not needed here, since
		// only recognized option names are used.
		result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
	}
	return result;
};

var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
var regexAlwaysEscape = /['"\\]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;

// https://mathiasbynens.be/notes/css-escapes#css
var cssesc = function cssesc(string, options) {
	options = merge(options, cssesc.options);
	if (options.quotes != 'single' && options.quotes != 'double') {
		options.quotes = 'single';
	}
	var quote = options.quotes == 'double' ? '"' : '\'';
	var isIdentifier = options.isIdentifier;

	var firstChar = string.charAt(0);
	var output = '';
	var counter = 0;
	var length = string.length;
	while (counter < length) {
		var character = string.charAt(counter++);
		var codePoint = character.charCodeAt();
		var value = void 0;
		// If it’s not a printable ASCII character…
		if (codePoint < 0x20 || codePoint > 0x7E) {
			if (codePoint >= 0xD800 && codePoint <= 0xDBFF && counter < length) {
				// It’s a high surrogate, and there is a next character.
				var extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// next character is low surrogate
					codePoint = ((codePoint & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
				} else {
					// It’s an unmatched surrogate; only append this code unit, in case
					// the next code unit is the high surrogate of a surrogate pair.
					counter--;
				}
			}
			value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
		} else {
			if (options.escapeEverything) {
				if (regexAnySingleEscape.test(character)) {
					value = '\\' + character;
				} else {
					value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
				}
			} else if (/[\t\n\f\r\x0B]/.test(character)) {
				value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
			} else if (character == '\\' || !isIdentifier && (character == '"' && quote == character || character == '\'' && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
				value = '\\' + character;
			} else {
				value = character;
			}
		}
		output += value;
	}

	if (isIdentifier) {
		if (/^-[-\d]/.test(output)) {
			output = '\\-' + output.slice(1);
		} else if (/\d/.test(firstChar)) {
			output = '\\3' + firstChar + ' ' + output.slice(1);
		}
	}

	// Remove spaces after `\HEX` escapes that are not followed by a hex digit,
	// since they’re redundant. Note that this is only possible if the escape
	// sequence isn’t preceded by an odd number of backslashes.
	output = output.replace(regexExcessiveSpaces, function ($0, $1, $2) {
		if ($1 && $1.length % 2) {
			// It’s not safe to remove the space, so don’t.
			return $0;
		}
		// Strip the space.
		return ($1 || '') + $2;
	});

	if (!isIdentifier && options.wrap) {
		return quote + output + quote;
	}
	return output;
};

// Expose default options (so they can be overridden globally).
cssesc.options = {
	'escapeEverything': false,
	'isIdentifier': false,
	'quotes': 'single',
	'wrap': false
};

cssesc.version = '3.0.0';

module.exports = cssesc;


/***/ }),

/***/ "./src/blocks/team-members-group/main.css":
/*!************************************************!*\
  !*** ./src/blocks/team-members-group/main.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/index.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _processor = _interopRequireDefault(__webpack_require__(/*! ./processor */ "./node_modules/postcss-selector-parser/dist/processor.js"));
var selectors = _interopRequireWildcard(__webpack_require__(/*! ./selectors */ "./node_modules/postcss-selector-parser/dist/selectors/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var parser = function parser(processor) {
  return new _processor["default"](processor);
};
Object.assign(parser, selectors);
delete parser.__esModule;
var _default = parser;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/parser.js":
/*!*************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/parser.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _root = _interopRequireDefault(__webpack_require__(/*! ./selectors/root */ "./node_modules/postcss-selector-parser/dist/selectors/root.js"));
var _selector = _interopRequireDefault(__webpack_require__(/*! ./selectors/selector */ "./node_modules/postcss-selector-parser/dist/selectors/selector.js"));
var _className = _interopRequireDefault(__webpack_require__(/*! ./selectors/className */ "./node_modules/postcss-selector-parser/dist/selectors/className.js"));
var _comment = _interopRequireDefault(__webpack_require__(/*! ./selectors/comment */ "./node_modules/postcss-selector-parser/dist/selectors/comment.js"));
var _id = _interopRequireDefault(__webpack_require__(/*! ./selectors/id */ "./node_modules/postcss-selector-parser/dist/selectors/id.js"));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./selectors/tag */ "./node_modules/postcss-selector-parser/dist/selectors/tag.js"));
var _string = _interopRequireDefault(__webpack_require__(/*! ./selectors/string */ "./node_modules/postcss-selector-parser/dist/selectors/string.js"));
var _pseudo = _interopRequireDefault(__webpack_require__(/*! ./selectors/pseudo */ "./node_modules/postcss-selector-parser/dist/selectors/pseudo.js"));
var _attribute = _interopRequireWildcard(__webpack_require__(/*! ./selectors/attribute */ "./node_modules/postcss-selector-parser/dist/selectors/attribute.js"));
var _universal = _interopRequireDefault(__webpack_require__(/*! ./selectors/universal */ "./node_modules/postcss-selector-parser/dist/selectors/universal.js"));
var _combinator = _interopRequireDefault(__webpack_require__(/*! ./selectors/combinator */ "./node_modules/postcss-selector-parser/dist/selectors/combinator.js"));
var _nesting = _interopRequireDefault(__webpack_require__(/*! ./selectors/nesting */ "./node_modules/postcss-selector-parser/dist/selectors/nesting.js"));
var _sortAscending = _interopRequireDefault(__webpack_require__(/*! ./sortAscending */ "./node_modules/postcss-selector-parser/dist/sortAscending.js"));
var _tokenize = _interopRequireWildcard(__webpack_require__(/*! ./tokenize */ "./node_modules/postcss-selector-parser/dist/tokenize.js"));
var tokens = _interopRequireWildcard(__webpack_require__(/*! ./tokenTypes */ "./node_modules/postcss-selector-parser/dist/tokenTypes.js"));
var types = _interopRequireWildcard(__webpack_require__(/*! ./selectors/types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js"));
var _util = __webpack_require__(/*! ./util */ "./node_modules/postcss-selector-parser/dist/util/index.js");
var _WHITESPACE_TOKENS, _Object$assign;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));
function tokenStart(token) {
  return {
    line: token[_tokenize.FIELDS.START_LINE],
    column: token[_tokenize.FIELDS.START_COL]
  };
}
function tokenEnd(token) {
  return {
    line: token[_tokenize.FIELDS.END_LINE],
    column: token[_tokenize.FIELDS.END_COL]
  };
}
function getSource(startLine, startColumn, endLine, endColumn) {
  return {
    start: {
      line: startLine,
      column: startColumn
    },
    end: {
      line: endLine,
      column: endColumn
    }
  };
}
function getTokenSource(token) {
  return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
}
function getTokenSourceSpan(startToken, endToken) {
  if (!startToken) {
    return undefined;
  }
  return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
}
function unescapeProp(node, prop) {
  var value = node[prop];
  if (typeof value !== "string") {
    return;
  }
  if (value.indexOf("\\") !== -1) {
    (0, _util.ensureObject)(node, 'raws');
    node[prop] = (0, _util.unesc)(value);
    if (node.raws[prop] === undefined) {
      node.raws[prop] = value;
    }
  }
  return node;
}
function indexesOf(array, item) {
  var i = -1;
  var indexes = [];
  while ((i = array.indexOf(item, i + 1)) !== -1) {
    indexes.push(i);
  }
  return indexes;
}
function uniqs() {
  var list = Array.prototype.concat.apply([], arguments);
  return list.filter(function (item, i) {
    return i === list.indexOf(item);
  });
}
var Parser = /*#__PURE__*/function () {
  function Parser(rule, options) {
    if (options === void 0) {
      options = {};
    }
    this.rule = rule;
    this.options = Object.assign({
      lossy: false,
      safe: false
    }, options);
    this.position = 0;
    this.css = typeof this.rule === 'string' ? this.rule : this.rule.selector;
    this.tokens = (0, _tokenize["default"])({
      css: this.css,
      error: this._errorGenerator(),
      safe: this.options.safe
    });
    var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
    this.root = new _root["default"]({
      source: rootSource
    });
    this.root.errorGenerator = this._errorGenerator();
    var selector = new _selector["default"]({
      source: {
        start: {
          line: 1,
          column: 1
        }
      }
    });
    this.root.append(selector);
    this.current = selector;
    this.loop();
  }
  var _proto = Parser.prototype;
  _proto._errorGenerator = function _errorGenerator() {
    var _this = this;
    return function (message, errorOptions) {
      if (typeof _this.rule === 'string') {
        return new Error(message);
      }
      return _this.rule.error(message, errorOptions);
    };
  };
  _proto.attribute = function attribute() {
    var attr = [];
    var startingToken = this.currToken;
    this.position++;
    while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
      attr.push(this.currToken);
      this.position++;
    }
    if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
      return this.expected('closing square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
    }
    var len = attr.length;
    var node = {
      source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
      sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
    };
    if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
      return this.expected('attribute', attr[0][_tokenize.FIELDS.START_POS]);
    }
    var pos = 0;
    var spaceBefore = '';
    var commentBefore = '';
    var lastAdded = null;
    var spaceAfterMeaningfulToken = false;
    while (pos < len) {
      var token = attr[pos];
      var content = this.content(token);
      var next = attr[pos + 1];
      switch (token[_tokenize.FIELDS.TYPE]) {
        case tokens.space:
          // if (
          //     len === 1 ||
          //     pos === 0 && this.content(next) === '|'
          // ) {
          //     return this.expected('attribute', token[TOKEN.START_POS], content);
          // }
          spaceAfterMeaningfulToken = true;
          if (this.options.lossy) {
            break;
          }
          if (lastAdded) {
            (0, _util.ensureObject)(node, 'spaces', lastAdded);
            var prevContent = node.spaces[lastAdded].after || '';
            node.spaces[lastAdded].after = prevContent + content;
            var existingComment = (0, _util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || null;
            if (existingComment) {
              node.raws.spaces[lastAdded].after = existingComment + content;
            }
          } else {
            spaceBefore = spaceBefore + content;
            commentBefore = commentBefore + content;
          }
          break;
        case tokens.asterisk:
          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          } else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
            if (spaceBefore) {
              (0, _util.ensureObject)(node, 'spaces', 'attribute');
              node.spaces.attribute.before = spaceBefore;
              spaceBefore = '';
            }
            if (commentBefore) {
              (0, _util.ensureObject)(node, 'raws', 'spaces', 'attribute');
              node.raws.spaces.attribute.before = spaceBefore;
              commentBefore = '';
            }
            node.namespace = (node.namespace || "") + content;
            var rawValue = (0, _util.getProp)(node, 'raws', 'namespace') || null;
            if (rawValue) {
              node.raws.namespace += content;
            }
            lastAdded = 'namespace';
          }
          spaceAfterMeaningfulToken = false;
          break;
        case tokens.dollar:
          if (lastAdded === "value") {
            var oldRawValue = (0, _util.getProp)(node, 'raws', 'value');
            node.value += "$";
            if (oldRawValue) {
              node.raws.value = oldRawValue + "$";
            }
            break;
          }
        // Falls through
        case tokens.caret:
          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          }
          spaceAfterMeaningfulToken = false;
          break;
        case tokens.combinator:
          if (content === '~' && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          }
          if (content !== '|') {
            spaceAfterMeaningfulToken = false;
            break;
          }
          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          } else if (!node.namespace && !node.attribute) {
            node.namespace = true;
          }
          spaceAfterMeaningfulToken = false;
          break;
        case tokens.word:
          if (next && this.content(next) === '|' && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals &&
          // this look-ahead probably fails with comment nodes involved.
          !node.operator && !node.namespace) {
            node.namespace = content;
            lastAdded = 'namespace';
          } else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
            if (spaceBefore) {
              (0, _util.ensureObject)(node, 'spaces', 'attribute');
              node.spaces.attribute.before = spaceBefore;
              spaceBefore = '';
            }
            if (commentBefore) {
              (0, _util.ensureObject)(node, 'raws', 'spaces', 'attribute');
              node.raws.spaces.attribute.before = commentBefore;
              commentBefore = '';
            }
            node.attribute = (node.attribute || "") + content;
            var _rawValue = (0, _util.getProp)(node, 'raws', 'attribute') || null;
            if (_rawValue) {
              node.raws.attribute += content;
            }
            lastAdded = 'attribute';
          } else if (!node.value && node.value !== "" || lastAdded === "value" && !(spaceAfterMeaningfulToken || node.quoteMark)) {
            var _unescaped = (0, _util.unesc)(content);
            var _oldRawValue = (0, _util.getProp)(node, 'raws', 'value') || '';
            var oldValue = node.value || '';
            node.value = oldValue + _unescaped;
            node.quoteMark = null;
            if (_unescaped !== content || _oldRawValue) {
              (0, _util.ensureObject)(node, 'raws');
              node.raws.value = (_oldRawValue || oldValue) + content;
            }
            lastAdded = 'value';
          } else {
            var insensitive = content === 'i' || content === "I";
            if ((node.value || node.value === '') && (node.quoteMark || spaceAfterMeaningfulToken)) {
              node.insensitive = insensitive;
              if (!insensitive || content === "I") {
                (0, _util.ensureObject)(node, 'raws');
                node.raws.insensitiveFlag = content;
              }
              lastAdded = 'insensitive';
              if (spaceBefore) {
                (0, _util.ensureObject)(node, 'spaces', 'insensitive');
                node.spaces.insensitive.before = spaceBefore;
                spaceBefore = '';
              }
              if (commentBefore) {
                (0, _util.ensureObject)(node, 'raws', 'spaces', 'insensitive');
                node.raws.spaces.insensitive.before = commentBefore;
                commentBefore = '';
              }
            } else if (node.value || node.value === '') {
              lastAdded = 'value';
              node.value += content;
              if (node.raws.value) {
                node.raws.value += content;
              }
            }
          }
          spaceAfterMeaningfulToken = false;
          break;
        case tokens.str:
          if (!node.attribute || !node.operator) {
            return this.error("Expected an attribute followed by an operator preceding the string.", {
              index: token[_tokenize.FIELDS.START_POS]
            });
          }
          var _unescapeValue = (0, _attribute.unescapeValue)(content),
            unescaped = _unescapeValue.unescaped,
            quoteMark = _unescapeValue.quoteMark;
          node.value = unescaped;
          node.quoteMark = quoteMark;
          lastAdded = 'value';
          (0, _util.ensureObject)(node, 'raws');
          node.raws.value = content;
          spaceAfterMeaningfulToken = false;
          break;
        case tokens.equals:
          if (!node.attribute) {
            return this.expected('attribute', token[_tokenize.FIELDS.START_POS], content);
          }
          if (node.value) {
            return this.error('Unexpected "=" found; an operator was already defined.', {
              index: token[_tokenize.FIELDS.START_POS]
            });
          }
          node.operator = node.operator ? node.operator + content : content;
          lastAdded = 'operator';
          spaceAfterMeaningfulToken = false;
          break;
        case tokens.comment:
          if (lastAdded) {
            if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === 'insensitive') {
              var lastComment = (0, _util.getProp)(node, 'spaces', lastAdded, 'after') || '';
              var rawLastComment = (0, _util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || lastComment;
              (0, _util.ensureObject)(node, 'raws', 'spaces', lastAdded);
              node.raws.spaces[lastAdded].after = rawLastComment + content;
            } else {
              var lastValue = node[lastAdded] || '';
              var rawLastValue = (0, _util.getProp)(node, 'raws', lastAdded) || lastValue;
              (0, _util.ensureObject)(node, 'raws');
              node.raws[lastAdded] = rawLastValue + content;
            }
          } else {
            commentBefore = commentBefore + content;
          }
          break;
        default:
          return this.error("Unexpected \"" + content + "\" found.", {
            index: token[_tokenize.FIELDS.START_POS]
          });
      }
      pos++;
    }
    unescapeProp(node, "attribute");
    unescapeProp(node, "namespace");
    this.newNode(new _attribute["default"](node));
    this.position++;
  }

  /**
   * return a node containing meaningless garbage up to (but not including) the specified token position.
   * if the token position is negative, all remaining tokens are consumed.
   *
   * This returns an array containing a single string node if all whitespace,
   * otherwise an array of comment nodes with space before and after.
   *
   * These tokens are not added to the current selector, the caller can add them or use them to amend
   * a previous node's space metadata.
   *
   * In lossy mode, this returns only comments.
   */;
  _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
    if (stopPosition < 0) {
      stopPosition = this.tokens.length;
    }
    var startPosition = this.position;
    var nodes = [];
    var space = "";
    var lastComment = undefined;
    do {
      if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
        if (!this.options.lossy) {
          space += this.content();
        }
      } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
        var spaces = {};
        if (space) {
          spaces.before = space;
          space = "";
        }
        lastComment = new _comment["default"]({
          value: this.content(),
          source: getTokenSource(this.currToken),
          sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
          spaces: spaces
        });
        nodes.push(lastComment);
      }
    } while (++this.position < stopPosition);
    if (space) {
      if (lastComment) {
        lastComment.spaces.after = space;
      } else if (!this.options.lossy) {
        var firstToken = this.tokens[startPosition];
        var lastToken = this.tokens[this.position - 1];
        nodes.push(new _string["default"]({
          value: '',
          source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
          sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
          spaces: {
            before: space,
            after: ''
          }
        }));
      }
    }
    return nodes;
  }

  /**
   *
   * @param {*} nodes
   */;
  _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
    var _this2 = this;
    if (requiredSpace === void 0) {
      requiredSpace = false;
    }
    var space = "";
    var rawSpace = "";
    nodes.forEach(function (n) {
      var spaceBefore = _this2.lossySpace(n.spaces.before, requiredSpace);
      var rawSpaceBefore = _this2.lossySpace(n.rawSpaceBefore, requiredSpace);
      space += spaceBefore + _this2.lossySpace(n.spaces.after, requiredSpace && spaceBefore.length === 0);
      rawSpace += spaceBefore + n.value + _this2.lossySpace(n.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
    });
    if (rawSpace === space) {
      rawSpace = undefined;
    }
    var result = {
      space: space,
      rawSpace: rawSpace
    };
    return result;
  };
  _proto.isNamedCombinator = function isNamedCombinator(position) {
    if (position === void 0) {
      position = this.position;
    }
    return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
  };
  _proto.namedCombinator = function namedCombinator() {
    if (this.isNamedCombinator()) {
      var nameRaw = this.content(this.tokens[this.position + 1]);
      var name = (0, _util.unesc)(nameRaw).toLowerCase();
      var raws = {};
      if (name !== nameRaw) {
        raws.value = "/" + nameRaw + "/";
      }
      var node = new _combinator["default"]({
        value: "/" + name + "/",
        source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
        raws: raws
      });
      this.position = this.position + 3;
      return node;
    } else {
      this.unexpected();
    }
  };
  _proto.combinator = function combinator() {
    var _this3 = this;
    if (this.content() === '|') {
      return this.namespace();
    }
    // We need to decide between a space that's a descendant combinator and meaningless whitespace at the end of a selector.
    var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);
    if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma) {
      var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
      if (nodes.length > 0) {
        var last = this.current.last;
        if (last) {
          var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes),
            space = _this$convertWhitespa.space,
            rawSpace = _this$convertWhitespa.rawSpace;
          if (rawSpace !== undefined) {
            last.rawSpaceAfter += rawSpace;
          }
          last.spaces.after += space;
        } else {
          nodes.forEach(function (n) {
            return _this3.newNode(n);
          });
        }
      }
      return;
    }
    var firstToken = this.currToken;
    var spaceOrDescendantSelectorNodes = undefined;
    if (nextSigTokenPos > this.position) {
      spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
    }
    var node;
    if (this.isNamedCombinator()) {
      node = this.namedCombinator();
    } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
      node = new _combinator["default"]({
        value: this.content(),
        source: getTokenSource(this.currToken),
        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
      });
      this.position++;
    } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
      // pass
    } else if (!spaceOrDescendantSelectorNodes) {
      this.unexpected();
    }
    if (node) {
      if (spaceOrDescendantSelectorNodes) {
        var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes),
          _space = _this$convertWhitespa2.space,
          _rawSpace = _this$convertWhitespa2.rawSpace;
        node.spaces.before = _space;
        node.rawSpaceBefore = _rawSpace;
      }
    } else {
      // descendant combinator
      var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true),
        _space2 = _this$convertWhitespa3.space,
        _rawSpace2 = _this$convertWhitespa3.rawSpace;
      if (!_rawSpace2) {
        _rawSpace2 = _space2;
      }
      var spaces = {};
      var raws = {
        spaces: {}
      };
      if (_space2.endsWith(' ') && _rawSpace2.endsWith(' ')) {
        spaces.before = _space2.slice(0, _space2.length - 1);
        raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
      } else if (_space2.startsWith(' ') && _rawSpace2.startsWith(' ')) {
        spaces.after = _space2.slice(1);
        raws.spaces.after = _rawSpace2.slice(1);
      } else {
        raws.value = _rawSpace2;
      }
      node = new _combinator["default"]({
        value: ' ',
        source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
        sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
        spaces: spaces,
        raws: raws
      });
    }
    if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
      node.spaces.after = this.optionalSpace(this.content());
      this.position++;
    }
    return this.newNode(node);
  };
  _proto.comma = function comma() {
    if (this.position === this.tokens.length - 1) {
      this.root.trailingComma = true;
      this.position++;
      return;
    }
    this.current._inferEndPosition();
    var selector = new _selector["default"]({
      source: {
        start: tokenStart(this.tokens[this.position + 1])
      }
    });
    this.current.parent.append(selector);
    this.current = selector;
    this.position++;
  };
  _proto.comment = function comment() {
    var current = this.currToken;
    this.newNode(new _comment["default"]({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }));
    this.position++;
  };
  _proto.error = function error(message, opts) {
    throw this.root.error(message, opts);
  };
  _proto.missingBackslash = function missingBackslash() {
    return this.error('Expected a backslash preceding the semicolon.', {
      index: this.currToken[_tokenize.FIELDS.START_POS]
    });
  };
  _proto.missingParenthesis = function missingParenthesis() {
    return this.expected('opening parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
  };
  _proto.missingSquareBracket = function missingSquareBracket() {
    return this.expected('opening square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
  };
  _proto.unexpected = function unexpected() {
    return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
  };
  _proto.unexpectedPipe = function unexpectedPipe() {
    return this.error("Unexpected '|'.", this.currToken[_tokenize.FIELDS.START_POS]);
  };
  _proto.namespace = function namespace() {
    var before = this.prevToken && this.content(this.prevToken) || true;
    if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
      this.position++;
      return this.word(before);
    } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
      this.position++;
      return this.universal(before);
    }
    this.unexpectedPipe();
  };
  _proto.nesting = function nesting() {
    if (this.nextToken) {
      var nextContent = this.content(this.nextToken);
      if (nextContent === "|") {
        this.position++;
        return;
      }
    }
    var current = this.currToken;
    this.newNode(new _nesting["default"]({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }));
    this.position++;
  };
  _proto.parentheses = function parentheses() {
    var last = this.current.last;
    var unbalanced = 1;
    this.position++;
    if (last && last.type === types.PSEUDO) {
      var selector = new _selector["default"]({
        source: {
          start: tokenStart(this.tokens[this.position - 1])
        }
      });
      var cache = this.current;
      last.append(selector);
      this.current = selector;
      while (this.position < this.tokens.length && unbalanced) {
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
          unbalanced++;
        }
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          unbalanced--;
        }
        if (unbalanced) {
          this.parse();
        } else {
          this.current.source.end = tokenEnd(this.currToken);
          this.current.parent.source.end = tokenEnd(this.currToken);
          this.position++;
        }
      }
      this.current = cache;
    } else {
      // I think this case should be an error. It's used to implement a basic parse of media queries
      // but I don't think it's a good idea.
      var parenStart = this.currToken;
      var parenValue = "(";
      var parenEnd;
      while (this.position < this.tokens.length && unbalanced) {
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
          unbalanced++;
        }
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          unbalanced--;
        }
        parenEnd = this.currToken;
        parenValue += this.parseParenthesisToken(this.currToken);
        this.position++;
      }
      if (last) {
        last.appendToPropertyAndEscape("value", parenValue, parenValue);
      } else {
        this.newNode(new _string["default"]({
          value: parenValue,
          source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
          sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
        }));
      }
    }
    if (unbalanced) {
      return this.expected('closing parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
    }
  };
  _proto.pseudo = function pseudo() {
    var _this4 = this;
    var pseudoStr = '';
    var startingToken = this.currToken;
    while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
      pseudoStr += this.content();
      this.position++;
    }
    if (!this.currToken) {
      return this.expected(['pseudo-class', 'pseudo-element'], this.position - 1);
    }
    if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
      this.splitWord(false, function (first, length) {
        pseudoStr += first;
        _this4.newNode(new _pseudo["default"]({
          value: pseudoStr,
          source: getTokenSourceSpan(startingToken, _this4.currToken),
          sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
        }));
        if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
          _this4.error('Misplaced parenthesis.', {
            index: _this4.nextToken[_tokenize.FIELDS.START_POS]
          });
        }
      });
    } else {
      return this.expected(['pseudo-class', 'pseudo-element'], this.currToken[_tokenize.FIELDS.START_POS]);
    }
  };
  _proto.space = function space() {
    var content = this.content();
    // Handle space before and after the selector
    if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function (node) {
      return node.type === 'comment';
    })) {
      this.spaces = this.optionalSpace(content);
      this.position++;
    } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
      this.current.last.spaces.after = this.optionalSpace(content);
      this.position++;
    } else {
      this.combinator();
    }
  };
  _proto.string = function string() {
    var current = this.currToken;
    this.newNode(new _string["default"]({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }));
    this.position++;
  };
  _proto.universal = function universal(namespace) {
    var nextToken = this.nextToken;
    if (nextToken && this.content(nextToken) === '|') {
      this.position++;
      return this.namespace();
    }
    var current = this.currToken;
    this.newNode(new _universal["default"]({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }), namespace);
    this.position++;
  };
  _proto.splitWord = function splitWord(namespace, firstCallback) {
    var _this5 = this;
    var nextToken = this.nextToken;
    var word = this.content();
    while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
      this.position++;
      var current = this.content();
      word += current;
      if (current.lastIndexOf('\\') === current.length - 1) {
        var next = this.nextToken;
        if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
          word += this.requiredSpace(this.content(next));
          this.position++;
        }
      }
      nextToken = this.nextToken;
    }
    var hasClass = indexesOf(word, '.').filter(function (i) {
      // Allow escaped dot within class name
      var escapedDot = word[i - 1] === '\\';
      // Allow decimal numbers percent in @keyframes
      var isKeyframesPercent = /^\d+\.\d+%$/.test(word);
      return !escapedDot && !isKeyframesPercent;
    });
    var hasId = indexesOf(word, '#').filter(function (i) {
      return word[i - 1] !== '\\';
    });
    // Eliminate Sass interpolations from the list of id indexes
    var interpolations = indexesOf(word, '#{');
    if (interpolations.length) {
      hasId = hasId.filter(function (hashIndex) {
        return !~interpolations.indexOf(hashIndex);
      });
    }
    var indices = (0, _sortAscending["default"])(uniqs([0].concat(hasClass, hasId)));
    indices.forEach(function (ind, i) {
      var index = indices[i + 1] || word.length;
      var value = word.slice(ind, index);
      if (i === 0 && firstCallback) {
        return firstCallback.call(_this5, value, indices.length);
      }
      var node;
      var current = _this5.currToken;
      var sourceIndex = current[_tokenize.FIELDS.START_POS] + indices[i];
      var source = getSource(current[1], current[2] + ind, current[3], current[2] + (index - 1));
      if (~hasClass.indexOf(ind)) {
        var classNameOpts = {
          value: value.slice(1),
          source: source,
          sourceIndex: sourceIndex
        };
        node = new _className["default"](unescapeProp(classNameOpts, "value"));
      } else if (~hasId.indexOf(ind)) {
        var idOpts = {
          value: value.slice(1),
          source: source,
          sourceIndex: sourceIndex
        };
        node = new _id["default"](unescapeProp(idOpts, "value"));
      } else {
        var tagOpts = {
          value: value,
          source: source,
          sourceIndex: sourceIndex
        };
        unescapeProp(tagOpts, "value");
        node = new _tag["default"](tagOpts);
      }
      _this5.newNode(node, namespace);
      // Ensure that the namespace is used only once
      namespace = null;
    });
    this.position++;
  };
  _proto.word = function word(namespace) {
    var nextToken = this.nextToken;
    if (nextToken && this.content(nextToken) === '|') {
      this.position++;
      return this.namespace();
    }
    return this.splitWord(namespace);
  };
  _proto.loop = function loop() {
    while (this.position < this.tokens.length) {
      this.parse(true);
    }
    this.current._inferEndPosition();
    return this.root;
  };
  _proto.parse = function parse(throwOnParenthesis) {
    switch (this.currToken[_tokenize.FIELDS.TYPE]) {
      case tokens.space:
        this.space();
        break;
      case tokens.comment:
        this.comment();
        break;
      case tokens.openParenthesis:
        this.parentheses();
        break;
      case tokens.closeParenthesis:
        if (throwOnParenthesis) {
          this.missingParenthesis();
        }
        break;
      case tokens.openSquare:
        this.attribute();
        break;
      case tokens.dollar:
      case tokens.caret:
      case tokens.equals:
      case tokens.word:
        this.word();
        break;
      case tokens.colon:
        this.pseudo();
        break;
      case tokens.comma:
        this.comma();
        break;
      case tokens.asterisk:
        this.universal();
        break;
      case tokens.ampersand:
        this.nesting();
        break;
      case tokens.slash:
      case tokens.combinator:
        this.combinator();
        break;
      case tokens.str:
        this.string();
        break;
      // These cases throw; no break needed.
      case tokens.closeSquare:
        this.missingSquareBracket();
      case tokens.semicolon:
        this.missingBackslash();
      default:
        this.unexpected();
    }
  }

  /**
   * Helpers
   */;
  _proto.expected = function expected(description, index, found) {
    if (Array.isArray(description)) {
      var last = description.pop();
      description = description.join(', ') + " or " + last;
    }
    var an = /^[aeiou]/.test(description[0]) ? 'an' : 'a';
    if (!found) {
      return this.error("Expected " + an + " " + description + ".", {
        index: index
      });
    }
    return this.error("Expected " + an + " " + description + ", found \"" + found + "\" instead.", {
      index: index
    });
  };
  _proto.requiredSpace = function requiredSpace(space) {
    return this.options.lossy ? ' ' : space;
  };
  _proto.optionalSpace = function optionalSpace(space) {
    return this.options.lossy ? '' : space;
  };
  _proto.lossySpace = function lossySpace(space, required) {
    if (this.options.lossy) {
      return required ? ' ' : '';
    } else {
      return space;
    }
  };
  _proto.parseParenthesisToken = function parseParenthesisToken(token) {
    var content = this.content(token);
    if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
      return this.requiredSpace(content);
    } else {
      return content;
    }
  };
  _proto.newNode = function newNode(node, namespace) {
    if (namespace) {
      if (/^ +$/.test(namespace)) {
        if (!this.options.lossy) {
          this.spaces = (this.spaces || '') + namespace;
        }
        namespace = true;
      }
      node.namespace = namespace;
      unescapeProp(node, "namespace");
    }
    if (this.spaces) {
      node.spaces.before = this.spaces;
      this.spaces = '';
    }
    return this.current.append(node);
  };
  _proto.content = function content(token) {
    if (token === void 0) {
      token = this.currToken;
    }
    return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
  };
  /**
   * returns the index of the next non-whitespace, non-comment token.
   * returns -1 if no meaningful token is found.
   */
  _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
    if (startPosition === void 0) {
      startPosition = this.position + 1;
    }
    var searchPosition = startPosition;
    while (searchPosition < this.tokens.length) {
      if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
        searchPosition++;
        continue;
      } else {
        return searchPosition;
      }
    }
    return -1;
  };
  _createClass(Parser, [{
    key: "currToken",
    get: function get() {
      return this.tokens[this.position];
    }
  }, {
    key: "nextToken",
    get: function get() {
      return this.tokens[this.position + 1];
    }
  }, {
    key: "prevToken",
    get: function get() {
      return this.tokens[this.position - 1];
    }
  }]);
  return Parser;
}();
exports["default"] = Parser;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/processor.js":
/*!****************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/processor.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _parser = _interopRequireDefault(__webpack_require__(/*! ./parser */ "./node_modules/postcss-selector-parser/dist/parser.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Processor = /*#__PURE__*/function () {
  function Processor(func, options) {
    this.func = func || function noop() {};
    this.funcRes = null;
    this.options = options;
  }
  var _proto = Processor.prototype;
  _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
    if (options === void 0) {
      options = {};
    }
    var merged = Object.assign({}, this.options, options);
    if (merged.updateSelector === false) {
      return false;
    } else {
      return typeof rule !== "string";
    }
  };
  _proto._isLossy = function _isLossy(options) {
    if (options === void 0) {
      options = {};
    }
    var merged = Object.assign({}, this.options, options);
    if (merged.lossless === false) {
      return true;
    } else {
      return false;
    }
  };
  _proto._root = function _root(rule, options) {
    if (options === void 0) {
      options = {};
    }
    var parser = new _parser["default"](rule, this._parseOptions(options));
    return parser.root;
  };
  _proto._parseOptions = function _parseOptions(options) {
    return {
      lossy: this._isLossy(options)
    };
  };
  _proto._run = function _run(rule, options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    return new Promise(function (resolve, reject) {
      try {
        var root = _this._root(rule, options);
        Promise.resolve(_this.func(root)).then(function (transform) {
          var string = undefined;
          if (_this._shouldUpdateSelector(rule, options)) {
            string = root.toString();
            rule.selector = string;
          }
          return {
            transform: transform,
            root: root,
            string: string
          };
        }).then(resolve, reject);
      } catch (e) {
        reject(e);
        return;
      }
    });
  };
  _proto._runSync = function _runSync(rule, options) {
    if (options === void 0) {
      options = {};
    }
    var root = this._root(rule, options);
    var transform = this.func(root);
    if (transform && typeof transform.then === "function") {
      throw new Error("Selector processor returned a promise to a synchronous call.");
    }
    var string = undefined;
    if (options.updateSelector && typeof rule !== "string") {
      string = root.toString();
      rule.selector = string;
    }
    return {
      transform: transform,
      root: root,
      string: string
    };
  }

  /**
   * Process rule into a selector AST.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {Promise<parser.Root>} The AST of the selector after processing it.
   */;
  _proto.ast = function ast(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.root;
    });
  }

  /**
   * Process rule into a selector AST synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {parser.Root} The AST of the selector after processing it.
   */;
  _proto.astSync = function astSync(rule, options) {
    return this._runSync(rule, options).root;
  }

  /**
   * Process a selector into a transformed value asynchronously
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {Promise<any>} The value returned by the processor.
   */;
  _proto.transform = function transform(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.transform;
    });
  }

  /**
   * Process a selector into a transformed value synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {any} The value returned by the processor.
   */;
  _proto.transformSync = function transformSync(rule, options) {
    return this._runSync(rule, options).transform;
  }

  /**
   * Process a selector into a new selector string asynchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {string} the selector after processing.
   */;
  _proto.process = function process(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.string || result.root.toString();
    });
  }

  /**
   * Process a selector into a new selector string synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {string} the selector after processing.
   */;
  _proto.processSync = function processSync(rule, options) {
    var result = this._runSync(rule, options);
    return result.string || result.root.toString();
  };
  return Processor;
}();
exports["default"] = Processor;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/attribute.js":
/*!**************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/attribute.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
exports.unescapeValue = unescapeValue;
var _cssesc = _interopRequireDefault(__webpack_require__(/*! cssesc */ "./node_modules/cssesc/cssesc.js"));
var _unesc = _interopRequireDefault(__webpack_require__(/*! ../util/unesc */ "./node_modules/postcss-selector-parser/dist/util/unesc.js"));
var _namespace = _interopRequireDefault(__webpack_require__(/*! ./namespace */ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
var _CSSESC_QUOTE_OPTIONS;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var deprecate = __webpack_require__(/*! util-deprecate */ "./node_modules/util-deprecate/browser.js");
var WRAPPED_IN_QUOTES = /^('|")([^]*)\1$/;
var warnOfDeprecatedValueAssignment = deprecate(function () {}, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. " + "Call attribute.setValue() instead.");
var warnOfDeprecatedQuotedAssignment = deprecate(function () {}, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
var warnOfDeprecatedConstructor = deprecate(function () {}, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
function unescapeValue(value) {
  var deprecatedUsage = false;
  var quoteMark = null;
  var unescaped = value;
  var m = unescaped.match(WRAPPED_IN_QUOTES);
  if (m) {
    quoteMark = m[1];
    unescaped = m[2];
  }
  unescaped = (0, _unesc["default"])(unescaped);
  if (unescaped !== value) {
    deprecatedUsage = true;
  }
  return {
    deprecatedUsage: deprecatedUsage,
    unescaped: unescaped,
    quoteMark: quoteMark
  };
}
function handleDeprecatedContructorOpts(opts) {
  if (opts.quoteMark !== undefined) {
    return opts;
  }
  if (opts.value === undefined) {
    return opts;
  }
  warnOfDeprecatedConstructor();
  var _unescapeValue = unescapeValue(opts.value),
    quoteMark = _unescapeValue.quoteMark,
    unescaped = _unescapeValue.unescaped;
  if (!opts.raws) {
    opts.raws = {};
  }
  if (opts.raws.value === undefined) {
    opts.raws.value = opts.value;
  }
  opts.value = unescaped;
  opts.quoteMark = quoteMark;
  return opts;
}
var Attribute = /*#__PURE__*/function (_Namespace) {
  _inheritsLoose(Attribute, _Namespace);
  function Attribute(opts) {
    var _this;
    if (opts === void 0) {
      opts = {};
    }
    _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
    _this.type = _types.ATTRIBUTE;
    _this.raws = _this.raws || {};
    Object.defineProperty(_this.raws, 'unquoted', {
      get: deprecate(function () {
        return _this.value;
      }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
      set: deprecate(function () {
        return _this.value;
      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
    });
    _this._constructed = true;
    return _this;
  }

  /**
   * Returns the Attribute's value quoted such that it would be legal to use
   * in the value of a css file. The original value's quotation setting
   * used for stringification is left unchanged. See `setValue(value, options)`
   * if you want to control the quote settings of a new value for the attribute.
   *
   * You can also change the quotation used for the current value by setting quoteMark.
   *
   * Options:
   *   * quoteMark {'"' | "'" | null} - Use this value to quote the value. If this
   *     option is not set, the original value for quoteMark will be used. If
   *     indeterminate, a double quote is used. The legal values are:
   *     * `null` - the value will be unquoted and characters will be escaped as necessary.
   *     * `'` - the value will be quoted with a single quote and single quotes are escaped.
   *     * `"` - the value will be quoted with a double quote and double quotes are escaped.
   *   * preferCurrentQuoteMark {boolean} - if true, prefer the source quote mark
   *     over the quoteMark option value.
   *   * smart {boolean} - if true, will select a quote mark based on the value
   *     and the other options specified here. See the `smartQuoteMark()`
   *     method.
   **/
  var _proto = Attribute.prototype;
  _proto.getQuotedValue = function getQuotedValue(options) {
    if (options === void 0) {
      options = {};
    }
    var quoteMark = this._determineQuoteMark(options);
    var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
    var escaped = (0, _cssesc["default"])(this._value, cssescopts);
    return escaped;
  };
  _proto._determineQuoteMark = function _determineQuoteMark(options) {
    return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
  }

  /**
   * Set the unescaped value with the specified quotation options. The value
   * provided must not include any wrapping quote marks -- those quotes will
   * be interpreted as part of the value and escaped accordingly.
   */;
  _proto.setValue = function setValue(value, options) {
    if (options === void 0) {
      options = {};
    }
    this._value = value;
    this._quoteMark = this._determineQuoteMark(options);
    this._syncRawValue();
  }

  /**
   * Intelligently select a quoteMark value based on the value's contents. If
   * the value is a legal CSS ident, it will not be quoted. Otherwise a quote
   * mark will be picked that minimizes the number of escapes.
   *
   * If there's no clear winner, the quote mark from these options is used,
   * then the source quote mark (this is inverted if `preferCurrentQuoteMark` is
   * true). If the quoteMark is unspecified, a double quote is used.
   *
   * @param options This takes the quoteMark and preferCurrentQuoteMark options
   * from the quoteValue method.
   */;
  _proto.smartQuoteMark = function smartQuoteMark(options) {
    var v = this.value;
    var numSingleQuotes = v.replace(/[^']/g, '').length;
    var numDoubleQuotes = v.replace(/[^"]/g, '').length;
    if (numSingleQuotes + numDoubleQuotes === 0) {
      var escaped = (0, _cssesc["default"])(v, {
        isIdentifier: true
      });
      if (escaped === v) {
        return Attribute.NO_QUOTE;
      } else {
        var pref = this.preferredQuoteMark(options);
        if (pref === Attribute.NO_QUOTE) {
          // pick a quote mark that isn't none and see if it's smaller
          var quote = this.quoteMark || options.quoteMark || Attribute.DOUBLE_QUOTE;
          var opts = CSSESC_QUOTE_OPTIONS[quote];
          var quoteValue = (0, _cssesc["default"])(v, opts);
          if (quoteValue.length < escaped.length) {
            return quote;
          }
        }
        return pref;
      }
    } else if (numDoubleQuotes === numSingleQuotes) {
      return this.preferredQuoteMark(options);
    } else if (numDoubleQuotes < numSingleQuotes) {
      return Attribute.DOUBLE_QUOTE;
    } else {
      return Attribute.SINGLE_QUOTE;
    }
  }

  /**
   * Selects the preferred quote mark based on the options and the current quote mark value.
   * If you want the quote mark to depend on the attribute value, call `smartQuoteMark(opts)`
   * instead.
   */;
  _proto.preferredQuoteMark = function preferredQuoteMark(options) {
    var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;
    if (quoteMark === undefined) {
      quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
    }
    if (quoteMark === undefined) {
      quoteMark = Attribute.DOUBLE_QUOTE;
    }
    return quoteMark;
  };
  _proto._syncRawValue = function _syncRawValue() {
    var rawValue = (0, _cssesc["default"])(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);
    if (rawValue === this._value) {
      if (this.raws) {
        delete this.raws.value;
      }
    } else {
      this.raws.value = rawValue;
    }
  };
  _proto._handleEscapes = function _handleEscapes(prop, value) {
    if (this._constructed) {
      var escaped = (0, _cssesc["default"])(value, {
        isIdentifier: true
      });
      if (escaped !== value) {
        this.raws[prop] = escaped;
      } else {
        delete this.raws[prop];
      }
    }
  };
  _proto._spacesFor = function _spacesFor(name) {
    var attrSpaces = {
      before: '',
      after: ''
    };
    var spaces = this.spaces[name] || {};
    var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
    return Object.assign(attrSpaces, spaces, rawSpaces);
  };
  _proto._stringFor = function _stringFor(name, spaceName, concat) {
    if (spaceName === void 0) {
      spaceName = name;
    }
    if (concat === void 0) {
      concat = defaultAttrConcat;
    }
    var attrSpaces = this._spacesFor(spaceName);
    return concat(this.stringifyProperty(name), attrSpaces);
  }

  /**
   * returns the offset of the attribute part specified relative to the
   * start of the node of the output string.
   *
   * * "ns" - alias for "namespace"
   * * "namespace" - the namespace if it exists.
   * * "attribute" - the attribute name
   * * "attributeNS" - the start of the attribute or its namespace
   * * "operator" - the match operator of the attribute
   * * "value" - The value (string or identifier)
   * * "insensitive" - the case insensitivity flag;
   * @param part One of the possible values inside an attribute.
   * @returns -1 if the name is invalid or the value doesn't exist in this attribute.
   */;
  _proto.offsetOf = function offsetOf(name) {
    var count = 1;
    var attributeSpaces = this._spacesFor("attribute");
    count += attributeSpaces.before.length;
    if (name === "namespace" || name === "ns") {
      return this.namespace ? count : -1;
    }
    if (name === "attributeNS") {
      return count;
    }
    count += this.namespaceString.length;
    if (this.namespace) {
      count += 1;
    }
    if (name === "attribute") {
      return count;
    }
    count += this.stringifyProperty("attribute").length;
    count += attributeSpaces.after.length;
    var operatorSpaces = this._spacesFor("operator");
    count += operatorSpaces.before.length;
    var operator = this.stringifyProperty("operator");
    if (name === "operator") {
      return operator ? count : -1;
    }
    count += operator.length;
    count += operatorSpaces.after.length;
    var valueSpaces = this._spacesFor("value");
    count += valueSpaces.before.length;
    var value = this.stringifyProperty("value");
    if (name === "value") {
      return value ? count : -1;
    }
    count += value.length;
    count += valueSpaces.after.length;
    var insensitiveSpaces = this._spacesFor("insensitive");
    count += insensitiveSpaces.before.length;
    if (name === "insensitive") {
      return this.insensitive ? count : -1;
    }
    return -1;
  };
  _proto.toString = function toString() {
    var _this2 = this;
    var selector = [this.rawSpaceBefore, '['];
    selector.push(this._stringFor('qualifiedAttribute', 'attribute'));
    if (this.operator && (this.value || this.value === '')) {
      selector.push(this._stringFor('operator'));
      selector.push(this._stringFor('value'));
      selector.push(this._stringFor('insensitiveFlag', 'insensitive', function (attrValue, attrSpaces) {
        if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
          attrSpaces.before = " ";
        }
        return defaultAttrConcat(attrValue, attrSpaces);
      }));
    }
    selector.push(']');
    selector.push(this.rawSpaceAfter);
    return selector.join('');
  };
  _createClass(Attribute, [{
    key: "quoted",
    get: function get() {
      var qm = this.quoteMark;
      return qm === "'" || qm === '"';
    },
    set: function set(value) {
      warnOfDeprecatedQuotedAssignment();
    }

    /**
     * returns a single (`'`) or double (`"`) quote character if the value is quoted.
     * returns `null` if the value is not quoted.
     * returns `undefined` if the quotation state is unknown (this can happen when
     * the attribute is constructed without specifying a quote mark.)
     */
  }, {
    key: "quoteMark",
    get: function get() {
      return this._quoteMark;
    }

    /**
     * Set the quote mark to be used by this attribute's value.
     * If the quote mark changes, the raw (escaped) value at `attr.raws.value` of the attribute
     * value is updated accordingly.
     *
     * @param {"'" | '"' | null} quoteMark The quote mark or `null` if the value should be unquoted.
     */,
    set: function set(quoteMark) {
      if (!this._constructed) {
        this._quoteMark = quoteMark;
        return;
      }
      if (this._quoteMark !== quoteMark) {
        this._quoteMark = quoteMark;
        this._syncRawValue();
      }
    }
  }, {
    key: "qualifiedAttribute",
    get: function get() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    }
  }, {
    key: "insensitiveFlag",
    get: function get() {
      return this.insensitive ? 'i' : '';
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set:
    /**
     * Before 3.0, the value had to be set to an escaped value including any wrapped
     * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
     * is unescaped during parsing and any quote marks are removed.
     *
     * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
     * a deprecation warning is raised when the new value contains any characters that would
     * require escaping (including if it contains wrapped quotes).
     *
     * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
     * how the new value is quoted.
     */
    function set(v) {
      if (this._constructed) {
        var _unescapeValue2 = unescapeValue(v),
          deprecatedUsage = _unescapeValue2.deprecatedUsage,
          unescaped = _unescapeValue2.unescaped,
          quoteMark = _unescapeValue2.quoteMark;
        if (deprecatedUsage) {
          warnOfDeprecatedValueAssignment();
        }
        if (unescaped === this._value && quoteMark === this._quoteMark) {
          return;
        }
        this._value = unescaped;
        this._quoteMark = quoteMark;
        this._syncRawValue();
      } else {
        this._value = v;
      }
    }
  }, {
    key: "insensitive",
    get: function get() {
      return this._insensitive;
    }

    /**
     * Set the case insensitive flag.
     * If the case insensitive flag changes, the raw (escaped) value at `attr.raws.insensitiveFlag`
     * of the attribute is updated accordingly.
     *
     * @param {true | false} insensitive true if the attribute should match case-insensitively.
     */,
    set: function set(insensitive) {
      if (!insensitive) {
        this._insensitive = false;

        // "i" and "I" can be used in "this.raws.insensitiveFlag" to store the original notation.
        // When setting `attr.insensitive = false` both should be erased to ensure correct serialization.
        if (this.raws && (this.raws.insensitiveFlag === 'I' || this.raws.insensitiveFlag === 'i')) {
          this.raws.insensitiveFlag = undefined;
        }
      }
      this._insensitive = insensitive;
    }
  }, {
    key: "attribute",
    get: function get() {
      return this._attribute;
    },
    set: function set(name) {
      this._handleEscapes("attribute", name);
      this._attribute = name;
    }
  }]);
  return Attribute;
}(_namespace["default"]);
exports["default"] = Attribute;
Attribute.NO_QUOTE = null;
Attribute.SINGLE_QUOTE = "'";
Attribute.DOUBLE_QUOTE = '"';
var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
  "'": {
    quotes: 'single',
    wrap: true
  },
  '"': {
    quotes: 'double',
    wrap: true
  }
}, _CSSESC_QUOTE_OPTIONS[null] = {
  isIdentifier: true
}, _CSSESC_QUOTE_OPTIONS);
function defaultAttrConcat(attrValue, attrSpaces) {
  return "" + attrSpaces.before + attrValue + attrSpaces.after;
}

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/className.js":
/*!**************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/className.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _cssesc = _interopRequireDefault(__webpack_require__(/*! cssesc */ "./node_modules/cssesc/cssesc.js"));
var _util = __webpack_require__(/*! ../util */ "./node_modules/postcss-selector-parser/dist/util/index.js");
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ClassName = /*#__PURE__*/function (_Node) {
  _inheritsLoose(ClassName, _Node);
  function ClassName(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.CLASS;
    _this._constructed = true;
    return _this;
  }
  var _proto = ClassName.prototype;
  _proto.valueToString = function valueToString() {
    return '.' + _Node.prototype.valueToString.call(this);
  };
  _createClass(ClassName, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(v) {
      if (this._constructed) {
        var escaped = (0, _cssesc["default"])(v, {
          isIdentifier: true
        });
        if (escaped !== v) {
          (0, _util.ensureObject)(this, "raws");
          this.raws.value = escaped;
        } else if (this.raws) {
          delete this.raws.value;
        }
      }
      this._value = v;
    }
  }]);
  return ClassName;
}(_node["default"]);
exports["default"] = ClassName;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/combinator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/combinator.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Combinator = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Combinator, _Node);
  function Combinator(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.COMBINATOR;
    return _this;
  }
  return Combinator;
}(_node["default"]);
exports["default"] = Combinator;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/comment.js":
/*!************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/comment.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Comment = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Comment, _Node);
  function Comment(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.COMMENT;
    return _this;
  }
  return Comment;
}(_node["default"]);
exports["default"] = Comment;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/constructors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/constructors.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;
var _attribute = _interopRequireDefault(__webpack_require__(/*! ./attribute */ "./node_modules/postcss-selector-parser/dist/selectors/attribute.js"));
var _className = _interopRequireDefault(__webpack_require__(/*! ./className */ "./node_modules/postcss-selector-parser/dist/selectors/className.js"));
var _combinator = _interopRequireDefault(__webpack_require__(/*! ./combinator */ "./node_modules/postcss-selector-parser/dist/selectors/combinator.js"));
var _comment = _interopRequireDefault(__webpack_require__(/*! ./comment */ "./node_modules/postcss-selector-parser/dist/selectors/comment.js"));
var _id = _interopRequireDefault(__webpack_require__(/*! ./id */ "./node_modules/postcss-selector-parser/dist/selectors/id.js"));
var _nesting = _interopRequireDefault(__webpack_require__(/*! ./nesting */ "./node_modules/postcss-selector-parser/dist/selectors/nesting.js"));
var _pseudo = _interopRequireDefault(__webpack_require__(/*! ./pseudo */ "./node_modules/postcss-selector-parser/dist/selectors/pseudo.js"));
var _root = _interopRequireDefault(__webpack_require__(/*! ./root */ "./node_modules/postcss-selector-parser/dist/selectors/root.js"));
var _selector = _interopRequireDefault(__webpack_require__(/*! ./selector */ "./node_modules/postcss-selector-parser/dist/selectors/selector.js"));
var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./node_modules/postcss-selector-parser/dist/selectors/string.js"));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./tag */ "./node_modules/postcss-selector-parser/dist/selectors/tag.js"));
var _universal = _interopRequireDefault(__webpack_require__(/*! ./universal */ "./node_modules/postcss-selector-parser/dist/selectors/universal.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var attribute = function attribute(opts) {
  return new _attribute["default"](opts);
};
exports.attribute = attribute;
var className = function className(opts) {
  return new _className["default"](opts);
};
exports.className = className;
var combinator = function combinator(opts) {
  return new _combinator["default"](opts);
};
exports.combinator = combinator;
var comment = function comment(opts) {
  return new _comment["default"](opts);
};
exports.comment = comment;
var id = function id(opts) {
  return new _id["default"](opts);
};
exports.id = id;
var nesting = function nesting(opts) {
  return new _nesting["default"](opts);
};
exports.nesting = nesting;
var pseudo = function pseudo(opts) {
  return new _pseudo["default"](opts);
};
exports.pseudo = pseudo;
var root = function root(opts) {
  return new _root["default"](opts);
};
exports.root = root;
var selector = function selector(opts) {
  return new _selector["default"](opts);
};
exports.selector = selector;
var string = function string(opts) {
  return new _string["default"](opts);
};
exports.string = string;
var tag = function tag(opts) {
  return new _tag["default"](opts);
};
exports.tag = tag;
var universal = function universal(opts) {
  return new _universal["default"](opts);
};
exports.universal = universal;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/container.js":
/*!**************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/container.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var types = _interopRequireWildcard(__webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Container = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Container, _Node);
  function Container(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    if (!_this.nodes) {
      _this.nodes = [];
    }
    return _this;
  }
  var _proto = Container.prototype;
  _proto.append = function append(selector) {
    selector.parent = this;
    this.nodes.push(selector);
    return this;
  };
  _proto.prepend = function prepend(selector) {
    selector.parent = this;
    this.nodes.unshift(selector);
    return this;
  };
  _proto.at = function at(index) {
    return this.nodes[index];
  };
  _proto.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    }
    return this.nodes.indexOf(child);
  };
  _proto.removeChild = function removeChild(child) {
    child = this.index(child);
    this.at(child).parent = undefined;
    this.nodes.splice(child, 1);
    var index;
    for (var id in this.indexes) {
      index = this.indexes[id];
      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }
    return this;
  };
  _proto.removeAll = function removeAll() {
    for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done;) {
      var node = _step.value;
      node.parent = undefined;
    }
    this.nodes = [];
    return this;
  };
  _proto.empty = function empty() {
    return this.removeAll();
  };
  _proto.insertAfter = function insertAfter(oldNode, newNode) {
    newNode.parent = this;
    var oldIndex = this.index(oldNode);
    this.nodes.splice(oldIndex + 1, 0, newNode);
    newNode.parent = this;
    var index;
    for (var id in this.indexes) {
      index = this.indexes[id];
      if (oldIndex <= index) {
        this.indexes[id] = index + 1;
      }
    }
    return this;
  };
  _proto.insertBefore = function insertBefore(oldNode, newNode) {
    newNode.parent = this;
    var oldIndex = this.index(oldNode);
    this.nodes.splice(oldIndex, 0, newNode);
    newNode.parent = this;
    var index;
    for (var id in this.indexes) {
      index = this.indexes[id];
      if (index <= oldIndex) {
        this.indexes[id] = index + 1;
      }
    }
    return this;
  };
  _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
    var found = undefined;
    this.each(function (node) {
      if (node.atPosition) {
        var foundChild = node.atPosition(line, col);
        if (foundChild) {
          found = foundChild;
          return false;
        }
      } else if (node.isAtPosition(line, col)) {
        found = node;
        return false;
      }
    });
    return found;
  }

  /**
   * Return the most specific node at the line and column number given.
   * The source location is based on the original parsed location, locations aren't
   * updated as selector nodes are mutated.
   * 
   * Note that this location is relative to the location of the first character
   * of the selector, and not the location of the selector in the overall document
   * when used in conjunction with postcss.
   *
   * If not found, returns undefined.
   * @param {number} line The line number of the node to find. (1-based index)
   * @param {number} col  The column number of the node to find. (1-based index)
   */;
  _proto.atPosition = function atPosition(line, col) {
    if (this.isAtPosition(line, col)) {
      return this._findChildAtPosition(line, col) || this;
    } else {
      return undefined;
    }
  };
  _proto._inferEndPosition = function _inferEndPosition() {
    if (this.last && this.last.source && this.last.source.end) {
      this.source = this.source || {};
      this.source.end = this.source.end || {};
      Object.assign(this.source.end, this.last.source.end);
    }
  };
  _proto.each = function each(callback) {
    if (!this.lastEach) {
      this.lastEach = 0;
    }
    if (!this.indexes) {
      this.indexes = {};
    }
    this.lastEach++;
    var id = this.lastEach;
    this.indexes[id] = 0;
    if (!this.length) {
      return undefined;
    }
    var index, result;
    while (this.indexes[id] < this.length) {
      index = this.indexes[id];
      result = callback(this.at(index), index);
      if (result === false) {
        break;
      }
      this.indexes[id] += 1;
    }
    delete this.indexes[id];
    if (result === false) {
      return false;
    }
  };
  _proto.walk = function walk(callback) {
    return this.each(function (node, i) {
      var result = callback(node, i);
      if (result !== false && node.length) {
        result = node.walk(callback);
      }
      if (result === false) {
        return false;
      }
    });
  };
  _proto.walkAttributes = function walkAttributes(callback) {
    var _this2 = this;
    return this.walk(function (selector) {
      if (selector.type === types.ATTRIBUTE) {
        return callback.call(_this2, selector);
      }
    });
  };
  _proto.walkClasses = function walkClasses(callback) {
    var _this3 = this;
    return this.walk(function (selector) {
      if (selector.type === types.CLASS) {
        return callback.call(_this3, selector);
      }
    });
  };
  _proto.walkCombinators = function walkCombinators(callback) {
    var _this4 = this;
    return this.walk(function (selector) {
      if (selector.type === types.COMBINATOR) {
        return callback.call(_this4, selector);
      }
    });
  };
  _proto.walkComments = function walkComments(callback) {
    var _this5 = this;
    return this.walk(function (selector) {
      if (selector.type === types.COMMENT) {
        return callback.call(_this5, selector);
      }
    });
  };
  _proto.walkIds = function walkIds(callback) {
    var _this6 = this;
    return this.walk(function (selector) {
      if (selector.type === types.ID) {
        return callback.call(_this6, selector);
      }
    });
  };
  _proto.walkNesting = function walkNesting(callback) {
    var _this7 = this;
    return this.walk(function (selector) {
      if (selector.type === types.NESTING) {
        return callback.call(_this7, selector);
      }
    });
  };
  _proto.walkPseudos = function walkPseudos(callback) {
    var _this8 = this;
    return this.walk(function (selector) {
      if (selector.type === types.PSEUDO) {
        return callback.call(_this8, selector);
      }
    });
  };
  _proto.walkTags = function walkTags(callback) {
    var _this9 = this;
    return this.walk(function (selector) {
      if (selector.type === types.TAG) {
        return callback.call(_this9, selector);
      }
    });
  };
  _proto.walkUniversals = function walkUniversals(callback) {
    var _this10 = this;
    return this.walk(function (selector) {
      if (selector.type === types.UNIVERSAL) {
        return callback.call(_this10, selector);
      }
    });
  };
  _proto.split = function split(callback) {
    var _this11 = this;
    var current = [];
    return this.reduce(function (memo, node, index) {
      var split = callback.call(_this11, node);
      current.push(node);
      if (split) {
        memo.push(current);
        current = [];
      } else if (index === _this11.length - 1) {
        memo.push(current);
      }
      return memo;
    }, []);
  };
  _proto.map = function map(callback) {
    return this.nodes.map(callback);
  };
  _proto.reduce = function reduce(callback, memo) {
    return this.nodes.reduce(callback, memo);
  };
  _proto.every = function every(callback) {
    return this.nodes.every(callback);
  };
  _proto.some = function some(callback) {
    return this.nodes.some(callback);
  };
  _proto.filter = function filter(callback) {
    return this.nodes.filter(callback);
  };
  _proto.sort = function sort(callback) {
    return this.nodes.sort(callback);
  };
  _proto.toString = function toString() {
    return this.map(String).join('');
  };
  _createClass(Container, [{
    key: "first",
    get: function get() {
      return this.at(0);
    }
  }, {
    key: "last",
    get: function get() {
      return this.at(this.length - 1);
    }
  }, {
    key: "length",
    get: function get() {
      return this.nodes.length;
    }
  }]);
  return Container;
}(_node["default"]);
exports["default"] = Container;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/guards.js":
/*!***********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/guards.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;
exports.isContainer = isContainer;
exports.isIdentifier = void 0;
exports.isNamespace = isNamespace;
exports.isNesting = void 0;
exports.isNode = isNode;
exports.isPseudo = void 0;
exports.isPseudoClass = isPseudoClass;
exports.isPseudoElement = isPseudoElement;
exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = void 0;
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
var _IS_TYPE;
var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
function isNode(node) {
  return typeof node === "object" && IS_TYPE[node.type];
}
function isNodeType(type, node) {
  return isNode(node) && node.type === type;
}
var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
exports.isAttribute = isAttribute;
var isClassName = isNodeType.bind(null, _types.CLASS);
exports.isClassName = isClassName;
var isCombinator = isNodeType.bind(null, _types.COMBINATOR);
exports.isCombinator = isCombinator;
var isComment = isNodeType.bind(null, _types.COMMENT);
exports.isComment = isComment;
var isIdentifier = isNodeType.bind(null, _types.ID);
exports.isIdentifier = isIdentifier;
var isNesting = isNodeType.bind(null, _types.NESTING);
exports.isNesting = isNesting;
var isPseudo = isNodeType.bind(null, _types.PSEUDO);
exports.isPseudo = isPseudo;
var isRoot = isNodeType.bind(null, _types.ROOT);
exports.isRoot = isRoot;
var isSelector = isNodeType.bind(null, _types.SELECTOR);
exports.isSelector = isSelector;
var isString = isNodeType.bind(null, _types.STRING);
exports.isString = isString;
var isTag = isNodeType.bind(null, _types.TAG);
exports.isTag = isTag;
var isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
exports.isUniversal = isUniversal;
function isPseudoElement(node) {
  return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after" || node.value.toLowerCase() === ":first-letter" || node.value.toLowerCase() === ":first-line");
}
function isPseudoClass(node) {
  return isPseudo(node) && !isPseudoElement(node);
}
function isContainer(node) {
  return !!(isNode(node) && node.walk);
}
function isNamespace(node) {
  return isAttribute(node) || isTag(node);
}

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/id.js":
/*!*******************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/id.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ID = /*#__PURE__*/function (_Node) {
  _inheritsLoose(ID, _Node);
  function ID(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.ID;
    return _this;
  }
  var _proto = ID.prototype;
  _proto.valueToString = function valueToString() {
    return '#' + _Node.prototype.valueToString.call(this);
  };
  return ID;
}(_node["default"]);
exports["default"] = ID;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  exports[key] = _types[key];
});
var _constructors = __webpack_require__(/*! ./constructors */ "./node_modules/postcss-selector-parser/dist/selectors/constructors.js");
Object.keys(_constructors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constructors[key]) return;
  exports[key] = _constructors[key];
});
var _guards = __webpack_require__(/*! ./guards */ "./node_modules/postcss-selector-parser/dist/selectors/guards.js");
Object.keys(_guards).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _guards[key]) return;
  exports[key] = _guards[key];
});

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js":
/*!**************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/namespace.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _cssesc = _interopRequireDefault(__webpack_require__(/*! cssesc */ "./node_modules/cssesc/cssesc.js"));
var _util = __webpack_require__(/*! ../util */ "./node_modules/postcss-selector-parser/dist/util/index.js");
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Namespace = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Namespace, _Node);
  function Namespace() {
    return _Node.apply(this, arguments) || this;
  }
  var _proto = Namespace.prototype;
  _proto.qualifiedName = function qualifiedName(value) {
    if (this.namespace) {
      return this.namespaceString + "|" + value;
    } else {
      return value;
    }
  };
  _proto.valueToString = function valueToString() {
    return this.qualifiedName(_Node.prototype.valueToString.call(this));
  };
  _createClass(Namespace, [{
    key: "namespace",
    get: function get() {
      return this._namespace;
    },
    set: function set(namespace) {
      if (namespace === true || namespace === "*" || namespace === "&") {
        this._namespace = namespace;
        if (this.raws) {
          delete this.raws.namespace;
        }
        return;
      }
      var escaped = (0, _cssesc["default"])(namespace, {
        isIdentifier: true
      });
      this._namespace = namespace;
      if (escaped !== namespace) {
        (0, _util.ensureObject)(this, "raws");
        this.raws.namespace = escaped;
      } else if (this.raws) {
        delete this.raws.namespace;
      }
    }
  }, {
    key: "ns",
    get: function get() {
      return this._namespace;
    },
    set: function set(namespace) {
      this.namespace = namespace;
    }
  }, {
    key: "namespaceString",
    get: function get() {
      if (this.namespace) {
        var ns = this.stringifyProperty("namespace");
        if (ns === true) {
          return '';
        } else {
          return ns;
        }
      } else {
        return '';
      }
    }
  }]);
  return Namespace;
}(_node["default"]);
exports["default"] = Namespace;
;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/nesting.js":
/*!************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/nesting.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Nesting = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Nesting, _Node);
  function Nesting(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.NESTING;
    _this.value = '&';
    return _this;
  }
  return Nesting;
}(_node["default"]);
exports["default"] = Nesting;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/node.js":
/*!*********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/node.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _util = __webpack_require__(/*! ../util */ "./node_modules/postcss-selector-parser/dist/util/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var cloneNode = function cloneNode(obj, parent) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  var cloned = new obj.constructor();
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) {
      continue;
    }
    var value = obj[i];
    var type = typeof value;
    if (i === 'parent' && type === 'object') {
      if (parent) {
        cloned[i] = parent;
      }
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else {
      cloned[i] = cloneNode(value, cloned);
    }
  }
  return cloned;
};
var Node = /*#__PURE__*/function () {
  function Node(opts) {
    if (opts === void 0) {
      opts = {};
    }
    Object.assign(this, opts);
    this.spaces = this.spaces || {};
    this.spaces.before = this.spaces.before || '';
    this.spaces.after = this.spaces.after || '';
  }
  var _proto = Node.prototype;
  _proto.remove = function remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = undefined;
    return this;
  };
  _proto.replaceWith = function replaceWith() {
    if (this.parent) {
      for (var index in arguments) {
        this.parent.insertBefore(this, arguments[index]);
      }
      this.remove();
    }
    return this;
  };
  _proto.next = function next() {
    return this.parent.at(this.parent.index(this) + 1);
  };
  _proto.prev = function prev() {
    return this.parent.at(this.parent.index(this) - 1);
  };
  _proto.clone = function clone(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    var cloned = cloneNode(this);
    for (var name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }

  /**
   * Some non-standard syntax doesn't follow normal escaping rules for css.
   * This allows non standard syntax to be appended to an existing property
   * by specifying the escaped value. By specifying the escaped value,
   * illegal characters are allowed to be directly inserted into css output.
   * @param {string} name the property to set
   * @param {any} value the unescaped value of the property
   * @param {string} valueEscaped optional. the escaped value of the property.
   */;
  _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
    if (!this.raws) {
      this.raws = {};
    }
    var originalValue = this[name];
    var originalEscaped = this.raws[name];
    this[name] = originalValue + value; // this may trigger a setter that updates raws, so it has to be set first.
    if (originalEscaped || valueEscaped !== value) {
      this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
    } else {
      delete this.raws[name]; // delete any escaped value that was created by the setter.
    }
  }

  /**
   * Some non-standard syntax doesn't follow normal escaping rules for css.
   * This allows the escaped value to be specified directly, allowing illegal
   * characters to be directly inserted into css output.
   * @param {string} name the property to set
   * @param {any} value the unescaped value of the property
   * @param {string} valueEscaped the escaped value of the property.
   */;
  _proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
    if (!this.raws) {
      this.raws = {};
    }
    this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.
    this.raws[name] = valueEscaped;
  }

  /**
   * When you want a value to passed through to CSS directly. This method
   * deletes the corresponding raw value causing the stringifier to fallback
   * to the unescaped value.
   * @param {string} name the property to set.
   * @param {any} value The value that is both escaped and unescaped.
   */;
  _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
    this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.
    if (this.raws) {
      delete this.raws[name];
    }
  }

  /**
   *
   * @param {number} line The number (starting with 1)
   * @param {number} column The column number (starting with 1)
   */;
  _proto.isAtPosition = function isAtPosition(line, column) {
    if (this.source && this.source.start && this.source.end) {
      if (this.source.start.line > line) {
        return false;
      }
      if (this.source.end.line < line) {
        return false;
      }
      if (this.source.start.line === line && this.source.start.column > column) {
        return false;
      }
      if (this.source.end.line === line && this.source.end.column < column) {
        return false;
      }
      return true;
    }
    return undefined;
  };
  _proto.stringifyProperty = function stringifyProperty(name) {
    return this.raws && this.raws[name] || this[name];
  };
  _proto.valueToString = function valueToString() {
    return String(this.stringifyProperty("value"));
  };
  _proto.toString = function toString() {
    return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join('');
  };
  _createClass(Node, [{
    key: "rawSpaceBefore",
    get: function get() {
      var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;
      if (rawSpace === undefined) {
        rawSpace = this.spaces && this.spaces.before;
      }
      return rawSpace || "";
    },
    set: function set(raw) {
      (0, _util.ensureObject)(this, "raws", "spaces");
      this.raws.spaces.before = raw;
    }
  }, {
    key: "rawSpaceAfter",
    get: function get() {
      var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;
      if (rawSpace === undefined) {
        rawSpace = this.spaces.after;
      }
      return rawSpace || "";
    },
    set: function set(raw) {
      (0, _util.ensureObject)(this, "raws", "spaces");
      this.raws.spaces.after = raw;
    }
  }]);
  return Node;
}();
exports["default"] = Node;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/pseudo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/pseudo.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _container = _interopRequireDefault(__webpack_require__(/*! ./container */ "./node_modules/postcss-selector-parser/dist/selectors/container.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Pseudo = /*#__PURE__*/function (_Container) {
  _inheritsLoose(Pseudo, _Container);
  function Pseudo(opts) {
    var _this;
    _this = _Container.call(this, opts) || this;
    _this.type = _types.PSEUDO;
    return _this;
  }
  var _proto = Pseudo.prototype;
  _proto.toString = function toString() {
    var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
    return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join('');
  };
  return Pseudo;
}(_container["default"]);
exports["default"] = Pseudo;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/root.js":
/*!*********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/root.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _container = _interopRequireDefault(__webpack_require__(/*! ./container */ "./node_modules/postcss-selector-parser/dist/selectors/container.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Root = /*#__PURE__*/function (_Container) {
  _inheritsLoose(Root, _Container);
  function Root(opts) {
    var _this;
    _this = _Container.call(this, opts) || this;
    _this.type = _types.ROOT;
    return _this;
  }
  var _proto = Root.prototype;
  _proto.toString = function toString() {
    var str = this.reduce(function (memo, selector) {
      memo.push(String(selector));
      return memo;
    }, []).join(',');
    return this.trailingComma ? str + ',' : str;
  };
  _proto.error = function error(message, options) {
    if (this._error) {
      return this._error(message, options);
    } else {
      return new Error(message);
    }
  };
  _createClass(Root, [{
    key: "errorGenerator",
    set: function set(handler) {
      this._error = handler;
    }
  }]);
  return Root;
}(_container["default"]);
exports["default"] = Root;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/selector.js":
/*!*************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/selector.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _container = _interopRequireDefault(__webpack_require__(/*! ./container */ "./node_modules/postcss-selector-parser/dist/selectors/container.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Selector = /*#__PURE__*/function (_Container) {
  _inheritsLoose(Selector, _Container);
  function Selector(opts) {
    var _this;
    _this = _Container.call(this, opts) || this;
    _this.type = _types.SELECTOR;
    return _this;
  }
  return Selector;
}(_container["default"]);
exports["default"] = Selector;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/string.js":
/*!***********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/string.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/postcss-selector-parser/dist/selectors/node.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var String = /*#__PURE__*/function (_Node) {
  _inheritsLoose(String, _Node);
  function String(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.STRING;
    return _this;
  }
  return String;
}(_node["default"]);
exports["default"] = String;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/tag.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _namespace = _interopRequireDefault(__webpack_require__(/*! ./namespace */ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Tag = /*#__PURE__*/function (_Namespace) {
  _inheritsLoose(Tag, _Namespace);
  function Tag(opts) {
    var _this;
    _this = _Namespace.call(this, opts) || this;
    _this.type = _types.TAG;
    return _this;
  }
  return Tag;
}(_namespace["default"]);
exports["default"] = Tag;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/types.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.UNIVERSAL = exports.TAG = exports.STRING = exports.SELECTOR = exports.ROOT = exports.PSEUDO = exports.NESTING = exports.ID = exports.COMMENT = exports.COMBINATOR = exports.CLASS = exports.ATTRIBUTE = void 0;
var TAG = 'tag';
exports.TAG = TAG;
var STRING = 'string';
exports.STRING = STRING;
var SELECTOR = 'selector';
exports.SELECTOR = SELECTOR;
var ROOT = 'root';
exports.ROOT = ROOT;
var PSEUDO = 'pseudo';
exports.PSEUDO = PSEUDO;
var NESTING = 'nesting';
exports.NESTING = NESTING;
var ID = 'id';
exports.ID = ID;
var COMMENT = 'comment';
exports.COMMENT = COMMENT;
var COMBINATOR = 'combinator';
exports.COMBINATOR = COMBINATOR;
var CLASS = 'class';
exports.CLASS = CLASS;
var ATTRIBUTE = 'attribute';
exports.ATTRIBUTE = ATTRIBUTE;
var UNIVERSAL = 'universal';
exports.UNIVERSAL = UNIVERSAL;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/universal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/selectors/universal.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _namespace = _interopRequireDefault(__webpack_require__(/*! ./namespace */ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js"));
var _types = __webpack_require__(/*! ./types */ "./node_modules/postcss-selector-parser/dist/selectors/types.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Universal = /*#__PURE__*/function (_Namespace) {
  _inheritsLoose(Universal, _Namespace);
  function Universal(opts) {
    var _this;
    _this = _Namespace.call(this, opts) || this;
    _this.type = _types.UNIVERSAL;
    _this.value = '*';
    return _this;
  }
  return Universal;
}(_namespace["default"]);
exports["default"] = Universal;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/sortAscending.js":
/*!********************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/sortAscending.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = sortAscending;
function sortAscending(list) {
  return list.sort(function (a, b) {
    return a - b;
  });
}
;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/tokenTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/tokenTypes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.word = exports.tilde = exports.tab = exports.str = exports.space = exports.slash = exports.singleQuote = exports.semicolon = exports.plus = exports.pipe = exports.openSquare = exports.openParenthesis = exports.newline = exports.greaterThan = exports.feed = exports.equals = exports.doubleQuote = exports.dollar = exports.cr = exports.comment = exports.comma = exports.combinator = exports.colon = exports.closeSquare = exports.closeParenthesis = exports.caret = exports.bang = exports.backslash = exports.at = exports.asterisk = exports.ampersand = void 0;
var ampersand = 38; // `&`.charCodeAt(0);
exports.ampersand = ampersand;
var asterisk = 42; // `*`.charCodeAt(0);
exports.asterisk = asterisk;
var at = 64; // `@`.charCodeAt(0);
exports.at = at;
var comma = 44; // `,`.charCodeAt(0);
exports.comma = comma;
var colon = 58; // `:`.charCodeAt(0);
exports.colon = colon;
var semicolon = 59; // `;`.charCodeAt(0);
exports.semicolon = semicolon;
var openParenthesis = 40; // `(`.charCodeAt(0);
exports.openParenthesis = openParenthesis;
var closeParenthesis = 41; // `)`.charCodeAt(0);
exports.closeParenthesis = closeParenthesis;
var openSquare = 91; // `[`.charCodeAt(0);
exports.openSquare = openSquare;
var closeSquare = 93; // `]`.charCodeAt(0);
exports.closeSquare = closeSquare;
var dollar = 36; // `$`.charCodeAt(0);
exports.dollar = dollar;
var tilde = 126; // `~`.charCodeAt(0);
exports.tilde = tilde;
var caret = 94; // `^`.charCodeAt(0);
exports.caret = caret;
var plus = 43; // `+`.charCodeAt(0);
exports.plus = plus;
var equals = 61; // `=`.charCodeAt(0);
exports.equals = equals;
var pipe = 124; // `|`.charCodeAt(0);
exports.pipe = pipe;
var greaterThan = 62; // `>`.charCodeAt(0);
exports.greaterThan = greaterThan;
var space = 32; // ` `.charCodeAt(0);
exports.space = space;
var singleQuote = 39; // `'`.charCodeAt(0);
exports.singleQuote = singleQuote;
var doubleQuote = 34; // `"`.charCodeAt(0);
exports.doubleQuote = doubleQuote;
var slash = 47; // `/`.charCodeAt(0);
exports.slash = slash;
var bang = 33; // `!`.charCodeAt(0);
exports.bang = bang;
var backslash = 92; // '\\'.charCodeAt(0);
exports.backslash = backslash;
var cr = 13; // '\r'.charCodeAt(0);
exports.cr = cr;
var feed = 12; // '\f'.charCodeAt(0);
exports.feed = feed;
var newline = 10; // '\n'.charCodeAt(0);
exports.newline = newline;
var tab = 9; // '\t'.charCodeAt(0);

// Expose aliases primarily for readability.
exports.tab = tab;
var str = singleQuote;

// No good single character representation!
exports.str = str;
var comment = -1;
exports.comment = comment;
var word = -2;
exports.word = word;
var combinator = -3;
exports.combinator = combinator;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/tokenize.js":
/*!***************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/tokenize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.FIELDS = void 0;
exports["default"] = tokenize;
var t = _interopRequireWildcard(__webpack_require__(/*! ./tokenTypes */ "./node_modules/postcss-selector-parser/dist/tokenTypes.js"));
var _unescapable, _wordDelimiters;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
var hex = {};
var hexChars = "0123456789abcdefABCDEF";
for (var i = 0; i < hexChars.length; i++) {
  hex[hexChars.charCodeAt(i)] = true;
}

/**
 *  Returns the last index of the bar css word
 * @param {string} css The string in which the word begins
 * @param {number} start The index into the string where word's first letter occurs
 */
function consumeWord(css, start) {
  var next = start;
  var code;
  do {
    code = css.charCodeAt(next);
    if (wordDelimiters[code]) {
      return next - 1;
    } else if (code === t.backslash) {
      next = consumeEscape(css, next) + 1;
    } else {
      // All other characters are part of the word
      next++;
    }
  } while (next < css.length);
  return next - 1;
}

/**
 *  Returns the last index of the escape sequence
 * @param {string} css The string in which the sequence begins
 * @param {number} start The index into the string where escape character (`\`) occurs.
 */
function consumeEscape(css, start) {
  var next = start;
  var code = css.charCodeAt(next + 1);
  if (unescapable[code]) {
    // just consume the escape char
  } else if (hex[code]) {
    var hexDigits = 0;
    // consume up to 6 hex chars
    do {
      next++;
      hexDigits++;
      code = css.charCodeAt(next + 1);
    } while (hex[code] && hexDigits < 6);
    // if fewer than 6 hex chars, a trailing space ends the escape
    if (hexDigits < 6 && code === t.space) {
      next++;
    }
  } else {
    // the next char is part of the current word
    next++;
  }
  return next;
}
var FIELDS = {
  TYPE: 0,
  START_LINE: 1,
  START_COL: 2,
  END_LINE: 3,
  END_COL: 4,
  START_POS: 5,
  END_POS: 6
};
exports.FIELDS = FIELDS;
function tokenize(input) {
  var tokens = [];
  var css = input.css.valueOf();
  var _css = css,
    length = _css.length;
  var offset = -1;
  var line = 1;
  var start = 0;
  var end = 0;
  var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
  function unclosed(what, fix) {
    if (input.safe) {
      // fyi: this is never set to true.
      css += fix;
      next = css.length - 1;
    } else {
      throw input.error('Unclosed ' + what, line, start - offset, start);
    }
  }
  while (start < length) {
    code = css.charCodeAt(start);
    if (code === t.newline) {
      offset = start;
      line += 1;
    }
    switch (code) {
      case t.space:
      case t.tab:
      case t.newline:
      case t.cr:
      case t.feed:
        next = start;
        do {
          next += 1;
          code = css.charCodeAt(next);
          if (code === t.newline) {
            offset = next;
            line += 1;
          }
        } while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);
        tokenType = t.space;
        endLine = line;
        endColumn = next - offset - 1;
        end = next;
        break;
      case t.plus:
      case t.greaterThan:
      case t.tilde:
      case t.pipe:
        next = start;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);
        tokenType = t.combinator;
        endLine = line;
        endColumn = start - offset;
        end = next;
        break;

      // Consume these characters as single tokens.
      case t.asterisk:
      case t.ampersand:
      case t.bang:
      case t.comma:
      case t.equals:
      case t.dollar:
      case t.caret:
      case t.openSquare:
      case t.closeSquare:
      case t.colon:
      case t.semicolon:
      case t.openParenthesis:
      case t.closeParenthesis:
        next = start;
        tokenType = code;
        endLine = line;
        endColumn = start - offset;
        end = next + 1;
        break;
      case t.singleQuote:
      case t.doubleQuote:
        quote = code === t.singleQuote ? "'" : '"';
        next = start;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            unclosed('quote', quote);
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === t.backslash) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        tokenType = t.str;
        endLine = line;
        endColumn = start - offset;
        end = next + 1;
        break;
      default:
        if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
          next = css.indexOf('*/', start + 2) + 1;
          if (next === 0) {
            unclosed('comment', '*/');
          }
          content = css.slice(start, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;
          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }
          tokenType = t.comment;
          line = nextLine;
          endLine = nextLine;
          endColumn = next - nextOffset;
        } else if (code === t.slash) {
          next = start;
          tokenType = code;
          endLine = line;
          endColumn = start - offset;
          end = next + 1;
        } else {
          next = consumeWord(css, start);
          tokenType = t.word;
          endLine = line;
          endColumn = next - offset;
        }
        end = next + 1;
        break;
    }

    // Ensure that the token structure remains consistent
    tokens.push([tokenType,
    // [0] Token type
    line,
    // [1] Starting line
    start - offset,
    // [2] Starting column
    endLine,
    // [3] Ending line
    endColumn,
    // [4] Ending column
    start,
    // [5] Start position / Source index
    end // [6] End position
    ]);

    // Reset offset for the next token
    if (nextOffset) {
      offset = nextOffset;
      nextOffset = null;
    }
    start = end;
  }
  return tokens;
}

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/util/ensureObject.js":
/*!************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/util/ensureObject.js ***!
  \************************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = ensureObject;
function ensureObject(obj) {
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }
  while (props.length > 0) {
    var prop = props.shift();
    if (!obj[prop]) {
      obj[prop] = {};
    }
    obj = obj[prop];
  }
}
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/util/getProp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/util/getProp.js ***!
  \*******************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = getProp;
function getProp(obj) {
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }
  while (props.length > 0) {
    var prop = props.shift();
    if (!obj[prop]) {
      return undefined;
    }
    obj = obj[prop];
  }
  return obj;
}
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/util/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/util/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.unesc = exports.stripComments = exports.getProp = exports.ensureObject = void 0;
var _unesc = _interopRequireDefault(__webpack_require__(/*! ./unesc */ "./node_modules/postcss-selector-parser/dist/util/unesc.js"));
exports.unesc = _unesc["default"];
var _getProp = _interopRequireDefault(__webpack_require__(/*! ./getProp */ "./node_modules/postcss-selector-parser/dist/util/getProp.js"));
exports.getProp = _getProp["default"];
var _ensureObject = _interopRequireDefault(__webpack_require__(/*! ./ensureObject */ "./node_modules/postcss-selector-parser/dist/util/ensureObject.js"));
exports.ensureObject = _ensureObject["default"];
var _stripComments = _interopRequireDefault(__webpack_require__(/*! ./stripComments */ "./node_modules/postcss-selector-parser/dist/util/stripComments.js"));
exports.stripComments = _stripComments["default"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/util/stripComments.js":
/*!*************************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/util/stripComments.js ***!
  \*************************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = stripComments;
function stripComments(str) {
  var s = "";
  var commentStart = str.indexOf("/*");
  var lastEnd = 0;
  while (commentStart >= 0) {
    s = s + str.slice(lastEnd, commentStart);
    var commentEnd = str.indexOf("*/", commentStart + 2);
    if (commentEnd < 0) {
      return s;
    }
    lastEnd = commentEnd + 2;
    commentStart = str.indexOf("/*", lastEnd);
  }
  s = s + str.slice(lastEnd);
  return s;
}
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/util/unesc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/postcss-selector-parser/dist/util/unesc.js ***!
  \*****************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = unesc;
// Many thanks for this post which made this migration much easier.
// https://mathiasbynens.be/notes/css-escapes

/**
 * 
 * @param {string} str 
 * @returns {[string, number]|undefined}
 */
function gobbleHex(str) {
  var lower = str.toLowerCase();
  var hex = '';
  var spaceTerminated = false;
  for (var i = 0; i < 6 && lower[i] !== undefined; i++) {
    var code = lower.charCodeAt(i);
    // check to see if we are dealing with a valid hex char [a-f|0-9]
    var valid = code >= 97 && code <= 102 || code >= 48 && code <= 57;
    // https://drafts.csswg.org/css-syntax/#consume-escaped-code-point
    spaceTerminated = code === 32;
    if (!valid) {
      break;
    }
    hex += lower[i];
  }
  if (hex.length === 0) {
    return undefined;
  }
  var codePoint = parseInt(hex, 16);
  var isSurrogate = codePoint >= 0xD800 && codePoint <= 0xDFFF;
  // Add special case for
  // "If this number is zero, or is for a surrogate, or is greater than the maximum allowed code point"
  // https://drafts.csswg.org/css-syntax/#maximum-allowed-code-point
  if (isSurrogate || codePoint === 0x0000 || codePoint > 0x10FFFF) {
    return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
  }
  return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
}
var CONTAINS_ESCAPE = /\\/;
function unesc(str) {
  var needToProcess = CONTAINS_ESCAPE.test(str);
  if (!needToProcess) {
    return str;
  }
  var ret = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      var gobbled = gobbleHex(str.slice(i + 1, i + 7));
      if (gobbled !== undefined) {
        ret += gobbled[0];
        i += gobbled[1];
        continue;
      }

      // Retain a pair of \\ if double escaped `\\\\`
      // https://github.com/postcss/postcss-selector-parser/commit/268c9a7656fb53f543dc620aa5b73a30ec3ff20e
      if (str[i + 1] === "\\") {
        ret += "\\";
        i++;
        continue;
      }

      // if \\ is at the end of the string retain it
      // https://github.com/postcss/postcss-selector-parser/commit/01a6b346e3612ce1ab20219acc26abdc259ccefb
      if (str.length === i + 1) {
        ret += str[i];
      }
      continue;
    }
    ret += str[i];
  }
  return ret;
}
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/util-deprecate/browser.js":
/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!__webpack_require__.g.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = __webpack_require__.g.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  primary: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "enable-background": "new 0 0 507.434 507.434",
    height: "512",
    viewBox: "0 0 507.434 507.434",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m392.986 260.922c0 42.358 6.782 106.871 52.224 106.871s52.224-64.513 52.224-106.871z",
    fill: "#fff"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m494.571 303.827c-4.983 33.068-17.914 63.965-49.361 63.965-31.448 0-44.378-30.897-49.361-63.965z",
    fill: "#d789b9"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m495.533 296.617c1.448-12.381 1.901-24.774 1.901-35.695h-22.918c0 10.834-.569 23.526-2.581 35.695z",
    fill: "#e1bdfc"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m469.895 306.617c-5.116 20.728-15.536 37.727-36.144 37.727-8.365 0-15.049-2.805-20.384-7.521.666 1.749 1.286 3.513 1.828 5.303 1.767 5.825 3.446 11.763 5.622 17.464 6.537 5.168 14.555 8.203 24.392 8.203 30.562 0 43.636-29.18 48.922-61.176z",
    fill: "#c668b9"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m387.736 458.144c-26.845 17.741-72.32 21.46-86.422-.683 3.838-1.701-8.627-41.665-6.49-44.748 3.543-5.112 45.77 9.801 61.828 3.074 8.071-3.381 45.695-37.756 65.622-21.801s-7.693 46.417-34.538 64.158z",
    fill: "#fff"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m412.668 442.996c16.62-16.738 24.789-36.853 9.606-49.01-16.498-13.21-32.305 8.473-41.836 18.244 10.715 10.291 21.08 20.963 32.23 30.766z",
    fill: "#a1e8c3"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m68.581 478.402s-32.452-15.227-36.38-42.984 18.03-42.897 18.03-42.897-44.435-14.224-39.911-75.823 45.696-71.558 45.696-71.558-16.809-81.995 64.721-48.25c0 0-20.525-110.454 57.89-74.445l21.162 197.563z",
    fill: "#ccf3e2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m51.6 392.307s-39.989-14.093-39.27-53.251c6.571 17.235 50.024 77.594 109.248-22.951 2.201-3.736 36.837 58.293 40.958 57.201l-93.1 106.718s-33.734-15.799-37.402-44.133c-3.667-28.333 19.566-43.584 19.566-43.584z",
    fill: "#b1b6e1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m70.957 479.987c13.413-36.122 34.586-64.352 59.12-82.836l.009.212c-9.94-14.085-17.691-30.117-24.909-55.673l-15.299-50.583c-5.139-18.197-4.388-36.663 1.115-53.365-5.591-3.193-10.948-8.115-15.669-14.917-14.377-20.716-8.967-56.786-2.516-61.263s42.134 3.075 56.511 23.791c.568.819 1.097 1.636 1.609 2.452 6.752-4.031 14.135-7.256 22.064-9.495l54.28-15.331c4.053-1.145 8.035-1.936 11.937-2.425-.854-5.145-.826-10.905.271-17.204 4.281-24.583 33.17-46.22 40.825-44.887s27.53 31.461 23.249 56.044c-1.416 8.134-4.207 14.823-7.94 20.035 12.621 8.138 22.306 18.213 28.067 26.214 13.903 19.309 26.103 47.548 26.103 47.548 26.833 13.968 41.289 39.367 39.515 65.512-1.464 21.572-11.218 39.84-26.936 54.459-13.815 12.849-39.193 23.224-53.902 26.03l-2.258 1.088c8.608 28.579 14.118 65.422 14.077 84.594",
    fill: "#fff"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m330.115 245.359s-12.355-28.598-26.435-48.152c-5.834-8.103-15.643-18.306-28.424-26.547 3.78-5.278 6.607-12.053 8.041-20.29 4.335-24.895-15.793-55.406-23.545-56.757-3.458-.602-11.193 3.432-19.087 10.285.568-.052 1.071-.035 1.496.06 6.946 1.547 23.843 29.959 18.877 52.267-1.643 7.381-4.482 13.382-8.12 17.991 11.199 7.984 19.629 17.615 24.559 25.181 11.895 18.259 21.851 44.615 21.851 44.615 23.953 13.925 36.093 37.781 33.354 61.624-2.26 19.673-11.965 35.97-26.969 48.674-8.696 7.363-20.199 16.693-31.917 21.138-9.082 3.445-17.424 8.757-16.258 18.682 1.332 11.326 1.743 31.133 2.763 43.729.944 11.656-8.561 21.488-20.243 20.943l-161.999-.402c-6.052 10.284-5.566 9.486-10.059 21.587h232.237c.041-19.415-5.538-56.727-14.256-85.669l2.287-1.102c14.896-2.842 40.597-13.348 54.587-26.361 15.917-14.805 25.796-33.305 27.278-55.151 1.796-26.478-12.844-52.2-40.018-66.345z",
    fill: "#e1bdfc"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m164.615 200.167c-.086-.398-.155-.803-.186-1.224-3.924-15.373-3.173-29.902 4.402-43.2-4.74-17.1-4.118-31.676 4.352-42.706-.088-20.419 2.452-42.978 6.831-67.033.369-3.618 5.495-3.992 6.385-.466 6.842 18.485 12.078 35.988 12.802 50.731 7.849 9.863 11.242 21.133 8.661 34.319 7.014 10.247 10.636 21.97 9.052 35.872 9.014 10.285 8.09 22.374 8.116 27.963-1.033 19.09-56.601 23.414-60.415 5.744z",
    fill: "#f6e06e"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m164.615 200.167c-.086-.398-.155-.803-.186-1.224-2.787-10.917-3.199-21.406-.5-31.334.31 2.936.848 5.91 1.613 8.922.024.36.081.706.154 1.046 3.22 15.087 52.047 10.982 53.095-5.355.004-.923.039-2.055.039-3.341 6.955 9.7 6.177 20.386 6.201 25.543-1.034 19.089-56.602 23.413-60.416 5.743z",
    fill: "#dda86a"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m301.46 177.694c-14.223-3.446-26.535-12.001-35.361-23.674-2.507-3.316-5.553-6.33-9.129-8.915-17.077-12.344-40.989-10.238-55.629 4.917-17.462 18.075-15.638 46.803 3.318 62.592 16.321 13.593 36.676 15.28 53.429 9.77 9.76-3.21 30.697-15.95 46.476-26.026 7.639-4.879 5.703-16.53-3.104-18.664z",
    fill: "#ccf3e2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m204.659 212.614c16.321 13.593 36.676 15.28 53.429 9.77 9.76-3.21 30.697-15.95 46.476-26.026 7.638-4.878 5.703-16.529-3.105-18.663-14.223-3.446-26.535-12.002-35.361-23.674-2.507-3.316-5.553-6.33-9.129-8.915-17.077-12.344-40.989-10.238-55.629 4.916-17.461 18.075-15.637 46.803 3.319 62.592zm13.248-68.351c12.751-8.905 30.178-7.25 40.544 3.838 2.171 2.322 3.898 4.881 5.194 7.584 4.564 9.517 12.09 17.265 21.75 21.61 5.982 2.691 5.618 11.282-.579 13.761-12.804 5.122-29.698 11.467-37.164 12.473-12.815 1.726-27.127-2.171-36.766-14.053-11.194-13.8-8.187-34.592 7.021-45.213z",
    fill: "#b1b6e1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m468.27 99.229 8.215 23.098c.352.989 1.048 1.773 1.926 2.168l20.521 9.246c2.899 1.306 2.899 5.925 0 7.232l-20.521 9.246c-.879.396-1.575 1.18-1.926 2.169l-8.215 23.098c-1.16 3.263-5.264 3.263-6.425 0l-8.214-23.098c-.352-.989-1.048-1.773-1.927-2.169l-20.521-9.246c-2.899-1.306-2.899-5.925 0-7.232l20.521-9.246c.879-.396 1.575-1.179 1.927-2.168l8.214-23.098c1.16-3.263 5.264-3.263 6.425 0z",
    fill: "#fbf2aa"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m62.791 28.248 6.093 17.133c.261.734.777 1.315 1.429 1.608l15.222 6.858c2.151.969 2.151 4.395 0 5.364l-15.222 6.858c-.652.294-1.168.875-1.429 1.608l-6.093 17.133c-.861 2.421-3.905 2.421-4.766 0l-6.093-17.133c-.261-.734-.777-1.315-1.429-1.608l-15.223-6.857c-2.15-.969-2.15-4.395 0-5.364l15.222-6.858c.652-.294 1.168-.875 1.429-1.608l6.093-17.133c.861-2.422 3.906-2.422 4.767-.001z",
    fill: "#fbf2aa"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#f7e16e"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "312.746",
    cy: "31.218",
    r: "12.187"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m401.611 73.995c0 5.228-4.238 9.466-9.466 9.466s-9.466-4.238-9.466-9.466 4.238-9.466 9.466-9.466c5.228.001 9.466 4.239 9.466 9.466z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m473.251 419.664h-18.041v-42.775c25.756-4.807 52.225-30.535 52.225-115.966 0-5.523-4.478-10-10-10h-104.449c-5.523 0-10 4.477-10 10 0 85.431 26.468 111.159 52.224 115.966v17.377c-1.592-3.064-3.827-5.797-6.686-8.086-17.855-14.296-39.423-1.492-56.755 8.793-9.064 5.38-18.438 10.942-25.967 12.358-14.179 2.672-30.921-3.314-41.555-8.758 14.661-4.964 32.837-13.652 44.663-24.65 18.125-16.858 28.534-37.987 30.104-61.104 2.016-29.701-13.901-57.506-41.734-73.349-3.506-7.729-13.019-27.825-24.024-43.781 1.786-3.151 2.477-6.871 1.842-10.684-1.091-6.543-5.775-11.579-12.224-13.142-4.548-1.102-8.948-2.826-13.105-5.09 1.463-3.803 2.616-7.864 3.374-12.225 3.016-17.318-3.754-34.332-8.058-42.932-2.652-5.298-12.17-22.735-23.328-24.68-11.164-1.945-26.011 11.251-30.297 15.342-3.593 3.429-8.558 8.759-12.941 15.486-.772-8.896-3.951-17.306-9.545-25.134-1.107-13.213-5.198-28.903-13.07-50.223-1.814-5.867-7.441-9.737-13.619-9.29-6.253.456-11.287 5.196-12.156 11.356-4.253 23.423-6.514 43.832-6.887 62.148-14.369-3.102-26.348-1.018-35.736 6.3-12.4 9.664-17.256 26.622-18.734 42.97-2.882-1.276-5.529-2.279-7.725-3.025-5.657-1.924-24.842-7.692-34.203-1.195-9.362 6.497-10.669 26.488-10.847 32.46-.063 2.121-.055 4.677.089 7.502-12.241 14.023-12.264 35.244-11.091 47.099-14.157 6.854-40.917 26.419-44.649 77.232-2.602 35.433 9.948 56.852 20.934 68.58 4.2 4.484 8.471 7.922 12.305 10.514-6.876 8.795-13.961 22.854-11.286 41.761 4.632 32.735 40.509 49.92 42.034 50.635 1.373.645 2.818.949 4.241.949.498 0 .992-.043 1.48-.116.213.014.426.028.639.028 4.061 0 7.879-2.492 9.376-6.521 11.993-32.296 30.726-58.936 54.243-77.17 3.482-1.747 5.676-5.398 5.502-9.374l-.009-.212c-.107-2.45-1.105-4.729-2.739-6.449-9.549-13.882-16.328-29.34-22.528-51.292-.017-.06-.034-.118-.052-.178l-15.272-50.492c-4.403-15.653-4.053-32.053 1.013-47.431 1.488-4.516-.41-9.455-4.539-11.812-4.539-2.593-8.715-6.608-12.413-11.935-9.914-14.286-7.802-39.241-4.695-46.864 8.26-.281 32.346 6.509 42.256 20.789.423.61.854 1.268 1.354 2.066 2.889 4.608 8.931 6.064 13.6 3.275 6.129-3.659 12.742-6.505 19.655-8.458l.837-.236c.293 4.52 1.023 9.173 2.219 13.96.04.338.11.696.179 1.055.014.099.031.197.05.295.007.035.009.065.017.1 0 .001.001.003.001.004.014.064.033.124.047.187.017.067.032.134.051.201 2.799 11.541 17.45 15.51 31.215 15.509 1.954 0 3.89-.079 5.77-.229 1.414-.112 2.854-.28 4.3-.481.23.199.451.406.685.601 11.119 9.261 24.911 14.099 39.113 14.099 6.665 0 13.419-1.065 20.03-3.24 7.014-2.306 19.6-9.08 37.448-20.136 12.223 18.021 22.822 42.393 22.933 42.65.912 2.109 2.523 3.842 4.561 4.902 22.611 11.77 35.699 33.215 34.154 55.965-1.235 18.205-9.232 34.292-23.77 47.814-12.521 11.646-36.481 21.147-48.965 23.529-.854.163-1.685.438-2.469.815l-2.259 1.089c-4.432 2.137-6.651 7.181-5.232 11.892 8.48 28.154 13.689 64.323 13.652 81.689-.012 5.522 4.456 10.01 9.978 10.021h.022c5.443 0 9.867-4.353 9.989-9.772 9.683 2.879 20.103 4.523 30.676 4.522 14.157-.001 28.566-2.908 41.75-9.594 12.917-6.55 29.29-19.315 40.922-33.806h49.897c5.522 0 10-4.478 10-10 .005-5.521-4.473-9.998-9.995-9.998zm-394.122-179.442c-4.24 17.045-3.962 34.848.862 51.928.017.06.034.118.052.178l15.273 50.497c5.902 20.875 12.389 36.57 21.047 50.621-21.37 18.193-38.801 42.606-51.064 71.442-8.42-5.648-21.152-16.411-23.198-30.871-2.978-21.043 13.176-32.814 13.805-33.264 3.139-2.164 4.774-5.925 4.216-9.696-.558-3.772-3.212-6.897-6.843-8.061-.37-.118-36.889-12.437-32.987-65.566 3.847-52.386 36.078-62.024 38.116-62.58 5.297-1.19 8.478-6.37 7.407-11.699-.812-4.042-1.676-11.743-1.044-19.577.649 1.109 1.329 2.207 2.073 3.279 3.673 5.29 7.787 9.765 12.285 13.369zm179.093-132.988c5.957 5.605 18.149 27.043 15.218 43.885-.116.669-.261 1.308-.4 1.954-.737-.87-1.462-1.755-2.155-2.672-2.922-3.863-6.421-7.281-10.4-10.158-8.004-5.786-17.324-8.782-26.686-9.113 6.848-11.787 18.792-21.447 24.423-23.896zm-72.633-31.72c1.89 7.282 3.3 14.635 3.625 21.247.002.044.01.086.013.13.012.198.035.396.059.594l-5.878 4.125c.337-8.196 1.054-16.858 2.181-26.096zm-4.474 43.614c.059-.077.106-.158.162-.235.112-.154.222-.31.325-.471.079-.124.152-.249.226-.375.09-.156.179-.312.261-.474.071-.138.135-.277.199-.417.022-.05.048-.097.07-.147l12.739-8.941c3.483 6.393 4.427 13.07 2.953 20.6-.103.525-.15 1.048-.169 1.566l-18.76 13.078c-2.945-11.39-2.295-18.599 1.994-24.184zm-31.104 47.883c-5.67 1.602-11.182 3.688-16.466 6.229-1.642-1.854-3.396-3.554-5.206-5.137.025-15.531 2.51-32.44 11.471-39.413 4.253-3.31 10.227-4.245 17.833-2.836-1.181 10.027 1.206 20.114 3.912 28.705.133.422.298.825.48 1.216-1.408 2.849-2.55 5.792-3.455 8.816zm21.993-4.261c1.986-1.237 4.491-2.611 6.203-4.173l20.176-14.065c-.458.439-.913.881-1.357 1.341-9.228 9.553-14.059 21.981-13.72 35.13l-14.51 9.351c-1.545-10.192-.491-19.3 3.208-27.584zm1.06 39.11 12.331-7.947c1.222 4.014 2.953 7.854 5.148 11.42-7.878.081-14.147-1.398-17.479-3.473zm83.149 14.824c-16.74 5.503-34.578 2.26-47.714-8.681-7.819-6.512-12.619-16.078-13.169-26.244-.558-10.307 3.109-20.098 10.327-27.568 7.088-7.337 16.71-11.115 26.385-11.115 7.488 0 15.01 2.264 21.412 6.892 3.013 2.178 5.656 4.759 7.858 7.672 9.851 13.027 23.606 22.221 38.734 25.886 2.48.602 3.074 2.615 3.214 3.453.14.841.232 2.943-1.926 4.322-21.95 14.018-37.975 23.032-45.121 25.383zm117.174 238.947c-20.533 10.412-45.435 8.992-64.727 1.371-1.213-11.179-3.211-24.094-5.886-37.076 13.552 5.764 30.808 10.052 46.726 7.06 8.076-1.519 16.107-5.417 23.983-9.861l19.829 24.879c-6.267 5.386-13.146 10.189-19.925 13.627zm44.614-48.259c-.734 7.104-7.076 16.983-15.958 26.334l-18.094-22.702c15.238-8.978 25.784-14.25 32.075-9.213 1.141.915 2.328 2.174 1.977 5.581zm-14.881-136.45h84.181c-.245 8.967-.832 17.303-1.749 25.005h-80.684c-.916-7.701-1.503-16.038-1.748-25.005zm8.393 56.064c-1.952-5.668-3.566-12.037-4.851-19.059h77.097c-1.285 7.022-2.899 13.39-4.851 19.059-10.607 30.807-27.987 30.807-33.698 30.807-5.711-.001-23.091-.001-33.697-30.807z",
    fill: "#3c122c"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m250.336 179.871c-2.699 0-5.388-1.085-7.36-3.227-6.672-7.248-13.9-7.618-13.988-7.618 0 0 0 0-.001 0-.045.001-.092.001-.138.001-5.46 0-9.922-4.389-9.996-9.865-.075-5.522 4.342-10.06 9.864-10.134 1.6-.045 16.191.185 28.973 14.071 3.74 4.063 3.479 10.39-.585 14.13-1.921 1.768-4.348 2.642-6.769 2.642z",
    fill: "#fff"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#3c122c"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m190.062 327.812c-23.373 0-42.388-19.015-42.388-42.387 0-23.373 19.015-42.388 42.388-42.388 23.372 0 42.388 19.015 42.388 42.388 0 23.372-19.015 42.387-42.388 42.387zm0-72.774c-16.756 0-30.388 13.632-30.388 30.388 0 16.755 13.632 30.387 30.388 30.387s30.388-13.632 30.388-30.387c0-16.757-13.632-30.388-30.388-30.388z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m173.129 343.268c0 3.819 3.096 6.915 6.915 6.915s6.915-3.096 6.915-6.915-3.096-6.915-6.915-6.915c-3.819.001-6.915 3.096-6.915 6.915z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "180.044",
    cy: "363.815",
    r: "6.915"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m266.834 317.087c-1.011 0-2.035-.256-2.976-.794-2.876-1.646-3.872-5.312-2.226-8.188 3.349-5.849 9.606-9.395 16.347-9.23 5.624.13 10.8 2.779 14.2 7.268 2.001 2.642 1.482 6.404-1.159 8.405-2.643 2.002-6.405 1.481-8.405-1.159-1.178-1.555-2.969-2.472-4.913-2.518-2.368-.051-4.496 1.171-5.655 3.197-1.109 1.935-3.132 3.019-5.213 3.019z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m286.649 262.888c-2.868 0-5.404-2.063-5.906-4.985-.562-3.266 1.632-6.368 4.897-6.929l19.882-3.414c3.27-.567 6.367 1.632 6.929 4.897.561 3.266-1.632 6.368-4.898 6.929l-19.882 3.414c-.343.06-.685.088-1.022.088z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m184.003 294.541c-2.366 0-4.608-1.409-5.558-3.735-1.251-3.068.221-6.57 3.289-7.822l18.678-7.62c3.068-1.254 6.57.221 7.822 3.289 1.251 3.068-.221 6.57-3.289 7.822l-18.678 7.62c-.742.303-1.509.446-2.264.446z"
  })))))
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ./src/blocks/team-members-group/index.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons.js */ "./src/icons.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.css */ "./src/blocks/team-members-group/main.css");
/* harmony import */ var postcss_selector_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! postcss-selector-parser */ "./node_modules/postcss-selector-parser/dist/index.js");








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("wdm-plugins/team-members-group", {
  icon: {
    src: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].primary
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      columns,
      imageShape
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: `cols-${columns}`
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Settings", "wdm-plugins")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Columns", "wdm-plugins"),
      onChange: columns => setAttributes({
        columns
      }),
      value: columns,
      min: 2,
      max: 4
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Image Shape", "wdm-plugins"),
      value: imageShape,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Hexagon", "wdm-plugins"),
        value: "hexagon"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Rabbet", "wdm-plugins"),
        value: "rabbet"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Pentagon", "wdm-plugins"),
        value: "pentagon"
      }],
      onChange: imageShape => setAttributes({
        imageShape
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      orientation: "horizontal",
      allowedBlocks: ["wdm-plugins/team-member"],
      template: [["wdm-plugins/team-member", {
        name: "John Doe",
        title: "CEO of Udemy",
        bio: "This is an example of bio"
      }], ["wdm-plugins/team-member"], ["wdm-plugins/team-member"]]
      // templateLock="all"
    })));
  },
  save({
    attributes
  }) {
    const {
      columns
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: `cols-${columns}`
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map