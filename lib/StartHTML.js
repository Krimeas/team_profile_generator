
const fs = require('fs')

const StartHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>

  <link rel="stylesheet"
  href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>

  <link rel="stylesheet" href="assets/style.css"/>

  <title>Employee Database</title>
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary align-right text-light">
      <div class="container justify-content-center">
        <h1>My Team</h1>
      </div>
    </nav>
  </header>

  <!-- runs the generated cards section. -->
  <main class="row justify-content-between col-12 m-0 p-0" >


  </main>

  <!-- Scripts fot JS, JQuery, & UI -->
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="assets/script.js"></script>

</body>
</html>
`

module.exports = StartHTML;