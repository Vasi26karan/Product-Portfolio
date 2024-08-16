import { ActiveButtonProvider } from "./contexts/ActiveButtonContext";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <div>
      <ActiveButtonProvider>
        <Routing />
      </ActiveButtonProvider>
    </div>
  );
};

export default App;
