$(document).foundation();

var data = require("./lib/data");
var ReposView = require("./lib/repos-view");

console.log("loaded");

var git = $('#git');
console.log(git);

$('.keyword__item').on("click",function(){
    
    var keywordSelection = $(this).text();
    console.log(keywordSelection);
    
    var reposCollection = new data.RepoCollection(null,{
        keyword: keywordSelection
    });
    
    console.log(reposCollection.getFilter());
    reposCollection.fetch({data:reposCollection.getFilter()}).then(function(){
        
        console.log("collection fetch");
        console.log(reposCollection);
        
        var repos = new ReposView({
            collection: reposCollection
        });
        
        git.append(repos.render().$el);
    });

});