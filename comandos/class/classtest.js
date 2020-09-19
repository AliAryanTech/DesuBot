module.exports =  class test {
    static name = "vazio...";
    static setName(name) {
        this.name = name;
    }
    static getName(){
        console.log("meu nome é " + this.name);
    }
}

