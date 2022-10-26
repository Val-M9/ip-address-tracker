import { Input } from './input/Input';
import './header.css';

const Header = ({onIpChange}) => {

  return(
    <header className="header">
      <h1 className="heading">IP Address Tracker</h1>
      <Input onIpChange={onIpChange}/>
    </header>
  );
};

export { Header };
