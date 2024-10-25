enum MimeType2 {
    JPEG,
    PNG,
    PDF 
}

enum MimeType4 {
    JPEG = <any>'image/jpeg',
    PNG = <any>'image/png',
    PDF = <any>'application/pdf'
}

enum MimeType3 {
    JPEG = "image/jpeg",
    PNG = "image/png",
    PDF = "application/pdf"
}

enum MyType {
    Value = 3,
    ValueEx = 30,
    ValueEx2 = 300
}

enum FancyType {
    OneArr = <any>[1],
    TwoArr = <any>[2, 2],
    ThreeArr = <any>[3, 3, 3]
 }

 // becomes

//  var FancyType2;
//      (function (FancyType2) {
//         FancyType2[FancyType2["OneArr"] = [1]] = "OneArr";
//         FancyType2[FancyType2["TwoArr"] = [2, 2]] = "TwoArr";
//         FancyType2[FancyType2["ThreeArr"] = [3, 3, 3]] = "ThreeArr";
// })(FancyType2 || (FancyType2 = {}));
