const navMenu = document.getElementsByClassName('navMenu');
const documents = document.getElementsByClassName('documents');

function onClickNavMenu(e) {
    selectedMenu = e.target.innerText;
    switch(selectedMenu){
        case 'User':
            hiddeAll();
            document.getElementById('api-document-user').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Reservation':
            hiddeAll();
            document.getElementById('api-document-reservation').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Hotel':
            hiddeAll();
            document.getElementById('api-document-hotel').style.display="block";
            console.log(selectedMenu);
            break;
        default:
            console.log("default");

    }
}

for(let i = 0; i < navMenu.length; i++){
    navMenu[i].onclick=onClickNavMenu;
}

function hiddeAll() {
    for(let i = 0; i < documents.length; i++){
        documents[i].style.display="none";
    }
}