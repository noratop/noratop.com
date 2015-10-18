$(document).foundation();

var Octokat = require('octokat');

var data = require("./lib/data");
var ReposView = require("./lib/repos-view");

var git = $('#git');

$('.keyword__item').on("click",function(){
    
    var keyword = $(this).text();
    console.log(keyword);
    
    var octo = new Octokat();
    var repos = octo.search('repositories');

    var qualifiers = keyword +" "+"user:noratop fork:true";

    var search = {
        q: qualifiers,
        sort : "updated",
        order: "asc"
    }
    
    repos.fetch(search) // Use `.read` to get the raw file.
    .then(function(contents) { // `.fetch` is used for getting JSON
        console.log(contents);
    });

    var reposCollection = new data.RepoCollection(null,{
        keyword: keyword
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