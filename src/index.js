import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/layout/App';
import registerServiceWorker from './registerServiceWorker';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

ReactDOM.render(
    // <Provider store={store}>
    //     <IntlProvider locale="en">
    //         <BrowserRouter basename="/">
    //             <App />
    //         </BrowserRouter>
    //     </IntlProvider>
    // </Provider>

    <IntlProvider locale="en">
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </IntlProvider>
, document.getElementById('root'));
registerServiceWorker();
