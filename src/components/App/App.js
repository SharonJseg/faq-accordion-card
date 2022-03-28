import Accordion from '../Accordion/Accordion';
import './App.css';
import box from '../../images/illustration-box-desktop.svg';

function App() {
  return (
    <div className='page'>
      <img src={box} alt='orange box' className='box' />
      <Accordion />
    </div>
  );
}

export default App;
