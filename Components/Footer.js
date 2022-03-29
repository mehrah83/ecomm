import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="footer">
        <h1 className="text-center">Mehra Shop</h1>
        <h5>Copyright © 2022 Mehra Shop, Inc. All rights reserved.</h5>
        <div className="text-center">
        <Link to="">Legal Stuff</Link>
        <Link to="" className="mx-3">Privacy Policy</Link>
        </div>
    </div>
    </>
  )
}

export default Footer