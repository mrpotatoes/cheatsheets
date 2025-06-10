document.querySelectorAll('.spoiler').forEach(
  (s: Node) => s.addEventListener('click',
    (e: Event) => (e.target as Element).classList.toggle('spoiler')
  ))
