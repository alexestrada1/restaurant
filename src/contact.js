function createContactPage() {
  const contact = document.createElement("div");
  const contactHeader = document.createElement("h2");
  contactHeader.innerHTML = "Contact";
  contact.appendChild(contactHeader);

  contact.appendChild(createContact(
    'Stan',
    'Student',
    '555-555-5555',
    'StanMarsh@gmail.com'
  ))
  contact.appendChild(createContact(
    'Kyle',
    'Student',
    '555-555-5555',
    'KyleBrofloski@gmail.com'
  ))
  contact.appendChild(createContact(
    'cartman',
    'Student',
    '555-555-5555',
    'EricCartmanh@gmail.com'
  ))
  contact.appendChild(createContact(
    'kenny',
    'Student',
    '555-555-5555',
    'KennyMcCormick@gmail.com'
  ))

  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(contact);
  
}
function createContact(name, occupation, number, email){
    const contact = document.createElement('div')
    const contactName = document.createElement('h3')
    contactName.innerHTML = name
    contact.appendChild(contactName)

    const job = document.createElement('p');
    job.innerHTML = occupation
    const phone = document.createElement('p');
    phone.innerHTML = number
    const mail  = document.createElement('p');
    mail.innerHTML = email
    
    contact.appendChild(job)
    contact.appendChild(phone)
    contact.appendChild(mail)
    return contact;
}
export default createContactPage;
