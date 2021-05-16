import React from 'react';
import './Button.css';

export default function ButtonIcon(props) {
    const {tag, className, children, ...otherProps} = props

    return React.createElement(
        props.tag,
        {
            className: ['ButtonIcon', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

ButtonIcon.defaultProps = {
    tag: 'a',
}