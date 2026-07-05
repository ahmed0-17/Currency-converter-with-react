import { useState } from "react";
import Components from "./components";
import useCurrencyConvertor from "./hooks/useCurrencyConvertor";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyConvertor(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35251423/pexels-photo-35251423.jpeg')",
      }}
    >
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-white/30
          bg-white/20
          backdrop-blur-lg
          shadow-2xl
          p-6
          transition-all
          duration-300
        "
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Currency Converter
          </h1>

          <p className="text-sm text-white/80 mt-2">
            Convert currencies instantly with live exchange rates
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From */}
          <div className="mb-2">
            <Components.Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={setAmount}
            />
          </div>

          {/* Swap Button */}
          <div className="relative flex justify-center my-3">
            <button
              type="button"
              onClick={swap}
              className="
               hover:cursor-pointer
                border
                border-white
                rounded-lg
                bg-black
                text-white
                px-4
                py-1
                hover:bg-gray-900
                transition-all
                duration-300
              "
            >
              Swap
            </button>
          </div>

          {/* To */}
          <div className="mb-5">
            <Components.Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <Components.SnakeBorderButton
            onClick={convert}
            text={`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          />
        </form>
      </div>
    </div>
  );
}

export default App;