import { useState, ChangeEvent, FormEvent } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoFrom() {

  //para mostrar las monedas en las opciones
  const cryptoCurrencies = useCriptoStore(state => state.cryptocurrencies)

  //para ver resultados
  const cryptoCompare = useCriptoStore(state => state.fetchCryptoCompare)
  
  //para mostrar los errores
  const [error, setError] = useState('')

  //state de moneda y crypto moneda
  const [pair, setPair] = useState<Pair>({
    currency : '',
    crypto : ''
  })

  const handleChange = ( e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    //evaluar que los campos no esten vacios
    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligatorios')
      setTimeout(() => {
        setError('')
      }, 2000);
      return
    }

    //obetener valores de la api
    cryptoCompare(pair)
  }
  return (
    <>
      <form
        className="bg-white p-4 rounded-xl"
        onSubmit={handleSubmit}
      >
        {error && <ErrorMessage>
          {error}
        </ErrorMessage>}
        <div className="my-3">
          <label 
            htmlFor="currency"
            className="p-2 font-black"
          >
            Currency
          </label>
            <select 
              name="currency" 
              id="currency"
              value={pair.currency}
              className="w-full p-2 mt-2 bg-gray-300 rounded-lg"
              onChange={handleChange }
            >
              <option 

              >
                --Selecciona--
              </option>
              {currencies.map(currency => (
                <option
                  key={currency.code}
                  value={currency.code}
                >
                  {currency.name}
                </option>
              ))}
            </select>
        </div>

        <div className="my-3">
          <label 
            className="p-2 font-black"
            htmlFor="cripto"
          >
            Criptomoneda
          
          </label>

          <select 
            name="crypto" 
            id="crypto"
            value={pair.crypto}
            className="w-full p-2 bg-gray-300 rounded-lg mt-2"
            onChange={handleChange }
          >
            <option value="">
              --Seleccione--
            </option>
            {cryptoCurrencies.map(cryptocu => (
              <option
                key={cryptocu.CoinInfo.Name}
                value={cryptocu.CoinInfo.Name}
              >
                {cryptocu.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>

        <button 
          type="submit"
          className="bg-green-400 p-2 w-full rounded-xl font-bold"
        >
          Cotizar
        </button>
      </form>
    </>
  )
}
