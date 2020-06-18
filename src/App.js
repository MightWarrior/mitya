import React from 'react';
import { Provider } from 'react-redux';
import MainRouter from './Router';
import store from './services/store';

function App() {
    return (
        <Provider store={store}>
            <MainRouter/>
        </Provider>
    )
}

export default App;
