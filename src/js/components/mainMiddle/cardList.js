export class CardList {
  #cards = null
  #dom = null
  constructor(cards = []) {
    this.#cards = cards
  }

  build = () => {
    this.#dom = document.createElement('div');
    this.#dom.classList.add('card');
    this.#cards.forEach(card => {
      this.#dom.appendChild(new Card(card).build())
    })

    return this.#dom
  }

  get dom() {
    return this.#dom
  }
}

class Card {
  #card = null
  #dom = null
  constructor(card = []) {
    this.#card = card
  }

  build = () => {
    this.#dom = document.createElement('div');
    this.#dom.classList.add('info');
    this.#dom.appendChild(new InfoProfile(this.#card.profile).build())
    this.#dom.appendChild(new InfoPicture(this.#card.picture).build())
    this.#dom.appendChild(new InfoControl(this.#card.control).build())
    this.#dom.appendChild(new InfoComment(this.#card.comment).build())

    return this.#dom
  }

  get dom() {
    return this.#dom
  }
}

class InfoProfile {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    this.#dom = document.createElement('div');
    this.#dom.classList.add('info-profile');

    this.#dom.innerHTML = `
      <div class="profile">
        <div class="profile-photo">
          <img alt="profile photo" src="${this.#info.src}">
        </div>
        <div class="profile-description">
          <h2>${this.#info.name}</h2>
          <p>${this.#info.position}, ${this.#info.time}</p>
        </div>
      </div>
      <i class="uil uil-ellipsis-h"></i>
    `

    return this.#dom
  }

  get dom() {
    return this.#dom
  }
}

class InfoPicture {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    this.#dom = document.createElement('div');
    this.#dom.classList.add('info-picture');

    this.#dom.innerHTML = `
      <img alt="picture" src="${this.#info.img_src}">
    `

    return this.#dom
  }

  get dom() {
    return this.#dom
  }
}

class InfoControl {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    this.#dom = document.createElement('div')
    this.#dom.classList.add('info-control')
    this.#dom.innerHTML = `
      <div class="main-control">
        <i class="uil uil-heart control_heart"></i>
        <i class="uil uil-comment-dots"></i>
        <i class="uil uil-share-alt"></i>
      </div>
      <i class="uil uil-bookmark"></i>
    `
    return this.#dom
  }

  get dom() {
    return this.#dom
  }
}

class InfoComment {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    this.#dom = document.createElement('div');
    this.#dom.classList.add('info-comment');

    this.#createProfileList(this.#dom)
    this.#createCommentInfo(this.#dom)
    this.#createViewBtn(this.#dom)

    return this.#dom
  }

  get dom() {
    return this.#dom
  }

  #createProfileList = (fatherDom) => {
    const dom = document.createElement('div')
    dom.classList.add('profile-photo-list')

    this.#createPhotoList(dom)
    this.#createLikeInfo(dom)
    fatherDom?.appendChild(dom)
  }

  #createPhotoList = (fatherDom) => {
    this.#info.img_src_list.forEach(url => {
      const img = document.createElement('img')
      img.classList.add('profile-photo')
      img.src = url
      fatherDom?.appendChild(img)
    })
  }
  #createLikeInfo = (fatherDom) => {
    const dom = document.createElement('span')
    dom.classList.add('like-info')
    dom.innerHTML = `
      Liked by <strong> ${this.#info.first_people_name}</strong> and <strong> ${this.#info.like_peoples_number}</strong> others
    `
    fatherDom?.appendChild(dom)
  }

  #createCommentInfo = (fatherDom) => {
    const dom = document.createElement('span')
    dom.classList.add('comment-info')
    dom.textContent = this.#info.comment_info
    fatherDom?.appendChild(dom)
  }

  #createViewBtn = (fatherDom) => {
    const dom = document.createElement('span')
    dom.classList.add('view-btn')
    dom.textContent = `View all ${this.#info.view_number} comments`
    fatherDom?.appendChild(dom)
  }

}