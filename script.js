const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liter')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
});

function highlightCups(idx) {
  if(smallCups[idx].classlist.contains('full') && !smallCups
   [idx].nextElementSibling.classlist.contains('full')) {
     idx--
}

smallCups.forEach((cup, idx2) => {
  if(idx2 <= idx) {
    cup.classlist.add('full')
  }else {
    cup.classlist.remove('full')
  }
})

updateBigCup()

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

if(fullCups=== ) {
  percentage.style.visibility = 'hidden'
  percentage.style.height = 0
}else {
  percentage.style.visibility = 'visible'
  percentage.style.height = ${fullCups / totalCups *
  330}px`
  percentage.innerText = ${fullCups / totalCups * 100}%`
}

if(fullCups === totalCups) {
  remained.style.visibility = 'hidden'S
  remained.style.height = 0
} else{
  remained.style.visibility = 'visible'
  listers.innerText = `${2 - (250 * fullCups / 1000)}L`
}
}
