const express = require("express");
const app = express();
const http = require("http").createServer(app);

const options = {
  /* ... */
};
const io = require("socket.io")(http, options);

app.use("/play", express.static("sketch"));
app.use("/", express.static("buttons"));

const listener = http.listen(process.env.PORT || 3000, process.env.IP, () =>
  console.log("listening on *:3000")
);

io.on("connection", (socket) => {
  socket.on("fromUsers", (data) => {
    console.log(data);
    socket.broadcast.emit("control", data);
  });
});
