// let mainEl = document.getElementsByTagName('main');

//easier to work with


//gives an array like object the html collection
// need to index mainEl[]
// we can also use query selector to make it easier so we dont need square brackets;


let mainEl = document.querySelector('main');
// console.log(mainEl);

mainEl.style.backgroundColor='var(--main-bg)';
mainEl.innerHTML =`<h1>DOM Manipulation</h1>`
// let h1 = document.createElement('h1');
// h1.innerText = `DOM Manipulation`;

// mainEl.appendChild(h1);

mainEl.classList.add('flex-ctr');
// console.log(mainEl);

//Part 2

let topMenuEL = document.getElementById('top-menu');
// console.log(topMenuEL);

topMenuEL.style.height = '100%';
topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEL.classList.add('flex-around')

//part 3

let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
let sub1=[];

menuLinks.forEach((tab)=>{

  let anchor = document.createElement('a');
  anchor.setAttribute('href',`${tab.href}`)
  // console.log(anchor);
  anchor.innerText = `${tab.text}`;
  topMenuEL.appendChild(anchor)
});


//SECOND PHASE OF DOM MANIPULATION

let subMenuEL = document.getElementById('sub-menu');
subMenuEL.style.height = '100%';
subMenuEL.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEL.style.position = 'absolute';
subMenuEL.style.top = 0;

subMenuEL.classList.add('flex-around');



//part 4

  console.log(topMenuEL)
let topMenuLinks = document.querySelectorAll('a');
// console.log(topMenuLinks);
// topMenuLinks.forEach((link)=>{
//   console.log(link)
// }); 
topMenuEL.addEventListener('click',(event)=>{
  event.preventDefault();
  if(event.target.localName !== 'a'){
    return;
  }

    event.target.classList.toggle('.active');
    //part 5
    topMenuLinks.forEach((a)=>{
    
        a.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
       
            a.classList.add('active')
    
          
            //  if(a.classList.contains('active')){
            //  a.classList.toggle('active')
            // }else{
            //   a.classList.toggle('active')
            // }

            
           
        });
        //getting about to change the mailEL 
        if( event.target.textContent ==='about'){
          mainEl.textContent = `<h1>About</h1>`
          console.log('yeah about')
        }
        //showing the subMenu height 
        if( event.target.classList.contains('.active') && event.target.textContent!=='about'){
        
          subMenuEL.style.top='100%';
         }else{
          subMenuEL.style.top=0;
         }
        
        });
   
        buildSubMenu(menuLinks);
      
    
      
        //event listener for submenu
       subMenuEL.addEventListener('click',(event)=>{
        event.preventDefault();
        if(event.target.localName !== 'a'){
          return;
        }
        console.log(event.target.innerHTML)
        subMenuEL.style.top =0;
        event.target.classList.remove('active');
        mainEl.textContent = event.target.innerHTML
       
        
       });
          
          
         
        
 


    

});

function buildSubMenu(arr){

  
  // for(link in arr){
  //   subMenuEL.value=``;
  //   console.log(arr[link]);
  //       let anchor = document.createElement('a');
  //   anchor.setAttribute('href',arr[link].subLinks.href);
  //   anchor.textContent = arr[link].subLinks.text
  //   subMenuEL.appendChild(anchor)
  // }
  
  // let subArr=[]
  // for(let i =1;i<arr.length;i++){
  //   // console.log(arr[i].subLinks)
  //   // for(let j =0;j<arr[i].length;i++){
  //   //   console.log(arr[i][j])
  //   // }
  //   subArr.push(arr[i].subLinks)

  // }
  subMenuEL.innerHTML=``;
  arr.forEach(item=>{
 
    let x= item.subLinks
      for(item in x){
       
        // console.log(x[item].href)
        let anchor = document.createElement('a');
        anchor.setAttribute('href',`${x[item].href}`);
        anchor.textContent = x[item].text
        subMenuEL.appendChild(anchor);
       
      }
      

  });
 
  

};