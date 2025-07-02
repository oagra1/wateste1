// pricing_pro_plan.js - Versão "tudo premium", ignora verificação de plano/código/pagamento

$(function () {
  liberarPremium();
});

// Função que força sempre o modo PRO/premium
function liberarPremium() {
  // Ativa visualmente o modo premium
  $('.container-menu ul li').removeClass('active-li');
  $('.container-menu ul li').eq(1).addClass('active-li'); // Supondo que 1 = PRO
  $('.price-tab').hide();
  $('.price-tab').eq(1).show();

  // Se quiser liberar também o plano vitalício, pode repetir para o index desejado
}

// "Fake" de funções do sistema original para garantir premium
window.getUserPermissioninfo = function() {
  return {
    permission: 'pro',
    planGroup: 3,        // ou 5, se for vitalício
    activeGroup: true,
    isPro: true,
    expireTime: '2099-12-31'
  }
}

window.isProUser = function() { return true }
window.isPremium = function() { return true }

// Se houver botões nos planos, faz todos abrirem a função PRO diretamente
$('.trial-click').off('click').on('click', function () {
  alert('Parabéns! Você já é usuário PRO/Premium!');
});

// Opcional: oculta botões de pagamento/código
$('.trial-price, .trial-original-price').hide();
$('#plan-free').hide();
$('#plan-1').hide();
$('#plan-9').hide();
$('#plan-20').hide();

// Opcional: mostra mensagem premium sempre
setTimeout(() => {
  $('.container-menu ul li:eq(1)').text('PRO (Ativado)');
}, 500);

// Proteção extra: impede qualquer chamada para funções de pagamento/código
window.openOrder = function() {
  alert('Você já é usuário PRO/Premium!');
}

// Protege contra tentativas de downgrade
window.freeUseNow = function() {
  alert('Você já está no melhor plano PRO/Premium!');
}
