
 var element= document.getElementById("mi");
 
 var id1= document.getElementById("ig1");
 var id2= document.getElementById("ig2");
 var id3= document.getElementById("ig3");
 var id4= document.getElementById("ig4");
 var id5= document.getElementById("ig5");
 var curr=0;
 const arr=["https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"]
id1.addEventListener("click",()=>{
    element.src=arr[0];
    curr=0;
});

id2.addEventListener("click",()=>{
    element.src=arr[1];
    curr=1;
})
    id3.addEventListener("click",()=>{
    element.src=arr[2];
    curr=2;
})
id4.addEventListener("click",()=>{
    element.src=arr[3];
    curr=3;
})
id5.addEventListener("click",()=>{
    element.src=arr[4];
    curr=4;
})



window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        if(curr!=4){
            curr++;
            element.src=arr[curr];
        }
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        if(curr!=0){
            curr--;
            element.src=arr[curr];
        }
        break;
      
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);