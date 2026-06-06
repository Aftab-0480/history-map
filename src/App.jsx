import {useState} from 'react';
import Map from './components/Map';
import Timeline from './components/Timeline';

function App() {

  const [year, setYear] = useState(100);

  return (
    <div className="h-screen flex flex-col m-4 p-4 border bg-black rounded-lg">
      <h1 className="text-white text-3xl font-bold text-center py-4">
        TimeMap India
      </h1>
      <div className="flex-1 flex flex-col">
        <Map year={year} />
        <Timeline year={year} setYear={setYear} />
      </div>
    </div>
  );
}

export default App;