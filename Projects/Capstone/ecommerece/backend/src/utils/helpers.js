//convert name to slug

const toSlug = (str) => {
    return str
    .toLowerCase()
    .replace(/[\s_]+/g,'-')
    .replace(/[^\w-]+/g,'')
}

module.exports = {
    toSlug
}