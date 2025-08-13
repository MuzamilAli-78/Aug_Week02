fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    showData(data);
  });

function showData(data) {
  let headers = Object.keys(data[0]);
  const tableHRow = document.querySelector(".head-row");
  headers.forEach((header) => {
    const headValue = document.createElement("th");
    headValue.innerHTML = `
            <th>${header}</th>
        `;
    tableHRow.appendChild(headValue);
  });

  const tableBody = document.querySelector(".body-row");
  data.forEach((row) => {
    const tableBRow = document.createElement("tr");
    headers.forEach((header) => {
      const bodyValue = document.createElement("td");
      if (header === "address") {
        bodyValue.innerHTML = `
                    <td>${row.address["city"]}</td>
                    `;
      } else if (header === "company") {
        bodyValue.innerHTML = `
                <td>${row.company["name"]}</td>
                `;
      } else {
        bodyValue.innerHTML = `
                    <td>${row[header]}</td>
                    `;
      }
      tableBRow.appendChild(bodyValue);
    });
    tableBody.appendChild(tableBRow);
  });
}
