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

    //search contains the definition of the search API request
    var qualifiers = keyword +" user:"+user+" fork:true";
    var search = {
        q: qualifiers,
        sort : "updated",
        order: "asc"
    }
    
    //search a callback (if not given -> Promises) and a config that is passed through toQueryString
    repos.fetch(search)
    .then(function(result) {
        //console.log("repo found");
        return result.items;
    })
    .then(function(searchResult){
        console.log("search");
        console.log(searchResult);
        searchResult.forEach(function(repo){
            // repo.parent.pulls.fetch().then(function(res){
            //     console.log(res);
            // })
            console.log(repo);
        })
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
})









    // var reposCollection = new data.RepoCollection(null,{
    //     keyword: keyword
    // });
    
    // console.log(reposCollection.getFilter());
    // reposCollection.fetch({data:reposCollection.getFilter()}).then(function(){
        
    //     console.log("collection fetch");
    //     console.log(reposCollection);
>>>>>>> access to repo but no parent attribute
        
    //     var repos = new ReposView({
    //         collection: reposCollection
    //     });
        
    //     git.append(repos.render().$el);
    // });

// });
