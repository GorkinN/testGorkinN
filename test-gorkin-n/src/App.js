//import logo from './logo.svg';
import { useState } from 'react'; 
import './App.css';
import { channelsMap } from './components/common/TVOptionsData';
import { ChannelsForm } from './components/channelsForm/channelsForm';
import { TVoptionsSection } from './components/TVoptionsSection/TVoptionsSection';


function App() {
   const [selectedChannelsList, setSelectedChannelList] = useState([]);
  
  return (
    <main className='wrapper'>
      <TVoptionsSection selectedChannels={selectedChannelsList}/>
      <ChannelsForm channelsMap={channelsMap} setSelectedChannelList={setSelectedChannelList}/>
    </main>
  );
}

export default App;
