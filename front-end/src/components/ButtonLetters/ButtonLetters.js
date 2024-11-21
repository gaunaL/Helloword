import { type } from "@testing-library/user-event/dist/type"
import { AdaptContext } from "../../context/Adapt"
import { useEffect } from "react"
import styles from './ButtonLetters.module.css'

const ButtonLetters = () => {

    const {sizeOfLetters, dispatch} = AdaptContext()
    console.log('fora da caixa ', sizeOfLetters)

    useEffect(()=>{
        
        document.
        documentElement.
        style.
        setProperty('--base-font-size', `${sizeOfLetters.letters}rem` )
    
    },[sizeOfLetters])
    
    const increaseFont = (e) =>{
        e.preventDefault()

       dispatch({ type: 'increase' });
       console.log(sizeOfLetters)
    }

    const decreaseFont = (e) =>{
        e.preventDefault()
        dispatch({type: 'decrease'})
        console.log(sizeOfLetters)
    }

    return (

        <div className={styles.btn_container} > {/**style="position: fixed; top: 50px; right: 10px; z-index: 1000;" */}
            <button className={styles.btn} onClick={increaseFont} aria-label="Aumentar Fonte">A+</button>
            <button className={`${styles} ${styles.btn_decrease}`}onClick={decreaseFont}aria-label="Diminuir Fonte">A-</button>
        </div>

    )
}

export default ButtonLetters


