var salaryDiv = document.createElement("div");

function enable() {
  salaryDiv.innerHTML = ` <label for="salary">Salary:</label><br /> <input type="number" id="salary" name="salary" min="15" max="30" required/>`;
  document.getElementById("here").appendChild(salaryDiv);
}

function disable() {
  salaryDiv.parentNode.removeChild(salaryDiv);
  /*
  var element = document.getElementById("salary");
  element.parentNode.removeChild(element);

  var element2 = document.getElementById("salarytag");
  element2.parentNode.removeChild(element2);*/
}
