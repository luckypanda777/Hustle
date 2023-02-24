import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import "./App.css";
import Header from "./components/Header/Header";
import Corner from "./components/Hustle/Corner";
import Home from "./pages/Home";
import Consignment from "./pages/Hustle/Consignment";
import SafeHouse from "./pages/SafeHouse";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import LeaderBoard from "./pages/LeaderBoard";
import Mission from "./pages/Mission";
import Laundering from "./components/Laundering/laundering";
import PackShop from "./components/Store/packshop";
import BoostShop from "./components/Store/boostshop";
import Transfers from "./components/Transfers/transfers";
import Traphouse from "./components/Hustle/Traphouse";
import Clandestine from "./components/Hustle/Clandestine";
import Stash from "./components/Stash";

const App = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Header />
          <ScrollUpButton />
          <div className="md:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/safe-house" element={<SafeHouse />} />
              <Route path="/consignment" element={<Consignment />} />
              <Route path="/the-corner" element={<Corner />} />
              <Route path="/the-traphouse" element={<Traphouse />} />
              <Route path="/clandestine-lab" element={<Clandestine />} />
              <Route path="/laundering" element={<Laundering />} />
              <Route path="/pack-shop" element={<PackShop />} />
              <Route path="/booster-shop" element={<BoostShop />} />
              <Route path="/transfers" element={<Transfers />} />
              <Route path="/stash" element={<Stash />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/mission" element={<Mission />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
