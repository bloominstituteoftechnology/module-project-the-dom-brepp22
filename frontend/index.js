function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section>div")
  widgets.forEach(widget => {
    widget.classList.add("widget")
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomSelect = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomSelect]
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const firstW = document.querySelector('.quoteoftheday')
  firstW.appendChild(quote)

  const authorDate = document.createElement('div')
  const {author, date} = randomQuote 
  authorDate.textContent = `${author} in ${date ? date : 'an unknown date'}`
  firstW.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomA1 = Math.floor(Math.random() * adverbs.length)
  const randomA2 = Math.floor(Math.random() * adverbs.length)
  const randomN1 = Math.floor(Math.random() * nouns.length)
  const randomN2 = Math.floor(Math.random() * nouns.length)
  const randomV1 = Math.floor(Math.random() * verbs.length)
  const randomV2 = Math.floor(Math.random() * verbs.length)
  const randomAdverb1 = adverbs[randomA1]
  const randomAdverb2 = adverbs[randomA2]
  const randomNoun1 = nouns[randomN1]
  const randomNoun2 = nouns[randomN2]
  const randomVerb1 = verbs[randomV1]
  const randomVerb2 = verbs[randomV2]
  const speak = document.createElement('div')
  speak.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1}
  in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  const secondW = document.querySelector('.corporatespeak')
  secondW.appendChild(speak)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
    const thirdW = document.querySelector('.countdown')
    let count = 5
    const countdown = document.createElement('p')
    countdown.textContent = `T-minus ${count}...`
    thirdW.appendChild(countdown)
    setInterval(() => {
      if (count === 1){
        countdown.textContent = "Liftoff! 🚀"
      } else {
        count --
        countdown.textContent = `T-minus ${count}...`
      }
    } , 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
    const person = people[Math.floor(Math.random() * people.length)]
    const paragraph = document.createElement('p')
    document.querySelector('.friends').appendChild(paragraph)
    const year = person.dateOfBirth.split('-')[0]
    let sentence = `${person.fname} ${person.lname} was born in ${year} and ` 
    if(!person.friends.length) {
      sentence += 'has no friends.'
    } else {
      sentence += 'is friends with '
      for(let i = 0; i < person.friends.length; i++) {
        const friendId = person.friends[i]
        const friend = people.find(p => p.id === friendId)
        const fullName = `${friend.fname} ${friend.lname}`
        let isLast = i === person.friends.length-1
        let nextToLast = i === person.friends.length-2
        if (isLast) {
          sentence += `${fullName}.`
        } else if (nextToLast){
          sentence += `${fullName} and `
        } else {
          sentence += `${fullName}, `
        }
      }
    }
    paragraph.textContent = sentence 
  
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgetIdx = document.querySelectorAll("section>div")
  widgetIdx.forEach((widget, idx) => {
    widget.setAttribute('tabindex' , idx + 1)
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
