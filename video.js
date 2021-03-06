// var dsVideo = document.querySelector(".ds-video");
// var dsVideoCta = document.querySelector(".ds-video__cta");
// var dsBtn = document.querySelector(".ds-btn");

// dsVideo.addEventListener("click", function(el){
//     dsPlayer(el)
// })

// dsBtn.addEventListener("click", function() {
//     if(this.getAttribute("src") == "./play-button.svg"){
//     dsVideoCta.classList.add("ds-btn-only");
//     dsVideo.play()
//     this.setAttribute("src", "./pause-button.svg")

//     }else{
//         dsVideo.pause()
//         this.setAttribute("src", "./play-button.svg")
//     }

// })

 
(function () {
    var dsVideoPlayer = {
        dsVideoCta: document.querySelector(".ds-video__cta"),
        dsVideo: document.querySelector(".ds-video"),
        dsBtn: document.querySelector(".ds-btn"),
        init: function () {
            dsVideoPlayer.dsBtn.addEventListener("click", dsVideoPlayer.playVideo);
        },
        playVideo: function () {
            if (this.getAttribute("src") == "./play-button.svg") {
                dsVideoPlayer.dsVideoCta.classList.add("ds-btn-only");
                dsVideoPlayer.dsVideo.play()
                this.setAttribute("src", "./pause-button.svg")

            } else {
                dsVideoPlayer.dsVideo.pause()
                this.setAttribute("src", "./play-button.svg")
            }
        }
    }

    dsVideoPlayer.init()
})()