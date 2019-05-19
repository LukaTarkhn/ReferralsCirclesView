// copy URL on click
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("#URL").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}

function ShowCopied() {
    var copied = document.getElementById("copied");
    copied.className = "showcopied";
    setTimeout(function () {
        copied.className = 'hidecopied';
    }, 1500);
}

window.onload = function(){ 
	// first 2 word underline
	var links = document.links;
	var chars = 2;
 
	for (var i = 0, total = links.length; i < total; i++) {
		if (links[i].className.indexOf('active') > -1) {
			var text = links[i].innerHTML;
			text = '<span>' + 
				text.substring(0, chars) + 
				'</span>' + 
				text.substring(chars);
			links[i].innerHTML = text;
		}
	}
	// change classes on menu
	$('#menu a').on('click', function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});

	
	// Total invited referral (deactivated referrals)
	fullValue.textContent = document.querySelectorAll('path').length - 1;
	deactivated.textContent = document.querySelectorAll(`#referrals .disabled`).length;

	// GET count of referrals
	let first = document.querySelectorAll('#referrals .first');
	for(let i = 0; i < first.length; i++) {
		first[i].onmouseover = (event) => {
		document.querySelector(`#res`).innerHTML = document.querySelectorAll(`#referrals .A1ref${i + 1}`).length
	}
	}

	let second = document.querySelectorAll('#referrals .second');
	console.log(second)
	for(let i = 0; i < second.length; i++) {
		console.log(document.querySelectorAll(`#referrals .B1ref${i}`).length)
		second[i].onmouseover = (event) => {
		document.querySelector(`#res`).innerHTML = document.querySelectorAll(`#referrals .B1ref${i + 1}`).length
	}
	}	
}