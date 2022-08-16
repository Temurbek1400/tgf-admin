import { Routes, Route } from "react-router-dom";
import { Map, Link, TechSupport } from "./components";
import SettingsProvider from "./context/SettingsProvider";
const index = () => {
  return (
    <SettingsProvider>
      <Routes>
        <Route path="map" element={<Map />} />
        <Route path="tech-support" element={<TechSupport />} />
        <Route path="link" element={<Link />} />
      </Routes>
    </SettingsProvider>
  );
};

export default index;
