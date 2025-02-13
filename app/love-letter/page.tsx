"use client";

import { useState } from 'react';
import '../globals.css'; // Global styles
import styles from '../../styles/LoveLetter.module.css'; // Import styles

export default function LoveLetter() {
    const [showLetter, setShowLetter] = useState(false); // State to control letter visibility

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>A Love Letter Just for You 💌</h1>
            <div className={styles.envelope} onClick={() => setShowLetter(true)}>
                📬 {/* Envelope emoji */}
            </div>
            {showLetter && (
                <div className={styles.letter}>
                    <p className={styles.dear}>My Dearest,</p>
                    <p className={styles.message}>I just wanted to take a moment to tell you how much you mean to me...</p>
                    <p className={styles.love}>With all my love,</p>
                    <p className={styles.signature}>Your Valentine ❤️</p>
                    <button className={styles.button} onClick={() => window.location.href = '/valentine-proposal'}>
                        Click Me
                    </button>
                </div>
            )}
        </div>
    );
}