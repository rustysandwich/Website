
document.getElementById('infoBtn').addEventListener('click', function() {
  const info = document.getElementById('info-display');
  const project = document.getElementById('project-display');
  if (info.style.display === 'none') {
    info.style.display = 'block';
    project.style.display = 'none';
  } else {
    info.style.display = 'none';
    project.style.display = 'block';
  }
});

const projects = [
  { title: 'Gesture Controlled Car', description: 'Një makinë që drejtohet vetëm me anë të gjesteve të dorës, duke përdorur sensorë për të njohur lëvizjet. Ky projekt tregon si mund të kontrollojmë objekte në mënyrë pa kontakt, përmes teknologjisë moderne dhe inovative.', img: 'Gesture Controlled Car.jpg' },
  { title: 'Hand Gesture Controlled Speaker', description: 'Ky altoparlant aktivizohet dhe kontrollohet me lëvizje të thjeshta të dorës, duke përdorur sensorë që njohin gjestet. Ideale për të treguar si mund të ndërtojmë pajisje pa kontakt fizik, të përshtatshme për përdorim praktik dhe modern.', img: 'Hand gesture controlled speaker.jpg' },
  { title: 'POV Display', description: 'Një ekran që shfaq figura dhe tekst në ajër duke rrotulluar shpejt një seri LED-ësh. Efekti vizual bazohet në iluzionin e vazhdimësisë së vizionit (Persistence of Vision) dhe është një shembull i mirë i kombinimit mes elektronikës dhe dizajnit kreativ.', img: 'POV Display.jpg' },
  { title: 'Electronic Safe', description: 'Një kasafortë e thjeshtë që hapet vetëm duke futur kodin e saktë në tastierë. Ky sistem përdor mikroprocesor dhe ekran për të shfaqur statusin dhe është një zgjidhje praktike për të mësuar sigurinë elektronike.', img: 'Electronic Safe.jpg' },
  { title: '8-Bit Computer', description: 'Një kompjuter i ndërtuar nga komponentë elektronikë që përpunon të dhëna në mënyrë logjike me sistem 8-bit. Projekti përfshin memorie, kontrollues dhe ekran të thjeshtë – duke shpjeguar bazat e funksionimit të kompjuterëve.', img: '8-Bit Computer.jpg' },
  { title: 'Robotic Arm with Memory', description: 'Krah robotik që mund të memorizojë dhe përsërisë lëvizjet që i mësohen. Përdoret për të simuluar procese të automatizuara industriale dhe ndihmon në kuptimin e kontrollit të motorëve dhe programimit të lëvizjeve.', img: 'Robotic Arm with Memory.jpg' },
  { title: 'Alarm System', description: 'Një sistem sigurie që aktivizohet kur detekton lëvizje apo ndërhyrje. Me sensorë dhe zë alarmi, ky projekt ofron një mënyrë praktike për të ilustruar si funksionojnë sistemet bazë të alarmit në ambiente të mbyllura.', img: 'Alarm System.jpg' },
  { title: 'Automatic Watering System', description: 'Një pajisje që mat lagështinë e tokës dhe aktivizon ujitjen vetëm kur është e nevojshme. I përshtatshëm për bimë dhe kopshte, ky sistem ndihmon në kursimin e ujit dhe automatizimin e përkujdesjes së bimëve.', img: 'Automatic Watering System.jpg' },
  { title: 'Doom on Arduino Nano', description: 'Një version në miniaturë i lojës klasike Doom, i luajtur në një ekran të vogël OLED me ndihmën e Arduino Nano. Projekti demonstron kreativitetin dhe potencialin e madh të pajisjeve të vogla në ndërtimin e lojërave.', img: 'Doom on arduino nano.jpg' },
  { title: 'Roulette', description: 'Një model fizik i lojës klasike të ruletës, ndërtuar me dorë për të demonstruar mekanizmin dhe funksionimin e saj. Një projekt që ndërthur aftësitë praktike me dizajnin estetik.', img: 'roulette.jpg' },
  {title: "Intel 8086 Emulator",  description: "Ky është një emulator për çipin Intel 8086 që lejon testimin e instruksioneve kryesore si ADD, MUL, DIV etj. Programet mund të ekzekutohen tërësisht ose hap-pas-hapi dhe ofron vizualizim të plotë të regjistrave, flag-ve dhe memories.", img: "Intel 8086 Emulator.jpg"},
  {title: "Raspberry Pi Smart Doorbell",description: "Ky projekt përdor Raspberry Pi për të krijuar një zile dere inteligjente që përfshin video streaming dhe njohje fytyre. Një servo motor përdoret për të vepruar si bravë inteligjente që hap ose mbyll derën në mënyrë automatike.",img: ["Raspberry Pi Smart Doorbell.jpg"],}
  
];

let currentIndex = 0;
const projectsGrid = document.getElementById('projects-grid');

function showProject(index) {
  const project = projects[index];
  if (project.video !== undefined) {
    projectsGrid.innerHTML = `
      <div class="project-card fade">
        <h4>${project.title}</h4>
        <video controls width="100%">
          <source src="${project.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p>${project.description}</p>
      </div>
    `;
  } else {
    projectsGrid.innerHTML = `
      <div class="project-card fade">
        <h4>${project.title}</h4>
        <img src="${project.img}" alt="${project.title}">
        <p>${project.description}</p>
      </div>
    `;
  }
}

document.getElementById('prevBtn').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(currentIndex);
});

// Initial load
showProject(currentIndex);


document.getElementById('backBtn').addEventListener('click', function() {
  document.getElementById('info-display').style.display = 'none';
  document.getElementById('project-display').style.display = 'block';
});


