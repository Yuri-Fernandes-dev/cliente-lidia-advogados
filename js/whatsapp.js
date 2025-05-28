/**
 * Função para redirecionar para o WhatsApp com mensagem personalizada
 * @param {string} message - Mensagem personalizada a ser enviada
 */
function redirecionarWhatsApp(message) {
    // Número de telefone da advogada
    const phone = "5531996873151";
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construir a URL do WhatsApp
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Redirecionar para o WhatsApp
    window.open(whatsappURL, '_blank');
}

// Mensagens predefinidas para diferentes serviços
const mensagens = {
    geral: "Olá, gostaria de agendar uma consulta para obter mais informações sobre seus serviços jurídicos.",
    aposentadoria: "Olá, gostaria de agendar uma consulta para tratar sobre aposentadoria.",
    beneficio: "Olá, gostaria de agendar uma consulta para tratar sobre benefício assistencial (BPC/LOAS).",
    planejamento: "Olá, gostaria de agendar uma consulta para tratar sobre planejamento previdenciário.",
    maternidade: "Olá, gostaria de agendar uma consulta para tratar sobre salário maternidade.",
    pensao: "Olá, gostaria de agendar uma consulta para tratar sobre pensão por morte.",
    auxilio: "Olá, gostaria de agendar uma consulta para tratar sobre auxílio-doença ou auxílio-acidente.",
    especial: "Olá, gostaria de agendar uma consulta para tratar sobre pensões especiais.",
    inclusao: "Olá, gostaria de agendar uma consulta para tratar sobre auxílio-inclusão.",
    saude: "Olá, gostaria de agendar uma consulta para tratar sobre direito da saúde."
}; 