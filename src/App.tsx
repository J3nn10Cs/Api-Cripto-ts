import { useEffect } from "react";
import CriptoFrom from "./components/CriptoFrom"
import { useCriptoStore } from "./store"
import Result from "./components/Result";

function App() {

  const fetchCrypto = useCriptoStore(state => state.fetchCryptos)
  
  useEffect(() => {
    fetchCrypto()
  },[])

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white my-7">Cotizador de <span className="text-green-400">CriptoMonedas</span> </h1>

      <main className="mx-2 md:max-w-3xl md:mx-auto mt-5">
        <CriptoFrom/>
        <Result/>
      </main>
    </>
  )
}

export default App
