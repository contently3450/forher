"use client";

import { useState } from 'react';
import '../globals.css'; // Global styles
import styles from '../../styles/ValentineProposal.module.css'; // Import styles

export default function ValentineProposal() {
    const [position, setPosition] = useState({ top: '50%', left: '50%' }); // Initial position for the "No" button

    const teleportNoButton = () => {
        const randomX = Math.random() * 80; // Random X position
        const randomY = Math.random() * 80; // Random Y position
        setPosition({ top: `${randomY}vh`, left: `${randomX}vw` }); // Update position
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Will you be my Valentine?</h1>
            <button className={styles.yesButton} onClick={() => alert("Yay! Can't wait to celebrate together!")}>
                Yes
            </button>
            <button 
                className={styles.noButton} 
                style={{ top: position.top, left: position.left }} 
                onClick={teleportNoButton}
                onMouseEnter={teleportNoButton} // Displace on hover
            >
                No
            </button>
        </div>
    );
}