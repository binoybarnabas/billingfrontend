import Outputtable from "./components/Outputtable";
import ListInput from "./components/Listinput";
import BillDataContextProvider from "./context/Billdata";

function App() {
  return (
    <div className="billing">
      <BillDataContextProvider >
      <ListInput />
      <Outputtable />
      </BillDataContextProvider>
    </div>
  );
}

export default App;
