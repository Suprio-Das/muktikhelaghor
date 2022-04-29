// function updateTimer() {
//     future = Date.parse("jun 12, 2022 01:30:00");
//     now = new Date();
//     diff = future - now;
// 
//     days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     hours = Math.floor(diff / (1000 * 60 * 60));
//     mins = Math.floor(diff / (1000 * 60));
//     secs = Math.floor(diff / 1000);
// 
//     d = days;
//     h = hours - days * 24;
//     m = mins - hours * 60;
//     s = secs - mins * 60;
// 
//     document.getElementById("timer")
//         .innerHTML =
//         '<div>' + d + '<span>Days</span></div>' +
//         '<div>' + h + '<span>Hours</span></div>' +
//         '<div>' + m + '<span>Minutes</span></div>' +
//         '<div>' + s + '<span>Seconds</span></div>';
// }
// setInterval('updateTimer()', 1000);

document.getElementById('subscribe-btn').addEventListener('click',function(){
    // alert('এইটি এখন প্রক্রিয়াধীন নেই। এটির মান উন্নয়নের কাজ চলছে। সাময়িক অসুবিধার জন্য দুঃখিত');
    document.getElementById('subscribe-input').style.display = "none";
    document.getElementById('subscribe-input2').style.display = "none";
    document.getElementById('subscribe-btn').style.display = "none";
    document.getElementById('subscribe-warning').innerText = `সিস্টেমটি এখন প্রক্রিয়াধীন নেই। এটির মান উন্নয়নের কাজ চলছে। সাময়িক অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত। আমরা এইটির সমাধানে দ্রুত কাজ করছি। 
    Working on updates: @webdevforce`
});
// document.getElementById('message-btn').addEventListener('click',function(){
//     // alert('এইটি এখন প্রক্রিয়াধীন নেই। এটির মান উন্নয়নের কাজ চলছে। সাময়িক অসুবিধার জন্য দুঃখিত');
//     document.getElementById('send-message-section').style.display = "none";
//     // document.getElementById('subscribe-input2').style.display = "none";
//     // document.getElementById('subscribe-btn').style.display = "none";
//     document.getElementById('subscribe-warning').innerText = `সিস্টেমটি এখন প্রক্রিয়াধীন নেই। এটির মান উন্নয়নের কাজ চলছে। সাময়িক অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত। আমরা এইটির সমাধানে দ্রুত কাজ করছি। 
//     Working on updates: @webdevforce`
// });

// // read more js
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
//     var btn = document.getElementById('myBtn');
//     btn.style.padding = 10;
//   
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "আরো পড়ুন"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "ফিরে যান"; 
//       moreText.style.display = "inline";
//     }
//   }
// function mySecondFunction() {
//     var SecondDots = document.getElementById("dots2");
//     var SecondMoreText = document.getElementById("more2");
//     var SecondBtnText = document.getElementById("mySecondBtn");
//     var SecondBtn = document.getElementById('mySecondBtn');
//     SecondBtn.style.padding = 10;
//   
//     if (SecondDots.style.display === "none") {
//       SecondDots.style.display = "inline";
//       SecondBtnText.innerHTML = "আরো পড়ুন"; 
//       SecondMoreText.style.display = "none";
//     } else {
//       SecondDots.style.display = "none";
//       SecondBtnText.innerHTML = "ফিরে যান"; 
//       SecondMoreText.style.display = "inline";
//     }
//   }

  // contact information 
//   function sendEmail(){
//         Email.send({
//           Host : "smtp.gmail.com",
//           Username : "priyamd507@gmail.com",
//           Password : "supriodas0123",
//           To : 'muktikhelaghor@gmail.com',
//           From : document.getElementById('email').value,
//           Subject : "আমাদের সাথে যোগাযোগ",
//           Body : "And this is the body"
//       }).then(
//         message => alert(message)
//       );
// }
