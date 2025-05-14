function add(a: number, b: number){
    return a + b;
}


function log(message: string){
    console.log(message);
}


function logAndThrow(errorMessage: string): never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}






