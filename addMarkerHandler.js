AFRAME.registerComponent("markerhandler")
init:async finction(){
    this.el.addEventListener("markerFound", ()=>){
        console.log("marker found");
        this.handleMarkerFound();
    }
    this.el.addEventListener("markerLost",)(){
        console.log("marker is lost");
        this.handleMarkerLost();
        
    }
}