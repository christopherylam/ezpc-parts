function calculateTotal(quantity)
{
	if(quantity < 1)
	{
		return;
	}
	var tax = (quantity * 150) * 0.15;
	var total = (quantity * 150) + tax;
	document.getElementById("order-total").innerHTML = "Order Total: $".concat(quantity * 150);
	document.getElementById("tax").innerHTML = "Tax: $".concat(tax);
	document.getElementById("grand-total").innerHTML = "Grand Total: $".concat(total);
	document.getElementById("calculate-order").style.display = "block";
}

function validateForm()
{
	var firstName = document.getElementById("first-name");
	var lastName = document.getElementById("last-name");
	var email = document.getElementById("email");
	var telephone = document.getElementById("telephone");
	var address = document.getElementById("address");
	var city = document.getElementById("city");
	var state = document.getElementById("state");
	var zip = document.getElementById("postal-code")
	var country = document.getElementById("country");
	var creditCardNumber = document.getElementById("card-number");
	var expirationMonth = document.getElementById("expiration-month");
	var expirationYear = document.getElementById("expiration-year");
	var ccv = document.getElementById("CCV");
	var shippingMethod = document.getElementById("shipping-method");

	var isValid = true;

	if(firstName.value == "")
	{
		firstName.classList.add("error");
		isValid = false;
	}
	else
	{
		firstName.classList.remove("error");
	}
	if(lastName.value == "")
	{
		lastName.classList.add("error");
		isValid = false;
	}
	else
	{
		lastName.classList.remove("error");
	}
	if(email.value == "" || email.validity.valid == false)
	{
		email.classList.add("error");
		isValid = false;
	}
	else
	{
		email.classList.remove("error");
	}
	if(telephone.value != "")
	{
		telephone.classList.remove("error");
	}
	else
	{
		telephone.classList.add("error");
		isValid = false;
	}
	if(address.value == "")
	{
		address.classList.add("error");
		isValid = false;
	}
	else
	{
		telephone.classList.remove("error");
	}
	if(city.value == "")
	{
		city.classList.add("error");
		isValid = false;
	}
	else
	{
		city.classList.remove("error");
	}
	if(state.value == "")
	{
		state.classList.add("error");
		isValid = false;
	}
	else
	{
		state.classList.remove("error");
	}
	if(zip.value == "" || zip.value.length != 5)
	{
		zip.classList.add("error");
		isValid = false;
	}
	else
	{
		zip.classList.remove("error");
	}
	if(creditCardNumber.value == "" || creditCardNumber.value.length != 19)
	{
		creditCardNumber.classList.add("error");
		isValid = false;
	}
	else
	{
		creditCardNumber.classList.remove("error");
	}
	if(expirationMonth.value == "")
	{
		expirationMonth.classList.add("error");
		isValid = false;
	}
	else
	{
		expirationMonth.classList.remove("error");
	}
	if(expirationYear.value == "")
	{
		expirationYear.classList.add("error");
		isValid = false;
	}
	else
	{
		expirationYear.classList.remove("error");
	}
	if(ccv.value == "" || ccv.value.length != 3)
	{
		ccv.classList.add("error");
		isValid = false;
	}
	else
	{
		ccv.classList.remove("error");
	}

	if(isValid == false)
	{
		document.getElementById("error-message").style.display = "block";
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	}

	return isValid;
}