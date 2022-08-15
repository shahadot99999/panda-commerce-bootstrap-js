//console.log("hello from js");



// option-3: getElementsByClassName
//২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const changes = document.getElementsByClassName('changes-h2tag');
for (const change of changes) {
    change.style.color = 'blueviolet';
}

//৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

const backpack = document.getElementById('backpack').style.backgroundColor = 'tomato';

//৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা

const cards = document.getElementsByClassName('cards');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

//৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো


function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    const btn2 = document.createElement("button");
    btn2.innerText = "Welcome School kids";
    document.body.appendChild(btn2);
    console.log(handlerStatus);
}

//৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
document.getElementById('btn-delete').addEventListener('click', function () {

    const deleteButton = document.getElementById('btn-delete');
    console.log(deleteButton.remove())
})

//৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

// document.getElementById('email-submit').addEventListener('keyup', function (event) {
//     const text = event.target.value;  //text show
//     const deleteButton = document.getElementById('email-submit');
//     //focus delet button
//     if (text === '') {    //   when delete text write remove disable delete button.
//         deleteButton.removeAttribute('disabled');
//     }
//     else {
//         deleteButton.setAttribute('disabled', true);      //when you can write different word delete button show.
//     }
// })







