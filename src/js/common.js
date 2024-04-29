import { profile, sidebar, highline } from '/data/db.json';
import { Profile } from '@/js/components/mainLeft/profile';
import {Sidebar} from '@/js/components/mainLeft/sidebar'
import { create_post } from './components/mainLeft/createPost';
import {Highlight} from '@/js/components/mainMiddle/highline';
import { create_post as  create_middle_post} from '@/js/components/mainMiddle/createPost.js';
import { create_message } from './components/mainRight/createMessage';
/* NavBar */
export const navbar = document.querySelector('nav')
export const navbar_container = navbar.querySelector('.container')
export const navbar_container_logo = navbar_container.querySelector('.logo')
export const navbar_container_searchBar = navbar_container.querySelector('.search-bar')
export const navbar_container_create = navbar_container.querySelector('.create')
export const navbar_container_image = navbar_container.querySelector('img')

/* Main */
export const main = document.querySelector('main')
export const main_container = main.querySelector('.container')

/* Main Left */
export const main_left = main_container.querySelector('.main-left')
const left_profile_info = new Profile(profile.img_src, profile.name, profile.at).build();
main_left.appendChild(left_profile_info);
export const main_left_sidebar = new Sidebar(sidebar).dom
main_left.appendChild(main_left_sidebar)
const main_left_create_post = create_post();
main_left.appendChild(main_left_create_post)

/* Main Middle */
// 自顶向下去写的，先构建整体的框架
export const main_middle = main_container.querySelector('.main-middle')
const main_middle_highline = new Highlight(highline).build()
main_middle.appendChild(main_middle_highline)
const main_middle_post = create_middle_post(profile)
main_middle.appendChild(main_middle_post)
// const main_middle_card_list = new CardList(cards).build();
// main_middle.appendChild(main_middle_card_list)
/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */
export const main_right = main_container.querySelector('.main-right')
export const main_right_message = create_message();
main_right.appendChild(main_right_message)