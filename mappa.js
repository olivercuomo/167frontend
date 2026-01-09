// Crea la mappa centrata sulla tua zona
const mappa = L.map('mappa').setView([40.740141, 14.493084], 17);

// Aggiungi il layer base (sfondo mappa)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  attribution: '© Esri — Sources: Esri, Earthstar Geographics, etc.'
}).addTo(mappa);

const punti = [
  {
    nome: "Forum giovani e biblioteca comunale",
    coord: [40.73918368594513, 14.494213713178258],
    linkPosto: "https://www.google.com/maps/place/Forum+dei+Giovani+di+Pompei/@40.739249,14.493437,133m/data=!3m1!1e3!4m6!3m5!1s0x133bbdcb4d0c48a1:0x40229c78987ef39c!8m2!3d40.7391649!4d14.494225!16s%2Fg%2F11hdvvtp68?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    link: "https://www.facebook.com/forumgiovanipompei/",
  },
  {
  nome: "chiesa di san giuseppe",
    coord: [40.74010236753073, 14.493060038541909],
    linkPosto: "https://www.google.com/maps/place/Parrocchia+di+San+Giuseppe+Sposo+della+Beata+Vergine+Maria/@40.7408132,14.4921015,402m/data=!3m2!1e3!5s0x133bbcc0570ae48d:0x353ad98697b82b8c!4m6!3m5!1s0x133bbcc10d771f7d:0xc944920f1ab339c6!8m2!3d40.7407333!4d14.4926433!16s%2Fg%2F1tf1346b?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    link: " https://www.sangiuseppepompei.it/bacheca.php",
  },
  {
    nome: "parco del bambino",
    coord: [40.741019454250505, 14.494968264897194],
    linkPosto: "https://maps.app.goo.gl/HvPrj1AxbHQE6yRz9",
    numeroTel: "3511493971",
  },{
    nome: "sede scout",
    coord: [40.739985673555815, 14.493210426425147],
    linkPosto: "https://www.google.com/maps/place/Parrocchia+di+San+Giuseppe+Sposo+della+Beata+Vergine+Maria/@40.7408132,14.4921015,402m/data=!3m2!1e3!5s0x133bbcc0570ae48d:0x353ad98697b82b8c!4m6!3m5!1s0x133bbcc10d771f7d:0xc944920f1ab339c6!8m2!3d40.7407333!4d14.4926433!16s%2Fg%2F1tf1346b?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    link: " https://www.instagram.com/agesciscoutpompei1/",
  },
];

// Aggiungi i marker
punti.forEach(p => {
   let popupContent = `
    <h3>${p.nome}</h3>
      <p><a href="${p.linkPosto ? p.linkPosto : `https://www.google.com/maps/search/?api=1&query=${p.coord[0]},${p.coord[1]}`}" target="_blank" style="color:#007bff; text-decoration:underline;">
      Clicca qui per avere le indicazioni
    </a></p>
     `;
    if (p.link) {
    popupContent += `
      <p>
        <a href="${p.link}" target="_blank" 
           style="color:#28a745; text-decoration:underline; font-weight:bold;">
           Clicca qui per maggiori informazioni
        </a>
      </p>
    `;
  }
  if (p.numeroTel) {
    popupContent += `
      <a href="tel:+39${p.numeroTel}">
        Chiama  
      </a>
    `;
  }

  L.marker(p.coord).addTo(mappa).bindPopup(popupContent);
});
