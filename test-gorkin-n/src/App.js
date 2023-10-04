//import logo from './logo.svg';
import './App.css';
import { channelsMap } from './components/common/TVOptionsData';
import { ChannelsForm } from './components/channelsForm/channelsForm';

function App() {
  
  return (
    <div>
      <ChannelsForm channelsMap={channelsMap}></ChannelsForm>
    </div>
  );
}

export default App;
