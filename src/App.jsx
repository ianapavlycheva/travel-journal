import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((item) => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <>
            <Navbar />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}