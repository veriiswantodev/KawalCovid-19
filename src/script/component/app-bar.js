class Navbar extends HTMLElement{
  connectedCallback(){
      this.render();
  }

  render(){
      this.innerHTML = `<nav class="navbar justify-content-center p-3">
      <a href="/" class="text-decoration-none">
        <h1 class="text-light">Kawal Covid-<span class="text-danger">19</span> </h1>
      </a>
    </nav>`;
  }
}

customElements.define('app-bar',Navbar);