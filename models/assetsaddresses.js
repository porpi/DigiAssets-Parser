'use strict'

var DigiAssetDataTypes = require('./digiAssetDataTypes')

module.exports = function (sequelize, DataTypes) {
  var AssetsAddresses = sequelize.define('assetsaddresses', {
    assetId: {
      type: DigiAssetDataTypes.ASSETID,
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
        AssetsAddresses.belongsTo(models.assets, { foreignKey: 'assetId', as: 'asset' })
      }
    },
    indexes: [
      {
        fields: ['assetId']
      },
      {
        fields: ['address']
      }
    ],
    timestamps: false
  })

  return AssetsAddresses
}