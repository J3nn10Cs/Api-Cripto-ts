import {z} from 'zod'

export const CurrencySchema = z.object({
  code : z.string(),
  name : z.string()
})

export const CryptoCurrencyResponse = z.object({
    CoinInfo : z.object({
      FullName: z.string(),
      Name : z.string()
    })
})

export const PairSchema = z.object({
  currency : z.string(),
  crypto : z.string()
})

//cuando vas a traer toda la informacion
export const CryptoCompareResponse = z.object({
  PRICE : z.string(),
  LOWDAY: z.string(),
  HIGHDAY : z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
  IMAGEURL: z.string()
})

export const CryptoCurrenciesResponse = z.array(CryptoCurrencyResponse)