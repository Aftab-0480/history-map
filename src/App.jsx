import { useState } from 'react';
import Map from './components/Map';
import Timeline from './components/Timeline';

function App() {
  const [year, setYear] = useState(100);

  return (
    <div className="bg-gray-900 h-screen flex flex-col m-2 md:m-4 p-4 md:p-6 glass-card card-shadow overflow-hidden">
      
      <div className="text-center mb-6 flex-shrink-0">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
          TimeMap India
        </h1>
        <p className="text-slate-500 text-sm mt-2">Explore India's historical timeline through geography</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <Map year={year} />
        <Timeline year={year} setYear={setYear} />
      </div>

    </div>
  );
}

export default App;