import Link from "next/link"
import { useRouter } from "next/router";
import styles from './NavNar.module.css';

export default function NavBar(prop) {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            <style jsx>{`
            //해당 컴폰언트로 스타일 한정
                nav {
                    background-color: skyblue;
                }
                a {
                    text-decoration: none;
                    /* color: red; */
                }
                .active {
                    color:${prop.color ?  prop.color : "yellow"};
                }
            `}</style>
            {/* <a href="/">Home</a> */}
            {/* <a href="/about">About</a> */}
        </nav>
    )
}