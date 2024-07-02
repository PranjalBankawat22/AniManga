import Link from "next/link";
import styles from './NavBarRight.module.css';

export default function NavBarRight() {
    return (
        <div className="w-1/2 flex justify-end items-center">
            <input 
            type="text" 
            placeholder="Search" 
            className="h-1/3 p-2 pl-5 mr-10 block w-2/3 rounded-2xl focus:outline-none bg-black italic"
            />
            <Link href="/login" className={styles.LoginButton}>Login</Link>
        </div>
    );
}