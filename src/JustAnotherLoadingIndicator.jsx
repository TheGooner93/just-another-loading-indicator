import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

function JustAnotherLoadingIndicator(props) {
    const {
        classes: {
            spinnerStyle
        }
    } = props;

    return (
        <div className={classNames(spinnerStyle)} />
    )
}

const jssStyles = {
    spinnerStyle: {
        border: '16px solid #f3f3f3',
        borderTop: '16px solid red',
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        animation: '$spinAnimation 2s linear infinite',
    },
    '@keyframes spinAnimation': {
        'from': {
            transform: 'rotate(0deg)',
        },
        'to': {
            transform: 'rotate(360deg)',
        }
    }
}

JustAnotherLoadingIndicator.propTypes = {
    classes: PropTypes.object,
}

export default injectSheet(jssStyles)(JustAnotherLoadingIndicator)

