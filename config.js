// ╔═══════════════════════════════════════════════════════════════╗
//║  CONFIGURAÇÃO DO CHATBOT - PAINEL WN 777                      ║
//║  Preços estratégicos para TikTok                              ║
//╚═══════════════════════════════════════════════════════════════╝

window.CONFIG = {
  
  // ─────────────────────────────────────────────────────────────
  // 🔹 NOME E FOTO DO BOT
  // ─────────────────────────────────────────────────────────────
  botName: "PAINEL WN ⁷⁷⁷",
  botPhoto: "imagens/perfil.jpg",
  
  // ─────────────────────────────────────────────────────────────
  // 🔹 TELEGRAM (SUAS CREDENCIAIS)
  // ─────────────────────────────────────────────────────────────
  telegramToken: "8314626965:AAE6tBJyGopYJTD46nR-6EhwunV849pVrX4",
  telegramChatId: "8436758614",
  
  // ─────────────────────────────────────────────────────────────
  // 🔹 MENSAGENS PERSONALIZÁVEIS
  // ─────────────────────────────────────────────────────────────
  mensagens: {
    
    // Mensagem de boas-vindas
    boasVindas: `Olá! 👋 Bem-vindo ao <b>{botName}</b>!<br><br>Qual é o seu nome?`,
    
    // Após cliente informar nome (COM PREÇOS BAIXOS)
    aposNome: `Prazer, {nome}! 😊<br><br>
      <b>🔥 OFERTA ESPECIAL TIKTOK</b><br><br>
      <b>📱 Apps Disponíveis:</b><br>
      • 🟣 <b>Nubank Editável</b> - <b>R$ 9,90</b><br>
      • 🟠 <b>Inter Editável</b> - <b>R$ 9,90</b><br>
      • 🤖 <b>Chatbot WhatsApp</b> - <b>R$ 7,90</b><br>
      • 🔥 <b>COMBO 3 Apps</b> - <b>R$ 19,90</b><br><br>
      <small>⚡ Entrega imediata via PIX!<br>🎁 Menos que um lanche!</small><br><br>
      <b>Como deseja prosseguir?</b><br>
      <div class="action-buttons">
        <button class="btn-action btn-chatbot" onclick="comprarChatbot('todos')">💳 Comprar Agora</button>
        <button class="btn-action btn-atendente" onclick="solicitarAtendente()">💬 Tirar Dúvidas</button>
      </div>`,
    
    // Quando cliente pede atendente
    solicitouAtendente: `✅ Atendente solicitado!<br><br>Um atendente irá te responder em breve.<br><br>Aguarde... 👇<br><br><small>💡 Digite <b>exit</b> para encerrar.<br>Use 🎤 para gravar áudio ou 📎 para enviar foto/vídeo/APK.</small>`,
    
    // Mensagem do Nubank
    nubank: `🟣 <b>Nubank Editável APK</b><br>
      ✅ Totalmente editável<br>
      ✅ Nome, saldo, foto<br>
      💰 <b>R$ 9,90</b><br>
      💳 PIX - Entrega na hora<br><br>
      <small>🔥 Menos de 10 reais!</small><br><br>
      <button class="btn-action btn-chatbot" onclick="comprarChatbot('nubank')">💳 Comprar Agora</button>`,
    
    // Mensagem do Inter
    inter: `🟠 <b>Inter Editável APK</b><br>
      ✅ Totalmente editável<br>
      ✅ Nome, saldo, foto<br>
      💰 <b>R$ 9,90</b><br>
      💳 PIX - Entrega na hora<br><br>
      <small>🔥 Oferta limitada!</small><br><br>
      <button class="btn-action btn-chatbot" onclick="comprarChatbot('inter')">💳 Comprar Agora</button>`,
    
    // Mensagem do Combo (MAIS VENDIDO)
    combo: `🔥 <b>COMBO 3 APPS COMPLETO</b><br>
      🟣 Nubank + 🟠 Inter + 🤖 Chatbot<br>
      💰 <b>De R$ 27,70 por R$ 19,90</b><br>
      💸 Economiza R$ 7,80!<br><br>
      <small>⚡ MAIS VENDIDO! Melhor custo-benefício!</small><br><br>
      <button class="btn-action btn-chatbot" onclick="comprarChatbot('combo')">💳 Comprar Agora</button>`,
    
    // Quando cliente escolhe comprar
    compraChatbot: `✅ Ótima escolha!<br><br><b>Atendimento Humano Ativado</b><br><br>Compra: <b>{produto}</b><br><br>💡 Você pode:<br>• Enviar comprovante (📎)<br>• Enviar áudio (🎤)<br>• Enviar vídeo (🎥)<br>• Enviar APK/arquivo (📎)<br>• Tirar dúvidas<br><br><small>Aguarde o atendente responder...</small>`,
    
    // Atendimento encerrado
    atendimentoEncerrado: `✅ Atendimento encerrado! Voltando ao automático.<br><br>Digite:<br>• <b>Nubank</b> | <b>Inter</b> | <b>Combo</b><br>• <b>Atendente</b>`,
    
    // Mensagem padrão
    padrao: `{nome}, digite:<br>• <b>Nubank</b> | <b>Inter</b> | <b>Combo</b><br>• <b>Atendente</b> para falar comigo<br>• <b>exit</b> para encerrar<br>• 🎤 para gravar áudio<br>• 📎 para enviar foto/vídeo/APK`,
    
    // Pedir nome novamente
    pedirNome: `Por favor, me diga seu nome. 😊`
  },
  
  // ─────────────────────────────────────────────────────────────
  // 🔹 DEPOIMENTOS (OPCIONAL)
  // ─────────────────────────────────────────────────────────────
  depoimentos: [
    { imagem: "", legenda: "Entrega super rápida!", autor: "Carlos ⭐⭐⭐⭐⭐" },
    { imagem: "", legenda: "Funciona perfeitamente!", autor: "Fernanda ⭐⭐⭐⭐⭐" }
  ]
};

// ═══════════════════════════════════════════════════════════════
// ✅ PRONTO! Salve este arquivo e faça upload para a Vercel
// ═══════════════════════════════════════════════════════════════