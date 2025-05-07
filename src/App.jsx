import Attribution from "./components/Attribution"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer className="mt-10">
        <Attribution />
      </footer>
    </>
  )
}

export default App
