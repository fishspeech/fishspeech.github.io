$.get("../nav.html", function(data){
        $("#nav-placeholder").replaceWith(data);
    });