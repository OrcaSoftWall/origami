const getOrigami = async (length, user) => {
    const promise = await fetch(`http://localhost:9999/api/origami?length=${length}&user=${user}`)
    const origamis = await promise.json()
    return origamis
  }

export default getOrigami