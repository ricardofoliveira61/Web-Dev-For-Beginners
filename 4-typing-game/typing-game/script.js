const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
]

let words
let wordIndex

let startTime

const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("message");
const typedValueElement = document.getElementById("typed-value");

document.getElementById("start").addEventListener("click", () => {

  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  messageElement.innerText = "";
  typedValueElement.value = "";

  words = quote.split(' ');
  wordIndex = 0;

  // UI update
  const spanWords = words.map((word) => { return `<span>${word}</span>` });
  console.log(spanWords.join(" "));
  quoteElement.innerHTML = spanWords.join(' ');
  quoteElement.childNodes[0].className = 'highlight';

  typedValueElement.focus();
  startTime = new Date().getTime();
})

// add typing logic
typedValueElement.addEventListener("input", () => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  // ending condition, if the word and wordIndex match the fianl of the quote the typing game finishes
  if (typedValue === currentWord && wordIndex === words.length - 1) {
    const elapsedTime = new Date().getTime() - startTime;
    const wordsPerMinute = words.length / (elapsedTime / 1000 / 60);
    const message = `CONGRATULATIONS! You finished with and average speed of ${wordsPerMinute} WPM`;
    messageElement.innerText = message;
    typedValueElement.value = "";
    typedValueElement.blur(); // this line removes the focus on the input element
    // moving to next word condition. If the word ends with a space and it's equal to the current word wihtou the extra space, highlight the next word
  } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
    typedValueElement.value = "";
    quoteElement.children[wordIndex].classList.remove("highlight"); // is better to use children instead of childNodes since child Nodes will also consider blanck spaces
    wordIndex++;
    quoteElement.children[wordIndex].classList.add("highlight");
    // verification if the current typed value matches the current word, this is when the typed word is yet not finished
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.classList.remove("error");
    // error condition, when none of the above is met
  } else {
    typedValueElement.className = "error"
  }
})
