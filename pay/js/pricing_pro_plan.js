// Sempre retorna PRO, bloqueia upgrades, oculta preços e botões de upgrade/ativação

// Chama quando a página carregar
$(function () {
  liberarPremium();
});

// Força visualmente o modo PRO/premium
function liberarPremium() {
  $('.container-menu ul li').removeClass('active-li');
  $('.container-menu ul li').eq(1).addClass('active-li');
  $('.price-tab').hide();
  $('.price-tab').eq(1).show();
  setTimeout(() => {
    $('.container-menu ul li:eq(1)').text('PRO (Ativado)');
    // Troca o "FREE" do topo por "PRO"
    $('.header-right .user-type, .header-right .account-type, .header-right span:contains("Free")').text('PRO');
    // Troca botões "Activate Code", "Upgrade" por vazio ou "Ativado"
    $('.header-right a:contains("Activate Code"), .header-right a:contains("Upgrade")').text('PRO');
  }, 500);
}

// Simula sempre usuário PRO
window.getUserPermissioninfo = function() {
  return {
    permission: 'pro',
    planGroup: 3,
    activeGroup: true,
    isPro: true,
    expireTime: '2099-12-31'
  }
}
window.isProUser = function() { return true }
window.isPremium = function() { return true }

// Desativa botões de upgrade/código
$('.trial-click').off('click').on('click', function () {
  alert('Você já é usuário PRO/Premium!');
});
$('.trial-price, .trial-original-price').hide();
$('#plan-free').hide();
$('#plan-1').hide();
$('#plan-9').hide();
$('#plan-20').hide();

window.openOrder = function() {
  alert('Você já é usuário PRO/Premium!');
}
window.freeUseNow = function() {
  alert('Você já está no melhor plano PRO/Premium!');
}

// Remove telas de bloqueio (tipo "Permission Limit")
$(document).ready(function() {
  $('.permission-limit, .permission-block, .pro-feature-limit').remove();
});
