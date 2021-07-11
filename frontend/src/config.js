const env = process.env.REACT_APP_ENV

let domain = 'localhost:8000'

if (env === 'test') {
    domain = 'localhost:8010'
} else if (env === 'production') {
    domain = '206.189.102.172:8000'
}

export const apiDomain = domain
export const faceBookId = process.env.REACT_APP_FACEBOOK_APP_ID