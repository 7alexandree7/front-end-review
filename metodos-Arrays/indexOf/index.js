const profissoes = ['progamador', 'medico', 'segurança', 'policial']

const acharProfissao = profissoes.includes(('progamador'))

if (acharProfissao) {
    const posicao = profissoes.indexOf('progamador')
    console.log(`existe progamador na lista de trabalho e seu indice na lista é ${posicao}`)
}