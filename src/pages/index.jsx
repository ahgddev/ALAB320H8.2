import ProcessShips from "../services/SW-Api";

function GetShips() {
  const shipArr = [];
  for (let i = 0; i <= 11; i++) {
    shipArr.push(<ProcessShips shipNum={i} />);
  }
  return shipArr;
}

export default GetShips;
