var showImageAtIndex = function(slide, index) {
    var nextIndex = index
    slide.dataset.active = nextIndex
    var className = 'show-active'
    removeClassAll(className)
    var nextSelector = '#id-showimage-' + String(nextIndex)
    var img = e(nextSelector)
    img.classList.add(className)
    removeClassAll('show-white')
    var indiSelector = '#id-indi-' + String(nextIndex)
    var indi = e(indiSelector)
    indi.classList.add('show-white')
}

var nextIndex = function(slide, offset) {
    var numberOfImgs = parseInt(slide.dataset.imgs)
    var activeIndex = parseInt(slide.dataset.active)
    // 求出下一张图片的 id
    var i = (numberOfImgs + activeIndex + offset) % numberOfImgs
    return i
}

var bindEventSlide = function() {
    var selector = '.show-slide-button'
    bindAll(selector, 'click', function(event){
        var button = event.target
        var slide = button.parentElement
        var offset = parseInt(button.dataset.offset)
        var index = nextIndex(slide, offset)
        showImageAtIndex(slide, index)
    })
}

var bindEventIndicator = function() {
    var selector = '.show-slide-indi'
    bindAll(selector, 'mouseover', function(event){
        var self = event.target
        var index = parseInt(self.dataset.index)
        var slide = self.closest('.show-slide')
        // 直接播放第 n 张图片
        showImageAtIndex(slide, index)
    })
}

var playNextImage = function() {
    var slide = e('.show-slide')
    var index = nextIndex(slide, 1)
    showImageAtIndex(slide, index)
}

var autoPlay = function() {
    var interval = 3000
    setInterval(function(){
        // 每 3s 都会调用这个函数
        playNextImage()
    }, interval)
}

bindEventSlide()
bindEventIndicator()
autoPlay()
