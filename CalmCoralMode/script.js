console.log("JS working")
function myFunc() {
  //grabbing the whole select tag from html
  var input = document.getElementById("input");
  //grabbing the value/index selected by the user
  var value = input.value;
  //using the index from value we grab the actual text i.e options text
  var text = input.options[input.value].text;


  var url = "https://www.boredapi.com/api/activity?type="+text

  //Generating and sending connection to the API
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();

  
  //Processing response from API
  request.onload = function()  {
    
    var data = JSON.parse(this.response);
    var activity = data.activity;
    var price = data.price;
    var link = data.link;
    var participants = data.participants
   // console.log("link = " + link);
    //console.log("price = " + price);
    if(link == "")
    {
      link = "No link provided"
      document.getElementById("anchor").innerHTML= link
    }
    else{
      document.getElementById("anchor").innerHTML="link to activity";
      document.getElementById("anchor").href=link;
      
    }
  
    document.getElementById("answer").innerHTML="Here is your answer: " + activity 
    document.getElementById("price").innerHTML="Price =  " + price;
    document.getElementById("participants").innerHTML="How many you will need = " + participants

  }
    }
  
function jokeapi()
{
    var joke = document.getElementById("joke");
    var value = joke.value;
    var info = joke.options[joke.value].text;

    console.log(info)
    
    var url ="https://official-joke-api.appspot.com/" +info
    console.log(url)

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();

    request.onload = function()  {
       var data = JSON.parse(this.response);
       var type = data.type
       var setup = data.setup
       var punchline = data.punchline

      document.getElementById("Thejoke").innerHTML="The Setup : " + setup
     document.getElementById("ThePunchline").innerHTML="The Punchline : " + punchline
       
      
    }

    
      
}