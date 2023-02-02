function hyphenate (title) {
  let lowerCaseTitle = title.toLowerCase()
  let hyphenatedTitle = /\s/g[Symbol.replace](lowerCaseTitle, '-')
  return hyphenatedTitle
}

export default hyphenate