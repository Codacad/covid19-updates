document.addEventListener('DOMContentLoaded', () => {
    // document.querySelectorAll('#overall').forEach(overall => {
    //     overall.style.display='block';
    // })

    document.querySelectorAll('#country').forEach(function(country){
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