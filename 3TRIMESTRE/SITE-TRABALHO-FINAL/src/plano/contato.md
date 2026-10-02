# Documento de Requisitos: Contato — /contato

## 1. Visão Geral da Página
A página de contato deve reduzir totalmente a fricção entre o cliente e a **Velvet Coffee**. Ela serve tanto para quem quer visitar o espaço físico quanto para quem precisa enviar uma mensagem formal ou tirar dúvidas.

## 2. Informações Institucionais e Canais
*   **Endereço:** Rua Marlen, 158 Coffee Street
*   **Horário de Funcionamento:** Segunda a sábado, das 8h às 20h
*   **Instagram:** @velvetcoffee
*   **E-mail:** hello@velvetcoffee.com

## 3. Estrutura do Formulário de Contato
A página deve conter um formulário funcional com os seguintes campos obrigatórios:
1.  **Nome:** Campo de texto simples.
2.  **E-mail:** Campo com validação sintática (deve conter `@` e domínio válido).
3.  **Assunto:** Campo de texto ou menu de seleção (Dúvidas, Sugestões, Eventos).
4.  **Mensagem:** Área de texto expandida.
5.  **Botão de Envio:** CTA com feedback visual de carregamento após o clique.

## 4. Requisitos de Integração e Segurança (Para Evitar Erros)
*   **Links Diretos:** O endereço do e-mail deve usar o protocolo `mailto:`, e o Instagram deve abrir diretamente no aplicativo ou em uma nova aba do navegador.
*   **Anti-Spam:** Validação invisível no formulário (ex: *honeypot*) para evitar mensagens automatizadas sem atrapalhar a experiência do usuário real.
