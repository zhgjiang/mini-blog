define(function(require) {
    //load doc index.json
    var indexJson = require('json!./articles/index.json');        
    var index = require('./js/index');

    var indexHtml = index.index(indexJson);
    var indexDiv = document.getElementById('index');
    indexDiv.innerHTML = indexHtml;

    var main = document.getElementById('main');
    //load markdown article
    $('a[data-href]').on('click', function(e){
        $.get($(this).attr('data-href'), function(result){
            var article = markdown.toHTML(result); 
            main.innerHTML = article;    
        });
        e.preventDefault();
    });
});
