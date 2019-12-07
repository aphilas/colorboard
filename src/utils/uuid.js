const ID = (_ => {
  const ids = []
  
  const get = _ => {
    let id = Math.random().toString(36).substr(2, 9)
  
    while(ids.includes(id)) {
      console.log('Match found!')
      id = Math.random().toString(36).substr(2, 9)
    }

    return id
  }

  return {
    get,
  }
})()

export default ID