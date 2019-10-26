import Link from 'next/link';
import React, { useState } from 'react';
import navbar from '../stylesheet/components/navbar.css'

const Navbar = () => {

  const [open, setOpen] = useState({ open: false });

  const handleState = () => {
    setOpen({ open: !open.open })
  }

  const openToggle = () => {
    return open.open ? navbar.open : ''
  }

  const fadeToggle = () => {
    return open.open ? navbar.fade : ''
  }

  return (
    <div className={`${navbar.nav}`}>
      <div onClick={() => handleState()} className={navbar.showNav}>
        <div className={`${navbar.line} ${openToggle()}`}></div>
        <div className={`${navbar.line} ${openToggle()}`}></div>
        <div className={`${navbar.line} ${openToggle()}`}></div>
      </div>
      <nav className={`${navbar.container}`}>
        <div>
          <img className={navbar.logo} src="/logo.svg" />
        </div>
        <div>
          <ul className={`${navbar.navLinks} ${openToggle()}`}>
            <li className={`${navbar.navItem} ${fadeToggle()}`}>
              <Link href="/"><a className={navbar.navLink}>Home</a></Link>
            </li>
            <li className={`${navbar.navItem} ${fadeToggle()}`}>
              <Link href="/stories"><a className={navbar.navLink}>Stories</a></Link>
            </li>
            <li className={`${navbar.navItem} ${fadeToggle()}`}>
              <Link href="/publications"><a className={navbar.navLink}>Publications</a></Link>
            </li>
            <li className={`${navbar.navItem} ${fadeToggle()}`}>
              <Link href="/contact"><a className={navbar.navLink}>Contact</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;