let newRepo = new XMLHttpRequest();
newRepo.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let myObj = JSON.parse(this.responseText);
        for(var i=0; i < myObj.length; i++){
            addRepo(myObj[i].name);
        }
    }
};

newRepo.open("GET","https://api.github.com/users/cperry1382/repos", true);
newRepo.send();

function addRepo(name){
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("gitRepo").appendChild(node);
}

$(document).ready(function(){
    $("transHover").hover(function(){
        $(this).css("hieght", "72px");
    }, function(){
        $(this).css("width", "72px");
    });
});