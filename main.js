//===================aside bar =====================================
const aside_bar = document.getElementById("aside_bar");
const humburger = document.getElementById("humburger");
if(humburger){
  humburger.addEventListener("click",()=>{
    aside_bar.classList.toggle("hidden")
  })
}
//===================page d'acceuil==================================
const page_acceuil = document.getElementById("page_acceuil");
setTimeout(() => {
  page_acceuil.classList.add("hidden")
}, 3000);


// =============Affichage navigation entre login et signup==========
document.addEventListener("DOMContentLoaded", function() {
  const loginSection = document.getElementById("login-section");
  const signupSection = document.getElementById("signup-section");
  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");

  if (showSignup && signupSection && loginSection) {
    showSignup.onclick = () => {
      loginSection.classList.add("hidden");
      signupSection.classList.remove("hidden");
    };
  }
  if (showLogin && signupSection && loginSection) {
    showLogin.onclick = () => {
      signupSection.classList.add("hidden");
      loginSection.classList.remove("hidden");
      loginSection.classList.add("flex");
    };
  }
});
//  document.addEventListener("DOMContentLoaded", () => {
  //======================= Inscription=====================
  const utilisateur_existe = document.getElementById("utilisateur_existe");
  const signupBtn = document.getElementById("Signup");
  if (signupBtn) {
    signupBtn.onclick = function () {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      const nom_utilisateur = document.getElementById("nom_utilisateur").value;
      users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find(u => u.email === email);

      if (exists) {
        // alert("Cet utilisateur existe déjà !");
        utilisateur_existe.classList.remove("hidden");
        setTimeout(() => {
        utilisateur_existe.classList.add("hidden");
        }, 3000);
      }else if(email=="" || password=="" || nom_utilisateur==""){
        alert("remplissez le champs")

      } else {
        users.push({ email, password});
        localStorage.setItem("admin-name-acceuil",JSON.stringify( nom_utilisateur ))
        localStorage.setItem("users", JSON.stringify(users));
        alert("Inscription réussie !");
       window.location.href="dashboard.html";

     document.getElementById("signup-email").value="";
     document.getElementById("signup-password").value="";
      document.getElementById("nom_utilisateur").value="";
      }
    };
  }
    // Connexion
    const inscription_reussi = document.getElementById("inscription_reussi");
  const loginBtn = document.getElementById("login");
  if (loginBtn) {
    loginBtn.onclick = function () {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      localStorage.setItem("adminName",JSON.stringify(email));

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.email === email && u.password === password);
      if(user){
        // localStorage.setItem("currentUser", email); // facultatif
        window.location.href = "dashboard.html";
       document.getElementById("login-email").value="";
      document.getElementById("login-password").value="";
      } else {
        // alert("Email ou mot de passe incorrect !");
        inscription_reussi.classList.remove("hidden");
        setTimeout(() => {
          inscription_reussi.classList.add("hidden")
        }, 3000);
      }
    };
  }
// });
///////////////gestion photo et nom admin/////////////////////
// document.addEventListener("DOMContentLoaded", function() {

  const photoEl = document.getElementById("admin-pic");
  const inputEl = document.getElementById("photo-input");
  const savedImage = localStorage.getItem("adminPhoto");
  if (photoEl && savedImage) {
    photoEl.src = savedImage;
  }
  if (photoEl && inputEl) {
    photoEl.addEventListener("click", () => inputEl.click());
    inputEl.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          photoEl.src = e.target.result;
          localStorage.setItem("adminPhoto", e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  }
// });
const nom_utilisateur = JSON.parse(localStorage.getItem("admin-name-acceuil")) || " ";
    const name =JSON.parse(localStorage.getItem("adminName")) || "Admin";
     document.getElementById("admin-name").textContent=name;
     document.getElementById("admin-name-acceuil").textContent=nom_utilisateur;
     //////////////////////////////////////////////////////////

     const divs = document.querySelectorAll(".divp");
     divs.forEach(div=>{
      div.addEventListener("mouseover",()=>{
        div.classList.add("bg-blue-100");
        div.classList.add("text-blue-700");
        // div.style.transition="0.4s ease";
      })
       div.addEventListener("mouseout",()=>{
        div.classList.remove("bg-blue-100");
        div.classList.remove("text-blue-700");
        div.style.transition="0.2s ease";
      })
     });
     ////////////////////divs///////////////////
     const nom_section = document.getElementById("nom_section");
     const Acceuil= document.getElementById("Acceuil");
     const ventes = document.getElementById("ventes");
     const produits = document.getElementById("produits");
     const Historique = document.getElementById("Historique");
     const deconnexion  = document.getElementById("deconnexion");
     const stock = document.getElementById("stock");
     const Statistiques = document.getElementById("Statistiques");
     const notification = document.getElementById("notification");
     const Parametre = document.getElementById("Parametre")
     ////////////////////sections///////////////////
     const sections = document.querySelectorAll(".section");
      // Fonction pour afficher une section et mettre à jour le nom de la section
      function showSection(sectionId, sectionName) {
        sections.forEach(section => {
          section.classList.add("hidden");
        });
        const section = document.getElementById(sectionId);
        if (section) {
          section.classList.remove("hidden");
          section.classList.add("flex");
          section.addEventListener("click",()=>{
            aside_bar.classList.add("hidden")
          })
          gsap.set(section,{ opacity: 0 });
           gsap.to(section,{ duration: 2, opacity: 1});
          nom_section.textContent = sectionName;
        }
      }
      // Gestion des clics sur les divs
      Acceuil.addEventListener("click", () => {
        showSection("section_acceuil", "Acceuil");
        if (typeof updateAcceuil === "function") updateAcceuil();
        if (typeof updateChartAcceuil === "function") updateChartAcceuil();
        aside_bar.classList.add("hidden")
      });
      ventes.addEventListener("click", () => {
        showSection("section_ventes", "Ventes")
      
      });
      produits.addEventListener("click", () => {
        showSection("section_produits", "Produits");
      });
      stock.addEventListener("click", () => {
        showSection("section_stock", "Stock");
      });
      Statistiques.addEventListener("click", () => {
        showSection("section_statistiques", "Statistiques");
      });
      Historique.addEventListener("click", () => {
        showSection("section_historique", "Historique des ventes");
      });
      notification.addEventListener("click", () => {
        showSection("section_notification", "Notification");
      });
      deconnexion.addEventListener("click", () => {
        window.location.href = "/index.html";
      });
      // Afficher la section d'accueil par défaut
      showSection("section_acceuil", "Acceuil");
      ///////////////////////////ajouter les nouveau produit dans stock///////////////////////
      window.onload = function () {
            afficherStock();
      };

      
      const btn_valider = document.getElementById("btn_valider").addEventListener("click",()=>{
        const nom = document.getElementById("input_nom").value;
        const prix =parseInt(document.getElementById("input_prix").value);
        const quantite =parseInt(document.getElementById("input_quantite").value);
        const categorie = document.getElementById("input_categorie").value;
    
    if (nom && prix && categorie && quantite) {
    const produit = { nom, prix, categorie, quantite };
    let stock = JSON.parse(localStorage.getItem("stock")) || [];
    
    let verifiation = stock.find(u =>u.nom===nom);
    if (verifiation) {
      alert("produit existe")
    }else{

      stock.push(produit);
      localStorage.setItem("stock", JSON.stringify(stock));
      afficherStock();
      
      document.getElementById("input_nom").value = "";
      document.getElementById("input_prix").value = "";
      document.getElementById("input_quantite").value = "";
      document.getElementById("input_categorie").value = "";
    }
  }
});
// Fonction pour afficher le tableau
function afficherStock(filtre = "") {
  const stock = JSON.parse(localStorage.getItem("stock")) || [];
  const tbody = document.querySelector("#stockTable tbody");
  const div_produit = document.getElementById("div_produit");
  let valeur_stock = document.getElementById("valeur_stock");
  const total_stock = document.getElementById("total_stock");
  const produit_recents = document.getElementById("produit_recents");
  const affichage_stock_faible = document.getElementById("stock_faible");
  const produits_qt= document.getElementById("produits_qt");
  const produits_stock = document.getElementById("produits-stock")
  const affiche_produit_vente= document.getElementById("affiche_produit_vente")////affichage des produits section vente

  let total= 0;
  produit_recents.innerHTML="";
  affiche_produit_vente.innerHTML="";
  tbody.innerHTML = "";
  div_produit.innerHTML = ""; 
  affichage_stock_faible.innerHTML="";
  produits_qt.textContent= stock.length;
  produits_stock.textContent=stock.length;
  stock.forEach((item, index) => {
    if (item.nom.toLowerCase().includes(filtre.toLowerCase())){///////////////gerer la recherche de produit
      const row = `<tr style="border: 1px solid black; text-align: center;">
      <td>${item.nom}</td>
      <td>${item.categorie}</td>
      <td>${item.quantite}</td>
      <td>${item.prix}</td>
      <td><button style="animation:color 3s ease-in-out alternate infinite " onclick="supprimerProduit(${index})">Supprimer</button></td>
      </tr>`;
      const row2=`<h1 id="gauche" style="font-size:larger; padding:0.3rem 1rem">${item.nom}</h1>`;
      const row_vente = `<div style=" background-color:white; width:100% ;height:8.5rem;border: 1px solid #999;box-shadow: 2px 2px 3px #333;margin-top:2px; padding:0.5rem"><img  src="/photos/img produit.png" alt=""><div style="display:flex; justify-content:space-between ">${item.nom}<p>${item.prix}FC</p></div><button onclick="ajouterAuPanier('${item.nom}')" id="ajouter_panier" style="background-color:skyblue;border-radius: 6px;padding:3px;cursor: pointer;">ajouter au panier</button></div>`
      const row1 = `<h1 style="margin-top:1rem">${item.nom}</h1>`;

      produit_recents.innerHTML+=row1;
      tbody.innerHTML += row;
      div_produit.innerHTML +=row2; 
      total += item.prix*item.quantite;
      affiche_produit_vente.innerHTML+=row_vente;

      if (window.innerWidth<=720) {
        const gauche = document.getElementById("gauche");
        gauche.style.fontSize="4px"
        
      }

      
}
    ////////////////////////////////message du stock faible//////////////////////////
if (item.quantite<10) {
document.getElementById("tache_notification").classList.remove("hidden")
const sto = `<p style="padding:0.4rem;background-color: aqua; margin:2px"> le stock de ${item.nom} est faible avec ${item.quantite}  pieces <span class="stock ">!!!</span><span class="heure_notification"></span></p>`
affichage_stock_faible.innerHTML+=sto;
}
});
valeur_stock.textContent = total + " $";
total_stock.textContent=total+ "$"

}
//////////////////////rechercher un produit/////////////////
document.getElementById("input_recherche").addEventListener("input", function () {
const filtre = this.value;
afficherStock(filtre);
});

////////////////////////////supprimer un produit///////////////////
function supprimerProduit(index) {
const confirmation = confirm("Voulez-vous vraiment supprimer ce produit ?");
if (confirmation) {
let stock = JSON.parse(localStorage.getItem("stock")) || [];
stock.splice(index, 1);
localStorage.setItem("stock", JSON.stringify(stock)); // Mise à jour du stockage
afficherStock();
}
}
/////////////////////////////btn_supprimer///////////////////////
const btn_supprimer = document.getElementById("btn_supprimmer").addEventListener("click",()=>{
document.getElementById("input_nom").value = "";
document.getElementById("input_prix").value = "";
document.getElementById("input_quantite").value = "";
document.getElementById("input_categorie").value = "";
})
////////////////////////////graphique des ventes///////////////////
const tableau = document.getElementById('tableau_vente').getContext('2d');
const tableau_vente = new Chart (tableau, {
type: 'bar',
data: {
labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
datasets: [{
label: 'Ventes',
data: [30, 19, 6, 5, 20],
backgroundColor: 'rgba(75, 192, 192, 0.5)',
borderColor: 'rgba(75, 192, 192, 1)',
borderWidth: 1
}]
},
options: {
responsive: true,
scales: {
y: { beginAtZero: true }
}
}
});
// Fonction pour mettre à jour l'heure////////////////
function heure (){
const maintenant = new Date();
document.getElementById("heure").textContent= maintenant.toLocaleTimeString();
};
heure();
setInterval(heure, 1000);
//////////////////heure notification//////////////
function heureNotification() {
const maintenant = new Date();
document.getElementsByClassName("heure_notification").textContent = maintenant.toLocaleDateString;
}
heureNotification();

///////////////////gestion de vente produit////////////////////////////
// Panier et ticket courant
let panier = [];
let dernierTicket = null;

// Ajouter un produit au panier
function ajouterAuPanier(nomProduit) {
  const stock = JSON.parse(localStorage.getItem("stock")) || [];
  const produit = stock.find(p => p.nom === nomProduit);
  if (!produit) return;

  // Vérifie si le produit est déjà dans le panier
  const itemPanier = panier.find(p => p.nom === nomProduit);
  if (itemPanier) {
    // Vérifie le stock disponible
    if (itemPanier.quantite < produit.quantite) {
      itemPanier.quantite += 1;
    } else {
      alert("Stock insuffisant !");
    }
  } else {
    panier.push({ nom: produit.nom, prix: produit.prix, quantite: 1 });
  }
  afficherPanier();
}

// Afficher le panier
function afficherPanier() {
  const panierDiv = document.getElementById("panier");
  const totalSpan = document.getElementById("total");
  if (!panierDiv || !totalSpan) return;
  panierDiv.innerHTML = "";
  let total = 0;

  panier.forEach((item, index) => {
    total += item.prix * item.quantite;
    panierDiv.innerHTML += `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span>${item.nom} (${item.quantite})</span>
        <span>${item.prix * item.quantite} FC</span>
        <button onclick="retirerDuPanier(${index})" style="background:red;color:white;border:none;border-radius:4px;padding:2px 6px;margin-left:8px;">Retirer</button>
      </div>
    `;
  });

  totalSpan.textContent = total + " FC";
}

// Retirer un produit du panier
function retirerDuPanier(index) {
  panier.splice(index, 1)
  afficherPanier();
}
//annuler produit precedent
function annuler_prec(){
  if (panier.length > 0) panier.splice(panier.length - 1, 1);
  afficherPanier()
}

// Vider le panier
document.getElementById("vider_panier").onclick = function() {
  panier = [];
  afficherPanier();
};

// Valider la vente
document.getElementById("valider_vente").onclick = function() {
  if (panier.length === 0) {
    alert("Le panier est vide !");
    return;
  }
  const articlesVendus = panier.map(item => ({ ...item }));
  // Vérifier puis mettre à jour le stock
  let stock = JSON.parse(localStorage.getItem("stock")) || [];
  let venteImpossible = false;
  let totalVente = 0;

  panier.forEach(item => {
    const produitStock = stock.find(p => p.nom === item.nom);
    if (produitStock) {
      if (produitStock.quantite >= item.quantite) {
        produitStock.quantite -= item.quantite;
        totalVente += item.prix * item.quantite;
      } else {
        venteImpossible = true;
      }
    }
  });

  if (venteImpossible) {
    alert("Stock insuffisant pour certains produits !");
    return;
  }

  localStorage.setItem("stock", JSON.stringify(stock));
  dernierTicket = {
    date: new Date().toISOString(),
    articles: articlesVendus,
    montant: totalVente
  };
  // Enregistre la vente du jour
  const ventes = JSON.parse(localStorage.getItem("ventes")) || [];
  ventes.push({ ...dernierTicket });
  localStorage.setItem("ventes", JSON.stringify(ventes));

  panier = [];
  afficherPanier();
  afficherStock();
  if (typeof updateAcceuil === "function") updateAcceuil();
  genererTicket(dernierTicket);
  alert("Vente validée ! Le ticket est prêt à imprimer.");
}


window.ajouterAuPanier = ajouterAuPanier;
window.retirerDuPanier = retirerDuPanier;


afficherPanier();

///////////////////////parametre/////////////////////////////
const section_apropos = document.getElementById("section_apropos");
const section_parametre = document.getElementById("section_parametre");
const modifier_password = document.getElementById("modifier_password");
const deconnexion2 = document.getElementById("deconnexion2")
const section_modifier_password = document.getElementById("section_modifier_password");
const apropos = document.getElementById("apropos");
const retu = document.getElementById("retu");
Parametre.addEventListener("click",()=>{
  section_parametre.classList.remove("hidden");
   gsap.fromTo(section_parametre, 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 0.8}
  );
})
deconnexion2.addEventListener("click",()=>{
  window.location.href="index.html"
})
retu.addEventListener("click",()=>{
    // section_parametre.classList.add("hidden");
    gsap.to(section_parametre, {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => section_parametre.classList.add("hidden")
  });
})
sections.forEach(section=>{
  section.addEventListener("click",()=>{
    // section_parametre.classList.add("hidden")
      gsap.to(section_parametre, {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => section_parametre.classList.add("hidden")
  });
  })
})

apropos.addEventListener("click",()=>{
  section_apropos.classList.remove("hidden");
    gsap.fromTo(section_apropos, 
    { opacity: 0, x: 50 }, 
    { opacity: 1, x: 0, duration: 0.8}
  );
})
section_modifier_password.addEventListener("click",()=>{
  modifier_password.classList.remove("hidden");
    gsap.fromTo(modifier_password, 
    { opacity: 0, x: 50 }, 
    { opacity: 1, x: 0, duration: 0.8}
  );
})
const svg_retoure = document.querySelectorAll(".svg_retoure");
svg_retoure.forEach(svg=>{
  svg.addEventListener("click",()=>{
    gsap.to(modifier_password,{
    opacity: 0,
    x: -50,
    duration: 0.5,
    onComplete: () =>{
      // section_apropos.classList.add("hidden");
      modifier_password.classList.add("hidden");
    } 
  });
   gsap.to(section_apropos,{
    opacity: 0,
    x: -50,
    duration: 0.5,
    onComplete: () =>{
      section_apropos.classList.add("hidden");
    } 
  });
})
})

//======================modification du mot de passe=====================
document.getElementById("confirmer_modification").addEventListener("click", () => {
  const input_ancien = document.getElementById("input_ancien").value;
      // let users = JSON.parse(localStorage.getItem("users")) || [];
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.password === input_ancien);
  if (user) {
    const input_nouveau = document.getElementById("input_nouveau").value;
    const confirmer_nouveau = document.getElementById("confirmer_nouveau").value;

    if (input_nouveau === confirmer_nouveau) {
      user.password = input_nouveau; 
      localStorage.setItem("users", JSON.stringify(users));
      alert("Mot de passe modifié avec succès");
    } else {
      alert("Les nouveaux mots de passe ne correspondent pas");
    }
  } else {
    alert("Ancien mot de passe incorrect");
  }
});
//=================================impression ticket===============================
// function genererTicket() {
//   const panier =  JSON.parse(localStorage.getItem("panier"))||[];
//   const contenu = document.getElementById("contenu-ticket");
//   const totalEl = document.getElementById("total-ticket");
//   const dateEl = document.getElementById("date-ticket");

//   let total = 0;
//   contenu.innerHTML = "";

//   panier.forEach(p => {
//     const ligne = `${p.nom} -${p.quantite} - ${p.prix} -${p.prix * p.quantite}`;
//     // const div = document.createElement("div");
//     // div.textContent = ligne;
//     // contenu.appendChild(div);
//     contenu.innerHTML+=ligne
//     total += p.prix * p.quantite;
//   });

//   totalEl.textContent = total;
//   dateEl.textContent = new Date().toLocaleString();
// }

// function imprimerTicket() {
//   genererTicket();
//   const ticket = document.getElementById("ticket").innerHTML;
//   const win = window.open("", "", "width=400,height=600");
//   win.document.write("<html><body>" + ticket + "</body></html>");
//   win.print();
//   win.close();
// }

  const contenu_ticket = document.getElementById("contenu-ticket");
//==========================changer theme=============================
function afficherHistoriqueVentes(filtre = "") {
  const table = document.getElementById("table_historique");
  if (!table) return;
  let ventes = JSON.parse(localStorage.getItem("ventes")) || [];
  // Filtrer si recherche
  if (filtre.trim() !== "") {
    const recherche = filtre.toLowerCase();
    ventes = ventes.filter(v => {
      const produits = (v.articles || []).map(article => article.nom).join(" ");
      return `${produits} ${v.produit || ""} ${v.date || ""}`.toLowerCase().includes(recherche);
    });
  }
  table.innerHTML = "";
  ventes.forEach(v => {
    const articles = v.articles || [{ nom: v.produit || "Vente", quantite: v.quantite || 1, prix: v.prix_total || v.montant || 0 }];
    articles.forEach(article => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="py-2 px-4">${new Date(v.date).toLocaleString("fr-FR")}</td>
        <td class="py-2 px-4">${article.nom}</td>
        <td class="py-2 px-4">${article.quantite}</td>
        <td class="py-2 px-4">${article.prix * article.quantite} FC</td>
        <td class="py-2 px-4">${v.vendu_par || ""}</td>
      `;
      table.appendChild(tr);
    });
  });
}
document.addEventListener("DOMContentLoaded", function() {
  afficherHistoriqueVentes();

  // Recherche dynamique
  const recherche = document.getElementById("recherche_historique");
  if (recherche) {
    recherche.addEventListener("input", function() {
      afficherHistoriqueVentes(this.value);
    });
  }
});

// Générer le contenu du ticket
function genererTicket(vente = dernierTicket || { articles: panier, montant: panier.reduce((total, item) => total + item.prix * item.quantite, 0), date: new Date().toISOString() }) {
  const ticketDiv = document.getElementById("contenu-ticket");
  const totalDiv = document.getElementById("total-ticket");
  const dateDiv = document.getElementById("date-ticket");
  const ticket = document.getElementById("ticket");
  if (!ticketDiv || !totalDiv || !dateDiv || !ticket) return;
  ticketDiv.innerHTML = "";
  vente.articles.forEach(item => {
    ticketDiv.innerHTML += `<div>${item.nom} x${item.quantite} - ${item.prix * item.quantite} FC</div>`;
  });
  totalDiv.textContent = vente.montant + " FC";
  dateDiv.textContent = new Date(vente.date).toLocaleString("fr-FR");
  ticket.classList.remove("hidden");
}

// Afficher le ticket quand on clique sur le bouton "ticket"
const btnTicket = document.getElementById("btn_ticket");
if (btnTicket) {
  btnTicket.addEventListener("click", function() {
    genererTicket();
  });
}

// Optionnel : imprimer le ticket
const btnImprimer = document.getElementById("btn_imprimer_ticket");
if (btnImprimer) {
  btnImprimer.addEventListener("click", function() {
    genererTicket();
    const ticketElement = document.getElementById("ticket");
    if (!ticketElement) return;
    const ticketCopie = ticketElement.cloneNode(true);
    ticketCopie.querySelector("#btn_imprimer_ticket")?.remove();
    const ticketContent = ticketCopie.innerHTML;
    const win = window.open("", "", "width=400,height=600");
    if (!win) {
      alert("Autorisez les fenêtres pop-up pour imprimer le ticket.");
      return;
    }
    win.document.write("<html><body>" + ticketContent + "</body></html>");
    win.document.close();
    win.print();
    win.close();
  });
}


