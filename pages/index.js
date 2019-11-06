import Layout from '../components/Layout'
import homeStyle from '../stylesheet/components/home.css'
import React, { useRef } from 'react';
import scrollIntoView from 'scroll-into-view';
import { polyfill } from 'scroll-behaviour'
import Header from "../components/Header";
import SectionOne from '../components/main/Section1';

polyfill()

export default () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollToSection = (sectionRef) => scrollIntoView(sectionRef.current, { time: 1000 })

  return (
    <Layout>
      <section ref={section1}><Header /></section>
      <main>
        <section ref={section2}><SectionOne /></section>
      </main>
      {/* <div>
        <button className={homeStyle.buttonSec} onClick={() => scrollToSection(section1)}>section 1</button>
        <button className={homeStyle.buttonSec} onClick={() => scrollToSection(section2)}>section 2</button>
      </div> */}
    </Layout>
  )
}