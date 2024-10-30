import React, { useState, Suspense } from 'react';
import FilterList from './Components/FilterList';
import EmailForm from './Components/EmailForm'

const Heavy = React.lazy(() => import('./Components/Heavy'));

function App() {
  const [loadHeavy, setLoadHeavy] = useState(false);

  const handleClick = () => {
    setLoadHeavy(true);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>Heavy Component</button>
      <Suspense fallback={<div>...</div>}>
        {loadHeavy && <Heavy />}
      </Suspense>
      <FilterList />

      <h2>Email</h2>
      <EmailForm />
    </div>
  );
}

export default App;
