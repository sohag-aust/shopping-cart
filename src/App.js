import { Provider } from 'react-redux';
import './App.css';
import Shopping from './components/Shopping';
import reduxStore from './redux/store/reduxStore';

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <Shopping />
      </div>
    </Provider>
  );
}

export default App;
