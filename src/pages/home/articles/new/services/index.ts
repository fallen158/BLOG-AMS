import request from '@/utils/request'

export function fetch (data: { }) {
  return request('blog/new', { method: 'POST', data })
}
