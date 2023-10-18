class gquery
{
    constructor(e1){
        this.elements = document.getElementsByClassName(e1);
    }

    addClass(cl)
    {
        var count = 0;
        while(count < this.elements.length)
        {
            this.elements[count].className += " " + cl;
            count++;
        }
    }
}

function gQuery(e1)
{
    var element = new gquery(e1);
    return element;
}