// Substitua a lógica de erro por esta que aceita .heic
img.onerror = function() {
    if (this.src.includes('.jpg')) {
        // Tenta .JPG maiúsculo
        this.src = this.src.replace('.jpg', '.JPG');
    } else if (this.src.includes('.JPG')) {
        // Se falhar o JPG, tenta o formato do iPhone
        this.src = this.src.replace('.JPG', '.heic');
    } else if (this.src.includes('.heic')) {
        // Tenta .HEIC maiúsculo
        this.src = this.src.replace('.heic', '.HEIC');
    }
};
