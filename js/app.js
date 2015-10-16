$(document).foundation();

var data = require("./lib/data");
var view = require("./lib/view");

console.log("loaded");

var git = $('#git');
console.log(git);

$('.keyword__item').on("click",function(){
    
    var keyword = $(this).text();
    console.log(keyword);
    
    var reposCollection = new data.RepoCollection(null,{
        keyword: "nodejs"
    });
    
    console.log(reposCollection.getFilter());
    reposCollection.fetch({data:reposCollection.getFilter()}).then(function(){
        
        console.log("collection fetch");
        console.log(reposCollection);
        
        var repos = new view.ReposView({
            model: reposCollection
        });
        
        repos.render();
        git.append(repos.$el);
    });

});