import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Tag = props => (
    <span className={cn('notification-tag', props.type)}>
        {props.children}
    </span>
);

Tag.displayName = 'NotificationTagComponent';
Tag.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node
};
export default Tag;
