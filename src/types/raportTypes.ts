import { Priorytet } from './otherTypes.js'

export type Raport = {
  efektywność: number
  priorytet: Priorytet
}

export type RaportPracownika = {
  obniżonaEfektywność: boolean
  spadekPensji: number
}

export type RaportPracowników = {
  [id: number]: RaportPracownika
}

export type RaportPieseczka = {
  szczekanie: true
  isPies: true
  aKtoToJestTakimSłodkimPieseczkiem: true
}
