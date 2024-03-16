export const CallApi = (dateBase, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dateBase)
        reject (new Error("algo salio mal") )
      }, time)
    })
  }