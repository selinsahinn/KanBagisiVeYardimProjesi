import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import InfoPendonor from "./sections/InfoPendonor";
import AnalisisKadaluarsa from "./sections/AnalisisKadaluarsa";
import Dashboard from "./sections/Dashboard";
import StokDarah from "./sections/StokDarah";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <div>
        <Header />
        <BrowserRouter>
          <div className="flex">
            <div className="w-[25%]">
              <Sidebar />
            </div>
            <div className="w-[75%]">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/anasayfa" element={<Home />} />
                <Route path="/kontrolpaneli" element={<Dashboard />} />
                <Route path="/kanstogu" element={<StokDarah />} />
                <Route path="/bagiscibilgileri" element={<InfoPendonor />} />
                <Route
                  path="/sonkullanmatarihianalizi"
                  element={<AnalisisKadaluarsa />}
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
