import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height = '100vh'
      projectID = "e621b25c-4cf1-4fe3-b4e4-9640bf37145b"
      userName = "Thanh"
      userSecret = "123456"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;