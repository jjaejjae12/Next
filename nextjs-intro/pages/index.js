import { useState } from "react";  
import NavBar from "../components/Navbar";

export default function Home() {
    const [counter,setCounter] = useState(0)
    return (
        <div>
            <NavBar color={"blue"}/>
            <h1>Hello{counter}</h1>
            <style jsx>{`
                a {
                    color: blue;
                }
            `}</style>
            <button onClick={() => setCounter(prev => prev + 1)}>Click me</button>
        </div>
    );
}