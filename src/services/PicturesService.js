import { AppState } from "../AppState"
import { Picture } from "../Models/Picture"
import { logger } from "../utils/Logger"
import { nasaApi } from "./AxiosService"

const baseQuery= {
    api_key: 'mCxyMI2d1lw4VnfC7COh7lKDKGJydyubrouDBwzb',
    date: ''
}


class PicturesService {

   async getPictures(query){
    baseQuery.date = query
    const res = await nasaApi.get('',{params: baseQuery})
    // logger.log(res.data)
    const picture = new Picture(res.data)
    AppState.picture = picture
    logger.log(AppState.picture)
   }
}


export const picturesService = new PicturesService()