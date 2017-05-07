import axios from 'axios'

function getUserAccount() {
  return axios.get('../../../server/user-info.json');
}

function getAllPosts() {
  return axios.get('../../../server/all-posts.json');
}

export {getUserAccount, getAllPosts}