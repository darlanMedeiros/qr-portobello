function doGet() {

  var sheet = SpreadsheetApp
    .openById("1DnEM6obZPtYipsx6J4fjfwL2h-_cEhdsjBFYy90X29w")
    .getSheets()[0];

  var url = sheet.getRange("A2").getValue();

  var html = `
  <html>
  <head>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <style>

  body{
    margin:0;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#0b3a5b,#0f4c75);
    font-family:Arial, Helvetica, sans-serif;
    color:white;
    text-align:center;
  }

  .logo{
    width:95%;
    max-width:800px;
    margin-bottom:10px;
  }

  .botao{

    width:90%;
    max-width:800px;

    padding:45px;

    font-size:40px;

    background:white;
    color:#0b3a5b;

    text-decoration:none;

    border-radius:25px;

    font-weight:bold;

    box-shadow:0 12px 30px rgba(0,0,0,0.35);

  }

  .botao:active{
    transform:scale(0.96);
  }

  </style>
  </head>

  <body>

  <img class="logo" src="https://lh3.googleusercontent.com/d/1xL_SJ9NgGVD9d9EDDOf2j6QfhMgG-oG_">

  <a class="botao" href="${url}" target="_top">
  🔗 ABRIR QR CODE
  </a>

  </body>
  </html>
  `;

  return HtmlService.createHtmlOutput(html);
}
