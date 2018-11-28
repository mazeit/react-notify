'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationHeader = function NotificationHeader(props) {
    return _react2.default.createElement(
        'div',
        { className: 'rn-header' },
        _react2.default.createElement(
            'h4',
            null,
            props.children
        )
    );
};

NotificationHeader.displayName = 'NotificationHeader';
NotificationHeader.proptypes = {
    children: _propTypes2.default.node.isRequired
};
exports.default = NotificationHeader;