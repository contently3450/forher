"use client";

// import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import "./globals.css";

export default function Home() {
    // const [countdown, setCountdown] = useState<string>('' as string);

    // useEffect(() => {
    //     const valentineDate = new Date('2025-02-14T00:00:00');
    //     const interval = setInterval(() => {
    //         const now = new Date();
    //         const diff = valentineDate - now;
    //         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    //         setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Welcome Meri Jaan</h1>
                <p>Before I ask you something special, let&apos;s see how well you know us❤️</p>
                {/* <div className={styles.countdown}>{countdown}</div> */}
                <Link href="/quiz">
                    <button className={styles.button}>Start Quiz</button>
                </Link>
            </main>
        </div>
    );
}
