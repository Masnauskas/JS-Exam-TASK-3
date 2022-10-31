/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsersButton = document.getElementById("btn");
const message = document.getElementById("message");

async function getUserDataFromUrl(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      userData = await response.json();
      console.log(userData);

      showUsersButton.addEventListener("click", () => {
        drawUserCards(userData);
        message.classList.add("hide");
      });
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

function drawUserCards(data) {
  const outputDiv = document.getElementById("output");
  data.forEach((dataItem) => {
    const userBox = document.createElement("div");
    userBox.classList.add("user-box");

    const userAvatar = document.createElement("img");
    userAvatar.src = dataItem.avatar_url;
    userAvatar.alt = "User Avatar";
    userAvatar.classList.add("user-avatar");

    const userLogin = document.createElement("div");
    userLogin.textContent = dataItem.login;
    userLogin.classList.add("user-login");

    userBox.append(userAvatar, userLogin);

    outputDiv.append(userBox);
  });
}

getUserDataFromUrl(ENDPOINT);
