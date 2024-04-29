export class Profile {
  // 固有属性
  img_src = null;
  name = null;
  info = null;
  //构造器
  // const profile = new
  constructor(img_src, name, info){
    this.img_src = img_src;
    this.name = name;
    this.info = info;
  }
  // 固有方法
  build() {
    const profile = document.createElement('a')
    profile.classList.add('profile')
    profile.innerHTML = `
    <div class="profile-photo">
    <img alt="profile photo" src = "${this.img_src}">
  </div>
  <div class="profile-description">
  <h2>${this.name}</h2>
  <p>${this.info}</p>
  </div>
    `
    return profile;
  }
}