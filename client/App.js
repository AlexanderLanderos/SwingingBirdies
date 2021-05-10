import "./styles.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";

// scorecard container
// total score
// ternary operator - if arrHoles falsey then render totalscore+btn else map arrHoles

const App = () => {
  const [roundInfo, setRoundInfo] = useState({
    totalScore: 0,
    currentHole: 1,
    coursePar: 0,
    accumulatedHoles: []
  });

  const createCard = () => {
    let arrayCopy = [...roundInfo.accumulatedHoles];
    let currentHoleCopy = roundInfo.currentHole + 1;
    arrayCopy.push(
      <div>
        <Card
          hole={roundInfo.currentHole}
          nextHole={createCard}
          overallScore={roundInfo.totalScore}
        />
      </div>
    );
    setRoundInfo({
      ...roundInfo,
      currentHole: currentHoleCopy,
      accumulatedHoles: arrayCopy
    });
  };

  // this fun deletes the button from the DOM via querySelector
  const btnDelete = () => {
    let element = document.querySelector(".startRoundBTN");
    element.parentNode.removeChild(element);
  };

  // this func removes the 'Start Round' button and adds a card to the page
  const startRound = () => {
    createCard();
    btnDelete();
  };

  return (
    <div>
      <div className="totalScoreContainer">
        Total Score: {roundInfo.totalScore}
        <button className="startRoundBTN" onClick={() => startRound()}>
          Start Round
        </button>
      </div>
      <div className="cardContainer">
        {roundInfo.accumulatedHoles.map((el) => el)}
      </div>
    </div>
  );
};

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       totalScore: 0,
//       currentHole: 1,
//       coursePar: 0,
//       accumulatedHoles: []
//     };
//     this.createHole = this.createCard.bind(this);
//     this.startRound = this.startRound.bind(this);
//     this.btnDelete = this.btnDelete.bind(this);
//   }

//   //Created this function to add a new card to state and update current hole.
// createCard = () => {
//   let arrayCopy = [...this.state.accumulatedHoles];
//   let curHoleCopy = this.state.currentHole + 1;
//   arrayCopy.push(
//     <div>
//       <Card
//         hole={this.state.currentHole}
//         nextHole={this.createCard}
//         overallScore={this.totalScore}
//       />
//     </div>
//   );
//   this.setState({ accumulatedHoles: arrayCopy, currentHole: curHoleCopy });
// };

//   // this fun deletes the button from the DOM via querySelector
//   btnDelete = () => {
//     let element = document.querySelector(".startRoundBTN");
//     element.parentNode.removeChild(element);
//   };
//   // this func removes the 'Start Round' button and adds a card to the page
//   startRound = () => {
//     this.createCard();
//     this.btnDelete();
//   };

//   render() {
//     return (
//       <div>
//         <div className="totalScoreContainer">
//           Total Score: {this.state.totalScore}
//           <button className="startRoundBTN" onClick={this.startRound}>
//             Start Round
//           </button>
//         </div>
//         <div className="cardContainer">
//           {this.state.accumulatedHoles.map((el) => el)}
//         </div>
//       </div>
//     );
//   }
// }
