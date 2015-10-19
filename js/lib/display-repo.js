var Octokat = require('octokat');
var user = "noratop";
var RepoView = require("./repo-view");
var data = require("./data");

var gitRepo = $("#git-repo");

function displayRepo(repoName) {
    var octo = new Octokat();
    var repos = octo.repos(user,repoName);
    
    repos.fetch()
    .then(function(result) {
        
        var repoModel = new data.Repo(result);
        var repo = new RepoView({
            model: repoModel
        });
        
        gitRepo.append(repo.render().$el);
    })
}

module.exports = displayRepo;