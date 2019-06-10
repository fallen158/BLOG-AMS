import 'normalize.css'
import router from 'umi/router'

const token = localStorage.getItem('CY_TOKEN')
if (!token) {
  router.push('/users/login')
}

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault()
      console.error(err.message)
    }
  }
}
