import * as React from "react"
import { ServiceRecord } from "../types"
import Board from "./Board"

const getDeaths = (record: ServiceRecord) => record.data.core.summary.deaths
const getGT = (record: ServiceRecord) => record.additional.gamertag

export interface DeathsBoardProps {
  records: ServiceRecord[]
}

const DeathsBoard: React.FC<DeathsBoardProps> = ({ records }) => {
  const deaths = records
    .map(r => ({
      gamertag: getGT(r),
      point: getDeaths(r),
    }))
    .sort((a, b) => b.point - a.point)

  return <Board title="Deaths" stats={deaths} />
}

export default DeathsBoard
