import ProcessShips from "../services/SW-Api";

function GetShips() {
//   const shipArr = [];
//   for (let i = 0; i <= 11; i++) {
//     shipArr.push(<ProcessShips shipNum={i} />);
//   }
//   return shipArr;
return (
    <>
    <ProcessShips shipNum="0" />
    <ProcessShips shipNum="1" />
    <ProcessShips shipNum="2" />
    <ProcessShips shipNum="3" />
    <ProcessShips shipNum="4" />
    <ProcessShips shipNum="5" />
    <ProcessShips shipNum="6" />
    <ProcessShips shipNum="7" />
    <ProcessShips shipNum="8" />
    <ProcessShips shipNum="9" />
    <ProcessShips shipNum="10" />
    </>
)
}

export default GetShips;
