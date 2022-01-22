exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/leaderboards`,
    toPath: `/`,
  })
}
