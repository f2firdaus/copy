let data = [
  {
    fName: "Shaikh",
    lName: "Vakas",
    city: "Mumbai",
    country: "INDIA",
  },
  {
    fName: "Rahul",
    lName: "Kumar",
    city: "Mumbai",
    country: "INDIA",
  },
  {
    fName: "Albert",
    lName: "Einstein",
    city: "Meyaou",
    country: "GERMANY",
  },
  {
    fName: "Shaikh",
    lName: "Faraz",
    city: "Indore",
    country: "INDIA",
  },
  {
    fName: "Amrita",
    lName: "Sharma",
    city: "Pune",
    country: "INDIA",
  },
];

let td1 = document.getElementsByClassName("td1");
let tb = document.getElementById("tb");
let result = [];
data.forEach((e) => {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.setAttribute("class", "td1");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  td2.innerText = e.fName;
  td3.innerText = e.lName;
  td4.innerText = e.city;
  td5.innerText = e.country;
  result.push(tr);
});

function bottom() {
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.setAttribute("class", "td1");
  let td2 = document.createElement("td");
  td2.innerHTML = fname.value;
  let td3 = document.createElement("td");
  td3.innerText = lname.value;
  let td4 = document.createElement("td");
  td4.innerText = city.value;
  let td5 = document.createElement("td");
  td5.innerText = country.value;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tb.appendChild(tr);
  result.push(tr);
  console.log(result);
  td1 = document.getElementsByClassName("td1");
  for (let i = 0; i < td1.length; i++) {
    td1[i].innerHTML = i + 1;
  }
  fname.value = "";
  lname.value = "";
  city.value = "";
  country.value = "";
}
function topRow() {
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let tb = document.getElementById("tb");
  let td1 = document.createElement("td");
  td1.setAttribute("class", "td1");
  let td2 = document.createElement("td");
  td2.innerText = fname.value;
  let td3 = document.createElement("td");
  td3.innerText = lname.value;
  let td4 = document.createElement("td");
  td4.innerText = city.value;
  let td5 = document.createElement("td");
  td5.innerText = country.value;
  let trs = tb.insertRow((index = 0));
  trs.appendChild(td1);
  trs.appendChild(td2);
  trs.appendChild(td3);
  trs.appendChild(td4);
  trs.appendChild(td5);
  result.unshift(trs);
  td1 = document.getElementsByClassName("td1");
  for (let i = 0; i < td1.length; i++) {
    td1[i].innerHTML = i + 1;
  }
  fname.value = "";
  lname.value = "";
  city.value = "";
  country.value = "";
}
result.forEach((e) => {
  tb.appendChild(e);
});
for (let i = 0; i < td1.length; i++) {
  td1[i].innerHTML = i + 1;
}
