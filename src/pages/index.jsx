import { useState, useEffect } from "react";
import StarshipCard from "../components/StarshipCard";
import ProcessShips from "../services/SW-Api";

function GetShips() {
    return(
        <div>
            <ProcessShips shipNum="9"/>
        </div>
    )
}

// async function getShips() {
//     const [shipName, setShipName] = useState("")

//     use
//   try {
//     let response = await axios.get()
//     // let shipList = ships.map((shipName) => {
//     //   return <StarshipCard shipName={shipName} />;
//     // });
//     // return shipList
//     // console.log(response.data.result.properties.name)
//     setShipName(response.data.result.properties.name)
//     return (
//         <StarshipCard shipName={shipName} />
//     )
//   } catch (error) {
//     return <StarshipCard shipName="Ships not found" />;
//   }
// }


// function Index() {

//     let prom = Promise.resolve(getShips())
//     prom.then((data) => {
//         console.log(data)
//         return data
//     })
//   return <>{console.log(prom)}</>;
// }

export default GetShips;
