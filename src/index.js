import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import {ProjectListProvider} from './context';

library.add(faPlus, faTrashAlt)

ReactDOM.render(
    <BrowserRouter>
        <ProjectListProvider>
            <App />
        </ProjectListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);