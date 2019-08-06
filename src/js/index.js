$( document ).ready(function() {
	$('.range-input').rangeslider({
		polyfill: false
	});

	$('.rangeslider__handle').append('<svg class="rangeslider__handle" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26"><defs><clipPath id="9c2na"><path fill="#fff" d="M22.79 14.845c0 6.071-4.922 10.993-10.995 10.993C5.723 25.838.8 20.916.8 14.845c0-4.214 2.373-7.87 5.854-9.715l3.714-3.713c.78-.78 2.044-.78 2.824 0L16.877 5.1c3.512 1.835 5.914 5.506 5.914 9.744z"/></clipPath></defs><g><g><path fill="#fff" d="M22.79 14.845c0 6.071-4.922 10.993-10.995 10.993C5.723 25.838.8 20.916.8 14.845c0-4.214 2.373-7.87 5.854-9.715l3.714-3.713c.78-.78 2.044-.78 2.824 0L16.877 5.1c3.512 1.835 5.914 5.506 5.914 9.744z"/><path fill="none" stroke="#b0b0b0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="50" stroke-width="2" d="M22.79 14.845c0 6.071-4.922 10.993-10.995 10.993C5.723 25.838.8 20.916.8 14.845c0-4.214 2.373-7.87 5.854-9.715l3.714-3.713c.78-.78 2.044-.78 2.824 0L16.877 5.1c3.512 1.835 5.914 5.506 5.914 9.744z" clip-path="url(&quot;#9c2na&quot;)"/></g></g></svg>')
});

