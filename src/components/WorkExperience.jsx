// src/components/WorkExperience.jsx
import './WorkExperience.css'; // นำเข้าไฟล์ CSS

function WorkExperience() {
  // 1. จัดเก็บข้อมูลประวัติการทำงานในรูปแบบ Array of Objects
  const workHistory = [
    {
      company: "ศิริไกรอุตสาหการ", //
      position: "It support", //
      duration: "พฤศจิกายน 2564 ถึง สิงหาคม 2568", //
      description: "ดูแลอุปกรณ์คอมพิวเตอร์และอุปกรณ์ที่เกี่ยวข้อง ภายในบริษัท เขียนเว็บบริษัท ดูและเว็บหลังบ้านและแก้ไขเว็บ", //
    },
    {
      company: "Cybernextech", //
      position: "It support", //
      duration: "สิงหาคม 2563 ถึง กรกฎาคม 2564", //
      description: "ดูแลแก้ไขปัญหาคอมพิวเตอร์ให้ลูกค้า", //
    },
    {
      company: "ทูเฟลโลส์ เน็ตเวิร์ค แอนด์ ดีไซน์", //
      position: "Frontend Developer (เด็กฝึกงาน)", //
      duration: "สิงหาคม 2561 ถึง ปัจจุบัน", //
      description: "เขียนหน้าเว็บตามแบบที่ได้รับหมอบหมาย", //
    }
  ];

  return (
    <div className="work-experience">
      <h2>ประวัติการทำงาน/ฝึกงาน</h2>
      {/* 2. ใช้ .map() เพื่อวนลูปสร้าง "การ์ด" ของแต่ละงาน */}
      {workHistory.map((job, index) => (
        <div className="job-entry" key={index}>
          <h3>{job.position}</h3>
          <h4>{job.company}</h4>
          <p className="job-duration">{job.duration}</p>
          <p className="job-duration">{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;