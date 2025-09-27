dragElement(document.getElementById("plant1"))
dragElement(document.getElementById("plant2"))
dragElement(document.getElementById("plant3"))
dragElement(document.getElementById("plant4"))
dragElement(document.getElementById("plant5"))
dragElement(document.getElementById("plant6"))
dragElement(document.getElementById("plant7"))
dragElement(document.getElementById("plant8"))
dragElement(document.getElementById("plant9"))
dragElement(document.getElementById("plant10"))
dragElement(document.getElementById("plant11"))
dragElement(document.getElementById("plant12"))
dragElement(document.getElementById("plant13"))
dragElement(document.getElementById("plant14"))

function dragElement(terrariumElement){
    
    let pos1=0,
        pos2=0,
        pos3=0,
        pos4=0;
    
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e){
        e.preventDefault();
        pos3= e.clientX;
        pos4= e.clientY;
        // when the mouse moves start the drag
        document.onpointermove = elementDrag;
		// when the mouse is lifted, stop the drag
		document.onpointerup = stopElementDrag;
    }
    
    function elementDrag(e){
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    
    terrariumElement.ondblclick = bringFront;

    function bringFront(e){
        console.log("Bringing element to the front")
        console.log(e);
        terrariumElement.style.zIndex = "4"; 
    }
    
    function onAltClick(element, handler){
        element.addEventListener("click", (event)=>{
            if (event.altKey) {
                handler(event)}
        })
    }
    
    function bringBack(e){
        console.log("sending element back")
        console.log(e)
        terrariumElement.style.zIndex ="2";
    }

    onAltClick(terrariumElement,bringBack)
}
