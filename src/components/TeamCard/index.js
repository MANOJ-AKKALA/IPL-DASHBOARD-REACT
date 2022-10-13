// Write your code here

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl} = teamDetails
  return (
    <div>
      <img src={teamImageUrl} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default TeamCard
