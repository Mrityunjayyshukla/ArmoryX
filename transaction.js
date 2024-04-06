document.getElementById('tender-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var tenderId = document.getElementById('tender-id').value;
	var companyName = document.getElementById('company-name').value;
	var contactName = document.getElementById('contact-name').value;
	var contactEmail = document.getElementById('contact-email').value;

	// Process the tender application here
	//...

	alert('Your application has been received!');
});