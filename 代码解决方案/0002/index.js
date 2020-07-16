var str = "cat dog fish"

const res = str.split(" ").reduce((pre, cur) => {
    return pre + " " + cur.replace(/^[a-z]/, (replacement) => {
        return replacement.toUpperCase()
    })
}, "").trim()

console.log(res);