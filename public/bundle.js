'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

(0, _registerServiceWorker2.default)();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _header = require('./components/headerComponent/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./components/footerComponent/footer');

var _footer2 = _interopRequireDefault(_footer);

var _homePage = require('./components/pages/Home/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

var _products = require('./components/pages/products');

var _products2 = _interopRequireDefault(_products);

require('./Assets/css/default.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//components

// styles


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'App' },
          _react2.default.createElement(_header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _homePage2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/products', component: _products2.default }),
          _react2.default.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _logo = require('../../Assets/img/logo.png');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'top-header' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'search-console' },
							_react2.default.createElement('input', { type: 'text', placeholder: 'Search' }),
							_react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'log-buttons' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/' },
								_react2.default.createElement('i', { className: 'fa fa-user-circle-o', 'aria-hidden': 'true' }),
								' ',
								_react2.default.createElement(
									'span',
									null,
									'Login'
								)
							),
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/' },
								_react2.default.createElement('i', { className: 'fa fa-pencil', 'aria-hidden': 'true' }),
								' ',
								_react2.default.createElement(
									'span',
									null,
									'Register'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'bottom-header' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'logo' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/' },
								_react2.default.createElement('img', { src: _logo2.default, alt: '' })
							)
						),
						_react2.default.createElement(
							'nav',
							null,
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'Home'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'Gallery'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'Videos'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'Faces'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'Blog'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'sdfg'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '' },
										'Contacts'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "div",
          { className: "container" },
          "Footer"
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Products = function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).apply(this, arguments));
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container-fluid" },
        _react2.default.createElement(
          "h1",
          null,
          "Products"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea consequatur incidunt, enim magni consequuntur temporibus architecto officia ullam tenetur saepe id ab esse, asperiores eum!"
        )
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = Products;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _homeSlider = require('./homeSlider');

var _homeSlider2 = _interopRequireDefault(_homeSlider);

var _latestBlogPosts = require('./latestBlogPosts');

var _latestBlogPosts2 = _interopRequireDefault(_latestBlogPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_Component) {
  _inherits(Homepage, _Component);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).apply(this, arguments));
  }

  _createClass(Homepage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_homeSlider2.default, null),
        _react2.default.createElement(_latestBlogPosts2.default, null)
      );
    }
  }]);

  return Homepage;
}(_react.Component);

exports.default = Homepage;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactOwlCarousel = require('react-owl-carousel');

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

var _slide = require('../../../Assets/img/slider/slide1.jpg');

var _slide2 = _interopRequireDefault(_slide);

var _slide3 = require('../../../Assets/img/slider/slide2.jpg');

var _slide4 = _interopRequireDefault(_slide3);

var _slide5 = require('../../../Assets/img/slider/slide3.jpg');

var _slide6 = _interopRequireDefault(_slide5);

var _slide7 = require('../../../Assets/img/slider/slide4.jpg');

var _slide8 = _interopRequireDefault(_slide7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeSlider = function (_Component) {
	_inherits(HomeSlider, _Component);

	function HomeSlider() {
		_classCallCheck(this, HomeSlider);

		return _possibleConstructorReturn(this, (HomeSlider.__proto__ || Object.getPrototypeOf(HomeSlider)).apply(this, arguments));
	}

	_createClass(HomeSlider, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'section',
				{ className: 'homeSliderComponent' },
				_react2.default.createElement(
					_reactOwlCarousel2.default,
					{
						className: 'owl-theme',
						loop: true,
						margin: 10,
						nav: false,
						items: 1,
						autoplay: true,
						autoplayTimeout: 7500,
						autoplayHoverPause: true,
						smartSpeed: 2000,
						id: 'homeslider'
					},
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement('img', { src: _slide2.default, alt: '' }),
						_react2.default.createElement(
							'div',
							{ className: 'slideName' },
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									null,
									'Create new music'
								)
							),
							_react2.default.createElement(
								'p',
								null,
								'Create your own world'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'slideRefs' },
							_react2.default.createElement(_reactRouterDom.Link, { to: '' }),
							_react2.default.createElement(_reactRouterDom.Link, { to: '' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement('img', { src: _slide4.default, alt: '' }),
						_react2.default.createElement(
							'div',
							{ className: 'slideName' },
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									null,
									'Create new music'
								)
							),
							_react2.default.createElement(
								'p',
								null,
								'Create your own world'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'slideRefs' },
							_react2.default.createElement(_reactRouterDom.Link, { to: '' }),
							_react2.default.createElement(_reactRouterDom.Link, { to: '' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement('img', { src: _slide6.default, alt: '' }),
						_react2.default.createElement(
							'div',
							{ className: 'slideName' },
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									null,
									'Create new music'
								)
							),
							_react2.default.createElement(
								'p',
								null,
								'Create your own world'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'slideRefs' },
							_react2.default.createElement(_reactRouterDom.Link, { to: '' }),
							_react2.default.createElement(_reactRouterDom.Link, { to: '' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement('img', { src: _slide8.default, alt: '' }),
						_react2.default.createElement(
							'div',
							{ className: 'slideName' },
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									null,
									'Create new music'
								)
							),
							_react2.default.createElement(
								'p',
								null,
								'Create your own world'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'slideRefs' },
							_react2.default.createElement(_reactRouterDom.Link, { to: '' }),
							_react2.default.createElement(_reactRouterDom.Link, { to: '' })
						)
					)
				)
			);
		}
	}]);

	return HomeSlider;
}(_react.Component);

exports.default = HomeSlider;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactOwlCarousel = require('react-owl-carousel');

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

var _lateBlogPost = require('./lateBlogPost');

var _lateBlogPost2 = _interopRequireDefault(_lateBlogPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LatestBlogWrapper = function (_Component) {
	_inherits(LatestBlogWrapper, _Component);

	function LatestBlogWrapper(props) {
		_classCallCheck(this, LatestBlogWrapper);

		var _this = _possibleConstructorReturn(this, (LatestBlogWrapper.__proto__ || Object.getPrototypeOf(LatestBlogWrapper)).call(this, props));

		_this.state = {
			posts: props.allPosts
		};
		return _this;
	}

	_createClass(LatestBlogWrapper, [{
		key: 'render',
		value: function render() {

			// getInitialState: function updt (props) {
			//     return {
			//     	posts: this.props.allPosts
			//     };
			// }

			return _react2.default.createElement(
				'div',
				{ className: 'lastPostWrapper' },
				_react2.default.createElement(_lateBlogPost2.default, null),
				this.props.allPosts.map(function (post) {
					return _react2.default.createElement(_lateBlogPost2.default, { key: post.id, name: post.name, link: post.link, views: post.views });
				}),
				console.log(this.props.allPosts)
			);
		}
	}]);

	return LatestBlogWrapper;
}(_react.Component);

exports.default = LatestBlogWrapper;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactOwlCarousel = require('react-owl-carousel');

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LateBlogPost = function (_Component) {
	_inherits(LateBlogPost, _Component);

	function LateBlogPost() {
		_classCallCheck(this, LateBlogPost);

		return _possibleConstructorReturn(this, (LateBlogPost.__proto__ || Object.getPrototypeOf(LateBlogPost)).apply(this, arguments));
	}

	_createClass(LateBlogPost, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'lastPost' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						this.props.name
					),
					_react2.default.createElement(
						'p',
						null,
						this.props.shortDesription
					),
					_react2.default.createElement(
						'p',
						null,
						this.props.link
					),
					_react2.default.createElement(
						'p',
						null,
						this.props.views
					)
				)
			);
		}
	}]);

	return LateBlogPost;
}(_react.Component);

exports.default = LateBlogPost;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactOwlCarousel = require('react-owl-carousel');

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

var _lateBlogPost = require('./lateBlogPost');

var _lateBlogPost2 = _interopRequireDefault(_lateBlogPost);

var _lastestBlogsWrapper = require('./lastestBlogsWrapper');

var _lastestBlogsWrapper2 = _interopRequireDefault(_lastestBlogsWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LatestsBlogPosts = function (_Component) {
	_inherits(LatestsBlogPosts, _Component);

	function LatestsBlogPosts() {
		_classCallCheck(this, LatestsBlogPosts);

		return _possibleConstructorReturn(this, (LatestsBlogPosts.__proto__ || Object.getPrototypeOf(LatestsBlogPosts)).apply(this, arguments));
	}

	_createClass(LatestsBlogPosts, [{
		key: 'render',
		value: function render() {

			var posts = [{
				id: 1,
				name: 'Lorem ipsum dolor sit amet',
				shortDesription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nulla minima rerum veniam voluptas est dolor corporis. Odio, dolor, eum!',
				link: '/post1',
				views: 100

			}, {
				id: 2,
				name: 'Lorem ipsum dolor sit amet, consectetur.',
				shortDesription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nulla minima rerum veniam voluptas est dolor corporis. Odio, dolor, eum!',
				link: '/post1',
				views: 450
			}, {
				id: 3,
				name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi.',
				shortDesription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nulla minima rerum veniam voluptas est dolor corporis. Odio, dolor, eum!',
				link: '/post1',
				views: 300
			}];

			return _react2.default.createElement(
				'section',
				{ className: 'LatestsBlogPosts' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'h2',
						null,
						'Latest blog posts'
					),
					_react2.default.createElement(_lastestBlogsWrapper2.default, { allPosts: posts })
				)
			);
		}
	}]);

	return LatestsBlogPosts;
}(_react.Component);

exports.default = LatestsBlogPosts;