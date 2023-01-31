async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(0)
    node.innerText = ""
    console.log(node.type);
    await node?.type('Avoid buying loot boxes, and avoid ')
    console.log(node.type);
    
    while (true) {
      await node.type('regret...')
      await sleep(2000)
      await node.delete('regret...')
      await node.type('waisting your money...')
      await sleep(2000)
      await node.delete('waisting your money...')
      await node.type('becoming addicted...')
      await sleep(2000)
      await node.delete('becoming addicted...')
      await node.type('supporting predatory practices...')
      await sleep(2000)
      await node.delete('supporting predatory practices...')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()

  //see if there are any css styles to add
  //wrap 