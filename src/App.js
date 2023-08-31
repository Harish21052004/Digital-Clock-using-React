import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  const hrs = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
  const min = time.getMinutes()<10 ?'0' +time.getMinutes(): time.getMinutes()
  const sec = time.getSeconds() < 10 ?  '0' +time.getSeconds(): time.getSeconds()
  const states = time.getHours() < 13 ? 'AM' : 'PM'
  return (
    <div className='cover'>
      <div class="container">
        <div class="wrapper">
          <div class="clock">
            <div class="hours" id="hours">{hrs}</div>
            <label for="hours">Hours  [{states}]</label>
          </div>
          :
          <div class="clock">
            <div class="minutes" id="minutes">{min}</div>
            <label for="minutes">Minutes</label>
          </div>
          :
          <div class="clock">
            <div class="seconds" id="seconds">{sec}</div>
            <label for="seconds">Seconds</label>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
