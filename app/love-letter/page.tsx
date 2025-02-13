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
                    <p className={styles.dear}>Mehu,</p>
                    <p className={styles.message}>My baby i just wanted to take a moment to tell you how much you mean to me, ur fr my goat my mommy my baby my cutie patootie (kuckupuchu) ur my goodgirl ur my angry bird, ur my pagal aurat, i genuinely love you sooo much. I love everything you do. Sorry baby i am really late to ask u to be my valentine. I am sorry, i promise this will not happen next year. I am not able to think of any super good line atm but I LOVE YOU. I FR DO. And yes at last i will say what is usually say "Mehu You and I are a perfect match, never believe anything else."</p>
                    <p className={styles.love}>With all my love,</p>
                    <p className={styles.signature}>Your ReeReeGirliee💗</p>
                    <button className={styles.button} onClick={() => window.location.href = '/valentine-proposal'}>
                        Click Me
                    </button>
                </div>
            )}
        </div>
    );
}
