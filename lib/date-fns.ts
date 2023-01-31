import addMinutes from 'date-fns/addMinutes'
import isAfter from 'date-fns/isAfter'

function isCodeExpired(expDate: any) {
	const now = new Date()
	return isAfter(now, expDate)
}

export { addMinutes, isCodeExpired }
