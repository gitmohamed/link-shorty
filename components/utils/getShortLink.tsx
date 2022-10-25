
const getShortLink = async (link: string): Promise<string> => {
    return await fetch(`api/shorten?URL=${link}`).then((data) => {
        return data.json();
    }).then((data) => {
        return data.response.link
    }).catch(err => {
        console.log("Error: ", err)
    })
}

export default getShortLink