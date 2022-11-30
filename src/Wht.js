import React,{useState} from 'react'
import { Typography } from '@mui/material';
const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius-2)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
          <Typography class="logy" variant='inherit'>
Check Wheather
             </Typography>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
              <input class="butter"type="submit" value="Get Temperature" />
            </form>
            <div>
            <Typography class="logy" variant='inherit'>
            {result}
             </Typography>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App