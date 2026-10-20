const http = require("node:http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PitchAudit</title>
  </head>
  <body>
    <main>
      <h1>PitchAudit</h1>
      <p>Coming soon.</p>
    </main>
  </body>
</html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`PitchAudit placeholder listening on port ${port}`);
});
