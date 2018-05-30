export const setHalaman = (state, payload) => {
    state.halaman.push(payload)
}

export const resetHalaman = (state, payload) => {
    state.halaman = []
}
