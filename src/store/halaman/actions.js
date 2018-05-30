import axios from 'axios'

export const fetchHalaman = (state) => {
    return axios.get('http://127.0.0.1:8080/wp-json/wp/v2/pages?_embed', {
        params: {
            _embed: true
        }
    })
}
