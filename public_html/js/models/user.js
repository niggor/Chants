define(['backbone'],
function(
    Backbone
){
  
    var UserModel = Backbone.Model.extend({
         defaults: {
             name: '',
             email: '',
             password: ''
         },

         url: 'api/v2/user/',
     
         logIn: function(callbackDict) {
             var that = this;
             $.ajax(that.url, {
                 type: "POST",
                 data: that.toJSON(),
                 success: function(response) {
                     return callbackDict.success(response); 
                 },
                 error: function(xhr, status, error) {
                     return callbackDict.error(xhr); 
                 }
             });                
         }
    });

    return UserModel;
});
