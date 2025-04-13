import { StrictMode } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router';
import * as ReactDOM from 'react-dom/client';
import App from '@front-end/src/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<div>this is the about page</div>} />
        <Route path="/contact" element={<div>this is the contact page</div>} />
        <Route path="/products" element={<div>this is the products page</div>} />
        <Route path="/products/:id" element={<div>this is the product page</div>} />
        <Route path="/products/:id/reviews" element={<div>this is the product reviews page</div>} />
     </Routes>
    </BrowserRouter>
  </StrictMode>
);
