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

var _elementClass = require('element-class');

var _elementClass2 = _interopRequireDefault(_elementClass);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ReduxnotificationCenter = function (_Component) {
    _inherits(ReduxnotificationCenter, _Component);

    function ReduxnotificationCenter(props) {
        _classCallCheck(this, ReduxnotificationCenter);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            notifications: _this.props.notifications,
            showNotification: false,
            showNotificationMessage: false,
            current: null
        };

        _this.isChildOf = _this.isChildOf.bind(_this);
        _this.mapOptions = _this.mapOptions.bind(_this);
        _this.getUnreadLength = _this.getUnreadLength.bind(_this);
        _this.toggleNotification = _this.toggleNotification.bind(_this);
        _this.timeout = null;
        return _this;
    }

    ReduxnotificationCenter.prototype.componentDidMount = function componentDidMount() {
        if (document) {
            document.addEventListener('click', this.toggleNotification);
        }
    };

    ReduxnotificationCenter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (nextProps.notifications.length !== this.state.notifications.length) {
            (0, _elementClass2.default)(this.refs.notificationIcon).add('pulse');

            this.timeout = setTimeout(function () {
                (0, _elementClass2.default)(_this2.refs.notificationIcon).remove('pulse');
            }, 1200);
            this.setState({ notifications: nextProps.notifications });
        }
    };

    ReduxnotificationCenter.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (document) {
            document.removeEventListener('click', this.toggleNotification);
        }
    };

    ReduxnotificationCenter.prototype.getUnreadLength = function getUnreadLength() {
        var _this3 = this;

        return this.state.notifications.filter(function (item) {
            return item[_this3.mapOptions().new];
        }).length;
    };

    ReduxnotificationCenter.prototype.toggleNotification = function toggleNotification(e) {
        if (e.target == this.refs.notificationIcon && !this.state.showNotification) {
            this.setState({
                showNotification: true
            });
            if (this.props.onNotificationOpen) {
                this.props.onNotificationOpen(this.state.notifications);
            }
        } else if (this.state.showNotification && !this.isChildOf(e.target, this.refs.notificationHolder)) {
            this.setState({
                showNotification: false,
                showNotificationMessage: false,
                current: null
            });
            if (this.props.onNotificationClose) {
                this.props.onNotificationClose(this.state.notifications);
            }
        }
    };

    ReduxnotificationCenter.prototype.isChildOf = function isChildOf(child, parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    };

    ReduxnotificationCenter.prototype.mapOptions = function mapOptions() {
        return {
            id: this.props.mapToItem.id || 'id',
            title: this.props.mapToItem.title || 'title',
            message: this.props.mapToItem.message || 'message',
            body: this.props.mapToItem.body || 'body',
            date: this.props.mapToItem.date || 'date',
            new: this.props.mapToItem.new || 'new'
        };
    };

    ReduxnotificationCenter.prototype.onItemClick = function onItemClick(item) {
        var _this4 = this;

        this.setState({
            notifications: this.state.notifications.map(function (notification) {
                if (!notification[_this4.mapOptions().id]) {
                    console.error('React Notification ERROR: You need an id');
                    return notification;
                }

                if (notification[_this4.mapOptions().id] == item[_this4.mapOptions().id]) {
                    notification[_this4.mapOptions().new] = false;
                }
                return notification;
            }),
            showNotificationMessage: true,
            current: item
        });
        if (this.props.onItemClick) {
            this.props.onItemClick(item, this.state.notifications);
        }
    };

    ReduxnotificationCenter.prototype.back = function back() {
        this.setState({
            showNotificationMessage: false
        });
    };

    ReduxnotificationCenter.prototype.render = function render() {
        var _this5 = this;

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('react-notification-center', 'light-theme', { hide: !this.props.visible }) },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('r-notifications-icon', 'active'), ref: 'notificationIcon' },
                this.getUnreadLength() > 0 ? this.getUnreadLength() : '0'
            ),
            this.state.showNotification && _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('rr-wrapper', this.props.position), ref: 'notificationHolder' },
                _react2.default.createElement(
                    'div',
                    { className: 'notification-holder' },
                    _react2.default.createElement(
                        'div',
                        { className: 'r-notifications' },
                        _react2.default.createElement(
                            _header2.default,
                            null,
                            (0, _utils.cutString)(this.props.notificationTitle, 30)
                        ),
                        _react2.default.createElement(
                            _content2.default,
                            this.props,
                            this.state.notifications.length == 0 && _react2.default.createElement(
                                'div',
                                { className: 'no-rn' },
                                this.props.noNotificationText
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'rn-ul' },
                                this.state.notifications.map(function (item, i) {
                                    return _react2.default.createElement(_Item2.default, _extends({
                                        key: i, onClick: _this5.onItemClick.bind(_this5, item),
                                        options: _this5.mapOptions()
                                    }, item));
                                })
                            )
                        ),
                        _react2.default.createElement(_footer2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('r-notification', { active: this.state.showNotificationMessage }) },
                        _react2.default.createElement(
                            _header2.default,
                            null,
                            this.state.current && this.state.current[this.mapOptions().title]
                        ),
                        _react2.default.createElement(
                            _content2.default,
                            this.props,
                            _react2.default.createElement(
                                'div',
                                { className: 'desc' },
                                this.state.current && this.state.current[this.mapOptions().body]
                            )
                        ),
                        _react2.default.createElement(
                            _footer2.default,
                            null,
                            _react2.default.createElement(
                                'button',
                                { type: 'button', onClick: this.back.bind(this) },
                                _react2.default.createElement('div', { className: 'back' })
                            )
                        )
                    )
                )
            )
        );
    };

    return ReduxnotificationCenter;
}(_react.Component);

ReduxnotificationCenter.displayName = 'ReduxNotofication';
ReduxnotificationCenter.propTypes = {
    notifications: _propTypes2.default.array,
    mapToItem: _propTypes2.default.object,
    onItemClick: _propTypes2.default.func,
    customItemComponent: _propTypes2.default.func,
    onNotificationOpen: _propTypes2.default.func,
    onNotificationClose: _propTypes2.default.func,
    onScrollBottom: _propTypes2.default.func,
    position: _propTypes2.default.string,
    wordsInItem: _propTypes2.default.number,
    noNotificationText: _propTypes2.default.string
};
ReduxnotificationCenter.defaultProps = {
    notificationTitle: 'React notification center',
    position: 'left',
    wordsInItem: 50,
    noNotificationText: 'No data available, enjoy your day',
    mapToItem: {},
    notifications: []
};
exports.default = ReduxnotificationCenter;