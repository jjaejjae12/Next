import { useState } from "react";  
import NavBar from "../components/Navbar";

export default function Home() {
    const [counter,setCounter] = useState(0)
    return (
        <div>
            <h1>Hello{counter}</h1>
            <style jsx global>{`
                h1 {
                    border:1px solid black;
                }
            `}</style>
            <button onClick={() => setCounter(prev => prev + 1)}>Click me</button>
        </div>
    );
}