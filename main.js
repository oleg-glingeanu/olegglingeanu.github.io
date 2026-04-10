const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
const progressBar = document.querySelector('.scroll-progress span');

function updateScrollState() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`.nav-link[href='#${section.id}']`);
    if (link) {
      const active = rect.top <= 120 && rect.bottom > 120;
      link.classList.toggle('active', active);
    }
  });
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const subject = formData.get('subject').trim() || 'Website contact request';
  const message = formData.get('message').trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message before sending.');
    return;
  }

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailtoLink = `mailto:oleg.glingeanu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', handleContactSubmit);
}

window.addEventListener('scroll', updateScrollState);
window.addEventListener('resize', updateScrollState);
updateScrollState();
