import './App.css';
import Bodygpr from './Components/Bodygpr';
import Header from './Components/Header';
import Sidemenu from './Components/Sidemenu';
import Goalview from './Components/Goalview';

function App() {
  return (
    <>
      <div className="App">
        <Sidemenu />
        <Header />
        <Bodygpr />

      </div>

      <div>
      <h3>Goal Overview</h3>
      <Goalview bgcolor="blue" progress1='4' height={20} />
      <Goalview bgcolor="blue" progress2='3' height={20} />
      <Goalview bgcolor="blue" progress3='2' height={20} />
      <Goalview bgcolor="blue" progress1='4' height={20} />
      <Goalview bgcolor="blue" progress4='1' height={20} />
      <Goalview bgcolor="blue" progress1='4' height={20} />
      <Goalview bgcolor="blue" progress1='2' height={20} />
      </div>
    </>

  );
}

export default App;
