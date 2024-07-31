import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setrFromCurrency] = useState("RUB")
  const [toCurrency, setrToCurrency] = useState("USD")
  const [rates, setRates] = useState({})

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then((res) => res.json()).then((json) => {
      setRates(json.Valute);
      console.log(json.Valute);
    }).catch((err) => {
      console.warn(err);
      alert("Не удалось получить ")
    })
  }, []);
  return (
    <div className="App">
      <Block value={0} currency={fromCurrency} onChangeCurrency={setrFromCurrency} />
      <Block value={0} currency={toCurrency} onChangeCurrency={setrToCurrency} />
    </div>
  );
}

export default App;
