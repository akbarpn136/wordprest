export const setBerita = (state, payload) => {
    state.berita.push(payload)
}

export const resetBerita = (state, payload) => {
    state.berita = []
}
