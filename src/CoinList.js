import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

function CoinList() {
  const { status, error, data } = useQuery(["coins"], () =>
    axios("https://api.coinpaprika.com/v1/tickers")
  );

  const [money, setMoney] = useState("");
  const [numberOfCoin, setNumberOfCoin] = useState("");
  const [coinValue, setCoinValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setMoney("");
    setNumberOfCoin(Number(money) / Number(coinValue));
  };

  return (
    <div className="App">
      <h1>
        Coin converter! ({status === "loading" ? null : data.data.length})
      </h1>

      {status === "loading" ? (
        <div>loading...</div>
      ) : (
        <select
          onChange={(e) => setCoinValue(e.target.value)}
          value={coinValue}
        >
          <option value={1}>선택</option>
          {data.data.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="투자할 돈을 입력하세요."
          value={money}
          onChange={(e) => {
            setMoney(e.target.value);
          }}
          disabled={false}
        />
        <input
          type="text"
          placeholder="변환된 코인 개수"
          value={numberOfCoin}
          onChange={(e) => {
            setMoney(e.target.value);
          }}
          disabled={true}
        />
        <button>확인</button>
      </form>
    </div>
  );
}

export default CoinList;
