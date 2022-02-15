export function convertCelsiusToFahrenheit(celsius) {
    console.log(celsius)
	let numberInCelsius = celsius * 9
    numberInCelsius = numberInCelsius / 5
    numberInCelsius = numberInCelsius + 32
    return numberInCelsius
}