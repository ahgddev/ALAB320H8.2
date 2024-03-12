export default function StarshipCard(props) {
  const { shipName } = props
  return (
    <div className="shipCard">{shipName}</div>
  )
}
