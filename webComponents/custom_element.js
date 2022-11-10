class AppFox extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        
            const foxImage=this.getAttribute('fox')
            const catImage=this.getAttribute('cat')
            this.shadowRoot.innerHTML=`
                <style>
                    .title{
                        display:flex;
                        flex-direction:column;
                        padding:20px;
                        justify-content:center;
                        align-items:center
                    }
                    .fox-container{
                        display:flex;
                        flex-direction:column;
                        padding:20px;
                        margin:50px;
                        justify-content:center;
                        align-items:center;
                    }
                    .cat-container{
                        display:flex;
                        flex-direction:column;
                        padding:20px;
                        justify-content:center;
                        align-items:center;
                    }
                    
                    .fox-image{
                        padding:50px;
                        
                    }
                    .cat-container{
                        padding:50px;
                    }
                    .foxImage{
                        width:80vh;
                        heigth:80vh
                    }
                    .catImage{
                        width:80vh;
                        heigth:80vh
                    }
                </style>
                <div class="title">
                        <slot>desconocido</slot>
                </div>
                <div class="fox-container">
                    
                    <div class="fox-subtitle">
                        <p>RANDOM FOX</p>
                    </div>
                    <div class="fox-image">
                        <img src="${foxImage}" class="foxImage" alt=""/>
                    </div>
                </div>
                <div class="cat-container">
                    <div class="cat-title">
                        <p>RANDOM CAT</p>
                    </div>
                    <div class="cat-image">
                        <img src="${catImage}" class="catImage" alt=""/>
                    </div>
                </div>
                `
        

    }
}
    window.customElements.define('app-fox',AppFox)