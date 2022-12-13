function encode(model, data) {
    if (!model) {
      console.error("[Protobuf][Encode] Model Not Exist:", data);
      return null;
    }
    let message = model.create(data);
    let buffer = model.encode(message).finish();
    return buffer;
  }
  
  function decode(model, data) {
    if (!model) {
      console.error("[Protobuf][Decode] Model Not Exist");
      return null;
    }
  
    let message = model.decode(data);
    return message;
  }
  
  export default {encode, decode};