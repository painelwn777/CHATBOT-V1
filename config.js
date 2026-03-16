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
    
    // Após cliente informar nome (COMPACTO - 4 APPS JUNTOS)
    aposNome: `Prazer, {nome}! 😊<br><br>🔥 <b>OFERTA ESPECIAL TIKTOK</b><br><br>📱 <b>Apps Disponíveis:</b><br>• 🟣 <b>Nubank Editável</b> - R$ 9,90<br>• 🟠 <b>Inter Editável</b> - R$ 9,90<br>• 🔴⚫ <b>Nação BRB Fla</b> - R$ 9,90 🆕<br>• 🤖 <b>Chatbot WhatsApp</b> - R$ 7,90<br><br>🔥 <b>COMBO 4 Apps</b> - R$ 27,90<br><br><small>⚡ Entrega imediata via PIX!<br>🎁 Menos que um lanche!</small><br><br><b>Como deseja prosseguir?</b><br><div class="action-buttons"><button class="btn-action btn-chatbot" onclick="comprarChatbot('todos')">💳 Comprar Agora</button><button class="btn-action btn-atendente" onclick="solicitarAtendente()">💬 Tirar Dúvidas</button></div>`,
    
    // Quando cliente pede atendente
    solicitouAtendente: `✅ Atendente solicitado!<br><br>Um atendente irá te responder em breve.<br><br>Aguarde... 👇<br><br><small>💡 Digite <b>exit</b> para encerrar.<br>Use 🎤 para gravar áudio ou 📎 para enviar foto/vídeo/APK.</small>`,
    
    // Mensagem do Nubank
    nubank: `🟣 <b>Nubank Editável APK</b><br>✅ Totalmente editável<br>✅ Nome, saldo, foto<br>💰 <b>R$ 9,90</b><br>💳 PIX - Entrega na hora<br><br><small>🔥 Menos de 10 reais!</small><br><br><button class="btn-action btn-chatbot" onclick="comprarChatbot('nubank')">💳 Comprar Agora</button>`,
    
    // Mensagem do Inter
    inter: `🟠 <b>Inter Editável APK</b><br>✅ Totalmente editável<br>✅ Nome, saldo, foto<br>💰 <b>R$ 9,90</b><br>💳 PIX - Entrega na hora<br><br><small>🔥 Oferta limitada!</small><br><br><button class="btn-action btn-chatbot" onclick="comprarChatbot('inter')">💳 Comprar Agora</button>`,
    
    // ✨ NOVO: Mensagem do Nação BRB Fla
    brb: `🔴 <b>Nação BRB Fla Editável APK</b><br>✅ Totalmente editável<br>✅ Nome, saldo, foto, destinatário<br>✅ App idêntico ao original<br>💰 <b>R$ 9,90</b><br>💳 PIX - Entrega na hora<br><br><small>🔥 Novo! Perfeito para conteúdo!</small><br><br><button class="btn-action btn-chatbot" onclick="comprarChatbot('brb')">💳 Comprar Agora</button>`,
    
    // Mensagem do Chatbot
    chatbot: `🤖 <b>Chatbot WhatsApp Editável</b><br>✅ Respostas automáticas<br>✅ Personalizável<br>💰 <b>R$ 7,90</b><br>💳 PIX - Entrega na hora<br><br><small>🔥 Automatize seu atendimento!</small><br><br><button class="btn-action btn-chatbot" onclick="comprarChatbot('chatbot')">💳 Comprar Agora</button>`,
    
    // Mensagem do Combo (ATUALIZADO - 4 APPS)
    combo: `🔥 <b>COMBO 4 APPS COMPLETO</b><br>🟣 Nubank + 🟠 Inter + 🔴⚫ BRB Fla + 🤖 Chatbot<br>💰 <b>De R$ 37,60 por R$ 27,90</b><br>💸 Economiza R$ 9,70!<br><br><small>⚡ MAIS VENDIDO! Melhor custo-benefício!<br>🎁 4 apps pelo preço de 3!</small><br><br><button class="btn-action btn-chatbot" onclick="comprarChatbot('combo')">💳 Comprar Agora</button>`,
    
    // Quando cliente escolhe comprar
    compraChatbot: `✅ Ótima escolha!<br><br><b>Atendimento Humano Ativado</b><br><br>Compra: <b>{produto}</b><br><br>💡 Você pode:<br>• Enviar comprovante (📎)<br>• Enviar áudio (🎤)<br>• Enviar vídeo (🎥)<br>• Enviar APK/arquivo (📎)<br>• Tirar dúvidas<br><br><small>Aguarde o atendente responder...</small>`,
    
    // Atendimento encerrado
    atendimentoEncerrado: `✅ Atendimento encerrado! Voltando ao automático.<br><br>Digite:<br>• <b>Nubank</b> | <b>Inter</b> | <b>BRB</b> | <b>Combo</b><br>• <b>Atendente</b>`,
    
    // Mensagem padrão (ATUALIZADA COM NOVO APP)
    padrao: `{nome}, digite:<br>• <b>Nubank</b> | <b>Inter</b> | <b>BRB</b> | <b>Combo</b><br>• <b>Atendente</b> para falar comigo<br>• <b>exit</b> para encerrar<br>• 🎤 para gravar áudio<br>• 📎 para enviar foto/vídeo/APK`,
    
    // Pedir nome novamente
    pedirNome: `Por favor, me diga seu nome. 😊`
  },
  
  // ─────────────────────────────────────────────────────────────
  // 🔹 DEPOIMENTOS (OPCIONAL)
  // ─────────────────────────────────────────────────────────────
  depoimentos: [
    { imagem: "", legenda: "Entrega super rápida!", autor: "Carlos ⭐⭐⭐⭐⭐" },
    { imagem: "", legenda: "Funciona perfeitamente!", autor: "Fernanda ⭐⭐⭐⭐⭐" },
    { imagem: "", legenda: "Nação BRB Fla ficou perfeito nos meus vídeos!", autor: "Rafael ⭐⭐⭐⭐⭐" }
  ]
};

// ═══════════════════════════════════════════════════════════════
// ✅ PRONTO! Salve este arquivo e faça upload para a Vercel
// ═══════════════════════════════════════════════════════════════
