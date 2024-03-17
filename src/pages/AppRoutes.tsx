import { Route, Routes } from "react-router-dom";
import Customers from "./CustomerPage";
import Dashboard from "./DashboardPage";
import Inventory from "./InventoryPage";
import Orders from "./OrdersPage";
import Dummy from './DummyPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/inventory" element={<Inventory />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/customers" element={<Customers />}/>
      <Route path="/dummy" element={<Dummy />}/>
    </Routes>
  );
}
export default AppRoutes;