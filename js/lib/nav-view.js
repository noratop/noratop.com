var Backbone = require('backbone');
var _ = require("underscore");
var navTemplate = require('raw!./nav-view-template.ejs');

var RepoView = Backbone.View.extend({
    template: _.template( navTemplate ),
    model: null,
    tagName: 'li',
    className: 'nav__item',
    render: function() {
        this.$el.html(this.template({model: this.model}));
        return this;
    }
});

module.exports = RepoView;