import styles from '../../styles/SearchBar.module.css'

import piramides from '../../../img/pirámides-1.jpg'
import coliseo from '../../../img/coliseo.jpg'
import louvre from '../../../img/louvre-1.jpg'
import machuPichu from '../../../img/machu-pichu.jpg'
import chichenItza from '../../../img/chichen-itza.jpg'

const SearchBar = () => {

    const backgroundImages = {
        0: piramides,
        1: coliseo,
        2: louvre,
        3: machuPichu,
        4: chichenItza
    }

    const getBackgroundImage = () => {
        const index = Math.floor(Math.random() * 5)
        return backgroundImages[index]
    }

    return (
        <div className={styles.container} style={{backgroundImage: `url(${getBackgroundImage()})`}}>
            <div className={styles.searchContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Destino</label>
                    <input className={styles.searchInput} type="text" />
                </div>

                <button className={styles.button}>
                    <svg style={{ color: "var(--color-white)", width: 16 }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    Buscar
                </button>
            </div>
        </div>
    )
}
 
export default SearchBar