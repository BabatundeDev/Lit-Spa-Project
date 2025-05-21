import { LitElement, html, css } from "lit";

class ImageTransition extends LitElement {
  static properties = {
    page: { type: String } 
  };

  static styles = css`
    :host {
      display: block;
      overflow: hidden;
      height: 100vh;
      background: #000;
    }

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      z-index: 10;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .slides {
      display: flex;
      width: 300vw;
      animation: slideAnim 9s infinite;
    }

    .slide {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }

    .page {
      color: white;
      padding-top: 100px;
      text-align: center;
      font-size: 2rem;
    }

    @keyframes slideAnim {
      0% { transform: translateX(0); }
      33% { transform: translateX(-100vw); }
      66% { transform: translateX(-200vw); }
      100% { transform: translateX(0); }
    }
  `;

  constructor() {
    super();
    this.page = 'home';
  }

  render() {
    return html`
      <nav class="nav">
        <button @click=${() => this.page = 'home'}>Home</button>
        <button @click=${() => this.page = 'about'}>About</button>
        <button @click=${() => this.page = 'contact'}>Contact</button>
      </nav>

      ${this.page === 'home' ? html`
        <section class="content">
          <div class="slides">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=80" class="slide" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1000&q=80" class="slide" />
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80" class="slide" />
          </div>
        </section>
      ` : ''}

      ${this.page === 'about' ? html`<div class="page">This is the About page.</div>` : ''}
      ${this.page === 'contact' ? html`<div class="page">This is the Contact page.</div>` : ''}
    `;
  }
}

customElements.define("image-transition", ImageTransition);
