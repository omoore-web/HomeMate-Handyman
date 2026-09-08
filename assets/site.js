const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(btn&&nav){
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
}

const serviceNames={
  general:'General handyman & home repairs',
  property:'Property maintenance',
  doors:'Doors, windows & hardware',
  carpentry:'Carpentry & small projects',
  outdoor:'Decks & outdoor repairs',
  holiday:'Holiday rental maintenance',
  kitchen:'Kitchen & bathroom refreshes',
  flatpack:'Flat-pack assembly & installation'
};
const finder=document.querySelector('#service-finder');
if(finder){
  finder.addEventListener('submit',event=>{
    event.preventDefault();
    const job=document.querySelector('#finder-job').value;
    const area=document.querySelector('#finder-area').value;
    if(!serviceNames[job]||!area)return;
    document.querySelector('#finder-result-title').textContent=serviceNames[job]+' in '+area;
    document.querySelector('#finder-result-copy').textContent='Review the relevant service details or send HomeMate Projects the job and location for a tailored quote.';
    document.querySelector('#finder-service-link').href='services.html#'+job;
    document.querySelector('#finder-quote-link').href='contact.html?job='+encodeURIComponent(serviceNames[job])+'&area='+encodeURIComponent(area);
    document.querySelector('#finder-result').hidden=false;
  });
}

const params=new URLSearchParams(window.location.search);
const jobField=document.querySelector('#job');
const areaField=document.querySelector('#location');
if(jobField&&params.get('job')){
  const requested=params.get('job').toLowerCase();
  const match=[...jobField.options].find(option=>option.text.toLowerCase().includes(requested.split(' & ')[0]));
  if(match)jobField.value=match.value;
}
if(areaField&&params.get('area'))areaField.value=params.get('area');
