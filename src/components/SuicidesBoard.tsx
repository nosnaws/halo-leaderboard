import * as React from "react"
import { ServiceRecord } from "../types"
import Board from "./Board"

const getSuicides = (record: ServiceRecord) => record.data.core.summary.suicides

const getGT = (record: ServiceRecord) => record.additional.gamertag

export interface SuicidesBoardProps {
  records: ServiceRecord[]
}

const SuicidesBoard: React.FC<SuicidesBoardProps> = ({ records }) => {
  const suicides = records
    .map(r => ({
      gamertag: getGT(r),
      point: getSuicides(r),
    }))
    .sort((a, b) => b.point - a.point)

  return <Board title="Suicides" stats={suicides} />
}

export default SuicidesBoard
