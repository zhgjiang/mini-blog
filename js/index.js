/**
 * 博客索引
 */

define(function (require, exports, module){
    
    var indexJson2Html = function (indexJson) {
        var i = 0;
        var len = indexJson.length;
        var indexHtml = '';

        for(i=0; i<len; i++){
            indexHtml += '<a href="#" data-href="' + './articles/' + indexJson[i].src + '">' + indexJson[i].name + '</a>'
            indexHtml += '<br>';
        }
        return indexHtml; 
    };

    exports.index =  function (indexJson) {
       var indexHtml = indexJson2Html(indexJson);
       return indexHtml; 
    }
});
