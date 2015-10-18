$(document).foundation();
var Octokat = require('octokat');

var data = require("./lib/data");
var ReposView = require("./lib/repos-view");

var git = $('#git');
var user = "noratop";

$('.keyword__item').on("click",function(){
    
    var keyword = $(this).text();
    //console.log(keyword);

    var octo = new Octokat();
    var repos = octo.search('repositories');

    var qualifiers = keyword +" user:"+user+" fork:true";

    var search = {
        q: qualifiers,
        sort : "updated",
        order: "asc"
    }
    
    repos.fetch(search) // Use `.read` to get the raw file.
    .then(function(contents) { // `.fetch` is used for getting JSON
        console.log(contents);
    });
    
    

    // var reposCollection = new data.RepoCollection(null,{
    //     keyword: keywordSelection,
    //     user: user
    // });
    
    // reposCollection.fetch({data: queryString.stringify(reposCollection.searchQuery)})
    // .then(function(){
    //     reposCollection.map(function(currentModel) {
    //     // var parent = 
    //     console.log(currentModel);
    //     currentModel.set({test:"youpi"});
    //     })
    // })
    // .then(function(){
        
    //     // console.log("collection fetch");
    //     // console.log(queryString.stringify(reposCollection.searchQuery));
        
    //     var repos = new ReposView({
    //         collection: reposCollection
    //     });
        
    //     git.append(repos.render().$el);
    // });

});