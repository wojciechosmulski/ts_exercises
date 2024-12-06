import { Priorytet } from './types/otherTypes.js'
import { Raport } from './types/raportTypes.js'

export const generujRaport = <T>(
  daneRaportu: T,
  efektywność: number,
  priorytet: Priorytet
): Promise<T & Raport> => {
  return new Promise((resolve) => {
    resolve({
      efektywność,
      priorytet,
      ...daneRaportu,
    })
  })
}
