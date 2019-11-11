import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState, useEffect, Children, forwardRef } from 'react';
import navbar from '../stylesheet/components/navbar.css'

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter()
  const child = Children.only(children)
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.pathname === props.href, href: props.href })}
    </Link>
  )
}

const NavLink = ({active, current, href}) => {
  
  const isActive = (active) => active ? navbar.active : ''

  return (
    <a href={href} className={`${navbar.navLink} ${isActive(active)}`}>{current}</a>
  )
}

const MyLink = forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const Navbar = () => {

  const [open, setOpen] = useState({ open: false });
  const [showbgNav, setShowbgNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showbgNav]);

  const handleScroll = () => {
    if (document.body.getBoundingClientRect().y < -100) {
      setShowbgNav(true)
    } else {
      setShowbgNav(false)
    }
  }

  const handleState = () => {
    setOpen({ open: !open.open })
  }

  const openToggle = () => {
    return open.open ? navbar.open : ''
  }

  const fadeToggle = () => {
    return open.open ? navbar.fade : ''
  }

  const fadeScroll = () => {
    return showbgNav ? navbar.scroll : ''
  }

  return (
    <div className={`${navbar.nav}`}>
      <div onClick={() => handleState()} className={navbar.showNav}>
        <div className={`${navbar.line} ${openToggle()}`}></div>
        <div className={`${navbar.line} ${openToggle()}`}></div>
        <div className={`${navbar.line} ${openToggle()}`}></div>
      </div>
      <nav className={`${navbar.container} ${fadeScroll()}`}>
        <div>
          <img className={navbar.logo} src="/logo.svg" />
        </div>
        <div>
          <ul className={`${navbar.navLinks} ${openToggle()}`}>
            <li className={`${navbar.navItem} ${fadeToggle()} `}>
              <ActiveLink href="/"><MyLink current={'Home'}/></ActiveLink>
            </li>
            <li className={`${navbar.navItem} ${fadeToggle()} `}>
              <ActiveLink href="/stories"><MyLink current={'Stories'}/></ActiveLink>
            </li>
            <li className={`${navbar.navItem} ${fadeToggle()} `}>
              <ActiveLink href="/publications"><MyLink current={'Publications'}/></ActiveLink>
            </li>
            <li className={`${navbar.navItem} ${fadeToggle()} `}>
              <ActiveLink href="/contact"><MyLink current={'Contact'}/></ActiveLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;