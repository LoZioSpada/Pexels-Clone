// FUNZIONE PER RICHIAMARE L'API E FAR APPARIRE LE FOTO NELLA PAGINA COME CARD
const url = "https://api.pexels.com/v1/search?query="

const getPhotos = (query) => {

    fetch(url + query, {
        headers: {
            Authorization: "ov8uL2jcCXt25GvOv7oMlt03RLy3xj9UndWMqixkRcdZu6z76Sb0DpVI",
        },
    })
        .then(response => response.json())
        .then(result => {
            let contenuto = document.querySelector(".album .row")
            contenuto.innerHTML = result.photos.map((photo) => {
                // QUI ANDRO' A CREARE LE MIE CARD 
                return `
                <div class="col col-3">
                    <div class="card">
                        <img src='${photo.src.medium}' class="card-img-top" />
                        <div class="card-body">
                            <h5>${photo.alt}</h5>
                            <p class="card-text">Photographer: '${photo.photographer}'</p>
                        </div>
                    </div>
                </div>`
            }).join("")
        })
        .catch(error => console.log('error', error));
}