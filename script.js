// FUNZIONE PER RICHIAMARE L'API E FAR APPARIRE LE FOTO NELLA PAGINA COME CARD
const url = "https://api.pexels.com/v1/search?query="

const ricerca = document.querySelector("#ricerca")


const getPhotos = () => {


    if (ricerca.value !== "") {
        fetch(url + ricerca.value, {
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
                <div class="col col-4">
                    <div class="card mb-4">
                        <img src='${photo.src.large}' class="card-img-top img-fluid" />
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>${photo.alt}</h5>
                                <p class="card-text">Photographer: '${photo.photographer}'</p>
                            </div>
                        </div>
                    </div>
                </div>`
                }).join("")
            })
            .catch(error => console.log('error', error));
    }
    else {
        contenuto.innerHTML = "";
    }
}