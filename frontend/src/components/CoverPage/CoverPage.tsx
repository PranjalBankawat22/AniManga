"use client"

import Image from "next/image"
import styles from './CoverPage.module.css';

export default function CoverPage() {
    return(
        <div className={styles.CoverImage}>
            <div className={styles.LeftBox}>
                <p className={styles.AnimeName}>Jujutsu Kaisen</p>
                <ul className={styles.AnimeGenres}>
                    <li className={styles.AnimeGenre}>Action</li>
                    <li className={styles.AnimeGenre}>Drama</li>
                    <li className={styles.AnimeGenre}>Supernatural</li>
                    <li className={styles.AnimeGenre}>Slice of Life</li>
                    <li className={styles.AnimeGenre}>Fantasy</li>
                </ul>
                <p className={styles.AnimeAbout}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit placeat consequatur, error tenetur neque accusantium beatae mollitia asperiores, blanditiis vel incidunt repudiandae deleniti eligendi consectetur similique culpa? Veritatis, numquam!
                </p>
                <div className={styles.AnimeCTA}>
                    <p className={styles.AnimeWatchCTA} onClick={() => console.log(Math.random())}>Continue Watching</p>
                    <p className={styles.AnimeSaveCTA}>Add to Watchlist</p>
                </div>
            </div>
            <div className={styles.RightBox}>
                <Image className={styles.AnimeImage} src="/jjk_wallpaper.jpg" alt="anime image" fill />
            </div>
        </div>
    )
}