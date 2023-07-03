import React, { useState,useEffect } from 'react'
import ErrorBox from '../Errorbox/Errorbox'

export default function Orders() {

  const[ orders,setorders]= useState([])

  
  useEffect(() => {
    getAllorders();
  }, []);

  function getAllorders() {
    fetch("http://localhost:8000/api/orders")
      .then((res) => res.json())
      .then((orders) => setorders(orders));
  }


  console.log(orders)
 
  return (
    <>

    {orders.length ?(<table className="cms-table">
    <thead>
      <tr>
        <th>اسم کاربر</th>
        <th>محصول</th>
        <th>تعداد</th>
        <th>تاریخ</th>
        <th>ساعت</th>
        <th>قیمت</th>
      </tr>
    </thead>

    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>
          <td>{order.userID}</td>
          <td>{order.productID}</td>
          <td>
               {order.count}
          </td>
          <td>{order.date}</td>
          <td>{order.hour}</td>
          <td>{order.price}</td>
          <td>
            <button>
             
              حذف
            </button>
            <button
              
             
            >
              ویرایش
            </button>
          

         
         
          </td>
        </tr>
      ))}
    </tbody>
  </table>):(<ErrorBox msg="هیچ سفارشی یافت نشد" />)}
  </>
    
  )
}
