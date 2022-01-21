import * as React from "react"
import { ServiceRecord } from "../types"
import Board from "./Board"

const getWins = (record: ServiceRecord) =>
  record.data.core.breakdowns.matches.wins
const getGT = (record: ServiceRecord) => record.additional.gamertag

export interface WinsBoardProps {
  records: ServiceRecord[]
  className: string
}

const WinsBoard: React.FC<WinsBoardProps> = ({ records, className }) => {
  const wins = records
    .map(r => ({
      gamertag: getGT(r),
      point: getWins(r),
    }))
    .sort((a, b) => b.point - a.point)

  return <Board className={className} title="Wins" stats={wins} />
}

export default WinsBoard
