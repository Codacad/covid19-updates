document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input.search').addEventListener('focus', function(){
        document.querySelector('div.search-group').style.boxShadow = "0px 0px 3px rgba(2, 195, 154,.5)"
    })
    document.querySelector('input.search').addEventListener('blur', function(){
        document.querySelector('div.search-group').style.boxShadow = "none"
        document.querySelector('div.search-group').style.transition = "200ms ease-in-out"
    })

    document.querySelector('input.search').addEventListener('keyup', function(e){
        const countries = document.querySelectorAll('.country');        
        countries.forEach(country => {
            const header = country.querySelector('.header');
            const countryIdentity = header.querySelector('.country-identity')
            const countryName = countryIdentity.querySelector('h2.country-name')
            const countryLowerCase = countryName.innerHTML.toLowerCase()
            const serachLowercase = e.target.value.toLowerCase().trim()
            if(countryLowerCase.indexOf(serachLowercase) == -1){
                country.style.display = "none"
            }else{
                country.style.display = "block"
            }
        })
    })
    const countries = document.querySelectorAll('#country')
    countries[countries.length-1].setAttribute('id', "last-country");
    countries[0].setAttribute('id', "first-country");
    window.addEventListener('load', function(){
        const firstCountry = document.querySelector('#first-country');
        firstCountry.querySelector('div.pop-popup').classList.add('show-pop-popup');
        setTimeout(function(){
            firstCountry.querySelector('div.pop-popup').classList.remove('show-pop-popup');                        
        },10000)
    })
    window.onscroll = function(){
        const doc = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;                    
        if(window.scrollY > winHeight+doc/2-winHeight){
            document.querySelector('.go-to-bottom').classList.add('toggle-go-to-bottom');  
            document.querySelector('.go-to-bottom a').setAttribute("href", "#first-country")
        }else{
            document.querySelector('.go-to-bottom').classList.remove('toggle-go-to-bottom');            
            document.querySelector('.go-to-bottom a').setAttribute("href", "#last-country")
        }        

    }   
    countries.forEach(function(country, index){               
        function toggelData(id){
            country.querySelectorAll('.info').forEach(info => {
                info.style.display = "none";
            })
    
            country.querySelectorAll(`#${id}`).forEach(function(data){
                data.style.display = 'block'
            })
        }
    
        country.querySelectorAll('.buttons a').forEach(function(tabBtn){                        
            tabBtn.onclick = function(e){                     
                document.querySelectorAll('.buttons a').forEach(btn => {
                    btn.classList.remove('active');
                })
                this.classList.add('active');           
                e.preventDefault()
                toggelData(this.dataset.covid19)
            }
        })    
    }) 
      
})