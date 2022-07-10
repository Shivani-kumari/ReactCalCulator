import { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstDigit, setFirstDigit] = useState("");
  const [operend, setOperend] = useState("");
  const [secondDigit, setSecondDight] = useState("");
  const calCulate = (value) => {
    const array = value.split("");
    const index = array.findIndex((el) => {
      if (el == "+" || el == "-") {
        return el;
      }
    });
    const a = value.substring(0, index);
    const b = value.substring(index + 1, value.length);
    let res = 0;
    if (array[index] == "+") {
      res = parseInt(a) + parseInt(b);
    }
    if (array[index] == "-") {
      res = parseInt(a) - parseInt(b);
    }

    console.log(a, "value", b, array[index], res);
    return res;
  };
  const handleButton = (e) => {
    switch (e.target.innerText) {
      case "=":
        let val = calCulate(firstDigit);
        console.log("hello");
        setFirstDigit(val);
        break;
      case "DEL":
        setFirstDigit(firstDigit.slice(0, -1));
        break;
      default:
        setFirstDigit(firstDigit + e.target.innerText);
        break;
    }
  };
  return (
    <div className="App">
      <div className="screen">
        {firstDigit}
        {operend}
        {secondDigit}
      </div>
      <div className="buttonCal">
        <div className="button" onClick={handleButton}>
          1
        </div>
        <div className="button" onClick={handleButton}>
          2
        </div>
        <div className="button" onClick={handleButton}>
          3
        </div>
        <div className="button" onClick={handleButton}>
          4
        </div>
        <div className="button" onClick={handleButton}>
          5
        </div>
        <div className="button" onClick={handleButton}>
          +
        </div>
        <div className="button" onClick={handleButton}>
          -
        </div>
        <div className="button" onClick={handleButton}>
          =
        </div>
        <div className="button" onClick={handleButton}>
          DEL
        </div>
      </div>
    </div>
  );
}
