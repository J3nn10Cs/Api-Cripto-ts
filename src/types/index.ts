
import {z} from 'zod'
import { CurrencySchema, CryptoCurrencyResponse, PairSchema, CryptoCompareResponse } from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>

//objeto
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponse>

export type Pair = z.infer<typeof PairSchema>

//export resultado
export type CryptoCompare = z.infer<typeof CryptoCompareResponse>