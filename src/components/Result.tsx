import { useMemo } from "react"
import { useCriptoStore } from "../store"
import Spinner from "./Spinner/Spinner"

export default function Result() {

  const cryptoCompareResult = useCriptoStore(state => state.cryptocompare)

  const loading = useCriptoStore(state => state.loading)

  const hasResult = useMemo(() => !Object.values(cryptoCompareResult).includes(''), [cryptoCompareResult])
  console.log(hasResult);
  return (
    <>
    {/* cuando sea true y tenga valores */}
    {loading 
      ? <Spinner/> 
      :hasResult && (
      <div className="bg-white rounded-xl p-1 mt-4 mx-auto max-w-lg flex justify-center gap-10 items-center">
        <>
        <img 
          src={`https://cryptocompare.com${cryptoCompareResult.IMAGEURL}`}
          alt="crypto.jpg"
          className="w-40"
        />
        <div>
          <h2 className="text-center font-black text-2xl">Cotización</h2>
          <p className="text-sm m-2">El precio es : <span className="font-bold"> {cryptoCompareResult.PRICE} </span></p>
          <p className="text-sm m-2">El precio mas alto : <span className="font-bold"> {cryptoCompareResult.HIGHDAY} </span></p>
          <p className="text-sm m-2">El precio mas bajo : <span className="font-bold"> {cryptoCompareResult.LOWDAY} </span></p>
          <p className="text-sm m-2">Variación últimas 24hrs : <span className="font-bold"> {cryptoCompareResult.CHANGEPCT24HOUR} </span></p>
          <p className="text-sm m-2">Utlima actualizacion : <span className="font-bold"> {cryptoCompareResult.LASTUPDATE} </span></p>
        </div>
        </>
      </div>
    )}
    </>
  )
}
