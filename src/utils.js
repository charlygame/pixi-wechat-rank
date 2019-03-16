/**
 * 将ArrayBuffer转为字符串
 * @param {} buf 
 */
export function ab2str(buf) {
  return String.fromCharCode.apply(null, new Int8Array(buf));
}

/**
 * 将字符串转为ArrayBuffer 
 */
export function str2ab(str) {
  var buf = new ArrayBuffer(str.length); // 2 bytes for each char
  var bufView = new Int8Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}


