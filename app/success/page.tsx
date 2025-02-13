"use client";

import '../globals.css'; // Global styles
import styles from '../../styles/Success.module.css'; // Import success styles

export default function Success() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Nice work baby! 💕</h1>
            <p className={styles.message}>You are for real my good girl!</p>
            <button className={styles.button} onClick={() => window.location.href = '/love-letter'}>
                Click Me
            </button>
        </div>
    );
}