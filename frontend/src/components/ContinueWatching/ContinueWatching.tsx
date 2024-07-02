import Image from "next/image"
import styles from "./ContinueWatching.module.css"

export default function ContinueWatching () {
    return(
        <div className={styles.ContinueWatching}>
            <p className={styles.ContinueWatchingTitle}>Continue Watching</p>
            <div className={styles.AnimeContainer}>
                <div className={styles.Anime}>
                    <Image className={styles.AnimeImage} src="/anime1.webp" alt="anime image" fill />
                    <p className={styles.AniemTitle}>title</p>
                    <p className={styles.AnimeCurrEpisode}>episode no</p>
                    <p className={styles.AnimeProgress}>progress</p>
                </div>
                <div className={styles.Anime}>
                    <Image className={styles.AnimeImage} src="/anime2.jpeg" alt="anime image" fill />
                    <p className={styles.AniemTitle}>title</p>
                    <p className={styles.AnimeCurrEpisode}>episode no</p>
                    <p className={styles.AnimeProgress}>progress</p>
                </div>
                <div className={styles.Anime}>
                    <Image className={styles.AnimeImage} src="/anime3.jpeg" alt="anime image" fill />
                    <p className={styles.AniemTitle}>title</p>
                    <p className={styles.AnimeCurrEpisode}>episode no</p>
                    <p className={styles.AnimeProgress}>progress</p>
                </div>
                <div className={styles.Anime}>
                    <Image className={styles.AnimeImage} src="/anime4.jpg" alt="anime image" fill />
                    <p className={styles.AniemTitle}>title</p>
                    <p className={styles.AnimeCurrEpisode}>episode no</p>
                    <p className={styles.AnimeProgress}>progress</p>
                </div>
                <div className={styles.Anime}>
                    <Image className={styles.AnimeImage} src="/anime5.jpeg" alt="anime image" fill />
                    <p className={styles.AniemTitle}>title</p>
                    <p className={styles.AnimeCurrEpisode}>episode no</p>
                    <p className={styles.AnimeProgress}>progress</p>
                </div>
                <div className={styles.Anime}>
                    <Image className={styles.AnimeImage} src="/anime6.webp" alt="anime image" fill />
                    <p className={styles.AniemTitle}>title</p>
                    <p className={styles.AnimeCurrEpisode}>episode no</p>
                    <p className={styles.AnimeProgress}>progress</p>
                </div>
            </div>
        </div>
    )
}