// src/components/Profile.jsx
import './Profile.css'; // นำเข้าไฟล์ CSS สำหรับตกแต่งรูปภาพ
import profileImage from '../assets/58122202007.jpg'; // 1. นำเข้ารูปภาพจากโฟลเดอร์ assets

function Profile() {
  return (
    <div className="profile-container">
      {/* 2. แสดงผลรูปภาพด้วยแท็ก <img> */}
      <img src={profileImage} alt="Profile Picture" className="profile-picture" />
    </div>
  );
}

export default Profile;