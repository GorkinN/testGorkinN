//import logo from './logo.svg';
import { useState, useEffect } from 'react'; 
import './App.css';
import { channelsMap } from './components/common/TVOptionsData';
import { ChannelsForm } from './components/channelsForm/channelsForm';
import { TVoptionsSection } from './components/TVoptionsSection/TVoptionsSection';
import { showVisible } from './components/common/showVisible';


function App() {
   const [selectedChannelsList, setSelectedChannelList] = useState([]);

   useEffect(()=>{ 
    showVisible();
    window.addEventListener('scroll', showVisible) 
  })
  
  return (
    <main className='wrapper'>
      <TVoptionsSection selectedChannels={selectedChannelsList}/>
      <ChannelsForm channelsMap={channelsMap} setSelectedChannelList={setSelectedChannelList}/>
    </main>
  );
}

export default App;
