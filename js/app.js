$(document).foundation();
var queryString = require('query-string');
var data = require("./lib/data");
var ReposView = require("./lib/repos-view");

//console.log("loaded");

var git = $('#git');
var user = "noratop";

//console.log(git);

$('.keyword__item').on("click",function(){
    
    var keywordSelection = $(this).text();
    // console.log(keywordSelection);
    
    var reposCollection = new data.RepoCollection(null,{
        keyword: keywordSelection,
        user: user
    });
    
    reposCollection.fetch({data: queryString.stringify(reposCollection.searchQuery)})
    .then(function(){
        reposCollection.map(function(currentModel) {
        // var parent = 
        console.log(currentModel);
        currentModel.set({test:"youpi"});
        })
    })
    .then(function(){
        
        // console.log("collection fetch");
        // console.log(queryString.stringify(reposCollection.searchQuery));
        
        var repos = new ReposView({
            collection: reposCollection
        });
        
        git.append(repos.render().$el);
    });

});