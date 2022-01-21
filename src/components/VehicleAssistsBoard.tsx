import * as React from "react"
import { ServiceRecord } from "../types"
import Board from "./Board"

const getVehicleAssists = (record: ServiceRecord) =>
  record.data.core.breakdowns.assists.driver
const getGT = (record: ServiceRecord) => record.additional.gamertag

export interface VehicleAssistsBoardProps {
  records: ServiceRecord[]
}

const VehicleAssistsBoard: React.FC<VehicleAssistsBoardProps> = ({
  records,
}) => {
  const assists = records
    .map(r => ({
      gamertag: getGT(r),
      point: getVehicleAssists(r),
    }))
    .sort((a, b) => b.point - a.point)

  return <Board title="Vehicle assists" stats={assists} />
}

export default VehicleAssistsBoard
