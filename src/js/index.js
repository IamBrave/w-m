$( document ).ready(function() {
	$('.range-input').rangeslider({
		polyfill: false
	});

	$('.rangeslider__handle').append('<svg class="rangeslider__handle" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26"><defs><clipPath id="9c2na"><path fill="#fff" d="M22.79 14.845c0 6.071-4.922 10.993-10.995 10.993C5.723 25.838.8 20.916.8 14.845c0-4.214 2.373-7.87 5.854-9.715l3.714-3.713c.78-.78 2.044-.78 2.824 0L16.877 5.1c3.512 1.835 5.914 5.506 5.914 9.744z"/></clipPath></defs><g><g><path fill="#fff" d="M22.79 14.845c0 6.071-4.922 10.993-10.995 10.993C5.723 25.838.8 20.916.8 14.845c0-4.214 2.373-7.87 5.854-9.715l3.714-3.713c.78-.78 2.044-.78 2.824 0L16.877 5.1c3.512 1.835 5.914 5.506 5.914 9.744z"/><path fill="none" stroke="#b0b0b0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="50" stroke-width="2" d="M22.79 14.845c0 6.071-4.922 10.993-10.995 10.993C5.723 25.838.8 20.916.8 14.845c0-4.214 2.373-7.87 5.854-9.715l3.714-3.713c.78-.78 2.044-.78 2.824 0L16.877 5.1c3.512 1.835 5.914 5.506 5.914 9.744z" clip-path="url(&quot;#9c2na&quot;)"/></g></g></svg>')
});

//burger
var html = document.querySelector('html');
var header = document.querySelector('.header');
var burger = header.querySelector('.burger');
var menu = header.querySelector('.menu');

function toggleMenu(){
	burger.classList.toggle('active');
	header.classList.toggle('active');
	html.classList.toggle('blocked');
	menu.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);

//checkboxes
var checkboxes = document.querySelectorAll('.exp-checkbox');

for (let i = 0; i < checkboxes.length; i++) {
	const check = checkboxes[i];
	var checkbox = check.querySelector('input');
	check.addEventListener('click', function clickCheckbox(e) {
		if(checkbox.checked == true){
			if(this.classList.contains('checked') == false){
				this.classList.add('checked');
			}
			checkbox.checked == false;
		} else {
			checkbox.checked == false;
			this.classList.remove('checked');
		}
	})
}

//select
var select = document.querySelector('.input_select');

for (let i = 2019; i > 1900; i--) {
	select.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

$( document ).ready(function() {
	$('.input_select').selectize();
});

//scroll
 $(document).ready(function(){
    $(".menu").on('click',"a", function (e) {
				e.preventDefault();

				$('.menu-link.active').removeClass('active');
				$(this).closest('.menu-link').addClass('active');

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 500);

				if ($('.menu').hasClass('active')) {
					toggleMenu();
				}
    });
});