		var situation=0, hisTurn=0;
		var firstCard=[];
		var playerPoints=[0,0];
		var stopClick=0;
		var i;	

//shuffle the cards			
		 var ul = document.querySelector('ul');
				for (var i = ul.children.length; i >= 0; i--) {
				ul.appendChild(ul.children[Math.floor(Math.random() * i)])};
		
	
var classname = document.getElementsByClassName("card");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', function() {
    var id = this.children[0].id;
    var attr = this.children[0].attributes['data-img-index'].nodeValue;
    openCard(id, attr);
  });
}
		
		function openCard(id, cardMatch)
		{
			if(stopClick==0 && (document.getElementById(id).style.visibility=="hidden"||document.getElementById(id).style.visibility==""))
			{
				
				if (situation==0)
				{
					document.getElementById(id).style.visibility='visible';
					firstCard[0]=id;
					firstCard[1]=cardMatch;
					situation=1;
				}
				else
				{
				
				situation=0;
					if (cardMatch==firstCard[1])
					{
					document.getElementById(id).style.visibility='visible';
					document.getElementById("hi").innerHTML= "you're right!";
					playerPoints[hisTurn]++;
					}
					else
					{
						stopClick=1;
					document.getElementById(id).style.visibility='visible';
					 setTimeout(function(){ 
					 document.getElementById(id).style.visibility='hidden';
					 document.getElementById(firstCard[0]).style.visibility='hidden';
					 stopClick=0;
											}, 1000);							
					}
				}	
				
			}
		}

            
