let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Axis [083128734012]
├ BYU [085157336614]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [083128734012]
├ https://saweria.co/ariffb
└────

Dukung stikerin hanya dengan membuka link dibawah ini, dan ikuti tujuannya
https://semawur.com/dukungstikerin
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
