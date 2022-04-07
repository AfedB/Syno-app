
function submitButton() {
  const apikey = "CgzBVTXbtz2kQOmVlhqgpFBrEp3omM5a";
  const element = document.getElementById("text-area");
  const word = document.querySelector("textarea").value;
  const url =
    "https://api.dicolink.com/v1/mot/" +
    word +
    "/synonymes?limite=5&api_key=" +
    apikey;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        element.innerHTML =
          data[0].mot +
          ", " +
          data[1].mot +
          ", " +
          data[2].mot +
          ", " +
          data[3].mot +
          ", " +
          data[4].mot +
          ".";
      }
    });
}

// document.getElementById("text").value = "";
// document.getElementById("text-area").value = "";

// var input = document.querySelector('#delete');
// var textarea = document.querySelector('#text');

// input.addEventListener('click', function () {
//     textarea.value = '';
// }, true);

function deleteText() {
  let text = document.getElementById("text");
  // let textTwo = document.getElementById("text-area");

  text.value = text.value = "";
  // textTwo.value = textTwo.value = "";
}
