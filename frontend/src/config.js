const env = process.env.REACT_APP_ENV

let domain = 'http://localhost:8000'

if (env === 'test') {
    domain = 'http://localhost:8010'
}

export const apiDomain = domain
export const faceBookId = process.env.REACT_APP_FACEBOOK_APP_ID