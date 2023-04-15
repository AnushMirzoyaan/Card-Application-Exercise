import './Main.css'

export default function Main({ cardList, setCardListState }) {


    function removeCard(id) {
        const newCardList = cardList.filter((elem) => elem.id !== id)
        setCardListState(newCardList)
    }
    return (
        <div className="cardContainer">
            {cardList.map((singleCard) => {
                return (
                    <div className="singleCard">

                        <span
                            onClick={() => removeCard(singleCard.id)}
                            style={{ marginLeft: "20px", right: "0" }}>
                            <img src={'/delete-icon.svg'} />
                        </span>
                        <div >{singleCard.name} </div>
                    </div>
                )
            })}
        </div>

    )
}