function capitalizedString(string){
let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
return capitalizedString;
}

module.exports = capitalizedString