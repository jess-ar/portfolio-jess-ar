import { useState } from 'react';
import Home from '@/components/pages/Home';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlockAbout = () => {
    setIsUnlocked(true);
  };

  return (
    <>
      <Home isUnlocked={isUnlocked} onUnlockAbout={handleUnlockAbout} />
    </>
  );
}

export default App;
