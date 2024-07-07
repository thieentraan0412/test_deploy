import ButtionList from "./component/buttion_list_animation";
import Header from "./component/header_animation";
import "./App.css";
import BackgroundToggle from "./component/buttion_bg";
function App() {
  return (
    <div>
      <Header />
      <ButtionList/>
      <BackgroundToggle/>
      <div className="h-[5000px]"></div>
    </div>
  );
}

export default App;
