class  ContentHeader extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="container mt-md-2">
        <div class="row align-items-center">
          <div class="col-12 text-xs-center text-center text-lg-left">
            <div class="header-caption px-4 py-1">
              Lebih dari 188+ negara telah terinfeksi
            </div>
            <h1 class="text-danger header-text pt-2">WASPADA <span class="text-danger">COVID-19</span></h1>
            <p class=" text-black mt-3 mb-5 text-justify">
              Infeksi virus Corona disebut COVID-19 (Corona Virus Disease 2019) dan pertama kali ditemukan di kota Wuhan,
              China pada akhir Desember 2019.
            </p>
            <a href="https://covid19.go.id/" target="_blank"
              class="mt-2 text-decoration-none btn-corona-detail d-inline-block">
              <h2 class="text-info">Tentang Covid-19</h2>
            </a>
          </div>
          <div class="col-12 col-lg-4 position-relative illustration text-center">
            
          </div>
        </div>
      </div>`;
    }
}

customElements.define('content-header', ContentHeader);