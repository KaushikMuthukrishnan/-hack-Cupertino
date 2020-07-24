// JavaScript source code
function collapseSidebar(element) {
	let sbHeight = element.scrollHeight;
	let sbTransition = element.style.transition;
	element.style.transition = "";

	requestAnimationFrame(function () {
		element.style.height = sbHeight + "px";
		element.style.transition = sbTransition;
		
		requestAnimationFrame( function() { 
			element.style.height = 0 + "px";
		});
	});

	element.setAttribute("data-collapsed", "true");
	element.style.visibility = "hidden";
};

function expandSidebar(element) {
	let sbHeight = element.scrollHeight;
	element.style.height = sbHeight + "px";
	element.addEventListener("transitioned", function(event) {
		element.removeEventListener("transitioned", arguments.callee);
		element.style.height = null;
	});

	element.setAttribute("data-collapsed", "false");
	element.style.visibility = "visible";
};

let sidebar = document.querySelector("#collapsible-sidebar-items");

$(collapseSidebar(sidebar));

document.querySelector("#collapsible-sidebar-toggle").addEventListener("click", function(event) {
		
		if(sidebar.getAttribute("data-collapsed") === "true") {
			expandSidebar(sidebar);
			sidebar.setAttribute("data-collapsed", "false");
		} else {
			collapseSidebar(sidebar);
		}
});

		