voiture1={matricule:"189tn694" ,marque:"toyota",modele:"chr",disponibilite:true}
var tabVoiture=[voiture1];
var resultat=[];
function verif(){
    let motcle=document.getElementById("motcle").value
    if (motcle==""){
        alert('search with keyword')
        return false;
    }
    else{
        resultat=[]
        let res=""
        for (let i = 0; i < tabVoiture.length; i++) {
            ch=(tabVoiture[i].marque+tabVoiture[i].modele)
            if(ch.indexOf(motcle)!=-1 && tabVoiture[i].disponibilite==true){
                resultat.push(tabVoiture[i])
                res=res+"the car "+ tabVoiture[i].modele+" is available to rent under the matricule " +tabVoiture[i].matricule+"\n"
            }  
        }
        conteneur=document.getElementById("resultat")
        conteneur.textContent=res
        if(resultat.length===0){
            alert("pas de voitures disponibles")
        }
        else{
            document.getElementById("choix").style.display="block"
            document.getElementById("boutonchoix").style.display="block"
        }
    }
}
function louer (){
    matricule=document.getElementById("choix").value
    test=false
    for (let i = 0; i < resultat.length; i++) {
        if(resultat[i].matricule===matricule){
            test=true
        }
    }
    if(test==false){
        alert("shoose from the list showed below")
        return false
    }
    else{
        document.getElementById("nom").style.display="block"
        document.getElementById("num").style.display="block"
        document.getElementById("cin").style.display="block"
        document.getElementById("boutonconfirmer").style.display="block"
        for (let i = 0; i < tabVoiture.length; i++) {
            if(tabVoiture[i].matricule===matricule){
                tabVoiture[i].disponibilite=false
            }
        }

    }
}
function confirmer() {
    nom=document.getElementById("nom").value
    num=document.getElementById("num").value
    cin=document.getElementById("cin").value
    if(!isNaN(nom)){
        alert("invalid name")
        return false
    }
    else if(isNaN(num) || num.length!=8){
        alert("invalid phone number")
        return false
    }
    else if(isNaN(cin)|| (cin.length!=8)){
        alert("invalid cin")
        return false
    }
    else{
    conteneur=document.getElementById("afficher")
    conteneur.textContent="car rented successfully"
    }
}
function test() {
    const password="azerty"
    mdp=document.getElementById("mdp").value
    if (password===mdp) {
        window.location.href="gestion.html"
    }
    else{
        alert("invalid password!!")
        return false
    }
}
function addcar() {
    
    conteneur=document.getElementById("pr")
    conteneur.textContent="car added successfully"
    
}
function deletcar() {
    matricule=document.getElementById("matricule").value
    for (let index = 0; index < tabVoiture.length; index++) {
        if (tabVoiture[index].matricule==matricule) {
            tabVoiture.splice(index,1)
        } 
    }
    conteneur=document.getElementById("pr")
    conteneur.textContent="car deleted successfully"
}
function moveadd() {
   window.location.href="add.html"
}
function movedelet() {
    window.location.href="delete.html"
}