window.onload = () => {
   
    const modalButtons = document.querySelectorAll("[data-toggle=modal]");
    
    for(let button of modalButtons){
        button.addEventListener("click", function(e){
            
            e.preventDefault();
       
            let target = this.dataset.target
            
         
            let modal = document.querySelector(target);
    
            modal.classList.add("show");

           
            const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
            
            for(let close of modalClose){
                close.addEventListener("click", () => {
                    modal.classList.remove("show");
                });
            }

        
            modal.addEventListener("click", function(){
                this.classList.remove("show");
            });
          
            modal.children[0].addEventListener("click", function(e){
                e.stopPropagation();
            })
        });
    }

}