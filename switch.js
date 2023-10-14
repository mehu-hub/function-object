const color = '';
if (color === 'green') {
    console.log('you are my green friend');
}

else if (color === 'blue') {
    console.log('you are my blue friend');
}
else if (color === 'red') {
    console.log('you are my red friend');
}
else if (color === 'white') {
    console.log('you are my white friend');
}
else if (color === 'yellow') {
    console.log('you are my yellow friend');
}
else {
    console.log('ok no problem');
}
//--------------------------------------------


// Switch
switch ('yellow') {
    case 'green':
        console.log('green found');
        break;
    case 'red':
        console.log('red found');
        break;
    case 'white':
        console.log('white found');
        break;
    case 'red':
        console.log('red found');
        break;
    case 'yellow':
        console.log('himu found');
        break;
    default:
        console.log('no one found');
}