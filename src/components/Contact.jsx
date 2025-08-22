// src/components/Contact.jsx
import './Contact.css'; // นำเข้าไฟล์ CSS ที่เราจะสร้างในขั้นตอนต่อไป
import { FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';
function Contact() {
  // ดึงข้อมูลการติดต่อจาก PDF มาใส่ในตัวแปร
  const address = "60/3 ถนนลาดพร้าว 101 ซอย42แยก8 แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240";
  const phone = "0922579402"; 
  const email = "keerakiat.01@gmail.com"; 
  const facebook = "https://www.facebook.com/gunn.kanjanawas"; 

  return (
    <div className="contact-info">
      <h2>ข้อมูลติดต่อ</h2>
      
      <p><strong>ที่อยู่:</strong> {address}</p>
      <p><FaPhone /> {phone}</p>
      <p><FaEnvelope /> {email}</p>
      <p><FaFacebook /> <a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
    
     
    </div>
  );
}

export default Contact;