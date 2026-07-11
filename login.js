
window.login = async function () {

  let username =
    document.getElementById("username")
    .value
    .trim();

  let password =
    document.getElementById("password")
    .value
    .trim();

  console.log(
    "LOGIN TRY:",
    username,
    password
  );

  try{

    const res = await fetch(
      "http://localhost:3000/login",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          username,
          password
        })
      }
    );

    const result =
      await res.json();

    console.log(
      "LOGIN RESULT:",
      result
    );

    if(result.success){

      localStorage.setItem(
        "user",
        JSON.stringify({
          id:result.user.id,
          username:result.user.username,
          role:result.user.role,
          loginTime:Date.now()
        })
      );

      showToast(
        "Login berhasil",
        "success"
      );

      setTimeout(() => {

        window.location.href =
          "/cashier/cashier.html";

      }, 800);

    } else {

      showToast(
        result.message,
        "error"
      );

    }

  } catch(err){

    console.error(err);

    showToast(
      "Server error",
      "error"
    );

  }

};


// =========================
// TOAST
// =========================
function showToast(
  message,
  type = "success"
){

  const toast =
    document.getElementById("toast");

  const div =
    document.createElement("div");

  div.classList.add(
    "toast-item"
  );

  if(type === "success"){
    div.classList.add(
      "toast-success"
    );
  }

  if(type === "error"){
    div.classList.add(
      "toast-error"
    );
  }

  if(type === "warning"){
    div.classList.add(
      "toast-warning"
    );
  }

  div.innerText = message;

  toast.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3500);

}


// =========================
// GO BACK
// =========================
function goBack(){

  window.location.href =
    "/index.html";

}








// window.login = function () {
//   let username = document.getElementById("username").value.trim();
//   let password = document.getElementById("password").value.trim();

//   console.log("LOGIN TRY:", username, password);


//   try{

//   const res = await fetch(
//     "http://localhost:3000/login",
//     {
//       method:"POST",

//       headers:{
//         "Content-Type":"application/json"
//       },

//       body:JSON.stringify({
//         username,
//         password
//       })
//     }
//   );

//   const result =
//     await res.json();

//   if(result.success){

//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         id:result.user.id,
//         username:result.user.username,
//         role:result.user.role,
//         loginTime:Date.now()
//       })
//     );

//     console.log("LOGIN SUCCESS");

//     showToast(
//       "Login berhasil",
//       "success"
//     );

//     setTimeout(() => {

//       window.location.href =
//         "/cashier/cashier.html";

//     }, 800);

//   } else {

//     showToast(
//       result.message,
//       "error"
//     );

//   }

// }catch(err){

//   console.error(err);

//   showToast(
//     "Server error",
//     "error"
//   );

// }


// };


// // FUNGSI ALERT
// // ============
// function showToast(message, type = "success") {
//   const toast = document.getElementById("toast");

//   const div = document.createElement("div");
//   div.classList.add("toast-item");

//   if (type === "success") div.classList.add("toast-success");
//   if (type === "error") div.classList.add("toast-error");
//   if (type === "warning") div.classList.add("toast-warning");

//   div.innerText = message;

//   toast.appendChild(div);

//   setTimeout(() => {
//     div.remove();
//   }, 3500);
// }

// // KEMBALI, TIDAK JADI LOGIN
// // =========================
// function goBack() {
//   window.location.href = "/index.html"; // arahkan ke main menu
// }