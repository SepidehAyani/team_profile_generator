// Manager section
const addManger = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-150">
            <div class="card-headerMan">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

// Intern section
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-150"">
            <div class="card-headerInt">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

// Engineer section
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-150"">
            <div class="card-headerEng">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github Repo: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// Push array to page 
htmlBuilder = (data) => {

    // Array of cards
    cardList = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // Call manager function
        if (role === 'Manager') {
            const managerCard = addManger(employee)
            cardList.push(managerCard)
        }

        // Call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee)
            cardList.push(engineerCard)
        }

        // Call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee)
            cardList.push(internCard)
        }

    }

    // Concatenating strings
    const employeeCards = cardList.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

// Generate html page 
const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
            <h1>Team Profile Generator</h1>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
  </body>
  </html>
`;
}

module.exports = htmlBuilder; 