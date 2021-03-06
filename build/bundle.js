/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHooks = __webpack_require__(2);

var _getUsers = __webpack_require__(3);

var _getUsers2 = _interopRequireDefault(_getUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryExample = function QueryExample() {
  var _useQuery = (0, _reactHooks.useQuery)(_getUsers2.default),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        null,
        "Loading..."
      )
    );
  }
  if (error) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        null,
        "Err..."
      )
    );
  }
  return _react2.default.createElement(
    "ul",
    null,
    data.users.map(function (user) {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "li",
          { key: user.id },
          user.name
        )
      );
    })
  );
};

exports.default = QueryExample;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  {\n    users {\n      id\n      name\n    }\n  }\n"], ["\n  {\n    users {\n      id\n      name\n    }\n  }\n"]);

var _graphqlTag = __webpack_require__(13);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_USERS = (0, _graphqlTag2.default)(_templateObject);

exports.default = GET_USERS;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(14);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  (0, _renderer2.default)(req, res);
});

app.listen(3000, function () {
  return console.log("App is running on port 3000");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

var _server = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(17);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _createCache = __webpack_require__(18);

var _createCache2 = _interopRequireDefault(_createCache);

var _reactSsr = __webpack_require__(26);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

var _reactApollo = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {
  var client = (0, _createCache2.default)({ isClient: false });
  var App = _react2.default.createElement(
    _reactApollo.ApolloProvider,
    { client: client },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  );

  var Html = function Html(_ref) {
    var content = _ref.content,
        state = _ref.state;

    return _react2.default.createElement(
      "html",
      null,
      _react2.default.createElement(
        "body",
        null,
        _react2.default.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: content } }),
        _react2.default.createElement("script", {
          dangerouslySetInnerHTML: {
            __html: "window.__APOLLO_STATE__=" + JSON.stringify(state).replace(/</g, "\\u003c") + ";"
          }
        }),
        _react2.default.createElement("script", { src: "bundle.js" })
      )
    );
  };

  return (0, _reactSsr.getDataFromTree)(App).then(function () {
    var content = (0, _server.renderToString)(App);
    var initialState = client.extract();
    var html = _react2.default.createElement(Html, { content: content, state: initialState });
    res.status(200);
    res.send("<!doctype html>\n" + (0, _server.renderToStaticMarkup)(html));
    res.end();
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _HomePage = __webpack_require__(12);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

var _UsersListPage = __webpack_require__(15);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _QueryExample = __webpack_require__(1);

var _QueryExample2 = _interopRequireDefault(_QueryExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _UsersListPage2.default, {
    path: "/users"
  }), _extends({}, _QueryExample2.default, {
    path: "/query"
  })]
})];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QueryExample = __webpack_require__(1);

var _QueryExample2 = _interopRequireDefault(_QueryExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      null,
      "Home"
    ),
    _react2.default.createElement(_QueryExample2.default, null)
  );
};

exports.default = {
  component: HomePage
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/" },
      "Home Component"
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/users" },
        "Users"
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHooks = __webpack_require__(2);

var _getUsers = __webpack_require__(3);

var _getUsers2 = _interopRequireDefault(_getUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersListPage = function UsersListPage() {
  var _useQuery = (0, _reactHooks.useQuery)(_getUsers2.default),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var renderUsers = function renderUsers() {
    if (!loading && !error) {
      return data.users.map(function (user) {
        return _react2.default.createElement(
          "li",
          { key: user.id },
          user.name
        );
      });
    }
    return _react2.default.createElement(
      "div",
      null,
      "Nothing"
    );
  };

  return _react2.default.createElement(
    "div",
    null,
    "User List:",
    _react2.default.createElement(
      "ul",
      null,
      renderUsers()
    )
  );
};

exports.default = {
  component: UsersListPage
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__(19);

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _apolloLinkSchema = __webpack_require__(20);

var _apolloCacheInmemory = __webpack_require__(21);

var _graphqlTools = __webpack_require__(22);

var _typeDefs = __webpack_require__(23);

var _typeDefs2 = _interopRequireDefault(_typeDefs);

var _resolvers = __webpack_require__(24);

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initApolloClient = function initApolloClient(_ref) {
  var isClient = _ref.isClient;

  var schema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: _typeDefs2.default,
    resolvers: _resolvers2.default
  });

  var cache = new _apolloCacheInmemory.InMemoryCache({
    dataIdFromObject: function dataIdFromObject(object) {
      return object.id || null;
    }
  });

  var client = new _apolloClient2.default({
    link: new _apolloLinkSchema.SchemaLink({ schema: schema }),
    cache: isClient ? cache.restore(window.__APOLLO_STATE__) : cache,
    ssrMode: !isClient
  });

  return client;
};

exports.default = initApolloClient;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = "\ntype User {\n  id: Int\n  name: String\n}\n\ntype Query {\n  users: [User]\n}\n";

exports.default = typeDefs;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUsers = function getUsers() {
  return _axios2.default.get("http://localhost:3001/users").then(function (res) {
    return res.data;
  });
};

var resolvers = {
  Query: {
    users: function users(root, args, context, info) {
      return getUsers().then(function (users) {
        if (!users) {
          return null;
        }
        return users;
      });
    }
  }
};

exports.default = resolvers;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })
/******/ ]);