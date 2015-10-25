var Backbone = require('backbone');
var _ = require("underscore");
var data = require("./data");

// var displayRepo = require("./display-repo");

var cardView = require('./repo-card-view');

var ReposCardView = Backbone.View.extend({
    collection: null,
    tagName: 'ul',
    attributes:{"class" :"git-board"},
    render: function() {
        var octo = this.collection.octo;
        var user = this.collection.user;
        var cardViews = this.collection.map(function(currentModel) {
            octo.repos(user,currentModel.get("name")).fetch().then(function(res){
                var repo = new data.Repo(res,{octo: octo});
                return new cardView({model: repo}).render().$el;
            })
        });
        this.$el.empty().append(cardViews);
        return this;
    },
    events: {
        'click .nav__item': 'showRepo',
        // 'keypress .edit-input': 'editCompleted'
    },
    showRepo: function(evt) {
        var $this = $(evt.target);
        var repoName = $this.text();
        //console.log(repoName);
        //displayRepo(repoName);

        // var attribut = $this.attr("name");
        // $this.replaceWith('<input class="edit-input" name='+attribut+' type="text" value="' + origText + '">');
    }
});

module.exports = ReposCardView;