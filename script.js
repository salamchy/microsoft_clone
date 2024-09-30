const rev = ScrollReveal({
  delay: 200,
  distance: '200px' 
});
rev.reveal('.logo',
  {  
    origin: 'left',
  });

rev.reveal('.links', 
{
  origin: 'top',
});

rev.reveal('.items', 
  {
    origin: 'left',
    interval: 300 ,
    rotate: {
      x: 20,
      z: 20
  } 
    });