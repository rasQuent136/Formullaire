 /**function fromValidation() {
    var uid = document.enregistrement.nomUtils;
    var unom = document.enregistrement.nom;
    var uprénom = document.enregistrement.prénom;
    var udateNais = document.enregistrement.dateNais;
    var uadrrMail = document.enregistrement.adrrMail;
    var umdp = document.enregistrement.mdp;
    var uconfMdp = document.enregistrement.confMdp;
    var ugenre = document.enregistrement.genre;
    var uhsex = document.enregistrement.hsex;
    var ufsex = document.enregistrement.fsex;

    if(userid_validation(uid,5,50))
    {
        if(passid_validation(mdp,7,26))
        {
            if(confpassid_validation(confMdp,7,26))
            {
                if(nom_validation(nom))
                {
                    if(prénom_validation(prénom))
                    {
                        if(datenaissance_validation(dateNais))
                        {
                            if(adressemail_confirmation(adrrMail))
                            {
                                if(validation_genre(hsex,fsex))
                            }
                        }
                    }
                }
            }
        }
    }
   return false; 
}


function userid_validation(uid,mx,my) {
    var nom_utilisé = "root,dieu,admin";
    var uid_len = uid.value.length;
    if(uid_len == 0 || uid_len >= my || uid_len < mx ) {
        alert("L'identifiant de l'utilisateur doit etre compris entre "+mx+" et "+my+" ");
        uid.focus();
        return false;
    }
    else if (uid_len == nom_utilisé) {
        alert("L'identifiant est déjà utilisé")
        uid.focus();
        return false;
    }
    return true;
}

function passid_validation(mdp,mx,my) {

}

function confpassid_validation(confMdp,mx,my){

}

function fromValidation(mdp , confMdp) {
    var a = document.getElementById("mdp").value;
    var b = document.getElementById("confMdp").value;

    if(a!=b) {
        alert("Les mots de passe ne sont pas identique !");
        return false;
    } else {
        alert("Les mots de passe correspondent !");
        return false;
    }
}

function nom_validation(nom) {
    var lettre = new RegExp("/^[A-Za-z]+{3}+$/");
    if(nom.value.match(lettre)) {
        return true;
    }
    else {
        alert("Le nom d'utilisateur ne doit comporter que des caractères alphabétiques, avec au moins 3 caractères !");
        nom.focus();
        return false;
    }
}

function prénom_validation(prénom) {
    var lettre2 = new RegExp("/^[A-Za-z]+{1}+$/");
    if(prénom.value.match(lettre2)){
        return true;
    }
    else {
        alert("Le nom d'utilisateur ne doit comporter que des caractères alphabétiques, avec au moins 1 caractères !");
        prénom.focus();
        return false;
    }
}

function datenaissance_validation(dateNais){
     
  d = new Date(); 
  document.write(d.datenaissance_validation()); 

}

function adressemail_confirmation(adrrMail) {    
    {
        var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        if(inputText.value.match(mailformat))
        {
        document.enregistrement.focus();
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.enregistrement.focus();
        return false;
        }
        }

function validation_genre(genre,mx,my) {

}
**/
//La fonction de désactivation des tooltip

 function desactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLengh = tooltips.length;

    for (var i = 0;i < tooltipsLengh;i++) {
        tooltips[i].style.display = 'none';
    }
 }

 //Récupération des "tooltip", qui correspond a nos input

 function getTooltip(elements) {
    while (elements = elements.nextSibling){
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;
 }

 // Fonctions de vérification du formulaire, elles renvoient " true" , si tout va bien

 var check = {};// on mets toutes nos fonctions dans un objet littéral

 check ['sex'] = function() {
    var sex = document.getElementsByName('sex'),
        tooltipStyle = getTooltip(sex[1].parentNode).style;

    if(sex[0].checked || sex[1].checked || sex[2].checked ) {
        tooltipStyle.display = 'none';
        return true;
    }else {
        tooltipStyle.display = 'inline-block';
        return false;
    }

 };

 //Fonction de vérification du pseudo

 check['nomUtils'] = function nomUtils (id) {

    var utilise = ('dieu,root,admin');
    var nomUtils = document.getElementById(id),
        tooltipStyle = getTooltip(nomUtils).style;

    if (nomUtils.value.length >= 2 && nomUtils.value != utlise) {
        nomUtils.className ='correct';
        tooltipStyle.display = 'none';
        return true;
    } else if (nomUtils.value.length = utilise) {
        nomUtils.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

 };

 //fonctions de vérification du nom et prénom

 check['nom'] = function nomPrenom (id) {

    var nom = document.getElementsById(id),
        tooltipStyle = getTooltip(nom).style;

    if (nom.value.length >= 2) {
        nom.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        nom.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

 };

 check['nom'] = check['prénom'];

 // fonction de confirmation de l'age

check['news'] = function confMaj () {

    var age = document.getElementsById('news'),
    tooltipStyle = getTooltip(age),
    ageValue = parseInt(age.value);
    
    if (!isNaN(ageValue) && ageValue >= 18) {
        age.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        age.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

// fonction vérification du mot de passe

check['mdp'] = function mdp () {

    
    var mdp = document.getElementsById('mdp'),
    tooltipStyle = getTooltip(mdp).style;

    if(mdp.value.length >= 7) {
        mdp.className = 'correct';
        tooltipStyle.display = 'none';
        return true
    } else {
        mdp.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

// fonction vérification de confirmation du mot de passe

check['confMdp'] = function confMdp () {

    var mdp = document.getElementsById('mdp'),
        confMdp = document.getElementsById('confMdp'),
        tooltipStyle = getTooltip(confMdp).style;

        if(mdp.value == confMdp.value && confMdp.value != '') {
            confMdp.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            confMdp.className = 'incorrect';
            tooltipStyle.display = 'inline-block';
            return false;
        }
};

// fonction vérification adresse mail

check['adrrMail'] = function addMail () {
    var adrrMailIncorrect = "root@paca.happy-dev.fr, admin@paca.happy-dev.fr, dieu@paca.happy-dev.fr";
    var verifMail = '/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/';

    var adrrMail = document.getElementById('adrrMail'),
        tooltipStyle = getTooltip(adrrMail).style;

    if(adrrMail.display == adrrMailIncorrect) {
        
    }

    
};
// fonction vérification de date de naissance

check['dateNais'] = function dateNais {

};

