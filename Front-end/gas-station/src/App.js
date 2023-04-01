import { GlobalState } from './GlobalState/globalState';
import { Router } from './routers/Router';

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}
export default App;