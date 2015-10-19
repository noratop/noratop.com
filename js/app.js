$(document).foundation();
var Octokat = require('octokat');

var data = require("./lib/data");
var ReposNavView = require("./lib/repos-nav-view");

var git = $('#git');
var nav = $("#nav");
var user = "noratop";

$('.keyword__item').on("click",function(){
    
    var keyword = $(this).text();
    //console.log(keyword);

    var octo = new Octokat();
    var repos = octo.search('repositories');
    
    //octo.repos(user, "node-workshop-2").fetch().then(function(e){console.log(e)});

    //search contains the definition of the search API request
    var qualifiers = keyword +" user:"+user+" fork:true";
    var search = {
        q: qualifiers,
        sort : "updated",
        order: "asc"
    };
    
    //search a callback (if not given -> Promises) and a config that is passed through toQueryString
    repos.fetch(search)
    .then(function(result) {
        
        var reposCollection = new data.RepoCollection(result.items,{
            keyword: keyword,
            user: user
        });
        
        var repos = new ReposNavView({
            collection: reposCollection
        });
        
        // var magellan = $('<div>').attr("data-magellan-expedition","fixed");
        nav.append(repos.render().$el);
        // git.append(magellan);
    });
});


        // var reposCollection = new data.RepoCollection(result.items,{
        //     keyword: keyword,
        //     user: user
        // });
        
        // var repos = new ReposView({
        //     collection: reposCollection
        // });
        
        // git.append(repos.render().$el);








    // .then(function(searchResult){
    //     //console.log("search");
    //     console.log(searchResult);
        
        
    // })
    
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

    //     var repos = new ReposView({
    //         collection: reposCollection
    //     });
        
    //     git.append(repos.render().$el);
    // });

