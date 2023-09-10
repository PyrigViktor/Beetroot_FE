import './assets/scss/App.scss';
import icon from './assets/img/icon.svg'
import sunny from './assets/img/sunny.svg'
import sunnyclear from './assets/img/sunny-clear.svg'
import sunnyCloudy from './assets/img/sunny-cloudy.svg'
import stormy from './assets/img/stormy.svg'
import rain from './assets/img/rain.svg'
import hot from './assets/img/hot.svg'
import littleRain from './assets/img/little_rain.svg'
import cloudy from './assets/img/cloudy.svg'
import cloudy2 from './assets/img/cloudy2.svg'
import clear from './assets/img/clear.svg'
function Main () {
    return (
        <div className='Main'>
            <div className='Main__title'>
                <h5 className='Main__h5'>CSS Weather Forecast <img className='icon' src={icon} alt={"my icon"}/> </h5>
            </div>
            <div className='grid-container'>
            <div className='grid-item wide lisbon'>
                <h5>Lisbon</h5>
                <p>21°С <img src={sunny} alt={sunny}/> </p>
            </div>
            <div className='grid-item paris'>
                <h5>Paris</h5>
                <p>11°C<img src={littleRain} alt={littleRain}/> </p>
            </div>
            <div className='grid-item belgrade'>
                <h5>Belgrade</h5>
                <p>15°C <img src={cloudy} alt={cloudy}/> </p>
            </div>
            <div className='grid-item venice'>
                <h5>Venice</h5>
                <p>21°C <img src={cloudy2} alt={cloudy2}/> </p>
            </div>
            <div className='grid-item tel-avive'>
                <h5>Tel-Avive</h5>
                <p>32°C <img src={hot} alt={hot}/> </p>
            </div>
            <div className='grid-item cair'>
                <h5>Cair</h5>
                <p>21°C <img src={sunny} alt={sunny}/> </p>
            </div>
            <div className='grid-item new-york'>
                <h5>New-York</h5>
                <p>17°C <img src={stormy} alt={stormy}/> </p>
            </div>
            <div className='grid-item new-delhi'>
                <h5>New-Delhi</h5>
                <p>17°C <img src={rain} alt={rain}/> </p>
            </div>
            <div className='grid-item wide san-francosco'>
                <h5>San-Francisco</h5>
                <p>15°C <img src={sunnyCloudy} alt={sunnyCloudy}/> </p>
            </div>
            <div className='grid-item tokyo'>
                <h5>Tokyo</h5>
                <p>8°C <img src={clear} alt={clear}/> </p>
            </div>
            <div className='grid-item fullwide sydney'>
                <h5>Sydney</h5>
                <p>25°C <img src={sunnyclear} alt={sunnyclear}/> </p>
            </div>
            </div>
            <p className='Main__h5'>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
        </div>

    )
}



function App() {
  return (
    <>
        <Main/>
    </>
  );
}

export default App;
