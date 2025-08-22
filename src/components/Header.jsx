// src/components/Header.jsx
import './Header.css'; // นำเข้าไฟล์ CSS (เราจะแก้ไขไฟล์นี้ต่อไป)
import profileImage from '../assets/58122202007.jpg'; // 1. นำเข้ารูปภาพมาที่นี่

function Header() {
  // ข้อมูลตัวอักษรยังอยู่เหมือนเดิม
  const fullName = "กีรเกียรติ กาญจนวาส";
  const jobTitle = "IT Support";
  const location = "กรุงเทพมหานคร (เขตบางกะปิ)";

  return (
    // 2. สร้าง div หลักขึ้นมาครอบทั้งหมด
    <div className="header-container">
      {/* 3. สร้างกล่องสำหรับข้อมูลตัวอักษร */}
      <div className="header-text">
        <h1>{fullName}</h1>
        <p>{jobTitle}</p>
        <p>พื้นที่ที่ต้องการทำงาน: {location}</p>
      </div>
      {/* 4. สร้างกล่องสำหรับรูปภาพ */}
      <div className="header-image">
        <img src={profileImage} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
}

export default Header;