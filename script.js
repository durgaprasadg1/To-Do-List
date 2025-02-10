// let now = new Date();
// console.log(JSON.stringify(now));

// let now = new Date();

// let year = now.getFullYear();  // Gets the year (e.g., 2025)
// let month = now.getMonth() + 1;  // Gets the month (0-11, so we add 1)
// let date = now.getDate();  // Gets the day of the month (1-31)
// let hours = now.getHours();  // Gets the hours (0-23)
// let minutes = now.getMinutes();  // Gets the minutes (0-59)
// let seconds = now.getSeconds();  // Gets the seconds (0-59)

// console.log(`Today is: ${date}/${month}/${year}`);
// console.log(`Current time: ${hours}:${minutes}:${seconds}`);
document.querySelector("button").addEventListener("click", () => {
  const task = document.getElementById("Task-input");
  if (task.value === "") {
    alert("Task Daal le Bhai");
    return;
  } 
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    let label = document.createElement("lable");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", "rr");


    label.appendChild(input);
    th1.textContent = task.value;
    th2.textContent = `${JSON.stringify(new Date().getDate())}/${JSON.stringify(
      new Date().getMonth() + 1
    )}/${JSON.stringify(new Date().getFullYear())}`;
    th3.textContent = `${JSON.stringify(
      new Date().getHours()
    )} : ${JSON.stringify(new Date().getMinutes())} : ${JSON.stringify(
      new Date().getSeconds()
    )}`;
    th4.appendChild(label);
    let table = document.querySelector("table");
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    table.appendChild(tr);
    task.value = "";


    input.addEventListener("change", () => {
        if (input.checked) {
          alert("One Task Completed Successfully");
        }
      });
    
  
  
})

