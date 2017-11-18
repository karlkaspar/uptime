import Api from '@/services/Api'

export default {
  register (credentials) {
  	return Api().post('register', credentials)
  }
}
// How to call from another file
// AuthenticationServie.register({
//   email: 'testing@gmail.com',
//	 password: '123456'
// })