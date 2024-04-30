export class FriendList {
  constructor(info) {
    this.info = info
  }
  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('friend-list');
    this.info.forEach(item => {
      this.dom.appendChild(new Friend(item).build())
    });
    return this.dom
  }
}

class Friend {
  constructor(info) {
    this.src = info.src
    this.name = info.name
    this.msg = info.msg
  }
  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('profile');
    this.dom.innerHTML = `
    <div class="profile-photo">
    <img alt="profile photo" src = "${this.src}">
  </div>
  <div class="profile-description">
  <h2>${this.name}</h2>
  <p>${this.msg}</p>
  </div>
    `
    return this.dom;
  }
}