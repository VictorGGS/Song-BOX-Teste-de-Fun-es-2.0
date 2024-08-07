const {
    validarSenha,
    validarRepeticaoSenha,
    verificarIdade,
    validarFormulario,
    contarCaracteres,
    verificarConfirmacaoSenha,
} = require('./SongBOX');

it('Testa de Senha Válida', () => {
    expect(validarSenha('20Jul2017')).toBe(true);
});

it('Testa de Senha Inválida, caracteres minusculos', () => {
    expect(validarSenha('senha')).toBe(false);
});

it('Testa de Senha Inválida, caracteres sem números', () => {
    expect(validarSenha('SENHA')).toBe(false);
});

it('Testa de Senha Inválida, poucos caracteres', () => {
    expect(validarSenha('seNha17')).toBe(false);
});

it('Testa para Senhas Iguais', () => {
    expect(validarRepeticaoSenha('20Jul2017', '20Jul2017')).toBe(true);
});

it('Testa para Senhas Diferentes', () => {
    expect(validarRepeticaoSenha('20Jul2017', 'qwert')).toBe(false);
});

it('Testa para Verificar se o Usuário é Maior Idade', () => {
    expect(verificarIdade(18)).toBe(true);
});

it('Testa para Verificar se o Usuário é Menor Idade', () => {
    expect(verificarIdade(11)).toBe(false);
});

it('Bem-Vindo ao Song BOX', () => {
    expect(validarFormulario('20Jul2017', '20Jul2017', 18, 'MG')).toBe('Seja bem-vindo ao Song BOX.');
});

it('Contagem dos Caracteres em Comentários', () => {
    expect(contarCaracteres('Texto')).toBe('5/200 caracteres');
});

it('Testa para Confirmar Senha', () => {
    expect(verificarConfirmacaoSenha('20Jul2017', '20Jul2017')).toBe('Senhas Batem');
});

it('Testa para Confirmar Senha', () => {
    expect(verificarConfirmacaoSenha('20Jul2017', 'qwert')).toBe('Senhas não Batem');
});