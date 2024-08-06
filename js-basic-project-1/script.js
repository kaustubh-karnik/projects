let rect = document.querySelector('#center')

rect.addEventListener('mousemove', function(detail){
    let rectLocation = rect.getBoundingClientRect()
    var insiderectval = detail.clientX - rectLocation.left;
    if (insiderectval < rectLocation.width / 2) {
        var redcolour = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insiderectval)
        gsap.to(rect, {
            backgroundColor : `rgb(${redcolour},0,0)`,
            ease : Power4
        })
    }
    else {
        var blueColour = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insiderectval)
        gsap.to(rect, {
            backgroundColor : `rgb(0,0,${blueColour})`,
            ease : Power4
        })
    }
})

rect.addEventListener('mouseleave', function(dec){
    gsap.to(rect, {
        backgroundColor: "rgba(201, 201, 201, 0.411)"}
        )
    })