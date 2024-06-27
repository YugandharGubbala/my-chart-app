const fetchData = async (timeframe) => {
  const response = await fetch('/data.json');
  const data = await response.json();

  let filteredData;

  const now = new Date();
  const daily = 1;
  const weekly = 7;
  const monthly = 30;

  switch (timeframe) {
    case 'daily':
      filteredData = data.filter(d => (new Date(d.timestamp) >= new Date(now.setDate(now.getDate() - daily))));
      break;
    case 'weekly':
      filteredData = data.filter(d => (new Date(d.timestamp) >= new Date(now.setDate(now.getDate() - weekly))));
      break;
    case 'monthly':
      filteredData = data.filter(d => (new Date(d.timestamp) >= new Date(now.setDate(now.getDate() - monthly))));
      break;
    default:
      filteredData = data;
  }

  return filteredData;
};

export default fetchData;
