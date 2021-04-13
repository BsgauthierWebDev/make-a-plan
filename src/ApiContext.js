import React from 'react';

const ApiContext = React.createContext({
    projects: [],
    users: [],
    addProject: () => {},
    deleteProject: () => {},
})

export default ApiContext;