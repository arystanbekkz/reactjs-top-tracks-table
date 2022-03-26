import './App.css';
import { fetchTopTracks } from './fetchers/fetchTopTracks';
import { Table } from './components/table';
import React, { useState, useEffect } from 'react';


function App() {
  const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetchTopTracks().then((data) => setTracks(data.toptracks.track))
    }, [])
    console.log(tracks);
    return (
        <div className="App">
          <Table tracks={tracks}></Table>
        </div>
    );
}

export default App;

