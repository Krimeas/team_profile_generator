// import of fs file system
const fs = require('fs')

// Starter base HTML file.  Is written to a new index.html(or overwrites) when index.js file is run in the console and all and all employees are done being added.

// script.js file included at bottom so that the questions can generate and apply those to the 'main' inside of the 'body' element.  All styling is done with bootstrap.

// style.css included incase of future tweaks to html are required. 

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

  <!-- Scripts fot JS, JQuery, -->
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="assets/script.js"></script>

</body>
</html>
`

module.exports = StartHTML;