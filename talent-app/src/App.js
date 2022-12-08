import './App.css';
// import Bodygpr from './Components/Bodygpr';
import Header from './Components/Header';
import Sidemenu from './Components/Sidemenu';
// import Progress_bar from './Components/Goalview'
import Messages from './Pages/Messages';

function App() {
  return (
    
      <div className="App">
        <Sidemenu />
        <Header />
        <Messages />
        {/* <Bodygpr />

        <div className='Goal'>
          <h3>Goal Overview</h3>
          <div className='Goalchild'>          
          <Progress_bar text={'Designers'} value='80' fraction="4/5" />
          <Progress_bar text={'Product Manager'} value='30.3' fraction="3/10" />
          <Progress_bar text={'Mobile Developer'} value='66.6' fraction="2/3" />
          <Progress_bar text={'Site Reliability Engineer'} value='80' fraction="4/5" />
          <Progress_bar text={'Frontend Developer'} value='50' fraction="1/2" />
          <Progress_bar text={'Quality Assurance'} value='80' fraction="4/5" />
          <Progress_bar text={'Backend Developer'} value='20' fraction="2/5" />
          </div>

        </div> */}

      </div>


    

  );
}

export default App;
