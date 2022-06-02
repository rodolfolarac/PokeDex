import "./App.css";
import CardList from "./components/CardList";
import { Header } from "./components/Header/style";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header>
        <h1>PokeDex</h1>
      </Header>
      <GlobalStyle />
      <div className="App">
        <CardList />
      </div>
    </>
  );
}

export default App;
