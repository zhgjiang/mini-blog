/**
 * 博客内容
 */
define('article', function (require, exports, module){
    
    var articleMd2Html = function (articleMd) {
        return 'articleHtml'; 
    };

    exports.article = function (articleMd) {
        var harticleHtml = articleMd2Html(articleMd);
        return harticleHtml; 
    };
});
