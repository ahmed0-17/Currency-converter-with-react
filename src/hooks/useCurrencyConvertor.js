import React from 'react'
import { useState, useEffect } from 'react'
function UseCurrencyConvertor(currency) {
  let [convertedCurrency, setConCurrency] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
        .then((res) => setConCurrency(res[currency]))

      
  }, [currency]);

  return convertedCurrency

}

export default UseCurrencyConvertor
