import Tesseract from "tesseract.js";

exports.extractText = async imagePath => {
    const {data : {text}} = await Tesseract.recognize(imagePath, "eng");
    return text
}