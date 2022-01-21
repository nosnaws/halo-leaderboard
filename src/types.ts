export interface ServiceRecord {
  data: {
    core: {
      summary: {
        kills: number
        deaths: number
        assists: number
        betrayals: number
        suicides: number
        vehicles: {
          destroys: number
          hijacks: number
        }
        medals: number
      }
      damage: {
        taken: number
        dealt: number
        average: number
      }
      shots: {
        fired: number
        landed: number
        missed: number
        accuracy: number
      }
      breakdowns: {
        kills: {
          melee: number
          grenades: number
          headshots: number
          power_weapons: number
        }
        assists: {
          emp: number
          driver: number
          callouts: number
        }
        matches: {
          wins: number
          losses: number
          left: number
          draws: number
        }
      }
      kda: number
      kdr: number
      total_score: number
      matches_played: number
      time_played: {
        seconds: number
        human: number
      }
      win_rate: number
    }
  }
  additional: {
    gamertag: string
  }
}
