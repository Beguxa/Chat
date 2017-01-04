clientApp.directive('clickEvent',function(){
    return{
      link : function(scope,element,attrs){
        element.bind('click',function(){
            var row = angular.element('<div></div>');
            row.addClass('myRow');
            var col = angular.element('<div></div>');
            var parent = element.parent();
            parent.append(row);
        });
      }
    };
});
