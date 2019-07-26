import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader.component';

const AppFrame = ({header, body}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}></AppHeader>
                
                <div>{body}</div>
                <div><p>App de clientes</p></div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;