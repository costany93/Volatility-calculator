

let actifText  = document.querySelector(".actif-text")

//definition des textes relatifs à l'actif
let actifLotMinimum = document.querySelector(".lot-minimum")
let actifLotRecommande = document.querySelector(".lot-recommande")
let actifRrr = document.querySelector(".rrr")
let actifTypeOrdre = document.querySelector(".type-ordre")

//selectionons le button
let btn = document.getElementById("btn")

//definition des variable de prix
let prixEntreeInput = document.getElementById("prix-entree")
let prixSlInput = document.getElementById("prix-sl")
let prixTpInput = document.getElementById("prix-tp")
let montantPerteInput = document.getElementById("prix-perte")

let inputNumber = document.querySelector('.form .input-form input')

//console.log(prixSlInput)




btn.addEventListener('click', () => {
    let prixEntreeText = "no";
    let prixSlText = "no";

    let montantPerteText = "no";

    //vérifier les champs et ajouter les bordures bottom red
    //prix entree
    if(prixEntreeInput.value == ""){
        prixEntreeInput.style.borderBottomColor = "red"
        //prixEntreeText = "no"
    }else{
        prixEntreeInput.style.borderBottomColor = "black"
        prixEntreeText = prixEntreeInput.value

    }
    //prix Stop loss
    if(prixSlInput.value == ""){
        prixSlInput.style.borderBottomColor = "red"
        //prixSlInput = "no"
    }else{
        prixSlInput.style.borderBottomColor = "black"
        prixSlText = prixSlInput.value

    }

    //montant perte
    if(montantPerteInput.value == ""){
        montantPerteInput.style.borderBottomColor = "red"
       // montantPerteInput = "no"
    }else{
        montantPerteInput.style.borderBottomColor = "black"
        montantPerteText = montantPerteInput.value

    }

    // calculons le nom de pips
    let nbrePips = Math.abs(prixEntreeText - prixSlText)


    let lotRecommande = montantPerteText / nbrePips.toFixed(5)
        let lotRecommandeInt = Math.abs(lotRecommande.toFixed(5))
    actifLotRecommande.innerHTML = lotRecommandeInt

})