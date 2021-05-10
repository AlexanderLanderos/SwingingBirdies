import React, { useState } from "react";

const Card = (props) => {
  // const [score, updateScore] = useState(0);
  // const [swing, updateSwing] = useState(0);
  // const [putt, updatePutt] = useState(0);
  const [par, updatePar] = useState(0);
  const [data, setData] = useState({
    score: 0,
    swing: 0,
    putt: 0,
    par: 0
  });

  const updateData = (property, operator) => {
    const newState = { ...data };
    if (operator === "add") newState[property]++;
    if (operator === "minus" && data[property] > 0) newState[property]--;
    if (operator === "reset") newState[property] = 0;
    newState.score = newState.swing + newState.putt;
    setData(newState);
  };

  // const increase = (state1, updateState1, state2, updateState2) => {
  //   return updateState1(state1 + 1), updateState2(state2 + 1);
  // };

  // const decrement = (state1, updateState1, state2, updateState2) => {
  //   return (
  //     updateState1(Math.max(state1 - 1, 0)),
  //     updateState2(Math.max(state2 - 1, 0))
  //   );
  // };

  // const reset = (data) => {
  //   return state;
  // };

  const setPar = (event) => {
    event.preventDefault();
    updatePar(event.target.value);
  };

  //This function is to remove the input field and button. need to modify the class for multiple cards.
  const inputField = () => {
    let element = document.querySelector("#currentHoleInput" + props.hole);
    element.parentNode.removeChild(element);
  };

  //removes the next hole button and updates App state with hole total

  // func takes in props.nexthole and props.overallScore
  // const updatedTotalScore = (hole, totalScore) => {
  //   hole();
  // };

  return (
    <div className="currentHoleCard">
      <div>
        <span> Hole : {props.hole}</span>
      </div>

      <div className="parInputSetup" id={"currentHoleInput" + props.hole}>
        <input
          type="number"
          name="parValue"
          placeholder="Enter Par"
          onChange={setPar}
        />
        <button onClick={inputField}>Update</button>
      </div>

      <div> Par total: {par}</div>
      <div>Score: {data.score}</div>

      <span>Swing: {data.swing}</span>
      <button onClick={() => updateData("swing", "add")}>++</button>
      <button onClick={() => updateData("swing", "reset")}>RS</button>
      <button onClick={() => updateData("swing", "minus")}>--</button>
      <br></br>

      <span>Putt: {data.putt}</span>
      <button onClick={() => updateData("putt", "add")}> ++ </button>
      <button onClick={() => updateData("putt", "reset")}>RS</button>
      <button onClick={() => updateData("putt", "minus")}> -- </button>
      <button onClick={props.nextHole}>Next Hole</button>
    </div>
  );
};

export default Card;
