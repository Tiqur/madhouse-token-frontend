import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [tokenData, setTokenData] = useState({});

  // Fetch data
  useEffect(() => {
    axios.get('https://madhousetoken.com/api')
      .then(res => {
        setTokenData({price: res.data.price, supply: res.data.supply, market_cap: res.data.market_cap});
      });
  }, []);

  return (
    <GlobalContext.Provider value={{tokenDataState: [tokenData, setTokenData]}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
