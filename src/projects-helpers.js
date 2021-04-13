export const findProject = (projects = [], projectId) => 
    projects.find(project => project.id === projectId)

export const getProjectsForUser = (projects = [], user_id) => (
    (!user_id)
        ? projects
        : projects.filter(project => project.user_id == user_id)
)