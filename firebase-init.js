// ⚙️ تهيئة Firebase باستخدام بيانات مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyBX5LXkbhBiXueA9qP750BI19PS1I6yFNA",
  authDomain: "safeum-mod.firebaseapp.com",
  databaseURL: "https://safeum-mod-default-rtdb.firebaseio.com",
  projectId: "safeum-mod",
  storageBucket: "safeum-mod.appspot.com",
  messagingSenderId: "262766062439",
  appId: "1:262766062439:web:108471f6b8e74f47515dc2"
};
// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
// الوصول إلى قاعدة البيانات Realtime وStorage
const database = firebase.database();
const storage = firebase.storage();
// تصدير للوحدات الأخرى إذا لزم الأمر
window.firebase = firebase;
window.database = database;
window.storage = storage;