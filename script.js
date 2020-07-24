
//Mobile Sidebar Functionality =>//
function collapse(element) {
	element.style.transitionProperty = "height";
	element.style.transitionDuration = "300ms";
	let sbHeight = element.scrollHeight;

	requestAnimationFrame(function () {
		element.style.height = sbHeight + "px";
		
		requestAnimationFrame( function() { 
			element.style.height = 0 + "px";
		});
	});

	element.setAttribute("data-collapsed", "true");
	element.style.visibility = "hidden";
};

function expand(element) {
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

$(collapse(sidebar));

document.querySelector("#collapsible-sidebar-toggle").addEventListener("click", function(event) {
		
		if(sidebar.getAttribute("data-collapsed") === "true") {
			expand(sidebar);
			sidebar.setAttribute("data-collapsed", "false");
		} else {
			collapse(sidebar);
		}
});

//<=Mobile Sidebar Functionality//


		