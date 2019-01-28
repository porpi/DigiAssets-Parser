# DigiAssets Block Parser

Connects to DigiByted (Json RPC) and parse the blockchain into mongodb including DigiAssets asset data, utxo's for address and much more.

### Installation

```sh
$ npm i cc-block-parser
```


### Settings

```js
var settings = {
  debug:
  properties:
  logger:
  next_hash:
  last_hash:
  last_block:
  last_fully_parsed_block:
  Blocks:
  RawTransactions:
  Utxo:
  AddressesTransactions:
  AddressesUtxos:
  AssetsTransactions:
  AssetsUtxos:
  AssetsAddresses:
  host:
  port:
  user:
  pass:
  path:
  timeout:
}
```

License
----

MIT

[mocha]:https://www.npmjs.com/package/mocha
