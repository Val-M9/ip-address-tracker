import { useCallback, useEffect, useState } from 'react';
import { apiCall } from './services/api-call';
import { InfoCard, Header, Map, Loader } from './components/components';
import './reset.css';
import './App.css';

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
  
  if(!info) {
    return <Loader />
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
