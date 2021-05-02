import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import {ProjectListProvider} from './context';

ReactDOM.render(
    <BrowserRouter>
        <ProjectListProvider>
            <App />
        </ProjectListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);