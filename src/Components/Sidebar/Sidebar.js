import React, { useState } from "react";


import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Sidebar.css";


export default function Sidebar() {
  const [active, setActive] = useState(null);

  
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
       
        <li    className={`list-item ${active == 'product' && "active"}`}

             onClick={() => setActive('product')}
     >
          <Link to="/products">
            <MdProductionQuantityLimits className="icon" />
            محصولات
          </Link>
        </li>

        
        <li   className={`list-item ${active == 'comment' && "active"}`}

             onClick={() => setActive('comment')}>
          <Link to="/comments">
            <BiCommentDetail className="icon" />
            کامنت ها
          </Link>
        </li>
        <li    className={`list-item ${active == 'user' && "active"}`}

             onClick={() => setActive('user')}>
          <Link to="/users">
            <FiUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li    className={`list-item ${active == 'order' && "active"}`}

             onClick={() => setActive('order')}>
          <Link to="/orders">
              <BsBagCheck className="icon" />
              سفارشات
          </Link>
        </li>
        <li    className={`list-item ${active =='off' && "active"}`}

             onClick={() => setActive('off')}>
          <Link to="/offs">
              <BsCurrencyDollar className="icon" />
              تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
