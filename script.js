function pullDown(){

}

window.addEventListener('load' , function(){
    const pullDownButton = document.getElementById("lists");
    const pullDownParents = document.getElementById("pull-down");
    const pullDownChild = document.querySelectorAll(".pull-down-list");
    const currentList = document.getElementById("current-list");

    pullDownButton.addEventListener("mouseover" , function(){
        console.log("乗る");
    });

    pullDownButton.addEventListener("mouseout" , function(){
        console.log("外れる");
    });

    pullDownButton.addEventListener("click" , function(){
        console.log("クリック");
    })

    pullDownButton.addEventListener("mouseover" , function(){
        this.setAttribute("style" , "background-color:blue;");
    })

    pullDownButton.addEventListener("mouseout" , function(){
        this.setAttribute("style" , "background-color:#FF6666;");
    })

    pullDownButton.addEventListener("click" , function(){
        this.setAttribute("style" , "background-color:green;");
    })

    pullDownButton.addEventListener("click" , function(){
        if(pullDownParents.getAttribute("style") === "display:block;"){
            pullDownParents.removeAttribute("style" , "display:block;");
            console.log("非表示");
        }else{
            pullDownParents.setAttribute("style" , "display:block;");
            console.log("表示");
        }
    })

    pullDownChild.forEach(function(list){
        list.addEventListener("click" , function(){
            console.log(list);
        })
    })

    pullDownChild.forEach(function(list){
        list.addEventListener("click" , function(){
            const value = list.innerHTML;
            currentList.innerHTML = value;
        })
    })
})

window.addEventListener("load" , pullDown);