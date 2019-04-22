import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';

function start(options) {
    const {el} = options;
    ReactDOM.render(<Page/>, el);
    return Promise.resolve({
        stop: () => {
            ReactDOM.unmountComponentAtNode(el);
            console.log('stopped');
            return Promise.resolve();
        }
    });
}

export {start};
