
class Challenge {

  rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }

  check(number) {
    this.answer = this.answer.toString()
    if(number === this.answer || outputClass.classList.contains('lose')) {
      outputClass.classList.remove('lose')
      outputClass.classList.add('win')
    } else {
      outputClass.classList.add('lose')
    }
  }


  render() {
    outputClass.classList.remove('win')
    outputClass.classList.remove('lose')

    let isDone = false
    while (!isDone) {
      this.first = this.rand(12, 200)
      this.second = this.rand(2, 10)
      this.answer = (this.first / this.second) 
      if(Number.isInteger(this.answer)) {
        isDone = true
      }
    }
    return output.innerText = `${this.first} / ${this.second} = `
  }

}

const outputClass = document.querySelector('.output')
const output = document.querySelector('[data-output]')
const btn = document.querySelector('[data-btn]')
const btnCheck = document.querySelector('[data-btnCheck]')
const aswr = document.querySelector('[data-answer]')

const challenge = new Challenge() 

  btn.addEventListener('click', () => {
    challenge.render()
      aswr.value = ''
  })


  btnCheck.addEventListener('click', () => { 
    challenge.check(aswr.value)
  })