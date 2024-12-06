import { Stanowisko, Waluta } from './otherTypes.js'

export type Pracownik = {
  id: number
  imie: string
  nazwisko: string
  stanowisko: Stanowisko
  pseudonim: string
  opis: string
  pensja: [number, Waluta]
  zwolnij: (...powody: (string | number)[]) => void
}

export type TypPaniBasia = Omit<
  Pracownik,
  'pseudonim' | 'opis' | 'zwolnij'
> & {
  graNaSkrzypcach: 'pięknie'
  bezNiejTenZakładUpadnie: true
}

export type TypPiesek = Omit<
  Pracownik,
  | 'nazwisko'
  | 'stanowisko'
  | 'pseudonim'
  | 'opis'
  | 'pensja'
  | 'zwolnij'
> & {
  rasa: string
  ulubionaZabawka: string
  wiek: {
    wLudzkich: number
    wPsich: number
    mentalnie: number
  }
  nienawidzi: string[]
}
