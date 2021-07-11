const env = process.env.REACT_APP_ENV

let domain = 'http://localhost:8000'

if (env === 'test') {
    domain = 'http://localhost:8010'
} else if (env === 'production') {
    domain = '64.227.79.150:8000'
}

export const apiDomain = domain
export const faceBookId = process.env.REACT_APP_FACEBOOK_APP_ID