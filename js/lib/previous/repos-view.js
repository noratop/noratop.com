var Backbone = require('backbone');
var _ = require("underscore");

// Views
var RepoView = require('./repo-view');

var ReposView = Backbone.View.extend({
    collection: null,
    tagName: 'ul',
    // className: 'side-nav',
    attributes:{class :'side-nav'},
    render: function() {

    // leaving this option on the side first because this 
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
    // events: {
    //     'click .fi-pencil': 'editSomething',
    //     'keypress .edit-input': 'editCompleted'
    // },
    // editSomething: function(evt) {
    //     var $this = $(evt.target).parent();
    //     var origText = $this.text();
    //     var attribut = $this.attr("name");
    //     $this.replaceWith('<input class="edit-input" name='+attribut+' type="text" value="' + origText + '">');
    // },
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

module.exports = ReposView;