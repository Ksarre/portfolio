//set scroller animations when reduced motions aren't set in the browser


const activateScrollAnimation = function(){
    const scrollers = document.querySelectorAll(".scroller");

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        addScrollAnimation(scrollers)
    }
}

// in react where we have an engine that renders dom on data updates
// we might be able to remove the list item from the head of the list
// and add it to the tail. animation would be set to not loop with infinite duration
function addScrollAnimation(scrollers) {
    console.log("adding scroll animation")
    scrollers.forEach((scroller) =>{

        scroller.setAttribute("content-animated", true)
        const scrollerInner = scroller.querySelector(".scroller-inner");
        console.log(scroller)
        //deep copying data to new array so we don't accidentally 
        // extend the size of the array to be looped over
        const scrollerContent = Array.from(scrollerInner?.children);
        const dupes = [];
        scrollerContent != null && scrollerContent.forEach((item)=> {
            const dupeItem = item.cloneNode(true);
            // dupeItem.setAttribute('');
            dupes.push(dupeItem)
        })
    })
}

export {activateScrollAnimation}