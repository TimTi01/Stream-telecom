import { ButtonProps } from '../../../types'
import cls from './Button.module.css'

export const Button = (props: ButtonProps) => {
    const {
        toggle,
        setToggle
    } = props;

    return (
        <button 
            className={cls.button}
            onClick={() => setToggle(!toggle)}
        >
            {toggle ? 'Tiles' : 'List'}
        </button>
    )
}
