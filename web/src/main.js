import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import * as bootstrap from 'bootstrap'
import './app.js'

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(
  el => new bootstrap.Tooltip(el)
)


// Installable PWA: cache the local app shell and first-party runtime assets.
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(error => {
      console.warn('Scriba offline cache registration failed:', error)
    })
  })
}

let deferredInstallPrompt = null
const installButton = document.getElementById('btn-install-app')
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()
  deferredInstallPrompt = event
  installButton?.classList.remove('d-none')
})
installButton?.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return
  deferredInstallPrompt.prompt()
  await deferredInstallPrompt.userChoice
  deferredInstallPrompt = null
  installButton.classList.add('d-none')
})
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null
  installButton?.classList.add('d-none')
})
