const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => (
        <div className="person" key={person.id}>
          <img src={person.image} alt={person.name} />
          <div>
            <p>{person.name}</p>
            <p>{person.age} years</p>
          </div>
        </div>
      ))}
    </section>
  )
}
export default List
