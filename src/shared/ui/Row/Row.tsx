import { TextColor, TextSize, User } from '../../types'
import { Text } from '../Text/ui/Text';
import cls from './row.module.css'

export const Row = (props: Partial<User>) => {

    const {
        mail,
        name,
        number
    } = props; 
    
    return (
        <tr className={cls.tr}>
            <td className={cls.td}>
                <Text 
                    size={TextSize.M}
                    color={TextColor.BLACK} 
                    text={name} 
                />
            </td>
            <td>
                <Text 
                    size={TextSize.M}
                    color={TextColor.BLUE} 
                    text={mail}
                />
            </td>
            <td>
                <Text 
                    size={TextSize.M}
                    color={TextColor.BLUE}
                    text={number}
                />
            </td>
        </tr>
    )
}
