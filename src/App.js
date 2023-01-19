import React from 'react';
import Arrived from './components/Arrived';
import Aside from './components/Aside';
import Browse from './components/Browse';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Offline from './components/Offline';
import './tailwind.css';

function App() {
  const [items, setItems] = React.useState([]);

  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }

  React.useEffect(function () {
    (async function () {
      const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "x-api-key": process.env.REACT_APP_APIKEY
        }
      });
      const { nodes } = await response.json();
      setItems(nodes);

      const script = document.createElement("script");
      script.src = "./js/carousel.js";
      script.async = false;
      document.body.appendChild(script);
    })();

    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return function () {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    }
  }, [
    offlineStatus
  ]);


  return (
    <>
      {offlineStatus && <Offline />}
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
