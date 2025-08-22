// src/components/Skills.jsx
import './Skills.css'; // นำเข้าไฟล์ CSS

function Skills() {
  // 1. เปลี่ยนโครงสร้างข้อมูล hardSkills ให้มี level เป็นตัวเลข
  const hardSkills = [
    { name: "ติดตั้งระบบปฏิบัติการ Windows และแก้ไขปัญหาได้", level: 90 }, // มีประสบการณ์
    { name: "ทักษะด้านภาษาเขียนโปรแกรม: CSS, PHP, HTML", level: 95 },   // ชำนาญ
  ];

  const languageSkills = [
    { lang: "ไทย", level: "ดี" },
    { lang: "อังกฤษ", level: "พอใช้" },
  ];

  const typingSkills = [
    { lang: "ไทย", speed: "15 คำ/นาที" },
    { lang: "อังกฤษ", speed: "17 คำ/นาที" },
  ];

  return (
    <div className="skills-section">
      <h2>ทักษะและความสามารถ</h2>

      {/* 2. เปลี่ยน JSX ส่วน Hard Skills ให้เป็น Skill Bar */}
      <div className="skill-category">
        <h3>ทักษะความรู้ตามสาขาอาชีพ</h3>
        {hardSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <p>{skill.name}</p>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* ส่วนทักษะทางภาษา (คงเดิม) */}
      <div className="skill-category">
        <h3>ทักษะทางภาษา</h3>
        {languageSkills.map((skill, index) => (
          <p key={index}><strong>{skill.lang}:</strong> การพูด การฟัง การอ่าน การเขียน (ระดับ{skill.level})</p>
        ))}
      </div>

      {/* ส่วนทักษะการพิมพ์ดีด (คงเดิม) */}
      <div className="skill-category">
        <h3>ทักษะการพิมพ์ดีด</h3>
        {typingSkills.map((skill, index) => (
          <p key={index}><strong>{skill.lang}:</strong> {skill.speed}</p>
        ))}
      </div>
    </div>
  );
}

export default Skills;