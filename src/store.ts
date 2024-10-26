
import { devtools } from "zustand/middleware";
import { create } from "zustand"
import { CryptoCompare, CryptoCurrency, Pair } from "./types";
import { getCryptoCompare, getCryptos } from "./services/CryptoServices";

//el type
type CryptoStore = {
  cryptocurrencies : CryptoCurrency[]
  cryptocompare : CryptoCompare
  fetchCryptos: () => Promise<void>
  loading : boolean,
  fetchCryptoCompare: (pair: Pair) => Promise<void>
}

//llamado a la api
export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  loading: false,
  cryptocompare: {
    PRICE : '',
    LOWDAY: '',
    HIGHDAY : '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: '',
    IMAGEURL: ''
  },
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos()
    set(() => ({
      cryptocurrencies
    }))
  },

  //podemos los set que querramos
  fetchCryptoCompare: async (pair) => {
    set(() => ({
      loading: true 
    }))
    const cryptocompare = await getCryptoCompare(pair)
    set(() => ({
      loading: false,
      cryptocompare,
    }))
  }

})))


