class ContentFooter extends HTMLElement{
  connectedCallback(){
      this.render();
  }

  render(){
      this.innerHTML = `<div class="container text-center mt-4">
      <p class="footer text-white">&copy; 2021. Dibuat oleh Veri iswanto</p>
    </div>`;
  }
}

customElements.define('content-footer', ContentFooter);