'use strict'

var DigiAssetDataTypes = require('./digiAssetDataTypes')

module.exports = function (sequelize, DataTypes) {
  var AssetsOutputs = sequelize.define('assetsoutputs', {
    assetId: {
      type: DigiAssetDataTypes.ASSETID,
      primaryKey: true
    },
    output_id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    index_in_output: {
      type: 'SMALLINT',
      primaryKey: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    issueTxid: {
      type: DigiAssetDataTypes.HASH,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function (models) {
        AssetsOutputs.belongsTo(models.outputs, { foreignKey: 'output_id', as: 'output' })
        AssetsOutputs.belongsTo(models.assets, { foreignKey: 'assetId', as: 'asset' })
      }
    },
    indexes: [
      {
        fields: ['assetId']
      },
      {
        fields: ['output_id']
      },
      {
        fields: ['output_id', 'index_in_output']
      }
    ],
    timestamps: false
  })

  return AssetsOutputs
}