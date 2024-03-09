import express from "express"

export const imageController = async(req, res) => {
    try{
        const fileName = req.file.filename;
        if(fileName){
            res.json({
                success : true,
                message : "Image uploaded successfully",
                data : fileName
            })
        }
        else{
            res.json({
                success : false,
                message : "Image not uploaded"
            })
        }  
    }catch(error){
        console.log("Error in image Controler" , error);
        res.json({
            success : false,
            message : "Something went wrong with the imageController "
        })
    }
}