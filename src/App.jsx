import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  return (
    <>
      <Navbar />
      <div className="cards-list">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default App
