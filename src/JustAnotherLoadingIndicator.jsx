import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

function JustAnotherLoadingIndicator(props) {
    const {
        classes: {
            spinnerBaseStyle,
            singleBorderSpinnerStyle,
            sphereAlongBorderStyle
        },
        type,
    } = props;

    const returnedStyle =
        type === 'atom' ? sphereAlongBorderStyle : singleBorderSpinnerStyle;

    return <div className={classNames(spinnerBaseStyle, returnedStyle)} />
}

const jssStyles = {
    spinnerBaseStyle: {
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
        borderRadius: '50%',
        position: 'relative',
        display: 'inline-block',
    },
    singleBorderSpinnerStyle: ({ color }) => ({
        border: `16px solid #f3f3f3`,
        borderTop: `16px solid ${color}`,
        animation: '$spinAnimation 2s linear infinite',
    }),
    sphereAlongBorderStyle: ({ color }) => ({
        animation: '$spinAnimation 2s linear infinite',
        background: '#FFFFFF',
        '&::before, &::after': {
            content: '""',
            height: '10px',
            width: '10px',
            background: color,
            position: 'absolute',
            top: '-5px',
            left: '50%',
            marginLeft: '-5px',
            borderRadius: '50%',
        },
        '&::after': {
            top: 'auto',
            bottom: '-5px',
        },
    }),

    '@keyframes spinAnimation': {
        'from': {
            transform: 'rotate(0deg)',
        },
        'to': {
            transform: 'rotate(360deg)',
        }
    }
};

JustAnotherLoadingIndicator.propTypes = {
    classes: PropTypes.object,
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

JustAnotherLoadingIndicator.defaultProps = {
    color: '#000000',
    type: 'ring',
};

export default injectSheet(jssStyles)(JustAnotherLoadingIndicator)

