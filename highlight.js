window.onload = function(e) {
	function ShowText(x, y, z){
		var und = "Undefined";
		if(y==""||y==undefined){
			y = "Undefined";
		}
		if(z==""||z==undefined){
			z = "Undefined";
		}
		return "<div class='NameShow' onclick='alert(\"ID: "+y+"\\ninnerText: "+z+"\")';\">"+x+"</div>";
	}

	function NodeTraverse(node){
		for(node=node.firstChild; node!=null; node = node.nextSibling){
			NodeTraverse(node);
			Name = node.nodeName.toUpperCase().replace("#", "");
			idTag = node.id;
			Text = node.innerText;
			node.innerHTML += ShowText(Name, idTag, Text);
		}
	}

	NodeTraverse(document.body);

}