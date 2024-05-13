

// CAROUSEL

const container = document.getElementById('carousel-products');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (event) => {
  isDown = true;
  startX = event.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5;
  container.scrollLeft = scrollLeft - walk;
});


// ==========================================================


// CREACION DE CLASES 

class Propiedad {
  constructor(unId, unaImagen, unTitulo, unaDescripcion, unaLatitud, unaLongitud) {
    this.id = unId;
    this.imagen = unaImagen;
    this.titulo = unTitulo;
    this.descripcion = unaDescripcion;
    this.lat = unaLatitud;
    this.long = unaLongitud;
  }
}

class Casa extends Propiedad {
  constructor(unId, unaImagen, unTitulo, unaDescripcion, unaLatitud, unaLongitud, cantPisos, unaBarabacoa) {
    super(unId, unaImagen, unTitulo, unaDescripcion, unaLatitud, unaLongitud);
    this.pisos = cantPisos;
    this.barbacoa = unaBarabacoa;
  }
}

class Apartamento extends Propiedad {
  constructor(unId, unaImagen, unTitulo, unaDescripcion, unaLatitud, unaLongitud, unPiso, unaTerraza) {
    super(unId, unaImagen, unTitulo, unaDescripcion, unaLatitud, unaLongitud);
    this.piso = unPiso;
    this.terraza = unaTerraza;
  }
}

// ========================================================


// PROPIEDADES HARDCODEADAS

const propiedad1 = new Casa(1, "home1.jpg", "Whit Rustic Home", "This traditional yet modern home offers a peaceful retreat with a spacious porch, lush gardens, exposed wooden beams, natural stone accents, and a cozy fireplace. The fully-equipped kitchen and comfortable bedrooms make it perfect for year-round living or a weekend getaway. Don't miss out on the perfect rustic retreat!", -34.89423455447646, -56.10580258025741, 2, true);

const propiedad2 = new Casa(2, "home2.jpg", "Rustic Wooden Home", "Escape to a charming rustic wooden home nestled in the heart of nature. This beautifully crafted home boasts a traditional design with modern amenities, offering a peaceful escape from the city. Enjoy the serene surroundings as you relax on the spacious front porch or take a stroll through the lush gardens.", -34.92963680265892, -54.89917239640739, 2, true);

const propiedad3 = new Apartamento(3, "home3.jpg", "Penthouse", "Experience exceptional city living in this modern penthouse with stunning views. The comfortable living room, well-equipped kitchen, private terrace, cozy bedrooms, and convenient amenities make it the perfect city retreat.", -34.92301008918133, -56.15390865246738, 10, true);

const propiedad4 = new Casa(4, "home4.jpg", "Luxury Modern House", "Live in style and luxury in this stunning modern home with spacious living areas, state-of-the-art kitchen, luxurious bedrooms and bathrooms, backyard oasis with pool and spa, and convenient amenities.", -34.83626730014706, -54.64687479508448, 2, true);

const propiedad5 = new Casa(5, "home5.jpg", "City Modern House", "Live in a modern city oasis with this stunning home. Enjoy sleek and contemporary design, spacious living areas, a modern kitchen, and luxurious bedrooms. Conveniently located in the heart of the city, this home offers the perfect combination of style and comfort.", -34.88471208654424, -56.069141489508546, 2, true);

const propiedad6 = new Casa(6, "home6.jpg", "Beach House", "Live in a modern city oasis with this stunning home. Enjoy sleek and contemporary design, spacious living areas, a modern kitchen, and luxurious bedrooms. Conveniently located in the heart of the city, this home offers the perfect combination of style and comfort.", -34.77238286977302, -55.76899357974224, 2, true);

const propiedad7 = new Casa(7, "home7.jpg", "Neighbrhood Family House", "Live comfortably in this charming family home located in a peaceful neighborhood. Enjoy a warm and inviting living room with a cozy stove, spacious bedrooms, and a backyard perfect for outdoor activities. This home is the ideal place for families seeking comfort and convenience in a friendly community.", -34.59011870524414, -54.12193603461516, 2, false);


const propiedad8 = new Apartamento(8, "home8.jpg", "Luxuary Penthouse", "Luxury penthouse with city skyline views. Gourmet kitchen, spacious master suite, private terrace, and top-notch amenities including 24-hour security, fitness center, and swimming pool. The perfect opportunity for luxurious city living.", -34.91234834311474, -56.14672628272908, 21, true)


let propiedades = [propiedad1, propiedad5, propiedad8, propiedad2, propiedad6];

let propiedades2 = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6, propiedad7, propiedad8 ];


// ===========================================================


// FUNCIONES Y DEMAS 


let soloCasas = propiedades.filter((i) => i.barbacoa != undefined);
let soloApartamentos = propiedades.filter((i) => i.terraza != undefined);
let casaConBarbacoa = soloCasas.filter((i) => i.barbacoa === false);



const cargarInfo = () => {
  propiedades.map((i) => {
    document.querySelector('#carousel-products').innerHTML += `
    <div>
    <figure><img src="img/${i.imagen}"></figure>
    <h3>${i.titulo}</h3>
    <p>${i.descripcion}</p>
    <a href="#potential-homes" class="btn">View More</a>
    
    </div>
    `
  })
}
cargarInfo();



const cargarTodasLasPropiedades = () => {
  propiedades2.map((i) => {
    document.querySelector('#potential-homes').innerHTML += `
    <div>
    <figure><img src="img/${i.imagen}"></figure>
    <h3>${i.titulo}</h3>
    <p>${i.descripcion}</p>
  
    </div>
    `
  })
}
cargarTodasLasPropiedades();

