import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
