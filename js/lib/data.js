var Backbone = require('backbone');

var gitURL = "https://api.github.com/";

var Repo = Backbone.Model.extend({
    // getMonthName: function(date_attribute){
    //     var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    //     return monthNames[this.get(date_attribute).getMonth()];
    // }
});

var RepoCollection = Backbone.Collection.extend({
    model: Repo,
    initialize: function(models, options) {
        this.keyword = options.keyword; // search term can also contain any combination of the supported repository search qualifiers 
        this.user = options.user;
        this.getQ = function(){return this.keyword +" user:"+this.user+" fork:true";};
        this.searchQuery = {
            q: this.getQ(),
            sort : "updated",
            order: "asc"
        };
    },
    parse: function(response) {
        return response.items;
    },
    url: function(){return gitURL + "search/repositories"}
});


module.exports = {
    RepoCollection: RepoCollection,
    Repo:Repo
};