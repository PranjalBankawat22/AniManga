'use client'
import Image from "next/image"
import styles from "./UpcomingAnime.module.css"

export default function UpcomingAnime () {
    return(
        <div className={styles.UpcomingAnime}>
            <p className={styles.UpcomingAnimeTitle}>Upcoming Anime</p>
            <div className={styles.UpcomingAnimeContent}>
                <div className={styles.UpcomingAnimeLeft}>
                    <Image src="/anime1.webp" alt="anime image" fill />
                </div>
                <div className={styles.UpcomingAnimeRight}>
                    <p className={styles.UpcomingAnimeName}>Jujutsu Kaisen</p>
                    <ul className={styles.UpcomingAnimeGenre}>
                        <li className={styles.AnimeGenre}>Action</li>
                        <li className={styles.AnimeGenre}>Drama</li>
                        <li className={styles.AnimeGenre}>Supernatural</li>
                        <li className={styles.AnimeGenre}>Slice of Life</li>
                        <li className={styles.AnimeGenre}>Fantasy</li>
                    </ul>
                    <p className={styles.UpcomingAnimeAbout}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit placeat consequatur, error tenetur neque accusantium beatae mollitia asperiores, blanditiis vel incidunt repudiandae deleniti eligendi consectetur similique culpa? Veritatis, numquam!
                    </p>
                    <ul className={styles.UpcomingAnimeVA}>
                        <li className={styles.AnimeVA}>Yuji Itadori - Junya Enoki</li>
                        <li className={styles.AnimeVA}>Megumi Fushiguro - Yuma Uchida</li>
                        <li className={styles.AnimeVA}>Nobara Kugisaki - Asami Seto</li>
                        <li className={styles.AnimeVA}>Satoru Gojo - Yuichi Nakamura</li>
                    </ul>
                    <div className={styles.AnimeCTA}>
                        <p className={styles.AnimeWatchCTA} onClick={() => console.log(Math.random())}>Continue Watching</p>
                        <p className={styles.AnimeSaveCTA}>Add to Watchlist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}