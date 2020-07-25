
//Mobile Sidebar Functionality =>//



function collapse(element) {
	element.style.transitionProperty = "height";
	element.style.transitionDuration = "300ms";
	let sbHeight = element.scrollHeight;

	requestAnimationFrame(() => {
		element.style.height = sbHeight + "px";
		
		requestAnimationFrame( () => { 
			element.style.height = 0 + "px";
		});
	});

	element.setAttribute("data-collapsed", "true");
	element.style.visibility = "hidden";
};


function expand(element) {
	let sbHeight = element.scrollHeight;
	element.style.height = sbHeight + "px";
	element.addEventListener("transitioned", event => {
		element.removeEventListener("transitioned", arguments.callee);
		element.style.height = null;
	});

	element.setAttribute("data-collapsed", "false");
	element.style.visibility = "visible";
};



let sidebar = document.querySelector("#collapsible-sidebar-items");

$(collapse(sidebar));

document.querySelector("#collapsible-sidebar-toggle").addEventListener("click", (event) => {
		
	if(sidebar.getAttribute("data-collapsed") === "true") {
		expand(sidebar);
	} else {
		collapse(sidebar);
	}
});

sidebar.addEventListener("click", event => {
	collapse(sidebar);
});

//<=Mobile Sidebar Functionality//




if (window.innerWidth > 768) {
	$("#CSBhr").hide();
} 

		