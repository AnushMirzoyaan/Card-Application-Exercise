import './App.css';
import Header from './components/Header/Header';
import Main from './components/Body/Main';
import Footer from './components/Footer/Footer';
import Instructions from './components/Instructions/Instructions';
import { useEffect, useState } from "react"


function App() {
  const localStorageVariableName = "listState"
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    let localStorageData = localStorage.getItem(localStorageVariableName)
    if (localStorageData !== null) {
      let storedState = JSON.parse(localStorageData)
      setCardList(storedState)
    }
  }, [])

  const setCardListState = (newState) => {
    setCardList(newState)
    localStorage.setItem(localStorageVariableName, JSON.stringify(newState))
  }

  return (
    <div className="App">
      <div>
        <Header cardList={cardList} setCardListState={setCardListState} />
        <Main cardList={cardList} setCardListState={setCardListState} />
        <Footer />
      </div>
      <Instructions />
    </div>
  );
}

export default App;
