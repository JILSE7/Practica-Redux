
export const fileUpload = async(file)=>{

    const cloudUrl = '	https://api.cloudinary.com/v1_1/dxqnlqxa1/upload';
    //Es como el body que lleva la peticion
    const formData = new FormData();
    formData.append('upload_preset','React-journal');
    formData.append('file', file);

    try {
        const respuesta = await (await fetch(cloudUrl, {
            method: "POST",
            body: formData
        })).json()

        return respuesta.secure_url


    } catch (error) {
        throw error;
    }

    
}