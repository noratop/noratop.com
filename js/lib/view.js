var Backbone = require('backbone');
var _ = require("underscore");

var repoTemplate = require("raw!./view-template.ejs");

// Views

var ReposView = Backbone.View.extend({
    template: _.template( repoTemplate ),
    model: null,
    tagName: 'div',
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
    render: function() {
        this.$el.html( this.template({repoList: this.model}) );
    }
});

module.exports = {
    ReposView:ReposView
}