import React from "react";
// import { render } from 'react-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";
// import { UserProvider } from "./contexts/user.context";
// import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        <CartProvider>
          <App />
        </CartProvider>
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
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
