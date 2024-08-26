//add <br> between the output lines (check 1 555-555-5555)
//scroll to the bottom of the output element automatically

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
let countResults = 0;

const isValid = (input) => {
    const phoneRegex = /^(\+?1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return phoneRegex.test(input) 
    ? `<p><span class="valid">Valid</span> US number: ${userInput.value}</p>` 
    : `<p><span class="invalid">Invalid</span> US number: ${userInput.value}</p>`;
};

checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
    return;
  }
  countResults++;
  if (countResults === 1) {
    resultsDiv.innerHTML += `
    ${isValid(userInput.value)}
    `
  } else {
      resultsDiv.innerHTML += `
      ${isValid(userInput.value)}
      `
  }
  resultsDiv.style.display = "flex";
  userInput.value = "";
});

clearBtn.addEventListener("click", () => {
  resultsDiv.style.display = "none";
  countResults = 0;
  resultsDiv.innerHTML = "";
  userInput.value = "";
})