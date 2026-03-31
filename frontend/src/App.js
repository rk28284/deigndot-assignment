import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Banner } from "./Component/Banner";
import { News } from "./Component/News";
import { Albulm } from "./Component/Albulm";
import { Insights } from "./Component/Insights";
function App() {
  return (
    

    <div className="App">
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <Navbar />

        <Banner />

        <News />

        <Albulm />

        <Insights />
      </div>
    </div>
  );
}

export default App;
