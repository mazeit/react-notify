'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(props) {
    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('notification-tag', props.type) },
        props.children
    );
};

Tag.displayName = 'NotificationTagComponent';
Tag.propTypes = {
    type: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node
};
exports.default = Tag;