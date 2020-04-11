import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

function JustAnotherLoadingIndicator(props) {
    const {
        classes: {
            baseStyle,
            ringStyle,
            bouncymoonStyle,
            clockStyle,
            pulseStyle,
            jumpingdotsStyle,
        },
        type,
    } = props;

    const returnedStyle =
        type === 'bouncymoon' ? bouncymoonStyle :
            type === 'clock' ? clockStyle :
                type === 'pulse' ? pulseStyle :
                    type === 'jumpingdots' ? jumpingdotsStyle :
                        ringStyle;

    //For the jumpingDots type
    const spanView = (
        <Fragment>
            <span></span>
            <span></span>
            <span></span>
        </Fragment>
    );

    return <div className={classNames(baseStyle, returnedStyle)} >
        {
            type === 'jumpingdots' ?
                spanView : null
        }
    </div>;
}

const jssStyles = {
    baseStyle: {
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
        borderRadius: '50%',
        position: 'relative',
        display: 'inline-block',
        '&::before, &::after': {
            content: '""',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            position: 'absolute',
        }
    },
    ringStyle: ({ color }) => ({
        border: `16px solid #f3f3f3`,
        borderTop: `16px solid ${color}`,
        animation: '$spin 2s linear infinite',
    }),
    bouncymoonStyle: ({ color }) => ({
        animation: '$spin 2s linear infinite',
        background: '#FFFFFF',
        '&::before, &::after': {
            height: '10px',
            width: '10px',
            background: color,
            top: '-5px',
            left: '50%',
            marginLeft: '-5px',
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
            width: '3px',
            height: '25px',
            animation: '$spin 5s linear infinite',
            background: color,
            top: '50%',
            left: '50%',
            marginLeft: '-1.5px',
            transformOrigin: 'top center',
            borderRadius: '1rem',
        }
    }),
    pulseStyle: ({ color }) => ({
        '&::after,&::before': {
            background: color,
            animation: '$pulse 3s linear infinite',
            opacity: 0,
        },
        '&::after': {
            animation: '$pulse 2s linear 2.3s infinite'
        }
    }),
    jumpingdotsStyle: ({ color }) => ({
        height: 0,
        width: 0,
        '& span': {
            display: 'block',
            height: '20px',
            width: '20px',
            background: color,
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            '&:nth-child(1)': {
                left: '-40px',
                animation: '$bouncy2 1.3s ease-in-out infinite'
            },
            '&:nth-child(2)': {
                animation: '$bouncy2 1.3s ease-in-out 0.33s infinite'
            },
            '&:nth-child(3)': {
                left: '40px',
                animation: '$bouncy2 1.3s ease-in-out 0.66s infinite'
            },
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
    },
    '@keyframes pulse': {
        '0%': {
            transform: 'scale(0)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1.2)',
            opacity: 0,
        }
    },
    '@keyframes bouncy2': {
        '0% 50% 100%': {
            transform: 'translateY(0px)',
        },
        '25%': {
            transform: 'translateY(-30px)',
        }
    },
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

