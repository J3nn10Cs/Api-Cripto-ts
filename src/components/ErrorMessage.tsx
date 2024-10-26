import { ReactNode } from "react";

export default function ErrorMessage({children} : {children : ReactNode} ) {
  return (
    <>
      <div className="text-center font-bold text-white bg-red-600 p-2 rounded-xl">
        {children}
      </div>
    </>
  )
}
