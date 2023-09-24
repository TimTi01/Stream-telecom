
import { Mods, classNames } from '../../../lib/classNames/classNames';
import { TextAlign, TextColor, TextProps, TextSize } from '../../../types';
import cls from './text.module.css'

export const Text = (props: TextProps) => {

    const {
        align = TextAlign.LEFT,
        size = TextSize.M,
        text,
        color = TextColor.BLACK,
        className
    } = props;

    const mods: Mods = {
        [cls[align]]: true,
        [cls[size]]: true,
        [cls[color]]: true,
    };

    return (
        <div className={classNames(cls.text, mods, [className])}>
            {text}
        </div>
    )
}
