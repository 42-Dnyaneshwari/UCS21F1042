import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fib, setfib] = useState([]);
  const [Even, setEven] = useState([]);
  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MDU5MTcxLCJpYXQiOjE3MTUwNTg4NzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmYWU0YTc4LTg0OTEtNGI1YS1hMjE4LWNhMzk0MDExOTQxNSIsInN1YiI6InJhbXBhbHlhZGF2MjMwODIwMDFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiUmFtcGFsIiwiY2xpZW50SUQiOiI1ZmFlNGE3OC04NDkxLTRiNWEtYTIxOC1jYTM5NDAxMTk0MTUiLCJjbGllbnRTZWNyZXQiOiJEWnNpcFhDWGRKY21EdlRTIiwib3duZXJOYW1lIjoiUmFtcGFsIiwib3duZXJFbWFpbCI6InJhbXBhbHlhZGF2MjMwODIwMDFAZ21haWwuY29tIiwicm9sbE5vIjoiMDU1NzY4MDI3MjEifQ.1_dyrwxj9ktGjB7vGBz7psl7ZG0JuBJV5pzUSK4U7EQ';

  const getfibo = async () => {
    try {
      const response = await axios.get(
        'http://28.244.56.144/test/fibo',
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setfib(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getEven = async () => {
    try {
      const response = await axios.get(
        'http://28.244.56.144/test/Even',
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setEven(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Fibonacci number</h1>
      {
        fib.map((number)=>{
          <h2>{number}</h2>
        })
      }
      <h1>Even number</h1>
      {
        Even.map((number)=>{
          <h2>{number}</h2>
        })
      }
    </div>
  )
}

export default App
