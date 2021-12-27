import '../script/component/app-bar.js';
import '../script/component/content-header.js';
import './component/covid-report.js';
import './component/content-footer.js';

const main = () => {
    const baseUrl = 'https://covid19.mathdro.id/api/countries/Indonesia/';

    const getData = () => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(results => {
                const covidReportElement = document.querySelector('covid-report');
                covidReportElement.covidItem = results;
            })
            .catch(() => showMessage());
    };

    const showMessage = (message = 'Periksa koneksi internet anda...') =>{
        alert(message);
    };

    getData();
};

export default main;