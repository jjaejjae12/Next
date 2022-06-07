import { useState } from "react";
import NavBar from "../components/Navbar";
import Head from "next/head";
import Seo from "../components/Seo";
import { useEffect } from "react/cjs/react.production.min";

const API_KEY = "63b2b1c1f8886b5eda4a8edafdc64504";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      <Seo title="Home" />
      <button onClick={() => setCounter((prev) => prev + 1)}>Click me</button>
    </div>
  );
}
