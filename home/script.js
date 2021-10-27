let ip = "jlkingdoms.aternos.me"
let port = 25565
xhr = new XMLHttpRequest;
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
      const responseJSON = JSON.parse(xhr.responseText);
      document.getElementById("playerCount").innerHTML = responseJSON.players.now + "/" + responseJSON.players.max
  }
}
xhr.open("GET", "https://mcapi.us/server/status?ip=" + ip + "&port=" + port)
xhr.send()
