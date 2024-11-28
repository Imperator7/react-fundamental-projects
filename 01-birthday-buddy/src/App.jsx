import { useState } from 'react'
import List from './List'
import ClearBtn from './ClearBtn'

import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h1>{people.length} Birthdays Today</h1>
        <List people={people} />
        <ClearBtn setPeople={setPeople} />
      </section>
    </main>
  )
}
export default App
