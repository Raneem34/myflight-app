import moment from 'moment'
// Utility function for formatting time
export const formatTime = (time, format) => moment(time).format(format);
