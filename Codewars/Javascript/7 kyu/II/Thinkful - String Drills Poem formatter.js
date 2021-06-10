function formatPoem(poem) {
  return poem.split('. ').join('.\n')
}

const formatPoemUp = (poem) => poem.replace(/\. /g, '.\n')



// console.log(formatPoem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'))
console.log(formatPoemUp('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'))