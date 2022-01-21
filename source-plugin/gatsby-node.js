/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const lib = require("lib")({ token: process.env.HALO_DOT_API_TOKEN })
const SERVICE_RECORD_NODE_TYPE = `ServiceRecord`
const SR_CACHE_KEY = `halodot:servicerecords`
const CACHE_TIMER = `halodot:timer`
const serviceRecords = require("../src/data/service-records.json")

const getServiceRecords = gamertag =>
  lib.halo.infinite["@0.3.7"].stats["service-record"].multiplayer({
    gamertag,
    filter: "matchmade:pvp",
  })

const GAMERTAGS = process.env.GAMERTAGS?.split(",")
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  cache,
}) => {
  const { createNode } = actions

  const hourInMilliseconds = 60 * 60 * 1000 // 86400000
  const cacheData = await cache.get(SR_CACHE_KEY)
  let data

  if (!cacheData || cacheData.timestamp + hourInMilliseconds < Date.now()) {
    console.log(`Cache expired, requesting new data`)
    data = {
      serviceRecords: await Promise.all(GAMERTAGS.map(getServiceRecords)),
    }
    await cache.set(SR_CACHE_KEY, { timestamp: Date.now(), serviceRecords })
  } else {
    data = cacheData
  }

  data.serviceRecords.forEach(sr =>
    createNode({
      ...sr,
      id: createNodeId(`${SERVICE_RECORD_NODE_TYPE}-${sr.additional.gamertag}`),
      parent: null,
      children: [],
      internal: {
        type: SERVICE_RECORD_NODE_TYPE,
        content: JSON.stringify(sr),
        contentDigest: createContentDigest(sr),
      },
    })
  )

  return
}
