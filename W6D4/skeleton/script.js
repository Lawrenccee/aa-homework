document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const listForm = document.querySelectorAll(".list-container form");
  listForm[0].addEventListener("submit", event => {
    event.preventDefault();

    const favoriteInput = document.getElementsByClassName("favorite-input");
    const favoriteText = favoriteInput[0].value;

    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");

    li.textContent = favoriteText;
    ul.appendChild(li);
  });


  // adding new photos

  // --- your code here!
  const togglePhotoForm = (event) => {
    const formContainer = document.getElementsByClassName("photo-form-container");

    if (formContainer[0].className.includes("photo-form-container hidden")) {
      formContainer[0].className = "photo-form-container";
    } else {
      formContainer[0].className = "photo-form-container hidden";
    }
  };

  document.querySelectorAll(".photo-show-button").forEach((li) => {
    li.addEventListener("click", togglePhotoForm);
  }); 

  const photoForm = document.querySelectorAll(".photo-form-container");
  photoForm[0].addEventListener("submit", event => {
    event.preventDefault();

    const photoInput = document.getElementsByClassName("photo-url-input");
    const photoUrl = photoInput[0].value;

    const ul = document.getElementsByClassName("dog-photos")[0];
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = photoUrl;
    ul.appendChild(li);
    ul.appendChild(img);
  });

});
