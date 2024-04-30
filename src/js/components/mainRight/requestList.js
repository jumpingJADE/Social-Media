export class RequestList {
  constructor(info) {
    this.info = info
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('request-list');
    this.dom.innerHTML = `
      <h1>Requests</h1>
    `

    this.info.forEach(item => {
      this.dom.appendChild(new Request(item).build())
    })

    return this.dom
  }
}

class Request {
  constructor(info) {
    this.src = info.src
    this.name = info.name
    this.mutualFriendNum = info.mutualFriendNum
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('request');

    this.dom.innerHTML = `
      <div class = "profile">
        <div class="profile-photo">
          <img alt="profile photo" src="${this.src}">
        </div>
        <div class="profile-description">
          <h2>${this.name}</h2>
          <p>${this.mutualFriendNum} Mutual Friends</p>
        </div>
      </div>

      <div class="request-btn-group">
        <button class="btn btn-primary">Accept</button>
        <button class="btn btn-cancel">Decline</button>
      </div>
    `

    return this.dom
  }
}