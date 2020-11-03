// =========================================================================
/* ---Binar, Academy--- */


const getFirstName = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return (true) ? resolve("Binar") : reject(Error("Gagal"))
      }, 2000)
    });
    return promise;
  }
  
const getLastName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return (true) ? resolve(` Academy`) : reject(Error("Gagal"))
      }, 3000)
    })
}

const handleOnClick = () => {
const hasilEl = document.querySelector("#hasil")
hasilEl.innerText = "Please wait..."
    console.log("Clicked...")
    Promise.all([getFirstName(), getLastName()])
        .then(response => {
          document.querySelector("#hasil").innerText = response
        })
        .catch(error => {
            document.querySelector("#hasil").innerText = "Error!"
            console.log(error)
        })
}


// =========================================================================
