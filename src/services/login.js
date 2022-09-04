export default function login({username, password}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'arian' && password === '123123') {
                resolve('test_jwt')
            }

            reject(new Error('Invalid credentials'))
        }, 1000)
    })
}
