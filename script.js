const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject (Error('Invalid ID'))
            } else if (id > 10) {
                resolve({
                    success: false,
                    id: id,
                    message: 'User Not Found!'
                })
            } else {
                reject({
                    success: true,
                    id: id,
                    message: 'User Found'
                })
            }
        }, 2000)
    })
}


// Promise Chaining
const handleOnClick1 = () => {
    console.log('Promise chaining clicked...')
    getUser(11)
        .then(result => {
            console.log('Promise chaining', result)
            const { success, id, message } = result
            document.querySelector('#hasil2').innerText = `Promise Chaining\n\nSuccess: ${success}\nID: ${id}\nMessage: ${message}`
        })
        .catch(err => console.log(err))
}

// Promise All
const handleOnClick2 = () => {
    console.log('Promise All clicked...')
    Promise.all([getUser(11)])
        .then(result => {
            console.log('Promise all', result)
            const { success, id, message } = result[0]
            document.querySelector('#hasil2').innerText = `Promise All\n\nSuccess: ${success}\nID: ${id}\nMessage: ${message}`
        })
        .catch(err => console.log(err))
}

// Async Await
const handleOnClick3 = async () => {
    console.log('Async Await clicked...')
    try {
        const result = await getUser(11)
        console.log('Async await', result)
        const { success, id, message } = result
            document.querySelector('#hasil2').innerText = `Async Await\n\nSuccess: ${success}\nID: ${id}\nMessage: ${message}`
    } catch (err) {
        console.log(err)
    }
}



// 1. Ubah studi kasus di modul pakai Promise.all
const getFirstName = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            return (true) ? resolve('Binar') : reject(Error('Gagal'))
        }, 1000)
    })
    return promise;
}

const getLastName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return (true) ?
                resolve(`Academy`) : reject(Error('Gagal ke-2'))
        }, 1000)
    })

}

const handleOnClick = () => {
    console.log('Clicked...');
    // let a = getFirstName()
    // let b = getLastName()

    Promise.all([getFirstName(), getLastName()]).then(result => {
        // Promise.all([a, b]).then(result => {
        // const [firstName, lastName] = result
        // let fullName = `${firstName} ${lastName}`
        // document.querySelector('#hasil').innerText = fullName

        document.querySelector('#hasil').innerText = `${result[0]} ${result[1]}`
    }).catch(err => console.log(err))
}
