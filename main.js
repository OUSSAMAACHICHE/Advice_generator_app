// dom elements
const adviceId = document.getElementById('id'),
advice = document.getElementById('advice');


// request
fetch(`https://api.adviceslip.com/advice`)
.then(res => {
	// Check if the request was seccessful
	if(!res.ok) {
		throw new Error('Network response was not ok');
	}
	// Parse res as JSON
	return res.json();
}).then(data => {

	getAdvices(data);

})
.catch(error => {
    console.error('Fetch error:', error);
  });

 function getAdvices(advices) {
	adviceId.innerText = advices.slip.id;
	advice.innerText = '“' + ' ' + advices.slip.advice + ' ' + '”';

}