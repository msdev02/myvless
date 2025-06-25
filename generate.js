function generateVLESS() {
  const uuid = crypto.randomUUID();
  const servers = [
    { country: "Indonesia", domain: "id1.vlessfree.site" },
    { country: "Singapore", domain: "sg1.vlessfree.site" }
  ];
  const selected = servers[Math.floor(Math.random() * servers.length)];
  const config = `vless://${uuid}@${selected.domain}:443?encryption=none&security=tls&type=ws&host=${selected.domain}&path=/vless#VLESS-${selected.country}`;

  document.getElementById("vlessOutput").innerText = config;
  document.getElementById("configBox").style.display = "block";
}