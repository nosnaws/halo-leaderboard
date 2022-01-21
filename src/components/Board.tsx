import * as React from "react"
import { css } from "@emotion/react"

interface PlayerStat {
  gamertag: string
  point: number
}

export interface BoardProps {
  stats: PlayerStat[]
  title: string
  className: string
}

const Board = ({ stats, title, className }: BoardProps) => (
  <div
    className={className}
    css={css`
      border: 2px solid var(--border-color);
      padding: 1rem;
    `}
  >
    <h3>{title}</h3>
    {stats.map((stat, index) => (
      <div
        key={index}
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border: 1px solid var(--border-color);
          padding: 0.5rem;
          margin-bottom: 0.2rem;
        `}
      >
        <span css={css``}>{stat.gamertag}</span>
        <span
          css={css`
            margin-left: 1rem;
            align-self: flex-end;
          `}
        >
          {stat.point}
        </span>
      </div>
    ))}
  </div>
)

export default Board
