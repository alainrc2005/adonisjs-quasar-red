'use strict'

const crypto = use('crypto')

const str_random = async (length = 40) => {
    let str = ''
    let len = str.length

    if (len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = Buffer.from(bytes)

        str += buffer
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '')
            .substr(0, size)
    }

    return str
}

module.exports = {
    str_random
}