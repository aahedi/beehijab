var addEvent = function addEvent(element, eventName, func) {
	if (element.addEventListener) {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};

function openmenu(a){
	if( snapper.state().state==a ){
        snapper.close();
    } else {
        snapper.open(a);
    }
}

/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
    if(c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function (a) {
            d = a.target;
            while(!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
})(document, window.navigator, "standalone");

/*var snapper = new Snap({element: document.getElementById('content'),hyperextensible: false,disable:'right'});*/
var snapper = new Snap({element: document.getElementById('content'),hyperextensible: false, maxPosition: 175,minPosition: -175,});