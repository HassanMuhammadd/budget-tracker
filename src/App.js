import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import Form from "./components/form/Form";
import {Toaster} from "react-hot-toast";
import Summary from "./components/summary/Summary";
import ItemsProvider from "./contexts/ItemsContext";
import AppLayout from "./components/layout/AppLayout";
import NotFound from "./components/layout/NotFound";
import Charts from "./components/charts/Charts";

function App() {

  return (
    <ItemsProvider>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout/>}>
            <Route index element={<Navigate replace to="summary"/>}/>
            <Route path='form' element={<Form/>}/>
            <Route path='summary' element={<Summary/>}/>
            <Route path='charts' element={<Charts/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
          toastOptions={{duration: 3000}}
          position='bottom-right'
          gutter={12}
          containerStyle={{margin: '10px'}}
        />

      </div>
  </ItemsProvider>
  );
}

export default App;
