import { useState } from "react";
import "./Cal.css";
function Cal() {
  const [curr, setCurr] = useState("");
  let [_curr, _setCurr] = useState(0);
  const [prev, setPrev] = useState("");
  let [_prev, _setPrev] = useState(0);
  const [sign, setSign] = useState("");
  let [final, setFinal] = useState();
  const [temp, setTemp] = useState(false);
  const calculate = (e) => {
    if (temp) return;
    if (!sign) {
      let value = e.target.value;
      setCurr((prev) => prev + value);
    } else {
      let value = e.target.value;
      setPrev((prev) => prev + value);
    }
  };
  // console.log("current", curr);
  const add = (e) => {
    setSign(e.target.value);
  };

  const result = () => {
    setTemp(true);
    let _a = curr + sign + prev;
    let _b = eval(_a);

    setFinal(_b);
  };
  const reset = () => {
    setCurr("");
    setPrev("");
    setSign("");
    setFinal("");
    setTemp(false);
  };
  return (
    <>
      <div className="outerWrapper">
        <div className="monitor">
          {curr && <span>{curr}</span>}
          {sign && <span>{sign}</span>}
          {prev && <span>{prev}</span>}
          {final && <span>={final}</span>}
        </div>
        <div className="wrapper">
          <button onClick={reset}>AC</button>

          <button value={1} className="one" onClick={calculate}>
            1
          </button>
          <button value={2} className="two" onClick={calculate}>
            2
          </button>
          <button value={3} className="three" onClick={calculate}>
            3
          </button>
          <button value={4} className="four" onClick={calculate}>
            4
          </button>
          <button value={5} className="five" onClick={calculate}>
            5
          </button>
          <button value={6} className="six" onClick={calculate}>
            6
          </button>
          <button value={7} className="seven" onClick={calculate}>
            7
          </button>
          <button value={8} onClick={calculate} className="eight">
            8
          </button>
          <button value={9} className="nine">
            9
          </button>
          <button value={"+"} className="plus" onClick={add}>
            +
          </button>
          <button value={"-"} className="minus" onClick={add}>
            -
          </button>
          <button value={"="} className="result" onClick={result}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
export default Cal;
