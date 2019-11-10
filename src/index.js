/*
 Try this below code in local machine,
 just run:
  node index.js
and open  two two more tabs, and run,
  telnet localhost 8080
then type any text in the second and third tab, and look at the first tab, 
the code print the received data...

*/

const net = require("net");

const server = net.createServer(client => {
  console.log("client connected");
  client.on("data", data => {
    console.log("data received:");
    console.log(data.toString());
  });
  client.on("end", () => {
    console.log("client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server started");
});
