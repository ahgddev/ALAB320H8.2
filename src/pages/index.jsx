import StarshipCard from "../components/StarshipCard";
let ships = ["Pirate","Naval","Fandom"]
let shipList = ships.map((shipName) => {
    return <StarshipCard shipName={shipName} />
})
function Index() {
  return (
    <>{shipList}</>
  )
}

export default Index