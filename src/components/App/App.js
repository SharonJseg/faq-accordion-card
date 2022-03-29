import Accordion from '../Accordion/Accordion';
import './App.css';
import box from '../../images/illustration-box-desktop.svg';
import mainImageMobile from '../../images/illustration-woman-online-mobile.svg';

function App() {
  return (
    <div className='page'>
      <img src={box} alt='orange box' className='box' />
      <img
        src={mainImageMobile}
        alt='placeholder pic'
        className='accordion__main-image_mobile'
      />
      <Accordion />
    </div>
  );
}

export default App;
