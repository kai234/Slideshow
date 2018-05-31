var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
var find = function(element, selector) {
    return element.querySelector(selector)
}

var closestClass = function(element, className) {
    var e = element
    while (e != null) {
        if (e.classList.contains(className)) {
            return e
        } else {
            e = e.parentElement
        }
    }
}

var closestId = function(element, idName){
    var e = element
    while (e != null) {
        // 判断 e 是否包含 idName 这个 id
        if (e.id == idName) {
            return e
        } else {
            e = e.parentElement
        }
    }
}

var closestTag = function(element, tagName){
    var e = element
    while (e != null) {
        // 判断 e 是否和 tagName 相等
        if (e.tagName.toUpperCase() == idName.toUpperCase()) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return e
}

var closest = function(element, selector){
    var flag = selector[0]
    if (flag == '.') {
        var className = selector.slice(1)
        return closestClass(element, className)
    } else if (flag == '#') {
        var idName = selector.slice(1)
        return closestId(element, idName)
    } else {
        var tag = selector
        return closestId(element, tag)
    }
}
