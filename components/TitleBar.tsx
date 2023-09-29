"use client"

import Image from 'next/image';
import React from 'react'
import styles from '@/assets/css/app.module.css';
import { appWindow } from "@tauri-apps/api/window"

const TitleBar = () => {


    const handleWindow = (type: string) => {
        if (type === "minimize") {
            appWindow.minimize();
        }
        else if (type === "toggleMaximize") {
            appWindow.toggleMaximize();
        }
        else if (type === "close") {
            appWindow.close();
        }
    }

    return (
        <div className={styles.tilbar}>
            <div className={styles.title} data-tauri-drag-region>
                <Image src="/brand.png" alt="icon" height={20} width={52} className={styles.img} />
                <h1 style={{ marginTop: 9, fontWeight: 300, fontSize: 10 }}>V0.1.0</h1>
            </div>
            <div className={styles.btnapp}>
                <button type="button" onClick={() => { handleWindow("minimize") }}><i className="bi bi-dash-lg"></i></button>
                <button type="button" onClick={() => { handleWindow("toggleMaximize")}}><i className="bi bi-back"></i></button>
                <button type="button" onClick={() => { handleWindow("close") }}><i className="bi bi-x"></i></button>
            </div>
        </div>
    )
};

export default TitleBar;