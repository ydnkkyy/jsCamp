export class BaseLogger{
    log(data){
        console.log("Deafult logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MangoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mango" + data)
    }
}