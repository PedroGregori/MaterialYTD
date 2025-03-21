import { validateURL } from "@distube/ytdl-core"

export const checkYtValidUrl = async (req, res, next) => {
	const { urlYt } = req.body

	try {
		if(validateURL(urlYt))
			return next()
		
	} catch (error) {
		
	}
}