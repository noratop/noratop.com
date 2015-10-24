var Backbone = require('backbone');
var _ = require("underscore");
var displayRepo = require("./display-repo");

// Views
var NavView = require('./nav-view');

var ReposNavView = Backbone.View.extend({
    collection: null,
    tagName: 'ul',
    attributes:{"class" :"side-nav"},
    render: function() {

    var subViews = this.collection.map(function(currentModel) {
        return new NavView({model: currentModel}).render().$el;
    });
    this.$el.empty().append(subViews);
    
    // This version will create a lot of reflows
    // this.$el.empty();
    // for (var i = 0; i < this.model.length; i++) {
    //     this.$el.append(new RepoView({model: this.model[i]}).render().$el);
    // }
    
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
        displayRepo(repoName);

        // var attribut = $this.attr("name");
        // $this.replaceWith('<input class="edit-input" name='+attribut+' type="text" value="' + origText + '">');
    }
    // editCompleted: function(evt) {
    //     var $this = $(evt.target);
    //     var attribut = $this.attr("name");
    //     if (evt.keyCode === 13) {
    //         //console.log(this);
    //         var inputValue = $this.val();
    //         var view = this;
    //         this.model.set(attribut, inputValue);
    //         this.model.save(null, {attrs: this.model.changedAttributes()}).then(
    //             function(successResult) {
    //                 //alert('model has been saved');
    //                 console.log(successResult);
    //                 view.render();
    //             },
    //             function(errorResult) {
                    
    //             }
    //         );
    //     }
    // },
});

module.exports = ReposNavView;