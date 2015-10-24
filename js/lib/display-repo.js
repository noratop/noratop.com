var Octokat = require('octokat');
var RepoView = require("./repo-view");
var data = require("./data");

var gitRepo = $("#git-repo");

function displayRepo(repoName) {
    var user = "noratop";
    var octo = new Octokat();
    var myRepo = octo.repos(user,repoName);
    
    myRepo.fetch()
    .then(function(result) {
        console.log(result);
        var repoModel = new data.Repo(result);
        
        var repoView = new RepoView({
            model: repoModel
        });
        
        gitRepo.append(repoView.render().$el);
    })
}

module.exports = displayRepo;