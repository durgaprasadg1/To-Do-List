
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

