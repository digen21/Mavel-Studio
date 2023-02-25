import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Cards";
import Hero from "./Components/Hero";

import data from "./data";
console.log(data);

function App() {
  const lists = data.map((item) => {
    console.log(item);
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Header />
      <Hero />
      <section className="cards-list ">{lists}</section>
    </div>
  );
}

export default App;
