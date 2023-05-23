const mongoose = require('mongoose');

// Définition du schéma de demande d'autorisation
const demande= new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateDepot: {
    type: Date,
    required: true
  },
  statut: {
    type: String,
    required: true,
    enum: ['En attente', 'Approuvée', 'Rejetée']
  },
  entreprise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entreprise'
  },
  affecter:{
    type : string,
    default:'null'
  }
});

// Création du modèle de demande d'autorisation à partir du schéma
const Demande = mongoose.model('Demande', demande);

// Export du modèle de demande d'autorisation
module.exports = Demande;
