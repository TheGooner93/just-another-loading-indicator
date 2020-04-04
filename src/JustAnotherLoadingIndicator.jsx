import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

function JustAnotherLoadingIndicator(props) {
    const {
        classes: {
            spinnerBaseStyle,
            singleBorderSpinnerStyle,
            sphereAlongBorderStyle,
            clockStyle
        },
        type,
    } = props;

    const returnedStyle =
        type === 'bouncymoon' ? sphereAlongBorderStyle :
            type === 'clock' ? clockStyle :
                singleBorderSpinnerStyle;

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
        animation: '$spin 2s linear infinite',
    }),
    sphereAlongBorderStyle: ({ color }) => ({
        animation: '$spin 2s linear infinite',
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
            animation: '$reversebouncy 0.5s ease-in infinite',
        },
        '&::after': {
            top: 'auto',
            bottom: '-5px',
            animation: '$bouncy 0.5s ease-in infinite',

        },
    }),
    clockStyle: ({ color }) => ({
        border: '4px solid #eee',
        '&::after': {
            content: '""',
            width: '3px',
            height: '25px',
            animation: '$spin 5s linear infinite',
            background: color,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: '-1.5px',
            transformOrigin: 'top center',
            borderRadius: '1rem',
        }
    }),

    '@keyframes spin': {
        'from': {
            transform: 'rotate(0deg)',
        },
        'to': {
            transform: 'rotate(360deg)',
        }
    },
    '@keyframes bouncy': {
        '0% 100%': {
            transform: 'translateY(0px)',
        },
        '50%': {
            transform: 'translateY(15px)',
        }
    },
    '@keyframes reversebouncy': {
        '0% 100%': {
            transform: 'translateY(0px)',
        },
        '50%': {
            transform: 'translateY(-15px)',
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

