'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var NotificationContent = function (_Component) {
    _inherits(NotificationContent, _Component);

    function NotificationContent(props) {
        _classCallCheck(this, NotificationContent);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onContentScroll = _this.onContentScroll.bind(_this);
        return _this;
    }

    NotificationContent.prototype.componentDidMount = function componentDidMount() {
        this.refs.rrContent.addEventListener('scroll', this.onContentScroll);
    };

    NotificationContent.prototype.componentWillUnmount = function componentWillUnmount() {
        this.refs.rrContent.removeEventListener('scroll', this.onContentScroll);
    };

    NotificationContent.prototype.onContentScroll = function onContentScroll(e) {
        if (this.props.onScroll) {
            this.props.onScroll(e);
        }

        if (e.target.scrollHeight - e.target.scrollTop == e.target.clientHeight) {
            if (this.props.onScrollBottom) {
                this.props.onScrollBottom();
            }
        }
    };

    NotificationContent.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            { className: 'rn-content', ref: 'rrContent' },
            this.props.children
        );
    };

    return NotificationContent;
}(_react.Component);

exports.default = NotificationContent;


NotificationContent.displayName = 'NotificationContent';
NotificationContent.proptypes = {
    children: _propTypes2.default.node.isRequired
};