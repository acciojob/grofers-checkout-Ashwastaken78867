const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(priceElement => {
    total += parseInt(priceElement.textContent);
  });

  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.querySelector("#ans").textContent = `Total Price: Rs ${total}`;
  } else {
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.className = "total-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.id = "ans"; // Add ID for test case compatibility
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalRow.appendChild(totalCell);

    table.appendChild(totalRow);
  }
};

getSumBtn.addEventListener("click", getSum);
