function handler(m) {
  m.reply('Chat jika penting, harap tidak spam.')
  this.sendContact(m.chat, '6283842942635@s.whatsapp.net', 'PutraXd Ofc', m)

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
