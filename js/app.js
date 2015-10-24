$(document).foundation();
var Octokat = require('octokat');

var data = require("./lib/data");
var ReposBoardView = require("./lib/repos-board-view");

var git = $('#git');
// var nav = $("#nav");
var user = "noratop";

$('.keyword__item').on("click",function(){
    
    var keyword = $(this).text();
    //console.log(keyword);

    var octo = new Octokat({
        username:"noratop",
        password:"raspig84"
    });
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
        
        var repos = new ReposBoardView({
            collection: reposCollection
        });
        
        git.append(repos.render().$el);
        
        $('body').animate({scrollTop: $(".keyword").offset().top},'slow');
    });
});