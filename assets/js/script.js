const navMenu = document.getElementsByClassName('navMenu');
const documents = document.getElementsByClassName('documents');

function onClickNavMenu(e) {
    selectedMenu = e.target.innerText;
    switch(selectedMenu){
        case 'Document':
            hiddeAll();
            document.getElementById('api-document-main').style.display="block";
            console.log(selectedMenu);
            break;
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
        case 'Overview-model':
            hiddeAll();
            document.getElementById('model-document-overview').style.display="block";
            console.log(selectedMenu);
            break;
        case 'User-schema':
            hiddeAll();
            document.getElementById('model-document-user').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Hotel-schema':
            hiddeAll();
            document.getElementById('model-document-hotel').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Reservation-schema':
            hiddeAll();
            document.getElementById('model-document-reservation').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Update-RoomType-Validation':
            hiddeAll();
            document.getElementById('business-logic-document-roomType').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Create-Reservation-Validation':
            hiddeAll();
            document.getElementById('business-logic-document-create-reservation').style.display="block";
            console.log(selectedMenu);
            break;
        case 'JWT-FrontEnd':
            hiddeAll();
            document.getElementById('jwt-auth-frontend').style.display="block";
            console.log(selectedMenu);
            break;
        case 'JWT-BackEnd':
            hiddeAll();
            document.getElementById('jwt-auth-backend').style.display="block";
            console.log(selectedMenu);
            break;
        case 'Redux Toolkit':
            hiddeAll();
            document.getElementById('redux-toolkit').style.display="block";
            console.log(selectedMenu);
            break;
        default:
            console.log("default");
    }
}

function hiddeAll() {
    for(let i = 0; i < documents.length; i++){
        documents[i].style.display="none";
    }
}

function main() {
    hiddeAll();
    document.getElementById('api-document-main').style.display="block";
    for(let i = 0; i < navMenu.length; i++){
        navMenu[i].onclick=onClickNavMenu;
    }
}

main();