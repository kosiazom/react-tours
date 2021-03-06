import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // debugger
    let newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
    console.log("I was clicked")
  }

  const fetchTours = () => {
    fetch(url)
    .then(res => res.json())
    .then(tours => {
      console.log(tours)
        setLoading(false);
        setTours(tours);
        })
    .catch(error => console.log(error))
  };

  // const fetchTours = async () => {
  //   setLoading(true);
    //try {
  //   const response = await fetch(url)
  //   const tours = await response.json();
  //   setLoading(false);
  //   setTours(tours)
  //  } catch(error) {
    //setLoading(false);
    //console.log(error);

 // }
  // }; another way to do it

  useEffect(() => {
    fetchTours()
  }, []);

  if(loading) {
    return <main>
      <Loading />
    </main>
  }
if(tours.length === 0) {
  return <main>
    <div className="title">
    <h2>no tours left!</h2>
    <button className="btn" onClick={fetchTours}>refresh</button>
    </div>
  </main>
}
  return (<main>
    <Tours tours={tours} 
    removeTour={removeTour}
    />
  </main>

  )
}

export default App
