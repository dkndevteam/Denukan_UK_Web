export default function handler(req, res) {
  res.status(503).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Temporarily Unavailable</title>
      </head>
      <body style="
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: Arial, sans-serif;
      ">
        <div>
          <h1></h1>
          <p>This website is temporarily unavailable.</p>
        </div>
      </body>
    </html>
  `);
}