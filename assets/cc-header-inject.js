document.addEventListener('DOMContentLoaded',function(){
  var icons=document.querySelector('.header__icons')||document.querySelector('.header-layout__icons');
  if(!icons||icons.querySelector('.cc-header-cta'))return;
  var ig=document.createElement('a');
  ig.href='https://instagram.com/communitycoffeeco';
  ig.target='_blank';ig.rel='noopener';
  ig.setAttribute('aria-label','Instagram');
  ig.className='cc-header-ig';
  ig.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>';
  var cta=document.createElement('a');
  cta.href='/pages/order-ahead';
  cta.className='button cc-header-cta';
  cta.textContent='Order ahead';
  icons.parentNode.insertBefore(ig,icons);
  icons.parentNode.insertBefore(cta,icons);
});
