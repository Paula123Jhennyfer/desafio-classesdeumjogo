class hero{
    constructor(nomeGuerreiro, idadeGuerreiro, tipoGuerreiro){
        this.nomeGuerreiro = nomeGuerreiro,
        this.idadeGuerreiro = idadeGuerreiro,
        this.tipoGuerreiro = tipoGuerreiro
    }
    atacar(){
        let ataque; 
        if (this.tipoGuerreiro.theFighter() === 'mago'){
            ataque = 'usou magia'
        }
        else if (this.tipoGuerreiro.theFighter() === 'guerreiro'){
            ataque = 'usou espada'
        }
        else if (this.tipoGuerreiro.theFighter() === 'monge'){
            ataque = 'usou artes marciais'
        }
        else if (this.tipoGuerreiro.theFighter() === 'ninja'){
            ataque = 'usou shuriken'
        }
        else {
            ataque = 'atacou'
        }

        
        console.log(`O ${this.tipoGuerreiro} atacou usando ${ataque}`);
    
    }

}
        const hero1 = new hero('Gandalf', 150, 'mago');
        hero1.atacar();

        const hero2 = new hero('Conan', 30, 'guerreiro');
        hero2.atacar();

        const hero3 = new hero('Ryu', 35, 'monge');
        hero3.atacar();

        const hero4 = new hero('Naruto', 17, 'ninja');
        hero4.atacar();
        



