export default class Playlist {
    constructor(name = String, description = String, href = String) {
        this.name = name
        this.description = description
        this.href = href
    }
    setName(name) {
        this.name = name
    }
    setDescription(description) {
        this.description = description
    }
    setHref(href) {
        this.href = href
    }
}