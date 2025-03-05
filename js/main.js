const gridContainer = document.getElementById("sec-grid");
const boxList = gridContainer.getElementsByClassName("grid-box");

const totalTasks = document.getElementById("total-tasks");
const assignTasks = document.getElementById("assign-tasks");

const history = document.getElementById("history-container");
const btnClear = document.getElementById("clear-btn");

for (const box of boxList) {
  const btn = box.querySelector("button");
  btn.addEventListener("click", function () {
    alert("Board Updated Successfully");
    btn.setAttribute("disabled", true);
    btn.style.backgroundColor = "lightgrey";

    const newP = document.createElement("p");
    const title = box.querySelector("h2").innerText;
    newP.innerText = `
        You have completed the task ${title} at 1:26:53 AM
    `;
    newP.style.backgroundColor = "lightgrey";
    newP.style.borderRadius = "8px";
    newP.style.padding = "10px";
    newP.style.margin = "5px";
    history.append(newP);
    btnClear.addEventListener("click", function () {
      newP.innerHTML = "";
      newP.removeAttribute("style");
    });
    let updatedTotal = parseInt(totalTasks.innerText) + 1;
    totalTasks.innerText = updatedTotal;

    let updatedAssign = parseInt(assignTasks.innerText) - 1;
    assignTasks.innerText = updatedAssign;
  });
}

const blogSection = document.getElementById("blog-id");
blogSection.addEventListener("click", function () {
  window.location.href = "blog.html";
});
