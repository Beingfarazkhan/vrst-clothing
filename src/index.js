import React from "react";
import { PersistGate } from "redux-persist/integration/react";
// import { render } from 'react-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";

import App from "./App";
// import { UserProvider } from "./contexts/user.context";
// import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// const rootElement = document.getElementById('root');

// render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <UserProvider>
//         <CategoriesProvider>
//           <CartProvider>
//             <App />
//           </CartProvider>
//         </CategoriesProvider>
//       </UserProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   rootElement
// );
