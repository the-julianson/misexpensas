import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalState';




export const Transaction = ({text, amount, id}) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = amount < 0 ? '-' : '+';
    const colorTag = amount < 0 ? 'minus' : 'plus';
    return (
        <li className={colorTag}>
        {text} <span>{sign}${Math.abs(amount)}</span>
        <button className="delete-btn" onClick={deleteTransaction}>x</button>
      </li>
    )
}
