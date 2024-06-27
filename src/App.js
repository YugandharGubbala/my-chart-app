import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import './styles/Chart.css';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div>
      <header>
        <h1>My Chart App</h1>
      </header>
      <main>
        <TimeframeSelector onSelect={setTimeframe} />
        <Chart timeframe={timeframe} />
      </main>
      <footer>
        <p>© 2024 My Chart App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
