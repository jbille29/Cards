import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing"
import ProductDetail from "./pages/ProductDetail"
import Sign from "./pages/Sign"
import Address from "./pages/Address"
import Send from "./pages/Send"
import Cart from "./pages/Cart"
import Success from "./pages/Success"

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Cards" element={<Landing />} />
          <Route path="/Cards/details/:productId" element={<ProductDetail />} />
          <Route path="Cards/cart" element={<Cart />} />
          <Route path="sign/:productId/:cartId" element={<Sign />} />
          <Route path="address" element={<Address />} />
          <Route path="send" element={<Send />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
