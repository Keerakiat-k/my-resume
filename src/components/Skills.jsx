// src/components/Skills.jsx
import './Skills.css'; // นำเข้าไฟล์ CSS

function Skills() {
  // จัดเก็บข้อมูลทักษะในรูปแบบต่างๆ
  const hardSkills = [
    "ติดตั้งระบบปฏิบัติการ Windows และแก้ไขปัญหาได้ / ระดับมีประสบการณ์", //
    "ทักษะด้านภาษาเขียนโปรแกรม: CSS, PHP, HTML / ระดับชำนาญ", //
  ];

  const languageSkills = [
    { lang: "ไทย", level: "ดี" }, //
    { lang: "อังกฤษ", level: "พอใช้" }, //
  ];

  const typingSkills = [
    { lang: "ไทย", speed: "15 คำ/นาที" }, //
    { lang: "อังกฤษ", speed: "17 คำ/นาที" }, //
  ];

  return (
    <div className="skills-section">
      <h2>ทักษะและความสามารถ</h2>

      {/* ส่วน Hard Skills */}
      <div className="skill-category">
        <h3>ทักษะความรู้ตามสาขาอาชีพ</h3>
        <ul>
          {hardSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* ส่วนทักษะทางภาษา */}
      <div className="skill-category">
        <h3>ทักษะทางภาษา</h3>
        {languageSkills.map((skill, index) => (
          <p key={index}><strong>{skill.lang}:</strong> การพูด การฟัง การอ่าน การเขียน (ระดับ{skill.level})</p>
        ))}
      </div>

      {/* ส่วนทักษะการพิมพ์ดีด */}
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