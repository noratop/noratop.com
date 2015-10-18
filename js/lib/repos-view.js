var Backbone = require('backbone');
var _ = require("underscore");

// Views
var RepoView = require('./repo-view');

var ReposView = Backbone.View.extend({
    collection: null,
    tagName: 'ul',
    className: '',
    render: function() {
        
        var subViews = this.collection.map(function(currentModel) {
            return new RepoView({model: currentModel}).render().$el;
        });
        this.$el.empty().append(subViews);
        
        // This version will create a lot of reflows
        // this.$el.empty();
        // for (var i = 0; i < this.model.length; i++) {
        //     this.$el.append(new RepoView({model: this.model[i]}).render().$el);
        // }
        
        return this;
    }
});

module.exports = ReposView;