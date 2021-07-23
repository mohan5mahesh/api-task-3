async function getusers() {
  try {
    const data = await fetch("https://api.carbonintensity.org.uk/intensity");
    const users = await data.json();
    const res = await users.data;
    resdata(res);
  } catch {
    console.log("error");
  }
}

function resdata(res) {
  const a = document.createElement("div");
  a.className = "user-list";
  res.forEach((carbondata) => {
    const from = document.createElement("div");
    from.createClass = "carbon_data";
    from.innerHTML = `
      <p>From:${carbondata.from}</p>
      <p>To:${carbondata.to}</p>
      <p>Forecast:${carbondata.intensity.forecast}</p>
      <p>Actual:${carbondata.intensity.actual}</p>
      <p>Index:${carbondata.intensity.index}</p>
      <button onclick="refresh_data()">Refresh</button>`;
    a.append(from);
  });
  document.body.append(a);
}
getusers();
function refresh_data() {
  document.querySelector(".user-list").remove();
  getusers();
}
