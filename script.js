const grid = document.getElementById('productGrid');
const search = document.getElementById('search');
const count = document.getElementById('count');
const empty = document.getElementById('empty');
let activeFilter = 'todos';

const money = value => value == null ? 'Consultar' : new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value);
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

// El precio por mayor puede ser específico para cada producto.
// Si no se define, se conserva la regla general del catálogo: 20% menos que el detal.
function getWholesalePrice(p){
  if (p.retailPrice == null) return null;
  if (p.wholesalePrice != null) return p.wholesalePrice;
  return Math.round(p.retailPrice * 0.80);
}

function buildWhatsAppUrl(phone, message){
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
}

function productMessage(p){
  const retail = p.retailPrice;
  const wholesale = getWholesalePrice(p);
  if (retail == null) {
    return `Hola TemporadaMix, estoy interesado en el producto: ${p.name}. ¿Me pueden informar disponibilidad y precio?`;
  }
  return `Hola TemporadaMix, quiero comprar ${p.name}. Precio al detal: ${money(retail)}. Precio por mayor: ${money(wholesale)}. ¿Me confirman disponibilidad y condiciones de compra?`;
}

const WA_NUMBERS = [
  {label:'Asesor 1', phone:'573108817014'},
  {label:'Asesor 2', phone:'573112595043'}
];

const waModal = document.getElementById('whatsappModal');
const waProductText = document.getElementById('waProductText');
const waNumber1 = document.getElementById('waNumber1');
const waNumber2 = document.getElementById('waNumber2');
let currentWaMessage = '';

function openWhatsAppChooser(message, productName=''){
  currentWaMessage = message;
  waProductText.textContent = productName
    ? `Selecciona el número al que deseas escribir. El mensaje ya llevará el producto “${productName}” y sus precios.`
    : 'Selecciona uno de nuestros números y se abrirá WhatsApp con el mensaje listo para enviar.';
  waNumber1.href = buildWhatsAppUrl(WA_NUMBERS[0].label, message);
  waNumber2.href = buildWhatsAppUrl(WA_NUMBERS[1].label, message);
  waModal.hidden = false;
  waModal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  setTimeout(() => waNumber1.focus(), 20);
}

function closeWhatsAppChooser(){
  waModal.hidden = true;
  waModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('[data-close-wa]').forEach(el => el.addEventListener('click', closeWhatsAppChooser));
document.addEventListener('keydown', e => { if(e.key === 'Escape' && !waModal.hidden) closeWhatsAppChooser(); });

document.querySelectorAll('.generic-wa').forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  openWhatsAppChooser(link.dataset.message || 'Hola TemporadaMix, quiero información sobre sus productos.');
}));

function waLink(p){
  return '#';
}


function card(p){
  const wholesale = getWholesalePrice(p);
  return `<article class="product-card">
    <div class="product-image"><img loading="lazy" src="assets/products/${p.file}" alt="${p.name}" onerror="this.style.display='none'"><span class="tag">${p.tag}</span></div>
    <div class="product-body">
      <h3>${p.name}</h3>
      <div class="prices">
        <div class="price-box"><small>Al detal</small><strong class="${p.retailPrice==null?'price-unavailable':''}">${money(p.retailPrice)}</strong></div>
        <div class="price-box wholesale"><small>Por mayor</small><strong class="${wholesale==null?'price-unavailable':''}">${money(wholesale)}</strong></div>
      </div>
      <p class="price-note">${p.retailPrice==null?'Precio pendiente de cargar. Solicítalo por WhatsApp.':'Precio por mayor según referencia. Consulta condiciones de compra.'}</p>
      <div class="card-actions"><a class="wa product-wa" href="#" data-product="${encodeURIComponent(p.name)}">Comprar por WhatsApp</a><a class="info" href="#contacto">Contacto</a></div>
    </div>
  </article>`;
}

function render(){
  const q = normalize(search.value.trim());
  const filtered = PRODUCTS.filter(p => (activeFilter==='todos' || p.cat===activeFilter) && (!q || normalize(p.name).includes(q) || normalize(p.tag).includes(q)));
  grid.innerHTML = filtered.map(card).join('');
  count.textContent = `${filtered.length} productos`;
  empty.hidden = filtered.length > 0;
  grid.querySelectorAll('.product-wa').forEach(link => link.addEventListener('click', e => {
    e.preventDefault();
    const productName = decodeURIComponent(link.dataset.product || '');
    const product = PRODUCTS.find(p => p.name === productName);
    if (!product) return;
    openWhatsAppChooser(productMessage(product), product.name);
  }));
}

document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  render();
}));
search.addEventListener('input',render);
render();
