import { useState } from 'react'
import './Header.css'

export default function Header({ setCardListState, cardList }) {

    const addCard = () => {
        let newId = cardList.length
        let newNumber = Math.floor(Math.random() * 1000)
        setCardListState([...cardList, {
            "id": newId,
            "name": newNumber
        }])
    }

    const sortCards = () => {
        let cardListCopy = [...cardList]
        let sortedCards = cardListCopy.sort((a, b) => a.name - b.name)
        setCardListState(sortedCards)
    }

    return (
        <div className='header'>
            <button className='header-bttn' onClick={() => addCard()}><span className="text">add card</span></button>
            <button className='header-bttn' onClick={sortCards}><span className="text">sort card</span></button>
        </div>

    )
}