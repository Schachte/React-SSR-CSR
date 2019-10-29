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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

var _UsersListPage = __webpack_require__(25);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _QueryExample = __webpack_require__(6);

var _QueryExample2 = _interopRequireDefault(_QueryExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _UsersListPage2.default, {
    path: "/users"
  }), {
    component: _QueryExample2.default,
    path: "/query"
  }]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QueryExample;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHooks = __webpack_require__(2);

var _getUsers = __webpack_require__(31);

var _getUsers2 = _interopRequireDefault(_getUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QueryExample() {
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
        "ERROR..."
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
          null,
          user.name
        )
      );
    })
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__(16);

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _apolloLinkSchema = __webpack_require__(17);

var _apolloCacheInmemory = __webpack_require__(18);

var _graphqlTools = __webpack_require__(19);

var _typeDefs = __webpack_require__(20);

var _typeDefs2 = _interopRequireDefault(_typeDefs);

var _resolvers = __webpack_require__(21);

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initApollo = function initApollo() {
  var schema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: _typeDefs2.default,
    resolvers: _resolvers2.default
  });

  var client = new _apolloClient2.default({
    link: new _apolloLinkSchema.SchemaLink({ schema: schema }),
    cache: new _apolloCacheInmemory.InMemoryCache({
      dataIdFromObject: function dataIdFromObject(object) {
        return object.id || null;
      }
    }).restore({
      "1": { id: 1, name: "gabriel Grahams", __typename: "User" },
      "2": { id: 2, name: "Ervin Howell", __typename: "User" },
      "3": { id: 3, name: "Clementine Bauch", __typename: "User" },
      "4": { id: 4, name: "Patricia Lebsack", __typename: "User" },
      "5": { id: 5, name: "Chelsey Dietrich", __typename: "User" },
      ROOT_QUERY: {
        users: [{ type: "id", generated: false, id: 1, typename: "User" }, { type: "id", generated: false, id: 2, typename: "User" }, { type: "id", generated: false, id: 3, typename: "User" }, { type: "id", generated: false, id: 4, typename: "User" }, { type: "id", generated: false, id: 5, typename: "User" }]
      }
    })
  });

  return client;
};

var client = initApollo();
exports.default = client;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(30);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Any request that accesses /api will be automatically sent off to this domain
app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  }
}));
app.use(_express2.default.static("public"));

/**
 * Every time we hit any route, the idea is that we create a new redux store right out of the gate.
 * We find all the routes that match the current query path from the incoming request that is coming in from the client.
 *
 * From each respective component, we ensure that we call the proper loadData function to load the component state into the redux store.
 */
app.get("/", function (req, res) {
  // const store = createStore(req);
  /**
   * We are going to read the route that the user is requesting,
   * then from there we are going to loop through all the relevant components
   * and load their data into the redux store
   */

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    // Need to populate the apollo cache here
    return null;
    // return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req));
  });
});

app.get("/users", function (req, res) {
  res.send([{ id: 1, name: "Leanne Grahams" }, { id: 2, name: "Ervin Howell" }, { id: 3, name: "Clementine Bauch" }, { id: 4, name: "Patricia Lebsack" }, { id: 5, name: "Chelsey Dietrich" }]);
});

app.listen(3000, function () {
  return console.log("App is running on port 3000");
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(9);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(26);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  // Enables rendering all relevant components into HTML to send back to the client
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.path, context: {} },
    _react2.default.createElement(
      "div",
      null,
      (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
    )
  ));

  // We will take the contents of the redux store and serialize it as a global back to the client to help rehydrate the view
  var html = "\n    <html>\n      <head>\n      </head>\n      <body>\n        <div id=\"root\">\n          " + content + "\n        </div>\n        <script>\n          // Going to want to serialize the apollo cache instead of the store\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";

  return html;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QueryExample = __webpack_require__(6);

var _QueryExample2 = _interopRequireDefault(_QueryExample);

var _graphqlTag = __webpack_require__(1);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactHooks = __webpack_require__(2);

var _Apollo = __webpack_require__(7);

var _Apollo2 = _interopRequireDefault(_Apollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = function random() {
  return Math.random();
};
var HomePage = function HomePage() {
  console.log(JSON.stringify(_Apollo2.default.extract()));
  console.log("sup");
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "span",
      null,
      random()
    ),
    _react2.default.createElement(_QueryExample2.default, null)
  );
};

exports.default = {
  component: HomePage
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = "\ntype User {\n  id: Int\n  name: String\n}\n\ntype Query {\n  users: [User]\n}\n";

exports.default = typeDefs;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(8);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

var _reactApollo = __webpack_require__(24);

var _Apollo = __webpack_require__(7);

var _Apollo2 = _interopRequireDefault(_Apollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    _reactApollo.ApolloProvider,
    { client: _Apollo2.default },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_Header2.default, null),
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch(fetchCurrentUser());
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;

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
        { to: "/query" },
        "Query"
      ),
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHooks = __webpack_require__(2);

var _getUsers = __webpack_require__(31);

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
      "noithing"
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

/**
 *
 * @param {Used to populate the serverside apollo cache} cache
 */
function loadData(cache) {
  return {};
}

exports.default = {
  loadData: loadData,
  component: UsersListPage
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  {\n    users {\n      id\n      name\n    }\n  }\n"], ["\n  {\n    users {\n      id\n      name\n    }\n  }\n"]);

var _graphqlTag = __webpack_require__(1);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_USERS = (0, _graphqlTag2.default)(_templateObject);

exports.default = GET_USERS;

/***/ })
/******/ ]);