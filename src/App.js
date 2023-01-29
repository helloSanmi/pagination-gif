import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CryptoList from './CryptoList';
import Pagination from './Pagination';

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoinsData(response.data);
    }
    loadData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='app'>
      <h1>Crypto Gallery</h1>
      <CryptoList 
            coinsData={currentPost} 
      />
      <Pagination 
            totalPosts={coinsData.length} 
            postPerPage={postPerPage} 
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
      />
    </div>
  )
}

export default App;
