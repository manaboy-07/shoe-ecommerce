export default class Lightbox {
    static activate(){
        document.body.insertAdjacentHTML('beforeend', `
        <div class='lightbox id='lightbox' >
          
        </div>`)
    }
}