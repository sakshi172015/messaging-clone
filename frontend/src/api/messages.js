import axios from 'axios'

const BASE_URL = "http://localhost:9000"

const getAllMessages = async() => {
    let res = await axios.get(BASE_URL + '/api/message/', {}, {
        headers: {
            'content-type': 'application/json'
          }
    })
    return res.data

}

const postMessage = async(to, from, content) => {
	let res = await axios.post(BASE_URL + '/api/message/', {
		content,
		to,
		from
	}, {
		headers: {
			'content-type': 'application/json'
		}
	})
	return res.data
}

const getUserMessages = async(to, from) => {
	let res = await axios.get(BASE_URL + '/api/message/userMessages', {
		params: {
			to,
			from
		}
	})
	return res.data
}

export { getAllMessages, postMessage, getUserMessages }