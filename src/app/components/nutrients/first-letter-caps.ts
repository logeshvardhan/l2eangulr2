export class FirstLetterCaps {

	StrFirstLetterByCaps(input) {
            if (input !== null) {
                return input.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        }
}
