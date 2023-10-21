import { useState } from "react";
import { Navbar } from "flowbite-react";
import "./App.css";

function App() {
  const [hitungan, setHitungan] = useState(0);
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Verlino Raya Fajri
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <div>Counter: {hitungan}</div>
        <button onClick={() => setHitungan(hitungan + 1)}>KLIK</button>
      </div>
    </>
  );
}

export default App;
