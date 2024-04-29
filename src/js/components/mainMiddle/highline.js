export class Highlight {
  constructor(info = '') {
    this.info = info
  }

  build = () => {

    this.dom = document.createElement('div');
    this.dom.classList.add('highline');

    this.info.forEach(item => {
      this.dom.appendChild(new HighlightItem(item).build())
    })

    return this.dom
  }
}

class HighlightItem {
  constructor(item = { title: '', background: '', img_src: '' }) {
    // this.title = item.title
    // this.background = item.background
    // this.img_src = item.img_src
    this.item = item
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('description');
    this.dom.style.backgroundImage = `url(${this.item.background})`
    this.dom.innerHTML = `
      <div class="profile-photo">
        <img src="${this.item.img_src}" alt="profile photo">
      </div>
      <p>${this.item.title}</p>
    `

    return this.dom
  }
}