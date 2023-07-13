/**
 * Bob es un adolescente indiferente. En la conversación, sus respuestas son muy limitadas.

Bob responde 'Claro'. si le haces una pregunta, como "¿Cómo estás?".

Él responde '¡Vaya, relájate!' si le GRITAS (en mayúsculas).

Él responde '¡Cálmate, sé lo que estoy haciendo!' si le gritas una pregunta.

Él dice 'Bien. ¡Sé así! si te diriges a él sin decir nada.

Él responde 'Lo que sea'. a cualquier otra cosa
 */
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