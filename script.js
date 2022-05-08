var countries = [
  { name: "Čilė", plotas: 756000, count: 16000000 },
  { name: "Mauritius", plotas: 2040, count: 1265000 },
  { name: "Dominica", plotas: 750, count: 71560 },
  { name: "St Lucia", plotas: 617, count: 178751 },
  { name: "Martinika", plotas: 1128, count: 364508 },
];

for (var x of countries) {
  console.log(
    `${x.name} vidutinis plotas gyventojui: ${(
      (x.plotas * 1000000) /
      x.count
    ).toFixed(2)}`
  );
  document.write(
    `<br>Šalis: ${x.name}, joje gyvena ${
      x.count
    } gyventojų. <br> Šalies plotas yra ${
      x.plotas
    } km2. <br> Vidutinis plotas tenkantis vienam gyventojui: ${(
      (x.plotas * 1000000) /
      x.count
    ).toFixed(2)} km2`
  );
  document.write("<br>" + "----------------------------------" + "<br>");
}
