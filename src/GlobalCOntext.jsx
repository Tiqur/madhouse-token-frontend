import { useState, createContext, useEffect } from 'react';
const GlobalContext = createContext();

const GlobalProvider = (props) => {
  useEffect(() => {

  })

  return (
    <GlobalContext.Provider value={{}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
