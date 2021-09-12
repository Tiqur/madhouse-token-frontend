import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [tokenData, setTokenData] = useState({});

  // Fetch data
  useEffect(() => {
    axios.get('https://madhousetoken.com/api')
      .then(res => {
        console.log(res);
      });
  });

  return (
    <GlobalContext.Provider value={{}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
