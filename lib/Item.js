'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var NotificationItem = function (_Component) {
    _inherits(NotificationItem, _Component);

    function NotificationItem(props) {
        _classCallCheck(this, NotificationItem);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    NotificationItem.prototype.handleOnClick = function handleOnClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props);
        }
    };

    NotificationItem.prototype.render = function render() {
        return _react2.default.createElement(
            'li',
            { className: (0, _classnames2.default)('rn-item', { new: this.props[this.props.options.new] }), onClick: this.handleOnClick.bind(this) },
            _react2.default.createElement(
                'p',
                { className: 'short-desc' },
                this.props.tags && this.props.tags.map(function (item, i) {
                    return _react2.default.createElement(
                        _Tag2.default,
                        _extends({ key: i }, item),
                        item.text
                    );
                }),
                this.props[this.props.options.title] && _react2.default.createElement(
                    'strong',
                    { className: 'title' },
                    this.props[this.props.options.title],
                    ' '
                ),
                this.props[this.props.options.message] && (0, _utils.cutString)(this.props[this.props.options.message], 50),
                this.props[this.props.options.date] && _react2.default.createElement(
                    'small',
                    { className: 'date' },
                    this.props[this.props.options.date]
                )
            )
        );
    };

    return NotificationItem;
}(_react.Component);

NotificationItem.displayName = 'NotificationItemComponent';
NotificationItem.propTypes = {
    onClick: _propTypes2.default.func,
    tags: _propTypes2.default.array
};
exports.default = NotificationItem;