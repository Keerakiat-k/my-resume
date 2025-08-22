// src/components/Education.jsx
import './Education.css'; // นำเข้าไฟล์ CSS

function Education() {
  // จัดเก็บข้อมูลประวัติการศึกษาในรูปแบบ Array of Objects
  const educationHistory = [
    {
      school: "มหาวิทยาลัยราชภัฏสวนสุนันทา",
      year: "ปีที่จบการศึกษา: 2561",
      degree: "วุฒิการศึกษา: ปริญญาตรี",
      faculty: "คณะวิชา: วิทยาศาสตรและเทคโนโลยี",
      major: "สาขา: เทคโนโลยีสารสนเทค",
      gpa: "เกรด: 2.80",
    },
    {
      school: "โรงเรียนมัธยมวัดบึงทองหลาง",
      year: "ปีที่จบการศึกษา: 2557",
      degree: "วุฒิการศึกษา: ม.6",
      faculty: "",
      major: "สาขา: ศิลปคอมพิวเตอร์",
      gpa: "เกรด: 2.79",
    }
  ];
  return (
    <div className="education-section">
      <h2>ประวัติการศึกษา</h2>
      {educationHistory.map((edu, index) => (
        <div className="education-entry" key={index}>
          <h3>{edu.school}</h3>
          <p className="education-degree">{edu.degree} ({edu.year})</p>
          {/* ตรวจสอบว่ามีข้อมูลคณะหรือไม่ ถ้ามีถึงจะแสดงผล */}
          {edu.faculty && <p>{edu.faculty}</p>}
          <p>{edu.major}</p>
          <p>{edu.gpa}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;