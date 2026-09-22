const filters=[...document.querySelectorAll('[data-filter]')];
    const cards=[...document.querySelectorAll('[data-state]')];
    const empty=document.getElementById('empty');
    filters.forEach(button=>button.addEventListener('click',()=>{
      const selected=button.dataset.filter;
      filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
      let visible=0;
      cards.forEach(card=>{const show=selected==='all'||card.dataset.state===selected;card.hidden=!show;if(show)visible++});
      empty.hidden=visible!==0;
    }));
