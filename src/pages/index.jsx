import StarshipCard from "../components/StarshipCard";
let ships = ["Pirate", "Naval", "Fandom"];

function getShips() {
  try {
    let shipList = ships.map((shipName) => {
      return <StarshipCard shipName={shipName} />;
    });
    return shipList
  } catch (error) {
    return <StarshipCard shipName="Ships not found" />;
  }
}

function Index() {
  return <>{getShips()}</>;
}

export default Index;
