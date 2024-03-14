


function checkMunicipios() {
    const municipioTitles = document.querySelectorAll('.municipio__item__title');
    const munDescription = document.querySelectorAll('.municipio__description');
    municipioTitles.forEach((element, index) => {
        element.addEventListener('click', event => {
            event.stopPropagation();
            munDescription.forEach((content, ind) => {
                if (index!==ind) {
                    content.classList.remove('active');
                }
            });
            municipioTitles.forEach((content, ind) => {
                if (index!==ind) {
                    content.classList.remove('active');
                }
            });
            munDescription[index].classList.toggle('active');
            municipioTitles[index].classList.toggle('active');
        });
    });
};
checkMunicipios();

//Función del select
document.addEventListener('DOMContentLoaded', function () {
    const municipioSelect = document.getElementById('municipioSelect');
    const municipioTitles = document.querySelectorAll('.municipio__item__title');
    const munDescriptions = document.querySelectorAll('.municipio__description');

    municipioSelect.addEventListener('change', function () {
        const selectedMunicipioId = municipioSelect.value;
        munDescriptions.forEach(description => {
            if (description.id === selectedMunicipioId) {
                description.classList.add('active');
            } else {
                description.classList.remove('active');
            }
        });
        municipioTitles.forEach(title => {
            if (title.id === selectedMunicipioId) {
                title.classList.add('active');
            } else {
                title.classList.remove('active');
            }
        });
    });
});