const MyUl = document.getElementById('Carros-Modelos');
const MyLi = MyUl.getElementsByTagName("li");

function Filtrar() {
    var inputElement,
        filter,
        a,
        i,
        span,
        txtValue,
        count = 0;
    inputElement = document.getElementById('inputBusca');
    filter = inputElement.value.toUpperCase();

    for(i=0;i<MyLi.length;i++)
    {
        a = MyLi[i].getElementsByClassName("Name-Mark")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toLocaleUpperCase().indexOf(filter) > -1 )
        {
            MyLi[i].style.display = "";
            count++;
            span = MyLi[i].querySelector(".Name-Mark");
            if(span)
            {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match) =>{
                    return "<strong>" + match + "</storng>"
                } )
            }
        }
        else{
            MyLi[i].style.display = "none";
            count = 0;
        }
    }
}