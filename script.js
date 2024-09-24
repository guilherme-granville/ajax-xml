const xmlURL = 'https://folhadecianorte.com/sitemap-news.xml';

function buscarXML(){
    fetch(xmlURL)
    .then(response => response.text)
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        let noticias = xml.getElementsByTagName("url");
        let manchetesContainer = document.getElementById("manchetes");
        manchetesContainer.innerHTML = "";
        for (let i = 0; i < noticias.length; i++){
            let loc = noticias[i].getElementsByTagName("loc")[0].textContent;
            let data_publi = noticias[i].getElementsByTagName("news:publication_date")[0].textContent;
            let titulo = noticias[i].getElementsByTagName("news:title")[0].textContent;
            let manchetesHTMLclass = "<div class=notícias>";
            let manchetesHTMLclassend = "</div><hr/>";
            let h21 = "<h2>";
            let h21end = "</h2>";
            let link1 = "<a href='"
            let linkend = "'> leia mais</a>"
            let montadiv = manchetesHTMLclass + ${titulo} + h21end + link1 + ${loc} + manchetesHTMLclassend;
            manchetesContainer.innerHTML += montadiv;
        }
    }).catch (error => {console.error('erro ao carregar o xml', error);});
}
window.onload = buscarXML;