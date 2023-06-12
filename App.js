function corrigir() {
    let carros = document.quiz.carro;
    let resultados = document.getElementsByClassName("resultado");

    for (let i = 0; i < resultados.length; i++) {
        resultados[i].innerHTML = "";
        if (carros[0].checked) {
            resultados[0].innerHTML = "Famoso e icônico carro que Smokey Nagata customizou 'METEU UM MOTOR V12' e alcançou os 317km/h em uma rodovia pública na Inglaterra. Também está presente em Tokyo Drift. Equipado com um motor V6 com 335 cavalos, vai de 0 a 100km/h em 4 segundos.";
            document.getElementById("foto").src = "assets/supra.webp";
        } else if (carros[1].checked) {
            resultados[1].innerHTML = "O Nissan GT-R é um veículo esportivo produzido pela Nissan desde 2007. Possui motor V6 com 600 cavalos. Tração 4x4, com uma aerodinâmica perfeita, chega a 100km/h em menos de 3 segundos e supera os 300km/h.";
            document.getElementById("foto").src = "assets/nissangtr.webp";
        } else if (carros[2].checked) {
            resultados[2].innerHTML = "Equipado com um motor V8 e 483 cavalos, o Mustangão fica entre os carros mais luxuosos e potentes do mercado. Vai de 0 a 100km/h em menos de 4 segundos. Tração traseira, que permite mais controle e agilidade. Design robusto e parrudo. UMA MÁQUINA";
            document.getElementById("foto").src = "assets/mustang.webp";
        } else if (carros[3].checked) {
            resultados[3].innerHTML = "A gigante G63. Com incríveis 585 cavalos e um motor V8, vai de 0 a 100km/h em 4,5 segundos. Tração 4x4. Sendo um dos carros mais luxuosos da Mercedes, a G63 tem técnologias muito avançadas.";
            document.getElementById("foto").src = "assets/g63.webp";
        } else if (carros[4].checked) {
            resultados[4].innerHTML = "Com um sistema híbrido, o Mercedes AMG One é um carro de edição limitada da Mercedes. Com uma potência total maior que 1000 cavalos, o AMG vai de 0 a 100km/h em menos de 2,5 segundos. Carro que leva a tecnologia da fórmula 1 para as estradas."; 
            document.getElementById("foto").src = "assets/amg.webp";
        } else if (carros[5].checked) {
            resultados[5].innerHTML = "Icônico carro esportivo da Chevrolet. Motor V8 com 495 que vai de 0 a 100km/h em 3 segundos. Possui uma aerodinâmica incrível, com um design MUITO lindo. Tração traseira."; 
            document.getElementById("foto").src = "assets/corvette.webp";
        } else if (carros[6].checked) {
            resultados[6].innerHTML = "Equipada com um motor V12 e 750 cavalos, a Lambo vai de 0 a 100km/h em 2,9 segundos. Possui 10 pistões de freio, uma aerodinamica perfeita para esportivo. Esportivo de maior luxo da Lamborghini, também o mais caro, chegando a ser vendido por U$ 8,3 milhões."; 
            document.getElementById("foto").src = "assets/lambo.webp";
        } else if (carros[7].checked) {
            resultados[7].innerHTML = "Sendo um dos carros mais luxuosos da mundo e da marca, o RR vem equipado com um motor V12 e 563 cavalos de potência. Com um design parrudo e elegante, o carro provém de altas e avançadas teclogias."; 
            document.getElementById("foto").src = "assets/rr.webp";
        } else if (carros[8].checked) {
            resultados[8].innerHTML = "Sendo um dos carros mais icônicos, a Lancer é muito famosa por suas modificações que donos fazem. Com um design e cores agressivas, a máquina vem equipada com um motor de quatro cilindros e 160 cavalos.";
            document.getElementById("foto").src = "assets/lancer.webp";
        } else if (carros[9].checked) {
            resultados[9].innerHTML = "Com um design extremamente luxuoso e futurista, a McLaren é a mais luxuosa da marca. Motor V8 com 1055 cavalos, vai de 0 a 300km/h em 12,8 segundos. Seu design e carroceria são aerodinamicos e com fibras de carbono para menor peso e resistência do ar."; 
            document.getElementById("foto").src = "assets/mclaren.webp";
        } else if (carros[10].checked) {
            resultados[10].innerHTML = "Motor V8 com 570 cavalos. Alem de luxuoso, o esportivo de potência e tecnologia de sobra"; 
            document.getElementById("foto").src = "assets/jaguar.webp";
        } else if (carros[11].checked) {
            resultados[11].innerHTML = "Design icônico e clássico. Motor V8 com 139 cavalos. Um carro bonito, potente, e nostálgico.";
            document.getElementById("foto").src = "assets/ford (1).webp";
        }
    }
}
