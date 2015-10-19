var Octokat = require('octokat');
var user = "noratop";

var gitRepo = $("#git-repo");

function displayRepo(repoName) {
    var octo = new Octokat();
    var repos = octo.repos(user,repoName);
    
    repos.fetch()
    .then(function(result) {
        
    })
}

module.exports = displayRepo;