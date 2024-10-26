import { CryptoCompareResponse, CryptoCurrenciesResponse } from "../schema/crypto-schema"
import axios from "axios";
import { Pair } from "../types";

export async function getCryptos() {
  try {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data : {Data}} = await axios(url)
    const result = CryptoCurrenciesResponse.safeParse(Data)
    //console.log(result);
    if(result.success){
      return result.data
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCryptoCompare(pair:Pair) {
  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.crypto}&tsyms=${pair.currency}`
    const {data : {DISPLAY}} = await axios(url)
    const result = CryptoCompareResponse.safeParse(DISPLAY[pair.crypto][pair.currency]);
    if(result.success){
      return result.data
    }
  } catch (error) {
    console.log(error);
  }
}