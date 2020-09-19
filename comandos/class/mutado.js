module.exports =  class test {
    static names = [""];
    static softban = [""];
    static addPessoa(nome){
        this.names.push(nome);
    }
    static removePessoa(nome){
        this.names.splice(this.names.indexOf(nome), 1);
    }

    static contem(nome){
        return this.names.includes(nome);
        
    }

    static addSoftban(nome){
        this.softban.push(nome);
    
    }
    static removeSoftban(nome){
        this.softban.splice(this.softban.indexOf(nome), 1);
    }
    static contemSoftban(nome){
        return this.softban.includes(nome);
        
    }

    static toString(){
        var namestring = this.names;
        var softbanstring = this.softban;
        return "Baka: " + namestring + " | Softban: " + softbanstring; 

    }

    

    
}
