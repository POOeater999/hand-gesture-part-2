//https://teachablemachine.withgoogle.com/models/9cFmexwel/

Webcam.set({
   width:400,
   height:350,
   image_format:"png",
   png_quality:90
}) ;

Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>' ;

    })
}

console.log("ml5 version- ",ml5.version) ;

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9cFmexwel/model.json",modelReady) ;

function modelReady() {
    console.log("model loaded!")
}

