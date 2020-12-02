function futureAlertV2(type,message) {
 if(type && message) {
 	var typelower = type.toLowerCase();
 	if (typelower == "error" || "warning" || "info" || "success") {
 		var alert = document.createElement("div");
 		alert.innerHTML = `<div class="fa-alert-container" id="fa-1"><div id="fa-2" class="fa-alert fa-${typelower} fa-i"><p class="fa-alert-text">${message}</p><button class="fa-alert-button" onclick="futureAlertClose()">X</button></div></div>`
 		document.body.appendChild(alert);
 } else {
 	console.warn("[FutureAlert] Invalid type entered.")
 }
 } else {
 	console.warn("[FutureAlert] Could not find type or message field.")
 }
}

function futureAlertClose() {
	var alertParent = document.getElementById("fa-1");
	var alertBox = document.getElementById("fa-2");
	alertBox.classList.add("fa-o"); 
	setTimeout(function(){alertParent.remove();}, 1000);
}