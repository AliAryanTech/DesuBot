module.exports =  class test {
    static offset = 0;
    static offsetTag = 0;

    static Offset(){
        this.offset += 1;
        return this.offset;
    }

    static OffsetTag(){
        this.offsetTag += 1;
        if(this.offsetTag > 100){
            this.offsetTag = 1;
        }
        return this.offset;
    }
    

    

    
}