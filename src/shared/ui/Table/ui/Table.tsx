import { TableProps } from "../../../types"
import { Row } from "../../Row/Row";
import cls from "./table.module.css"

export const Table = (props: TableProps) => {

    const {
        users
    } = props;

    return (
        <table 
            className={cls.table} 
            cellPadding={5}
            cellSpacing={8}
        >
            <tbody>
                {
                    users.map((user) => (
                        <Row 
                            key={user.id}
                            mail={user.mail}
                            name={user.name}
                            number={user.number}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

