var Backbone = require('backbone');
var _ = require("underscore");
var cardTemplate = require('raw!./card-view-template.ejs');

var RepoView = Backbone.View.extend({
    template: _.template( cardTemplate ),
    model: null,
    tagName: 'li',
    className: 'git-board__item',
    render: function() {
        this.$el.html(this.template({model: this.model}));
        return this;
    }
});

module.exports = RepoView;