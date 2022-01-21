import * as React from "react"
import { ServiceRecord } from "../types"
import Board from "./Board"

const getKDR = (record: ServiceRecord) => record.data.core.kdr
const getGT = (record: ServiceRecord) => record.additional.gamertag
const roundDown2Dec = (num: number) => Math.floor(num * 100) / 100

export interface WinsBoardProps {
  records: ServiceRecord[]
}

const KDRBoard: React.FC<WinsBoardProps> = ({ records }) => {
  const wins = records
    .map(r => ({
      gamertag: getGT(r),
      point: roundDown2Dec(getKDR(r)),
    }))
    .sort((a, b) => b.point - a.point)

  return <Board title="KDR" stats={wins} />
}

export default KDRBoard
