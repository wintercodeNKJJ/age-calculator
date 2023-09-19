import React from "react";
import { ReactSVG } from "react-svg";
import "./App.css";
import Arrow from "./assets/images/icon-arrow.svg";
import { useLogic } from "./logic";

function App() {
  const { calculate, setDay, setMonth, setYear, result } = useLogic();
  return (
    <div className="App">
      <div className="age-card">
        <div className="card-input-section">
          <div className="card-input">
            <label htmlFor="day">DAY</label>
            <input
              type="number"
              name="day"
              onChange={(e) => setDay(parseInt(e.target.value))}
            />
          </div>
          <div className="card-input">
            <label htmlFor="month">MONTH</label>
            <input
              type="number"
              name="month"
              onChange={(e) => setMonth(parseInt(e.target.value))}
            />
          </div>
          <div className="card-input">
            <label htmlFor="year">YEAR</label>
            <input
              type="number"
              name="year"
              onChange={(e) => setYear(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex w-full items-center">
          <hr className="w-[90%]" />
          <button
            type="button"
            onClick={() => calculate()}
            className="bg-black rounded-full p-4"
          >
            <ReactSVG src={Arrow} />
          </button>
        </div>

        <div className="card-display-section">
          <h3>
            <p className="text-[#844efe]">{result.year}</p>
            <p>{result.year <= 1 ? "year" : "years"}</p>
          </h3>
          <h3>
            <p className="text-[#844efe]">{result.month}</p>
            <p>{result.month <= 1 ? "month" : "months"}</p>
          </h3>
          <h3>
            <p className="text-[#844efe]">{result.day}</p>
            <p>{result.day <= 1 ? "day" : "days"}</p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
