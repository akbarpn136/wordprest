import axios from 'axios'


export const fetchBerita = (state) => {
    return axios.get('http://127.0.0.1:8080/wp-json/wp/v2/posts', {
        params: {
            _embed: true
        }
    })
}

