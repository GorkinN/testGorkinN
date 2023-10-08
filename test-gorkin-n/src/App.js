//import logo from './logo.svg';
import './App.css';
import { channelsMap } from './components/common/TVOptionsData';
import { ChannelsForm } from './components/channelsForm/channelsForm';
import { TVoptionsSection } from './components/TVoptionsSection/TVoptionsSection';

function App() {
  
  return (
    <main className='wrapper'>
      <TVoptionsSection></TVoptionsSection>
      <ChannelsForm channelsMap={channelsMap}/>
    </main>
  );
}

export default App;
