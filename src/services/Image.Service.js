import Tesseract from "tesseract.js";
import fs from "fs"
export const extractText = async (imagePath) => {
    try {
        const { data: { text } } = await Tesseract.recognize(imagePath, "eng");
        fs.unlinkSync(filePath);
        return text;
    } catch (error) {
        console.error("Error extracting text from image:", error);
        throw error;
    }
};
