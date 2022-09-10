let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa 1 [083135400342]
│ • Pulsa 2 [08817839722]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [08817839722]
│ • Ovo [08817839722]
│ • Gopay [08817839722]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
