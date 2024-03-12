import { useState, useEffect } from "react";
import axios from "axios"
import StarshipCard from "../components/StarshipCard";


function ProcessShips({shipNum}) {
    const [shipName, setShipName] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://www.swapi.tech/api/starships/${shipNum}`);
        setShipName(response.data.result.properties.name)
        console.log(shipName)
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
       <StarshipCard shipName={shipName} />
      </div>
    );

}

export default ProcessShips