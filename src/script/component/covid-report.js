import css from 'bootstrap/dist/css/bootstrap.min.css';
import customCss from '../../style/style.css';
import font from '@fortawesome/fontawesome-free/css/all.css';

class CovidReport extends HTMLElement{

    set covidItem(item){
        this._covidItem = item;
        this.render();
    }

    render(){
        console.log(css);
        const dateUpdated = new Date(this._covidItem.lastUpdate);
        const monthNames = ['Januari','Februari','Maret','Aprl','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        this.innerHTML = '';
        this.innerHTML = `
                          <style>
                              ${css}
                              ${customCss}
                              ${font}
                          </style>
                          <div class="container mt-5">
                            <div class="row">
                              <div class="col-sm-4">
                                <div class="card bg-success">
                                  <div class="card-body">
                                    <h5 class="card-title">Sembuh <span><i class="far fa-smile"></i></span>
                                    
                                    </h5>
                                    <h3>${this._covidItem.recovered.value}</h3>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4">
                                <div class="card bg-warning">
                                  <div class="card-body">
                                    <h5 class="card-title">Dirawat <span><i class="far fa-hospital"></i>
                                    
                                    </h5>
                                    <h3>${this._covidItem.confirmed.value}</h3>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4">
                                <div class="card bg-danger">
                                  <div class="card-body">
                                    <h5 class="card-title">Meninggal <span><i class="fas fa-skull-crossbones"></i></span>
                                    </h5>
                                    <h3>${this._covidItem.deaths.value}</h3>
                                  </div>
                                </div>
                              </div>

                              <div class="col-lg-12 text-white text-center mt-3 mb-4">
                                  <h3>Live Report</h3>
                                  <p class="text-white">
                                      Jumlah pasien yang terinfeksi covid-19 di negara Indonesia. Update data terakhir ${dateUpdated.getDate()} ${monthNames[dateUpdated.getMonth()]} ${dateUpdated.getFullYear()}.
                                  </p>
                              </div>
                            </div>
                          </div>
      `;
    }
}

customElements.define('covid-report',CovidReport);