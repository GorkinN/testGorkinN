import logo from './logo.svg';
import './App.css';
import TVoptionsArr from './24h.json';

function App() {
  function getChannelsList(TVoptionsArr) {
    const tvChannelsMap = new Map();
    TVoptionsArr.forEach(item => {
      for (let channel of item.channels) {
        if (!tvChannelsMap.has(channel.id)) {tvChannelsMap.set(channel.id, channel)}
      }            
    });

    return tvChannelsMap;
  }
  function formChannelsListUL(channelsMap) {
    let channelsNamesArr = [];
    for (let channel of channelsMap.values()) {
      channelsNamesArr.push(channel.name);
    }
    return (
      <ul>
        {channelsNamesArr.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
  const channelsListMap =getChannelsList(TVoptionsArr);

  
  return (
    <div>
      {formChannelsListUL(channelsListMap)}
    </div>
  );
}

export default App;
