export function random_number_from_range(min : number, max : number) : number { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getTextWidth(text : String, fontStyle : String, fontSize : String, fontFamily : String) : number {
    let context = document.createElement("canvas").getContext("2d");
    if (context) {
        context.font = fontStyle + " " + fontSize + "px " + fontFamily;
        console.log(context.font);
        console.log(context.measureText(text.toString()).width);
        return context.measureText(text.toString()).width;
    }
    return 0;
}
