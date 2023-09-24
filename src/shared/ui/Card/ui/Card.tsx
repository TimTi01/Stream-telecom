import { Text } from '../../Text/ui/Text'
import { TextColor, TextSize, User } from "../../../types"
import cls from "./card.module.css"

export const Card = (props: User) => {

    const { 
        mail, 
        name, 
        number
    } = props
    
    return (
        <div className={cls.card}>
            <Text 
                text={name}
                size={TextSize.L}
            />
            <Text 
                text={mail}
                color={TextColor.BLUE}
            />
            <Text 
                text={number}
                color={TextColor.BLUE}
            />
        </div>
    )
}
