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
      border-radius: 4px;
      box-shadow: 0 0 5px 0 var(--border-color);
      padding: 1rem;
    `}
  >
    <h3 css={css``}>{title}</h3>
    {stats.map((stat, index) => (
      <div
        key={index}
        css={css`
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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
