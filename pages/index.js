import Layout from '../components/Layout'
import React, { useRef, useEffect, useState } from 'react';
import scrollIntoView from 'scroll-into-view';
import { polyfill } from 'scroll-behaviour'
import Header from "../components/Header";
import SectionOne from '../components/main/Section1';
import SectionTwo from '../components/main/Section2';
import section2Style from "../stylesheet/layouts/main/section2.css";
import homeStyle from "../stylesheet/components/home.css";

polyfill()

export default () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const [show, setShow] = useState(false)

  const scrollToSection = (sectionRef) => scrollIntoView(sectionRef.current, { time: 1000 })
  const isBrowser = typeof window !== `undefined`
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  function handleScroll() {
    if (document.body.getBoundingClientRect().y < -100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <Layout>
      <section ref={section1}><Header /></section>
      <main>
        <section ref={section2}><SectionOne /></section>
        <section className={section2Style.sec2} ref={section3}><SectionTwo /></section>
      </main>
      <div className={homeStyle.scrollToButtons}>
        <div className={homeStyle.buttonSec} onClick={() => scrollToSection(section1)} data="section1"></div>
        <div className={homeStyle.buttonSec} onClick={() => scrollToSection(section2)} data="section2"></div>
        <div className={homeStyle.buttonSec} onClick={() => scrollToSection(section3)} data="section3"></div>
        <div className={homeStyle.buttonSec} onClick={() => scrollToSection(section4)} data="section4"></div>
      </div>
    </Layout>
  )
}