function GetAllStyles(){
    var overview = document.getElementById('overview');
    var computedStyles = getComputedStyle(overview);

    for (let i = 0; i < computedStyles.length; i++) {
        const propertyName = computedStyles[i];
        const propertyValue = computedStyles.getPropertyValue(propertyName);
        console.log(`${propertyName}: ${propertyValue}`);
    }
}