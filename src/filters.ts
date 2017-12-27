export default {
  dateConvert (time) {
    return time ? (new Date(time) as any).Format('yyyy-MM-dd hh:mm') : ''
  },
  dayConvert (time) {
    return time ? (new Date(time) as any).Format('yyyy-MM-dd') : ''
  }
}