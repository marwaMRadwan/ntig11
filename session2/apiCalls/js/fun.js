
getApiData =async (link, cb) =>{
    try{
        let data = await ( await fetch(link) ).json()
        cb(data, null)
    }
    catch(e){
        cb(null, e)
    }
}
//create my own elements
//create main table