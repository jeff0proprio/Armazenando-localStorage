function ArmazenarCarro(){
    const Marca = document.getElementById('Marca').value
    const Modelo = document.getElementById('Modelo').value
    
    if(Marca && Modelo){
        
        let Carro = {
            marca: Marca,
            modelo: Modelo
        }
    
        localStorage.setItem('InfoCarro', JSON.stringify(Carro))

    }else{
        alert('Favor Digitar todos os dados !')
    }


}