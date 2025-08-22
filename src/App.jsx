import { useState } from 'react'
import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import './App.css'; // เราจะใช้ไฟล์นี้ตกแต่งหน้าเว็บโดยรวม

function App() {
  return (
   <div className="main-container">
     
      <aside className="sidebar">
        <Contact />
        <Skills />
      </aside>


      <main className="main-content">
        <Header />
        <WorkExperience />
        <Education />
      </main>
    </div>
  )
}

export default App
