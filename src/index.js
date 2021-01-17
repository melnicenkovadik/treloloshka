import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import { getStore } from "./app/store";
import vkBridge from '@vkontakte/vk-bridge';
import * as backend from "./api";
import * as router from "./router";
import App from './app/components/App/AppContainer';

if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
        trackAllPureComponents: true,
        trackExtraHooks: [[require("react-redux/lib"), "useSelector"]]
    });
}

// Init VK Mini App
vkBridge.send('VKWebAppInit');

const route = router.initialize();
const store = getStore();
backend.initialize();

ReactDOM.render(<App router={route} store={store} />, document.getElementById('root'));
