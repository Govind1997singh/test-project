import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { fetchDataList } from './model';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailController from './controllers/ProductDetailController';
import DataListController from './controllers/DataListController';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataList(setData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataListController />} />
        <Route path="/detail/:id" element={<ProductDetailController id={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
