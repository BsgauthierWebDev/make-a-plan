export const findProject = (projects = [], projectId) =>
    projects.find(project => project.id == projectId)

// export const getProjectsForUser = (projects = [], userId) => (
//     (!userId)
//         ? this.renderLoginLink()
//         : projects.filter(project => project.user_id = userId)
// )