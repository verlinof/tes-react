import { useState } from "react";
import { Navbar } from "flowbite-react";
import "./App.css";

//NAMA FUNCTION DI REACT HARUS KAPITAL DI DEPANN
function Penghitung() {
  const [hitungan, setHitungan] = useState(0);

  return (
    <>
      <div className="p-5 bg-slate-200">
        <button
          className="p-3 w-56 bg-blue-500 rounded-lg shadow-lg"
          onClick={() => setHitungan(hitungan + 1)}
        >
          Counter: {hitungan}
        </button>
      </div>
    </>
  );
}

function App() {
  const [daftar, setDaftar] = useState([1, 2, 3]);

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
      {/* CARA MANGGIL COMPONENT YANG KITA BUAT */}
      <Penghitung />
      <Penghitung />
      <Penghitung />
      <div>{daftar.join(",")}</div>
      <button onClick={() => setDaftar([...daftar, 1])}>Tambah angka 1</button>
      <button onClick={() => setDaftar([...daftar, 2])}>Tambah angka 2</button>
    </>
  );
}

export default App;
