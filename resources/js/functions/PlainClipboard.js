import Quill from 'quill'
const Clipboard = Quill.import('modules/clipboard')
const Delta = Quill.import('delta')

class PlainClipboard extends Clipboard {
  onPaste (e) {
    e.preventDefault()
    const range = this.quill.getSelection()
    const text = e.clipboardData.getData('text/plain')
    const delta = new Delta()
    .retain(range.index)
    .delete(range.length)
    .insert(text)
    const index = text.length + range.index
    const length = 0
    this.quill.updateContents(delta, 'silent')
    this.quill.setSelection(index, length, 'silent')
    this.quill.scrollIntoView()

    let length2 = this.quill.getSelection().index;
    this.quill.insertText(length2,' ','', true);
  }
}

export default PlainClipboard