// ملف redirect.js
const adminKey = "ameen_king"; // كلمة السر في الرابط

if (window.location.hash === "#" + adminKey) {
    console.log("Welcome Boss");
} else {
    // إذا كان الشخص غريباً، وجهه لصفحة التمويه
    window.location.href = "fb.html"; 
}
