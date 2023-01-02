import "./App.css";
import {  TopContainer } from "./TopContainer";
import { Title } from "./Title";
import { CardData } from "./Card";
import { Project } from "./Project";
import { Illustrations } from "./Illustrations";
import { Footer } from "./Footer";
import { ScrollButton } from "./ScrollButton";
import { ChartData } from "./WholeChart";



function App() {
  return (
    <div className="App">
      <TopContainer />
      <Title />
      <CardData />
       <ChartData/>
      <div className="bottom-container">
        <Project />
        <Illustrations />
      </div>
      <Footer />
      <ScrollButton />

    </div>

  );
}



export default App;
