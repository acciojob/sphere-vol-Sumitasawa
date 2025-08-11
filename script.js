function volume_sphere(event) {
    //Write your code here
	
	   if (event) event.preventDefault();

		let radius=parseFloat(document.getElementById('radius').value);

	if(isNaN(radius)||radius<=0){
		//alert("Please enter a valid positive number for radius.")
		        document.getElementById('volume').value = 'NaN';

		return false;
	}

	let volume=(4/3)*Math.PI*Math.pow(radius,3);
		document.getElementById('volume').value=volume.toFixed(4);
	return false;

	
} 
	
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
