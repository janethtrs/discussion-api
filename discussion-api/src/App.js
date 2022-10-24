
import './App.css';
import tophatlogo from './img/tophat-logo.png';
import DiscussionList from './components/Discussion-list';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img
          src={tophatlogo}
          className = 'tophatlogo'
          alt='tophat-logo'/>
      </div>
      <div className='discussion-question'>
        <h1><strong>Discussion question</strong></h1>
        <DiscussionList/>
      </div>
    </div>
  );
}

export default App;
