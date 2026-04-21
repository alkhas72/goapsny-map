const { tx } = require("@transifex/native");
console.log(Object.keys(tx));
console.log("cache keys:", tx.cache ? Object.keys(tx.cache) : "no cache");
