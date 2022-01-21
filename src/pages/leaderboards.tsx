import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { css } from "@emotion/react"
import { PlayerServiceRecordsQuery } from "../../graphql-types"
import { ServiceRecord } from "../types"
import SuicidesBoard from "../components/SuicidesBoard"
import WinsBoard from "../components/WinsBoard"
import KDRBoard from "../components/KDRBoard"
import AssistsBoard from "../components/AssistsBoard"
import DeathsBoard from "../components/DeathsBoard"
import VehicleAssistsBoard from "../components/VehicleAssistsBoard"

import Layout from "../components/layout"

const getRecords = (queryResult): ServiceRecord[] =>
  queryResult.allServiceRecord.edges.map((e: { node: ServiceRecord }) => e.node)

const Leaderboards: React.FC<PageProps<PlayerServiceRecordsQuery>> = ({
  data,
}) => {
  const records = getRecords(data)
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        `}
      >
        <WinsBoard records={records} />
        <KDRBoard records={records} />
        <SuicidesBoard records={records} />
        <AssistsBoard records={records} />
        <DeathsBoard records={records} />
        <VehicleAssistsBoard records={records} />
      </div>
    </Layout>
  )
}

export default Leaderboards

export const query = graphql`
  query PlayerServiceRecords {
    allServiceRecord {
      edges {
        node {
          additional {
            gamertag
          }
          data {
            matches_played
            win_rate
            time_played {
              human
              seconds
            }
            core {
              breakdowns {
                assists {
                  callouts
                  driver
                  emp
                }
                kills {
                  grenades
                  headshots
                  melee
                  power_weapons
                }
                matches {
                  draws
                  left
                  losses
                  wins
                }
              }
              damage {
                average
                dealt
                taken
              }
              kda
              kdr
              shots {
                accuracy
                fired
                landed
                missed
              }
              summary {
                assists
                deaths
                betrayals
                kills
                medals
                suicides
                vehicles {
                  destroys
                  hijacks
                }
              }
              total_score
            }
          }
        }
      }
    }
  }
`
