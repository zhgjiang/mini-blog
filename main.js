define(function(require) {
    //load doc index.json
    var indexJson = require('json!./articles/index.json');        
    var indexHtml = '';
    var i = 0;
    var len = indexJson.length;

    for(i=0; i<len; i++){
        indexHtml += '<a href="#" data-href="' + './articles/' + indexJson[i].src + '">' + indexJson[i].name + '</a>'
        indexHtml += '<br>';
    }
    
    var preview = document.getElementById('index');
    preview.innerHTML = indexHtml;

    var main = document.getElementById('main');
    //load markdown article
    $('a[data-href]').on('click', function(){
        $.get($(this).attr('data-href'), function(result){
            var article = markdown.toHTML(result); 
            main.innerHTML = article;    
        });
    });
});
