import React from 'react';

const ApiContext = React.createContext({
    projects: [],
    users: [],
    materials: [],
    steps: [],
    addProject: () => {},
    deleteProject: () => {},
})

export default ApiContext;