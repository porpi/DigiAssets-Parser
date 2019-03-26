'use strict'

var DigiAssetDataTypes = require('./digiAssetDataTypes')

module.exports = function (sequelize, DataTypes) {
  var AddressesTransactions = sequelize.define('addressestransactions', {
    txid: {
      type: DigiAssetDataTypes.HASH,
      primaryKey: true
    },
    address: {
      type: DigiAssetDataTypes.ADDRESS,
      primaryKey: true
    }
  },
  {
    classMethods: {
      associate: function (models) {
        AddressesTransactions.belongsTo(models.transactions, { foreignKey: 'txid', as: 'transaction' })
      }
    },
    indexes: [
      {
        fields: ['txid']
      },
      {
        fields: ['address']
      }
    ],
    timestamps: false
  })

  return AddressesTransactions
}