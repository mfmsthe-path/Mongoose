const mongoose = require('mongoose');
// URI de connexion MongoDB
const mongoURI = process.env.MONGO_URI;
// Connexion à MongoDB avec URI et options
mongoose.connect('mongodb://localhost:27017/Mydtb')
    .then(connection => {
        console.log('Connected to MongoDB');
        // Effectuez d'autres opérations après la connexion
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });
// Définition du schéma de la personne
const personneSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  // Création du modèle de personne
const Personne = mongoose.model('Personne', personneSchema);
// Créer et enregistrer un enregistrement d'un modèle
const nouvellePersonne = new Personne({
    nom: 'Fallou',
    age: 30,
    favoriteFoods: ['Yassa', 'thiebu jeun']
  });
  nouvellePersonne.save()
  .then((donnée) => {
    if (donnée === personne)

     console.log("Document inséré avec succès !");
  })
  .catch((erreur) => {
   // console.error("Échec de l'insertion du document : " + erreur);
  });
// Créer plusieurs personnes avec Model.create()
const Tableaudeperson = [
    { nom: 'Malick', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
    { nom: 'Pape', age: 35, favoriteFoods: ['Burger', 'Salad'] }
  ];
  Personne.create(Tableaudeperson )
  .then((resultat) => {
  //  console.log(resultat);
});
   
   // Utiliser model.find() pour rechercher la base de données
   Personne.find({ nom: "Malick" })
   .then((donnée) => {
   //  console.log("Résultat de find() :", donnée);
   })
   .catch((erreur) => {
     console.log(erreur);
   });

 // Utiliser model.findOne()
 Personne.findOne({ favoriteFoods: "Yassa" })
 .then((donnée) => {
//   console.log("Résultat de findOne() :", donnée);
 })
 .catch((erreur) => {
   console.log(erreur);
 });
  // Utiliser model.findById()
  Personne.findById("65fc5f3682f8983cbad29276")
  .then((donnée) => {
 //   console.log("Résultat de findById() :", donnée);
  })
  .catch((erreur) => {
    console.log(erreur);
  });
  // Effectuer des mises à jour en recherchant, modifiant, puis enregistrant
   Personne.findById("65fc5de5a3019efe604d9141")
   .then((donnée) => {
     donnée.favoriteFoods.push("thiebu jeun");
     donnée.save();
   //  console.log("Personne mise à jour par recherche, édition, puis sauvegarde",donnée);
   })
   .catch((erreur) => {
     console.log(erreur);
   });
      // Mettre à jour un document en utilisant model.findOneAndUpdate()
      Personne.findOneAndUpdate(
        { name: "Malick" },
        { $set: { age: 40 } },
        { new: true }
      )
        .then((donnée) => {
    //      console.log("Personne mise à jour par findOneAndUpdate()",donnée);
        })
        .catch((erreur) => {
          console.log(erreur);
        });
           // Utiliser model.findByIdAndRemove
    Personne.findByIdAndDelete("65fc5de5a3019efe604d9141")
    .then((donnée) => {
      console.log("Personne supprimée",donnée);
    })
    .catch((erreur) => {
      console.log(erreur);
    });

    // Supprimer plusieurs documents avec model.remove()
    Personne.deleteOne({name:"pape"})
.then((resultat) => {
        console.log(resultat);
      });
      //Enchaîner les assistants de requête de recherche pour affiner les résultats
    Personne.find({ favoriteFoods: "Burger" })
      .sort('name')
      .limit(2)
      .select("-age")
      .then((donnée) => {
        console.log(donnée);
      })
      .catch((erreur) => {
        console.log(erreur);
      });
  





















































    
 