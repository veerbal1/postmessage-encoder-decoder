# postmessage-encoder-decoder

Encoder:

```
const object = new BHMessenger();
const encodedString = object.encode({
  id: 1,
  name: "Bjoern Klatt"
})
console.log(encodedString) // 'hapag-lloyd://v1/{"id":1,"name":"Bjoern Klatt"}'
```

Decoder:

```
const object = new BHMessenger();
const decodedObject = object.decode('hapag-lloyd://v1/{"id":1,"name":"Bjoern Klatt"}')
console.log(decodedObject) // { id: 1, name: "Bjoern Klatt"}
```
