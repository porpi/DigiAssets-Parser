'use strict'

var DigiAssetDataTypes = require('./digiAssetDataTypes')

module.exports = function (sequelize, DataTypes) {
  var AssetsTransactions = sequelize.define('assetstransactions', {
    assetId: {
      type: DigiAssetDataTypes.ASSETID,
      primaryKey: true
    },
    txid: {
      type: DigiAssetDataTypes.HASH,
      primaryKey: true
    },
    type: {
      type: DigiAssetDataTypes,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function (models) {
        AssetsTransactions.belongsTo(models.assets, { foreignKey: 'assetId', as: 'asset' })
        AssetsTransactions.belongsTo(models.transactions, { foreignKey: 'txid', as: 'transaction' })
      }
    },
    indexes: [
      {
        fields: ['assetId']
      },
      {
        fields: ['txid']
      },
      {
        fields: ['type']
      },
      {
        fields: ['assetId', 'type']
      }
    ],
    timestamps: false
  })

  return AssetsTransactions
}