function stalkServer() {
  let ip = document.getElementById("ip").value
  let port = document.getElementById("port").value
  if (document.getElementById("portCheck").checked == false) {
    port = 25565
  }
  xhr = new XMLHttpRequest;
  xhr.open("GET", "https://mcapi.us/server/status?ip=" + ip + "&port=" + port)
  xhr.send()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const responseJSON = JSON.parse(xhr.responseText);
      document.getElementById("playerCount").innerHTML = responseJSON.players.now + "/" + responseJSON.players.max + " players on the selected server!"
      document.getElementById("playerList").innerHTML = ""
      for (let i = 0; i < responseJSON.players.sample.length; i++) {
        console.log(responseJSON.players.sample[i])
        document.getElementById("playerList").innerHTML = document.getElementById("playerList").innerHTML + responseJSON.players.sample[i].name + "<br />"
      }

    }
  }
}
