import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Citizens from "./scenes/citizens";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import CitizenProfile from "./scenes/citizenProfile";
import AdminForm from "./scenes/adminform";
import BusinessForm from "./scenes/businessform";
import Prottoyon from "./scenes/prottoyon";
import Businesses from "./scenes/busensses";
import TradeLicenses from "./scenes/tradelicenses";
import CitizenTax from "./scenes/citizentax";
import BusinessTax from "./scenes/businesstax";
import DueTax from "./scenes/duetax";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/citizens" element={<Citizens />} />
              <Route path="/citizens/:nid" element={<CitizenProfile />} >

                {/* <Route path="ncertificate" element={<NationalityCertificate />} />
                  <Route path="oarish" element={<OarishSanad />} />
                  <Route path="taxreceipt" element={<Taxreceipt />} />
                  <Route path="charitrtiksanad" element={<CharitrikSanad />} />
                  <Route path="tradelicense" element={<TradeLicense />} />
                  <Route path="licenselist"  >
                    <Route index element={<TradeLicenseList />} />
                    <Route path=":lincesKey" element={<LicenseSingle />} /> */}
              </Route>

              <Route path="/prottoyon" element={<Prottoyon />} />
              <Route path="/businesses" element={<Businesses />} />
              <Route path="/tradelicenses" element={<TradeLicenses />} />
              <Route path="/citizenstax" element={<CitizenTax />} />
              <Route path="/businesstax" element={<BusinessTax />} />
              <Route path="/duetax" element={<DueTax />} />



              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/adminform" element={<AdminForm />} />
              <Route path="/businessform" element={<BusinessForm />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
