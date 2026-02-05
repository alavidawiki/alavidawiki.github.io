function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}


function population (obj) {
    if (typeof obj.population == "number") return obj.population;
    let result = 0;
    for (const i in obj.states) {
        result += population(i);
    }
    return result;
}
function area (obj) {
    if (typeof obj.area == "number") return obj.area;
    let result = 0;
    for (const i in obj.states) {
        result += area(i);
    }
    return result;
}
function bigNumber(num) {
    const s = String(num);
    const sign = s[0] === '-' ? '-' : '';
    const unsigned = sign ? s.slice(1) : s;
    const parts = unsigned.split('.');
    let intPart = parts[0];
    const fracPart = parts[1] || '';
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return sign + intPart + (fracPart ? '.' + fracPart : '');
}