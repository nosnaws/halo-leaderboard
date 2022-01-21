import * as React from "react"
import { ServiceRecord } from "../types"
import Board from "./Board"

const getAssists = (record: ServiceRecord) => record.data.core.summary.assists
const getGT = (record: ServiceRecord) => record.additional.gamertag

export interface AssistsBoardProps {
  records: ServiceRecord[]
}

const AssistsBoard: React.FC<AssistsBoardProps> = ({ records }) => {
  const assists = records
    .map(r => ({
      gamertag: getGT(r),
      point: getAssists(r),
    }))
    .sort((a, b) => b.point - a.point)

  return <Board title="Assists" stats={assists} />
}

export default AssistsBoard
