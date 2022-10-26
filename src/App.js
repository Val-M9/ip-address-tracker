import { useCallback, useEffect } from 'react';
import { InfoCard } from './components/info-card/InfoCard';
import { Header } from './components/header/Header';
import Map from './components/map/Map';
import './reset.css';
import './App.css';
import { useState } from 'react';
import { apiCall } from './services/api-call';

const App = () => {
  const [ip, setIp] = useState();
  const [info, setInfo] = useState();

  const handleChangeIp = useCallback((value) => {
    setIp(value);
  }, []);
  
  useEffect(() => {
    (async() => {
      const result =  await apiCall.getIpAddress(ip);
      setInfo(result.data)
    })();
  }, [ip]);

  console.log("info", info);
  
  if(!info) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header onIpChange={handleChangeIp}/>
      <InfoCard
        ip={info.ip}
        city={info.location.city}
        country={info.location.country}
        region={info.location.region}
        postalCode={info.location.postalCode}
        timezone={info.location.timezone}
        isp={info.isp}
      />
      <Map lat={info.location.lat} lng={info.location.lng}/>
    </div>
  );
}

export default App;
