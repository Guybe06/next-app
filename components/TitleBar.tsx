"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import styles from '@/assets/css/app.module.css';
import { invoke } from '@tauri-apps/api/tauri'

const TitleBar = () => {

    const [minimize, setMinimize] = useState(true);

    const handleWindow = (type: string) => {
        if (type === "hide") {
            invoke<string>('minimize_window').then(() => {
                console.log('Fenêtre réduite!');
            });
        }
        else if (type === "toggleMaximize") {
            if (minimize) {
                invoke<string>('maximize_window').then(() => {
                    console.log('Fenêtre réduite!');
                });
            } else {
                invoke<string>('unmaximize_window').then(() => {
                    console.log('Fenêtre réduite!');
                });
            }
        }
        else if (type === "close") {
            invoke<string>('close_window').then(() => {
                console.log('Fenêtre réduite!');
            });
        }
    }

    return (
        <div className={styles.tilbar}>
            <div className={styles.title} data-tauri-drag-region>
                <Image src="/brand.png" alt="icon" height={20} width={52} className={styles.img} />
                <h1 style={{ marginTop: 9, fontWeight: 300, fontSize: 10 }}>V0.1.0</h1>
            </div>
            <div className={styles.btnapp}>
                <button type="button" onClick={() => { handleWindow("hide") }}><i className="bi bi-dash-lg"></i></button>
                {!minimize && <button type="button" onClick={() => { handleWindow("toggleMaximize"); setMinimize(true) }}><i className="bi bi-back"></i></button>}
                {minimize && <button type="button" onClick={() => { handleWindow("toggleMaximize"); setMinimize(false) }}><i className="bi bi-square"></i></button>}
                <button type="button" onClick={() => { handleWindow("close") }}><i className="bi bi-x"></i></button>
            </div>
        </div>
    )
};

export default TitleBar;