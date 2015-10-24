var Backbone = require('backbone');
var _ = require("underscore");
var repoTemplate = require('raw!./repo-view-template.ejs');

var RepoView = Backbone.View.extend({
    template: _.template( repoTemplate ),
    model: null,
    tagName: 'div',
    className: '',
    render: function() {
        this.$el.html(this.template({model: this.model}));
        return this;
    }
});

module.exports = RepoView;