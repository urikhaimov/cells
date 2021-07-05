import React, { useState, useEffect } from "react";
import axios from 'axios';
import TableScrollbar from 'react-table-scrollbar';
import moment from 'moment';
function DataTable({val}) {
  
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=XVJGV8TJDWCQ3NZ78US24TKT3GXPUPA5CP')
        .then(response => setTransactions(response.data.result));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

const getTableContent = (arr) => {
  const iterateItem = (item) => {
     let timeStamp;
     return item.map(function (nextItem, i) {
      timeStamp  = moment(new Date(nextItem.timeStamp)).format('LLLL');
       return (
          <tr key={`${nextItem.timeStamp}_${i}`}>
             <td>{timeStamp}</td>
             <td>{ nextItem.from}</td>
             <td>{nextItem.to}</td>
             <td>{nextItem.value}</td>
             <td></td>
             <td>{nextItem.hash}</td>
          </tr>
       );
     })
  }
 
      return (
        <table>
              <thead>
              <tr>
                <th>Timestamp</th>
                <th>From</th>
                <th>To</th>
                <th>Value of transations</th>
                <th>Confirmations</th>
                <th>Hash</th>
              </tr>
              </thead>
              <tbody>
                  {iterateItem(arr)}
              </tbody>
        </table>
      );
 
};
  return<div style={{height: "30vh"}}><TableScrollbar>
       {getTableContent(transactions)}
    </TableScrollbar></div>;
}

export default DataTable;
