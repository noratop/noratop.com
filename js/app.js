$(document).foundation();

var GitHubApi = require("github");
var data = require("./lib/data");
var view = require("./lib/view");

console.log("loaded");

var git = $('#git');

$('keyword__item').on("click",function(){
    
    var reposCollection = new data.RepoCollection({
        keyword: "foo"
    });
    
    reposCollection.fetch({data:this.getFilter()}).then(function(){
                
        var repos = new view.ReposView({
            model: reposCollection
        });
        
        repos.render();
        git.append(repos.$el);
    });

});