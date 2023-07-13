setTalk = (data) => {
    if (data) {
        if (data.includes('?') && data === data.toUpperCase()) {
            return '¡Cálmate, sé lo que estoy haciendo!';
        } else if (data === data.toUpperCase()) {
            return '¡Vaya, relájate!'
        } else if (data === '¿Cómo estás?') {
            return 'Bien'
        } else {
            return 'Lo que sea'
        }
    } else {
        return 'Bien. ¡Sé así!'
    }
} 
console.log(setTalk('¿Cómo estás?'))