export const findProject = (projects = [], projectId) =>
    projects.find(project => project.id == projectId)

// export const getProjectsForUser = (projects = [], userId) => (
//     (!userId)
//         ? this.renderLoginLink()
//         : projects.filter(project => project.user_id = userId)
// )

export const getStepsForProject = (steps = [], project_id) => (
    (!project_id)
        ? steps
        : steps.filter(step => step.project_id == project_id)
)