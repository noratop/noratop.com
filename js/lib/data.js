var Backbone = require('backbone');

var gitURL = "https://api.github.com/";
var user = "noratop";


// Models & Collections

var Repo = Backbone.Model.extend({});

var RepoCollection = Backbone.Collection.extend({
    model: Repo,
    initialize: function(models, options) {
        this.keyword = options.keyword; // search term can also contain any combination of the supported repository search qualifiers 
        // this.sort = "updated" // 
        // this.in = options.in, // Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these.
        // this.size = options.size, //Finds repositories that match a certain size (in kilobytes).
        // this.forks = options.forks, //Filters repositories based on the number of forks.
        // this.fork = "true", // Filters whether forked repositories should be included (true) or only forked repositories should be returned (only)
        // this.in = options.in,
        // this.in = options.in
        this.getFilter = function(){return "q="+this.keyword+"+user:"+user+"+fork:true"+"&sort=updated&order=asc";};
    },
    parse: function(response) {
        return response.items;
    },
    url: function(){return gitURL + "search/repositories"}
});


module.exports = {
    RepoCollection: RepoCollection
};